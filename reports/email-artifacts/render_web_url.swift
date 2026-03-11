import Foundation
import WebKit
import AppKit

class Renderer: NSObject, WKNavigationDelegate {
    let webView: WKWebView
    let urlString: String
    let outputPath: String
    init(urlString: String, outputPath: String) {
        self.urlString = urlString
        self.outputPath = outputPath
        let config = WKWebViewConfiguration()
        self.webView = WKWebView(frame: NSRect(x: 0, y: 0, width: 1280, height: 5200), configuration: config)
        super.init()
        self.webView.navigationDelegate = self
    }
    func start() {
        guard let url = URL(string: urlString) else {
            fputs("bad url\n", stderr)
            exit(2)
        }
        let req = URLRequest(url: url)
        self.webView.load(req)
        RunLoop.current.run()
    }
    func webView(_ webView: WKWebView, didFinish navigation: WKNavigation!) {
        DispatchQueue.main.asyncAfter(deadline: .now() + 3.0) {
            webView.evaluateJavaScript("document.body.scrollHeight") { result, _ in
                let height = max(2400, min(12000, (result as? Double) ?? 5200))
                let config = WKSnapshotConfiguration()
                config.rect = CGRect(x: 0, y: 0, width: 1280, height: height)
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
}

let args = CommandLine.arguments
if args.count < 3 {
    fputs("usage: render_web_url <url> <outputPath>\n", stderr)
    exit(2)
}
let _ = NSApplication.shared
let renderer = Renderer(urlString: args[1], outputPath: args[2])
renderer.start()
