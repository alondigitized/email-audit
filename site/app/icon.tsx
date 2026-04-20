import { ImageResponse } from "next/og";

// 32x32 browser favicon. Generated on demand by Next — no binary asset
// to keep in sync. Matches the wordmark: lowercase "e" in ink + the
// sky-600 accent dot from /components/Wordmark.tsx.

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
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
          fontSize: 26,
          fontWeight: 700,
          letterSpacing: "-0.04em",
          fontFamily: "system-ui, -apple-system, sans-serif",
          lineHeight: 1,
        }}
      >
        <span>e</span>
        <span style={{ color: "#0284c7", marginLeft: -1 }}>.</span>
      </div>
    ),
    { ...size }
  );
}
