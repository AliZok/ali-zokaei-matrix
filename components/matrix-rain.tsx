"use client";

import { useEffect, useRef } from "react";

export function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Matrix-style characters including Japanese katakana, numbers, and symbols
    const matrixChars = "01&`";
    const japaneseChars = "01$";
    const chars = matrixChars + japaneseChars;
    
    const fontSize = 20;
    const columnSpacing = 40; // Increased spacing for clear separation
    const verticalSpacing = 100; // Add vertical spacing between characters
    const columns = Math.floor(canvas.width / columnSpacing);
    
    // Enhanced drop system with speed variations
    interface Drop {
      y: number;
      speed: number;
      opacity: number;
      trail: { char: string; opacity: number }[];
    }
    
    const drops: Drop[] = Array(columns).fill(null).map(() => ({
      y: Math.random() * -100,
      speed: Math.random() * 0.2 + 0.1,
      opacity: Math.random() * 0.5 + 0.5,
      trail: []
    }));

    const draw = () => {
      // Darker fade effect for better trails
      ctx.fillStyle = "rgba(0, 0, 0, 0.08)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const drop = drops[i];
        const x = i * columnSpacing;
        
        // Add current character to trail
        const char = chars[Math.floor(Math.random() * chars.length)];
        drop.trail.unshift({ char, opacity: 1 });
        
        // Limit trail length - reduced for better visibility
        if (drop.trail.length > 12) {
          drop.trail.pop();
        }
        
        // Draw trail with fading effect
        drop.trail.forEach((trailChar, index) => {
          const trailY = drop.y - index * verticalSpacing;
          
          if (trailY > 0 && trailY < canvas.height + fontSize) {
            // Bright green for leading character, fading for trail
            if (index === 0) {
              ctx.fillStyle = "#00ff41"; // Bright Matrix green
              ctx.shadowColor = "#00ff41";
              ctx.shadowBlur = 10;
            } else {
              const fadeOpacity = (1 - index / drop.trail.length) * drop.opacity;
              const greenValue = Math.floor(255 * (1 - index / drop.trail.length * 0.7));
              ctx.fillStyle = `rgba(0, ${greenValue}, 65, ${fadeOpacity})`;
              ctx.shadowBlur = 0;
            }
            
            ctx.globalAlpha = index === 0 ? 1 : (1 - index / drop.trail.length) * 0.8;
            ctx.fillText(trailChar.char, x, trailY);
          }
        });
        
        ctx.globalAlpha = 1;
        ctx.shadowBlur = 0;

        // Update drop position
        drop.y += drop.speed * verticalSpacing;

        // Reset drop when it goes off screen
        if (drop.y > canvas.height + drop.trail.length * verticalSpacing) {
          drop.y = Math.random() * -300;
          drop.speed = Math.random() * 0.6 + 0.6;
          drop.opacity = Math.random() * 0.5 + 0.5;
          drop.trail = [];
        }
      }
    };

    const interval = setInterval(draw, 130); // Slower animation for more dramatic effect

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-50"
      aria-hidden="true"
    />
  );
}
