"use client";

import { useRouter } from "next/navigation";
import { useRef } from "react";

export default function YesNoButtons() {
  const router = useRouter();
  const noBtnRef = useRef(null);

  const moveNoButton = () => {
    const button = noBtnRef.current;
    const parent = button.parentElement;

    const parentRect = parent.getBoundingClientRect();
    const btnRect = button.getBoundingClientRect();

    const maxX = parentRect.width - btnRect.width;
    const maxY = parentRect.height - btnRect.height;

    const currentX = button.offsetLeft;
    const currentY = button.offsetTop;

    let randomX, randomY;

    do {
      randomX = Math.random() * maxX;
      randomY = Math.random() * maxY;
    } while (
      Math.abs(randomX - currentX) < 150 &&
      Math.abs(randomY - currentY) < 80
    );

    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
  };

  return (
    <div
      style={{
        position: "relative",
        width: "99vw",
        height: "98vh",
        backgroundImage:
          "url(https://wallpapershome.com/images/pages/pic_h/29465.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        overflow: "hidden",
      }}
    >
      {/* 💖 CENTER TEXT */}
      <div
        style={{
          position: "absolute",
          top: "45%",
          left: "46%",
          transform: "translate(-50%, -50%)",
          fontSize: "30px",
          fontWeight: "bold",
          color: "#f3a2b5", // light pink
          textShadow: "0 2px 10px rgba(0,0,0,0.3)",
          textAlign: "center",
          pointerEvents: "none",
        }}
      >
        Will you be my Valentine???
      </div>

      {/* YES */}
      <button
        onClick={() => router.push("/yes")}
        style={{
          position: "absolute",
          left: "55%",
          top: "70%",
          transform: "translate(-150px, -50%)",
          padding: "20px 30px",
          fontSize: "15px",
          fontWeight: "bold",
          borderRadius: "30px",
          border: "none",
          background: "#f58e8e",
          color: "#d2c6c6",
          cursor: "pointer",
        }}
      >
        Yes
      </button>

      {/* NO */}
      <button
        ref={noBtnRef}
        onMouseEnter={moveNoButton}
        onClick={moveNoButton}
        onTouchStart={moveNoButton}
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(50px, -50%)",
          padding: "20px 30px",
          fontSize: "15px",
          fontWeight: "bold",
          borderRadius: "30px",
          border: "none",
          background: "#ff4d4d",
          color: "#d2c6c6",
          cursor: "pointer",
          transition: "all 0.01s ease",
        }}
      >
        No
      </button>
    </div>
  );
}
