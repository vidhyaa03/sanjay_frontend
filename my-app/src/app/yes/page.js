"use client";

import { useEffect } from "react";

export default function YesPage() {
  useEffect(() => {
    const createFloat = () => {
      const el = document.createElement("div");
      const isHeart = Math.random() < 0.6;

      el.innerText = isHeart ? "💖" : "✨";
      el.style.position = "fixed";
      el.style.left = Math.random() * 100 + "vw";
      el.style.bottom = "-20px";
      el.style.fontSize = isHeart
        ? Math.random() * 18 + 18 + "px"
        : Math.random() * 10 + 10 + "px";
      el.style.opacity = Math.random() * 0.6 + 0.4;
      el.style.animation = `floatUp ${
        6 + Math.random() * 5
      }s linear`;
      el.style.zIndex = "2";

      document.body.appendChild(el);

      setTimeout(() => el.remove(), 11000);
    };

    const interval = setInterval(createFloat, 250);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.page}>
      {/* Animations */}
      <style>
        {`
          @keyframes floatUp {
            to {
              transform: translateY(-120vh) rotate(360deg);
              opacity: 0;
            }
          }

          @keyframes glow {
            0%, 100% { box-shadow: 0 0 40px rgba(255,170,185,0.4); }
            50% { box-shadow: 0 0 90px rgba(255,170,185,0.85); }
          }

          @keyframes fadeSlide {
            from { opacity: 0; transform: translateY(25px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>

      {/* Glass Card */}
      <div style={styles.card}>
        <h1 style={styles.title}>
          She said YES <span style={{ fontSize: "52px" }}>💐</span>
        </h1>

        <p style={styles.subtitle}>
          Our love is written in the stars ✨
        </p>

        <div style={styles.divider}></div>

        <p style={styles.message}>
          From this moment on,<br />I fell in love with you, and I’m still falling every single day<br />
            💕
        </p>

        <div style={styles.footer}>
          Forever begins now 🌸
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    height: "100vh",
    width: "100vw",

    /* 🌸 HD Love Flower Background */
    backgroundImage: `
      linear-gradient(
        rgba(255,190,200,0.75),
        rgba(230,130,140,0.75)
      ),
      url('https://images.unsplash.com/photo-1518199266791-5375a83190b7')
    `,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    position: "relative",
    fontFamily: "'Segoe UI', sans-serif",
  },

  card: {
    position: "relative",
    zIndex: 3,
    background: "rgba(255, 220, 225, 0.35)",
    backdropFilter: "blur(20px)",
    padding: "55px 70px",
    borderRadius: "32px",
    textAlign: "center",
    animation: "fadeSlide 2s ease forwards, glow 4s ease-in-out infinite",
    boxShadow: "0 30px 80px rgba(0,0,0,0.25)",
    maxWidth: "520px",
  },

  title: {
    fontSize: "54px",
    color: "#fff",
    textShadow: "0 0 30px rgba(255, 160, 180, 0.95)",
    marginBottom: "10px",
  },

  subtitle: {
    fontSize: "22px",
    color: "#fff0f5",
    marginBottom: "25px",
  },

  divider: {
    width: "80px",
    height: "4px",
    background: "linear-gradient(to right, #ff9aa2, #ffd1dc)",
    borderRadius: "10px",
    margin: "0 auto 25px",
  },

  message: {
    fontSize: "18px",
    color: "#fff",
    lineHeight: "1.6",
    opacity: 0.96,
  },

  footer: {
    marginTop: "25px",
    fontSize: "14px",
    letterSpacing: "2px",
    color: "#fff0f5",
    opacity: 0.85,
  },
};
