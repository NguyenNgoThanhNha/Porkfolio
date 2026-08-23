import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const alt = `${site.name} — ${site.headline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Social preview card, generated at build time. */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #060d18 0%, #0c1a2b 55%, #10283d 100%)",
          padding: 72,
          color: "#e6edf6",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 26,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: "#22d3ee",
            }}
          >
            Portfolio
          </div>
          <div style={{ fontSize: 82, fontWeight: 700, marginTop: 20 }}>
            {site.name}
          </div>
          <div style={{ fontSize: 40, color: "#97aac1", marginTop: 12 }}>
            {site.headline}
          </div>
        </div>

        <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
          {["C#", "ASP.NET Core", "CQRS", "SQL Server", "ReactJS", "Docker"].map(
            (tag) => (
              <div
                key={tag}
                style={{
                  display: "flex",
                  border: "1px solid #24405e",
                  borderRadius: 10,
                  padding: "10px 18px",
                  fontSize: 26,
                  color: "#97aac1",
                }}
              >
                {tag}
              </div>
            ),
          )}
        </div>
      </div>
    ),
    size,
  );
}
