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
          backgroundColor: "#1a3a5c",
          borderRadius: "22px",
        }}
      >
        <span
          style={{
            fontSize: 100,
            fontFamily: "Georgia, Times New Roman, serif",
            color: "#ffffff",
            fontWeight: 700,
            letterSpacing: "-2px",
          }}
        >
          AG
        </span>
      </div>
    ),
    { ...size }
  );
}
