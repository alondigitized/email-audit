import Foundation
import WebKit
import AppKit

class Renderer: NSObject, WKNavigationDelegate {
    let webView: WKWebView
    let htmlPath: String
    let outputPath: String
    init(htmlPath: String, outputPath: String) {
        self.htmlPath = htmlPath
        self.outputPath = outputPath
        let config = WKWebViewConfiguration()
        self.webView = WKWebView(frame: NSRect(x: 0, y: 0, width: 1200, height: 2400), configuration: config)
        super.init()
        self.webView.navigationDelegate = self
    }
    func start() {
        let url = URL(fileURLWithPath: htmlPath)
        self.webView.loadFileURL(url, allowingReadAccessTo: url.deletingLastPathComponent())
        RunLoop.current.run()
    }
    func webView(_ webView: WKWebView, didFinish navigation: WKNavigation!) {
        DispatchQueue.main.asyncAfter(deadline: .now() + 2.0) {
            let config = WKSnapshotConfiguration()
            config.rect = CGRect(x: 0, y: 0, width: 1200, height: 2400)
            webView.takeSnapshot(with: config) { image, error in
                if let error = error {
                    fputs("snapshot error: \(error)\n", stderr)
                    exit(1)
                }
                guard let image = image,
                      let tiff = image.tiffRepresentation,
                      let rep = NSBitmapImageRep(data: tiff),
                      let png = rep.representation(using: .png, properties: [:]) else {
                    fputs("failed to encode png\n", stderr)
                    exit(1)
                }
                do {
                    try png.write(to: URL(fileURLWithPath: self.outputPath))
                    print(self.outputPath)
                    exit(0)
                } catch {
                    fputs("write error: \(error)\n", stderr)
                    exit(1)
                }
            }
        }
    }
}

let args = CommandLine.arguments
if args.count < 3 {
    fputs("usage: render_email <htmlPath> <outputPath>\n", stderr)
    exit(2)
}
let app = NSApplication.shared
let renderer = Renderer(htmlPath: args[1], outputPath: args[2])
renderer.start()
