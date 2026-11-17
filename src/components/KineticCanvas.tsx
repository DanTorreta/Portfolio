'use client';

import React, { useEffect, useRef } from 'react';

interface Shockwave {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  alpha: number;
  strength: number;
}

export default function KineticCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
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
      radius: 200,
      active: false,
    };

    let shockwaves: Shockwave[] = [];

    // Grid configuration
    const spacing = 36;
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
          const isMajor = (c % 2 === 0 && r % 2 === 0);
          points.push({
            originX,
            originY,
            x: originX,
            y: originY,
            vx: 0,
            vy: 0,
            size: isMajor ? 1.4 : 0.9,
            baseAlpha: isMajor ? 0.22 : 0.08,
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
    window.addEventListener('resize', resize);

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

    const onClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;

      shockwaves.push({
        x: clickX,
        y: clickY,
        radius: 0,
        maxRadius: 280,
        alpha: 0.6,
        strength: 22,
      });
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    window.addEventListener('click', onClick);

    // Render loop
    const render = () => {
      // Smooth damp mouse position
      mouse.x += (mouse.targetX - mouse.x) * 0.14;
      mouse.y += (mouse.targetY - mouse.y) * 0.14;

      ctx.clearRect(0, 0, width, height);

      // Update shockwaves
      for (let s = shockwaves.length - 1; s >= 0; s--) {
        const sw = shockwaves[s];
        sw.radius += 8;
        sw.alpha = Math.max(0, 0.6 * (1 - sw.radius / sw.maxRadius));

        if (sw.radius >= sw.maxRadius) {
          shockwaves.splice(s, 1);
        }
      }

      const len = points.length;
      for (let i = 0; i < len; i++) {
        const p = points[i];

        // 1. Mouse magnetic displacement
        const dx = mouse.x - p.originX;
        const dy = mouse.y - p.originY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.radius && mouse.active) {
          const force = 1 - dist / mouse.radius;
          const angle = Math.atan2(dy, dx);
          const pushDistance = force * 28;

          const targetX = p.originX - Math.cos(angle) * pushDistance;
          const targetY = p.originY - Math.sin(angle) * pushDistance;

          p.vx += (targetX - p.x) * 0.22;
          p.vy += (targetY - p.y) * 0.22;
          p.glow = Math.min(p.glow + 0.12, 1);
        } else {
          // Spring back to origin
          p.vx += (p.originX - p.x) * 0.08;
          p.vy += (p.originY - p.y) * 0.08;
          p.glow = Math.max(p.glow - 0.02, 0);
        }

        // 2. Shockwave interaction
        for (let s = 0; s < shockwaves.length; s++) {
          const sw = shockwaves[s];
          const sdx = p.x - sw.x;
          const sdy = p.y - sw.y;
          const sdist = Math.sqrt(sdx * sdx + sdy * sdy);
          const waveDist = Math.abs(sdist - sw.radius);

          if (waveDist < 30) {
            const waveForce = (1 - waveDist / 30) * (sw.strength * (1 - sw.radius / sw.maxRadius));
            const angle = Math.atan2(sdy, sdx);
            p.vx += Math.cos(angle) * waveForce * 0.3;
            p.vy += Math.sin(angle) * waveForce * 0.3;
            p.glow = Math.min(p.glow + 0.4, 1);
          }
        }

        p.vx *= 0.78; // Damping
        p.vy *= 0.78;
        p.x += p.vx;
        p.y += p.vy;

        // Render dot
        ctx.beginPath();
        const currentSize = p.size + p.glow * 1.6;
        ctx.arc(p.x, p.y, currentSize, 0, Math.PI * 2);

        if (p.glow > 0.05) {
          ctx.fillStyle = `rgba(0, 255, 148, ${Math.min(1, p.baseAlpha + p.glow * 0.7)})`;
          ctx.shadowColor = '#00FF94';
          ctx.shadowBlur = 10 * p.glow;
        } else {
          ctx.fillStyle = `rgba(255, 255, 255, ${p.baseAlpha})`;
          ctx.shadowBlur = 0;
        }
        ctx.fill();
      }

      // Render shockwave rings
      for (let s = 0; s < shockwaves.length; s++) {
        const sw = shockwaves[s];
        ctx.save();
        ctx.beginPath();
        ctx.arc(sw.x, sw.y, sw.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(0, 255, 148, ${sw.alpha * 0.5})`;
        ctx.lineWidth = 1.5;
        ctx.shadowColor = '#00FF94';
        ctx.shadowBlur = 12;
        ctx.stroke();
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('click', onClick);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0 opacity-80"
    />
  );
}
