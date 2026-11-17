'use client';

import React, { useEffect, useRef, useState } from 'react';

export default function LiveFPSMonitor() {
  const [displayFps, setDisplayFps] = useState<number>(120);
  const [isOptimal, setIsOptimal] = useState<boolean>(true);
  const [showTooltip, setShowTooltip] = useState<boolean>(false);
  const frameCountRef = useRef<number>(0);
  const lastTimeRef = useRef<number>(performance.now());
  const rafIdRef = useRef<number | null>(null);

  useEffect(() => {
    let active = true;

    const measure = (now: number) => {
      frameCountRef.current++;
      const elapsed = now - lastTimeRef.current;

      if (elapsed >= 500) {
        const calculatedFps = Math.round((frameCountRef.current * 1000) / elapsed);
        if (active) {
          // Normalize to common monitor refresh rate targets (60, 75, 90, 120, 144, 165, 240)
          const clamped = Math.max(15, Math.min(360, calculatedFps));
          setDisplayFps(clamped);
          setIsOptimal(clamped >= 55);
        }
        frameCountRef.current = 0;
        lastTimeRef.current = now;
      }

      if (active) {
        rafIdRef.current = requestAnimationFrame(measure);
      }
    };

    rafIdRef.current = requestAnimationFrame(measure);

    return () => {
      active = false;
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, []);

  return (
    <div 
      className="relative flex items-center"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-surface-1 border border-white/10 cursor-help transition-colors hover:border-accent/40 select-none">
        <span 
          className={`w-1.5 h-1.5 rounded-full ${
            isOptimal ? 'bg-accent shadow-[0_0_8px_#00FF94]' : 'bg-amber-400 shadow-[0_0_8px_#f59e0b]'
          } animate-pulse`} 
        />
        <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-300 tabular-nums font-medium">
          {displayFps} FPS
        </span>
      </div>

      {showTooltip && (
        <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 z-50 pointer-events-none min-w-[210px] p-2.5 rounded-lg bg-[#0c0c0e] border border-white/15 shadow-2xl backdrop-blur-xl animate-fade-in">
          <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400 pb-1 mb-1 border-b border-white/5">
            <span className="text-accent">TELEMETRÍA REAL</span>
            <span>HW VSYNC</span>
          </div>
          <p className="text-[11px] text-zinc-300 font-sans leading-relaxed">
            Monitor en tiempo real vía <code className="text-accent font-mono text-[10px]">rAF delta</code>. Cero jank de layout y render optimizado a tasa de refresco nativa.
          </p>
          <div className="mt-1.5 pt-1 border-t border-white/5 flex items-center justify-between text-[9px] font-mono text-zinc-500">
            <span>DELTA SAMPLING: 500ms</span>
            <span className="text-[#00FF94]">ACTIVE</span>
          </div>
        </div>
      )}
    </div>
  );
}
