import { ImageResponse } from "next/og";

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
          background: "#192f20",
        }}
      >
        <svg width="112" height="76" viewBox="0 0 30 20" fill="none" stroke="#f2efe7">
          <path d="M1.5 18.5 15 2.5l13.5 16" strokeWidth="2.4" />
          <path d="M21 9.6V4h3v9.2" strokeWidth="2" />
        </svg>
      </div>
    ),
    size,
  );
}
