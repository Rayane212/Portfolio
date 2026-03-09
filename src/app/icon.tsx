import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const size = {
    width: 32,
    height: 32,
};
export const contentType = "image/png";

// Image generation
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
                    backgroundColor: "#09090b", // Dark background from design system
                    border: "1px solid rgba(255, 255, 255, 0.15)", // Glass card border
                    borderRadius: "8px",
                }}
            >
                <div
                    style={{
                        fontSize: 15,
                        fontWeight: 800,
                        letterSpacing: "-0.5px",
                        background: "linear-gradient(135deg, #60a5fa, #818cf8, #c084fc)", // Accent gradient
                        backgroundClip: "text",
                        color: "transparent",
                        fontFamily: "system-ui, sans-serif",
                    }}
                >
                    RH
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
