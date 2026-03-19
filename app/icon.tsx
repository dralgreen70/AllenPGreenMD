import { ImageResponse } from "next/og";

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
          backgroundColor: "#1a3a5c",
          borderRadius: "4px",
        }}
      >
        <span
          style={{
            fontSize: 18,
            fontFamily: "Georgia, Times New Roman, serif",
            color: "#ffffff",
            fontWeight: 700,
            letterSpacing: "-0.5px",
          }}
        >
          AG
        </span>
      </div>
    ),
    { ...size }
  );
}
