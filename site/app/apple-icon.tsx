import { ImageResponse } from "next/og";

// 180x180 iOS home-screen icon. Same glyph as the favicon, larger and
// centered on a rounded background so iOS's mask doesn't clip the mark.
// iOS applies a ~20% corner radius automatically; we render a clean
// white face and let iOS round it.

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#ffffff",
          color: "#0f172a",
          fontSize: 140,
          fontWeight: 700,
          letterSpacing: "-0.04em",
          fontFamily: "system-ui, -apple-system, sans-serif",
          lineHeight: 1,
        }}
      >
        <span>e</span>
        <span style={{ color: "#0284c7", marginLeft: -6 }}>.</span>
      </div>
    ),
    { ...size }
  );
}
