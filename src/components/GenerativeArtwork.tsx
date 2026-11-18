'use client';

import React from 'react';

interface GenerativeArtworkProps {
  slug: string;
  title: string;
  imageUrl?: string;
  className?: string;
}

export default function GenerativeArtwork({
  slug,
  title,
  imageUrl,
  className = '',
}: GenerativeArtworkProps) {
  switch (slug) {
    // 1. SOUNDSPACE: Audio Waveform & Equalizer Animation
    case 'soundspace-musical':
      return (
        <div className={`relative w-full h-full bg-[#07070A] overflow-hidden flex items-center justify-center p-6 ${className}`}>
          {/* Subtle audio grid lines */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:24px_24px]" />
          
          <div className="relative z-10 flex items-center justify-center gap-1.5 h-28 w-full max-w-xs">
            {[24, 68, 42, 90, 56, 110, 75, 45, 95, 80, 115, 60, 100, 35, 85, 50, 70, 30].map((h, i) => (
              <div
                key={i}
                className="w-2 rounded-full bg-gradient-to-t from-[#00FF94]/20 via-[#00FF94] to-[#5CFFB8] shadow-[0_0_12px_rgba(0,255,148,0.4)] animate-pulse"
                style={{
                  height: `${h}%`,
                  animationDuration: `${0.8 + (i % 5) * 0.25}s`,
                  animationDelay: `${i * 0.08}s`,
                }}
              />
            ))}
          </div>

          <div className="absolute top-3 left-3 text-[9px] font-mono text-zinc-500 uppercase tracking-widest flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00FF94] animate-ping" />
            <span>REAL-TIME WEBAUDIO BUFFER</span>
          </div>
        </div>
      );

    // 2. SUITE INDUSTRIAL: Industrial SCADA Telemetry & Scan Lines
    case 'suite-industrial':
      return (
        <div className={`relative w-full h-full bg-[#07070A] overflow-hidden flex items-center justify-center p-6 ${className}`}>
          {/* Radar background */}
          <svg className="w-full h-full max-w-xs opacity-75" viewBox="0 0 300 160" fill="none">
            {/* Concentric telemetry rings */}
            <circle cx="150" cy="80" r="60" stroke="rgba(0,255,148,0.2)" strokeWidth="1" strokeDasharray="4 4" />
            <circle cx="150" cy="80" r="35" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
            
            {/* Coordinate grid */}
            <line x1="20" y1="80" x2="280" y2="80" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
            <line x1="150" y1="10" x2="150" y2="150" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />

            {/* Dynamic Sensor Nodes */}
            <circle cx="110" cy="50" r="4" fill="#00FF94" className="animate-ping" />
            <circle cx="110" cy="50" r="3" fill="#00FF94" />
            <text x="118" y="53" fill="#00FF94" fontSize="8" fontFamily="monospace">PLC_NODE_01: 99.8%</text>

            <circle cx="200" cy="110" r="4" fill="#00E5FF" />
            <text x="145" y="125" fill="#A1A1AA" fontSize="8" fontFamily="monospace">MOTOR_OEE: 94.2%</text>

            {/* Live Data Waveform */}
            <path
              d="M30 80 Q 70 40, 110 80 T 190 80 T 270 80"
              stroke="#00FF94"
              strokeWidth="1.5"
              fill="none"
              strokeDasharray="6 4"
            >
              <animate attributeName="stroke-dashoffset" from="100" to="0" dur="4s" repeatCount="indefinite" />
            </path>
          </svg>

          <div className="absolute top-3 left-3 text-[9px] font-mono text-zinc-500 uppercase tracking-widest flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>SCADA // HIGH-AVAILABILITY BUS</span>
          </div>
        </div>
      );

    // 3. CAD INTELLIGENCE: Isometric Mechanical Blueprint & Animated Dimensions
    case 'cad-intelligence':
      return (
        <div className={`relative w-full h-full bg-[#07070A] overflow-hidden flex items-center justify-center p-6 ${className}`}>
          <svg className="w-full h-full max-w-xs" viewBox="0 0 320 170" fill="none">
            {/* Isometric grid dots */}
            <defs>
              <pattern id="cadGrid" width="16" height="16" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="0.8" fill="rgba(255,255,255,0.08)" />
              </pattern>
            </defs>
            <rect width="320" height="170" fill="url(#cadGrid)" />

            {/* Wireframe Isometric Part */}
            <path
              d="M160 30 L240 75 L160 120 L80 75 Z"
              stroke="#00FF94"
              strokeWidth="1.5"
              fill="rgba(0,255,148,0.04)"
            />
            <path d="M80 75 L80 125 L160 160 L160 120 Z" stroke="#00FF94" strokeWidth="1.2" fill="rgba(0,255,148,0.02)" />
            <path d="M240 75 L240 125 L160 160 L160 120 Z" stroke="#00FF94" strokeWidth="1.2" fill="rgba(0,255,148,0.06)" />

            {/* Dimension Lines */}
            <line x1="70" y1="75" x2="70" y2="125" stroke="#F59E0B" strokeWidth="1" strokeDasharray="3 3" />
            <text x="45" y="103" fill="#F59E0B" fontSize="8" fontFamily="monospace">H=50mm</text>

            <line x1="80" y1="65" x2="160" y2="20" stroke="#00E5FF" strokeWidth="1" strokeDasharray="3 3" />
            <text x="100" y="35" fill="#00E5FF" fontSize="8" fontFamily="monospace">L=120mm ±0.02</text>
          </svg>

          <div className="absolute top-3 left-3 text-[9px] font-mono text-zinc-500 uppercase tracking-widest flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            <span>MULTIMODAL RAG // VECTOR BLUEPRINT</span>
          </div>
        </div>
      );

    // 4. VIDEOJUEGO INDIE UNITY: 3D Isometric Shaders Matrix & Game Geometry
    case 'videojuego-indie':
      return (
        <div className={`relative w-full h-full bg-[#07070A] overflow-hidden flex items-center justify-center p-6 ${className}`}>
          <svg className="w-full h-full max-w-xs" viewBox="0 0 300 160" fill="none">
            {/* 3D Perspective Plane */}
            <g transform="translate(150, 80)">
              {[-3, -2, -1, 0, 1, 2, 3].map((x) => (
                <line
                  key={`v-${x}`}
                  x1={x * 28}
                  y1={-55}
                  x2={x * 48}
                  y2={65}
                  stroke="rgba(255,255,255,0.08)"
                  strokeWidth="1"
                />
              ))}
              {[-2, -1, 0, 1, 2].map((y) => (
                <line
                  key={`h-${y}`}
                  x1={-120 + y * 12}
                  y1={y * 24}
                  x2={120 - y * 12}
                  y2={y * 24}
                  stroke="rgba(255,255,255,0.08)"
                  strokeWidth="1"
                />
              ))}

              {/* Glowing Hero Prism / Shader */}
              <polygon
                points="0,-35 28,-10 0,15 -28,-10"
                fill="rgba(244,63,94,0.2)"
                stroke="#F43F5E"
                strokeWidth="1.5"
                className="animate-pulse"
              />
              <circle cx="0" cy="-10" r="3" fill="#00FF94" />
            </g>
          </svg>

          <div className="absolute top-3 left-3 text-[9px] font-mono text-zinc-500 uppercase tracking-widest flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
            <span>UNITY 6 // CUSTOM SHADERS & 60 FPS</span>
          </div>
        </div>
      );

    // 5. RECOMENDADOR MULTIMEDIA: Neural Graph & Embedding Vector Network
    case 'recomendador-multimedia':
      return (
        <div className={`relative w-full h-full bg-[#07070A] overflow-hidden flex items-center justify-center p-6 ${className}`}>
          <svg className="w-full h-full max-w-xs" viewBox="0 0 300 160" fill="none">
            {/* Connecting Edges */}
            <line x1="80" y1="45" x2="150" y2="80" stroke="rgba(168,85,247,0.3)" strokeWidth="1" />
            <line x1="80" y1="115" x2="150" y2="80" stroke="rgba(168,85,247,0.3)" strokeWidth="1" />
            <line x1="150" y1="80" x2="220" y2="50" stroke="#00FF94" strokeWidth="1.5" strokeDasharray="3 3" />
            <line x1="150" y1="80" x2="225" y2="110" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
            <line x1="220" y1="50" x2="270" y2="75" stroke="#00FF94" strokeWidth="1" />

            {/* Neural Nodes */}
            <circle cx="80" cy="45" r="5" fill="#A855F7" />
            <circle cx="80" cy="115" r="5" fill="#A855F7" />
            <circle cx="150" cy="80" r="8" fill="rgba(0,255,148,0.2)" stroke="#00FF94" strokeWidth="1.5" className="animate-ping" />
            <circle cx="150" cy="80" r="5" fill="#00FF94" />
            <circle cx="220" cy="50" r="6" fill="#00FF94" />
            <circle cx="225" cy="110" r="4" fill="rgba(255,255,255,0.4)" />
            <circle cx="270" cy="75" r="5" fill="#00FF94" />

            <text x="165" y="75" fill="#00FF94" fontSize="8" fontFamily="monospace">SIM_SCORE: 0.984</text>
          </svg>

          <div className="absolute top-3 left-3 text-[9px] font-mono text-zinc-500 uppercase tracking-widest flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
            <span>NEURAL EMBEDDINGS // TF-IDF COSINE</span>
          </div>
        </div>
      );

    // 6. FIDELIZACIÓN COMERCIOS: Digital Stamp Matrix & QR Geometry
    case 'fidelizacion-comercios':
      return (
        <div className={`relative w-full h-full bg-[#07070A] overflow-hidden flex items-center justify-center p-6 ${className}`}>
          <svg className="w-full h-full max-w-xs" viewBox="0 0 300 160" fill="none">
            {/* Clean QR Matrix Background Accent */}
            <rect x="50" y="35" width="30" height="30" stroke="#00FF94" strokeWidth="1.5" fill="none" rx="4" />
            <rect x="56" y="41" width="18" height="18" fill="#00FF94" rx="2" />
            
            <rect x="220" y="35" width="30" height="30" stroke="#00FF94" strokeWidth="1.5" fill="none" rx="4" />
            <rect x="226" y="41" width="18" height="18" fill="#00FF94" rx="2" />

            {/* Loyalty Stamp Rings */}
            {[0, 1, 2, 3, 4].map((col) => (
              <g key={col} transform={`translate(${85 + col * 28}, 100)`}>
                <circle cx="0" cy="0" r="10" stroke={col < 4 ? '#00FF94' : 'rgba(255,255,255,0.15)'} strokeWidth="1.5" fill={col < 4 ? 'rgba(0,255,148,0.1)' : 'transparent'} />
                {col < 4 && <circle cx="0" cy="0" r="3" fill="#00FF94" />}
              </g>
            ))}

            <text x="105" y="75" fill="#FAFAFA" fontSize="9" fontFamily="monospace" fontWeight="bold">REWARD_CYCLE: 8/10</text>
          </svg>

          <div className="absolute top-3 left-3 text-[9px] font-mono text-zinc-500 uppercase tracking-widest flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00FF94]" />
            <span>PWA NO-INSTALL // QR ENCRYPTED</span>
          </div>
        </div>
      );

    // 7. WORKSHOP OS / TALLER GESTION: Modern Service & Labor Workflow Topology
    default:
      return (
        <div className={`relative w-full h-full bg-[#07070A] overflow-hidden flex items-center justify-center p-6 ${className}`}>
          <svg className="w-full h-full max-w-xs" viewBox="0 0 300 160" fill="none">
            {/* Clean Work Order Blocks */}
            <rect x="40" y="40" width="100" height="70" rx="8" stroke="#00FF94" strokeWidth="1.5" fill="rgba(0,255,148,0.03)" />
            <line x1="55" y1="60" x2="115" y2="60" stroke="#FAFAFA" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="55" y1="75" x2="95" y2="75" stroke="#71717A" strokeWidth="1" strokeLinecap="round" />
            <circle cx="55" cy="92" r="3" fill="#00FF94" className="animate-ping" />
            <circle cx="55" cy="92" r="2.5" fill="#00FF94" />
            <text x="64" y="95" fill="#00FF94" fontSize="7" fontFamily="monospace">EN_PROCESO</text>

            {/* Connecting Pipe */}
            <path d="M140 75 L180 75" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" strokeDasharray="3 3" />

            <rect x="180" y="45" width="85" height="60" rx="8" stroke="rgba(255,255,255,0.15)" strokeWidth="1" fill="rgba(255,255,255,0.02)" />
            <line x1="195" y1="65" x2="245" y2="65" stroke="#FAFAFA" strokeWidth="1.2" strokeLinecap="round" />
            <line x1="195" y1="80" x2="225" y2="80" stroke="#00FF94" strokeWidth="1" strokeLinecap="round" />
          </svg>

          <div className="absolute top-3 left-3 text-[9px] font-mono text-zinc-500 uppercase tracking-widest flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00FF94]" />
            <span>OPERATIONAL OS // TIME TRACKING</span>
          </div>
        </div>
      );
  }
}
