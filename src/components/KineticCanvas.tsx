"use client";

import React, { useEffect, useRef } from "react";

export default function KineticCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    let dpr = 1;

    // Mouse coordinates with velocity tracking
    const mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      radius: 180,
      active: false,
    };

    // Grid config
    const spacing = 38;
    interface Point {
      originX: number;
      originY: number;
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      baseAlpha: number;
      glow: number;
    }

    let points: Point[] = [];

    const initPoints = () => {
      points = [];
      const cols = Math.ceil(width / spacing) + 1;
      const rows = Math.ceil(height / spacing) + 1;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const originX = c * spacing;
          const originY = r * spacing;
          points.push({
            originX,
            originY,
            x: originX,
            y: originY,
            vx: 0,
            vy: 0,
            size: 1.2,
            baseAlpha: (originX % 76 === 0 && originY % 76 === 0) ? 0.22 : 0.08,
            glow: 0,
          });
        }
      }
    };

    const resize = () => {
      if (!canvas) return;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.parentElement?.clientHeight || window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);
      initPoints();
    };

    resize();
    window.addEventListener("resize", resize);

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
      mouse.active = true;
    };

    const onMouseLeave = () => {
      mouse.targetX = -1000;
      mouse.targetY = -1000;
      mouse.active = false;
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);

    // Render loop
    const render = () => {
      // Smooth damp mouse position
      mouse.x += (mouse.targetX - mouse.x) * 0.12;
      mouse.y += (mouse.targetY - mouse.y) * 0.12;

      ctx.clearRect(0, 0, width, height);

      const len = points.length;
      for (let i = 0; i < len; i++) {
        const p = points[i];

        // Magnetic displacement calculation
        const dx = mouse.x - p.originX;
        const dy = mouse.y - p.originY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.radius && mouse.active) {
          const force = (1 - dist / mouse.radius);
          // Gently push or pull based on radius
          const angle = Math.atan2(dy, dx);
          const pushDistance = force * 24;

          const targetX = p.originX - Math.cos(angle) * pushDistance;
          const targetY = p.originY - Math.sin(angle) * pushDistance;

          p.vx += (targetX - p.x) * 0.2;
          p.vy += (targetY - p.y) * 0.2;
          p.glow = Math.min(p.glow + 0.1, 1);
        } else {
          // Return spring to origin
          p.vx += (p.originX - p.x) * 0.08;
          p.vy += (p.originY - p.y) * 0.08;
          p.glow = Math.max(p.glow - 0.02, 0);
        }

        p.vx *= 0.78; // Damping
        p.vy *= 0.78;
        p.x += p.vx;
        p.y += p.vy;

        // Render point
        ctx.beginPath();
        const currentSize = p.size + p.glow * 1.5;
        ctx.arc(p.x, p.y, currentSize, 0, Math.PI * 2);

        if (p.glow > 0.05) {
          ctx.fillStyle = `rgba(0, 255, 148, ${p.baseAlpha + p.glow * 0.7})`;
          ctx.shadowColor = "#00FF94";
          ctx.shadowBlur = 8 * p.glow;
        } else {
          ctx.fillStyle = `rgba(255, 255, 255, ${p.baseAlpha})`;
          ctx.shadowBlur = 0;
        }
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0 opacity-70"
    />
  );
}
