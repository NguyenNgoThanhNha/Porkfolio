import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** Home-screen icon for iOS — same mark as the favicon, larger canvas. */
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
          background: "#060d18",
          color: "#22d3ee",
          fontSize: 108,
          fontWeight: 700,
          letterSpacing: -2,
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
        }}
      >
        N
      </div>
    ),
    size,
  );
}
