import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

/** Browser-tab favicon — navy tile + cyan N, matching the site mark. */
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
          background: "#060d18",
          color: "#22d3ee",
          fontSize: 20,
          fontWeight: 700,
          letterSpacing: -0.5,
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
        }}
      >
        N
      </div>
    ),
    size,
  );
}
