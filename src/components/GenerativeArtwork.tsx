"use client";

import React, { useState } from "react";
import Image from "next/image";

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
  className = "",
}: GenerativeArtworkProps) {
  const [imageError, setImageError] = useState(false);

  // If valid image exists and hasn't errored out, render Next/Image with fallback handler
  if (imageUrl && !imageError) {
    return (
      <div className={`relative w-full h-full overflow-hidden bg-[#0A0A0E] ${className}`}>
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover object-center filter contrast-105 transition-transform duration-700 ease-out group-hover:scale-105"
          onError={() => setImageError(true)}
          sizes="(max-width: 768px) 100vw, 600px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-[#09090B]/30 to-transparent" />
      </div>
    );
  }

  // Generative procedural SVGs tailored to engineering domains
  const renderProceduralArtwork = () => {
    switch (slug) {
      case "crold":
        return (
          <svg className="w-full h-full opacity-60" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="240" fill="#08080C"/>
            <path d="M0 40H400M0 80H400M0 120H400M0 160H400M0 200H400" stroke="#1F2937" strokeWidth="0.5"/>
            <path d="M40 0V240M80 0V240M120 0V240M160 0V240M200 0V240M240 0V240M280 0V240M320 0V240M360 0V240" stroke="#1F2937" strokeWidth="0.5"/>
            <rect x="40" y="40" width="160" height="120" rx="8" stroke="#00FF94" strokeWidth="1.5" fill="#00FF94" fillOpacity="0.04"/>
            <rect x="220" y="40" width="140" height="60" rx="8" stroke="#FFFFFF" strokeOpacity="0.2" strokeWidth="1"/>
            <rect x="220" y="120" width="140" height="80" rx="8" stroke="#FFFFFF" strokeOpacity="0.2" strokeWidth="1"/>
            <circle cx="120" cy="100" r="28" stroke="#00FF94" strokeWidth="1" strokeDasharray="3 3"/>
            <circle cx="120" cy="100" r="4" fill="#00FF94"/>
          </svg>
        );

      case "fidelizacion-comercios":
        return (
          <svg className="w-full h-full opacity-60" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="240" fill="#08080C"/>
            <circle cx="200" cy="120" r="80" stroke="#262626" strokeWidth="1"/>
            <circle cx="200" cy="120" r="50" stroke="#00FF94" strokeWidth="1.5" strokeDasharray="6 4"/>
            <circle cx="200" cy="120" r="20" stroke="#FFFFFF" strokeWidth="1"/>
            <rect x="175" y="95" width="50" height="50" rx="6" stroke="#00FF94" strokeWidth="1.5" fill="#00FF94" fillOpacity="0.08"/>
            <line x1="80" y1="120" x2="320" y2="120" stroke="#333333" strokeWidth="0.8"/>
            <line x1="200" y1="30" x2="200" y2="210" stroke="#333333" strokeWidth="0.8"/>
          </svg>
        );

      case "recomendador-multimedia":
        return (
          <svg className="w-full h-full opacity-60" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="240" fill="#08080C"/>
            <path d="M50 180 Q 120 40, 200 120 T 350 70" stroke="#00FF94" strokeWidth="2" fill="none"/>
            <path d="M50 195 Q 120 70, 200 135 T 350 95" stroke="#FFFFFF" strokeOpacity="0.2" strokeWidth="1" fill="none"/>
            <circle cx="200" cy="120" r="6" fill="#00FF94" filter="drop-shadow(0 0 8px #00FF94)"/>
            <circle cx="120" cy="75" r="4" fill="#FFFFFF"/>
            <circle cx="280" cy="90" r="4" fill="#FFFFFF"/>
            <circle cx="350" cy="70" r="5" fill="#00FF94"/>
          </svg>
        );

      case "red-social-musical":
        return (
          <svg className="w-full h-full opacity-60" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="240" fill="#08080C"/>
            {/* Waveform Bars */}
            {[20, 45, 80, 110, 60, 30, 95, 140, 180, 120, 70, 90, 160, 190, 130, 75, 40, 85, 130, 100, 50, 30].map((h, i) => (
              <rect
                key={i}
                x={40 + i * 14}
                y={120 - h / 2}
                width="6"
                height={h}
                rx="3"
                fill={i % 3 === 0 ? "#00FF94" : "#26262B"}
              />
            ))}
          </svg>
        );

      case "suite-industrial-trazabilidad":
        return (
          <svg className="w-full h-full opacity-60" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="240" fill="#08080C"/>
            <path d="M40 60 H180 V120 H360" stroke="#00FF94" strokeWidth="1.5" fill="none"/>
            <path d="M40 180 H140 V120 H260 V60 H360" stroke="#FFFFFF" strokeOpacity="0.3" strokeWidth="1" fill="none"/>
            <rect x="160" y="100" width="40" height="40" rx="4" stroke="#00FF94" strokeWidth="1.5" fill="#00FF94" fillOpacity="0.1"/>
            <circle cx="40" cy="60" r="5" fill="#00FF94"/>
            <circle cx="360" cy="120" r="5" fill="#00FF94"/>
          </svg>
        );

      case "cad-document-intelligence":
        return (
          <svg className="w-full h-full opacity-60" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="240" fill="#08080C"/>
            <polygon points="120,50 280,50 340,180 60,180" stroke="#00FF94" strokeWidth="1.5" fill="#00FF94" fillOpacity="0.04"/>
            <line x1="120" y1="50" x2="340" y2="180" stroke="#FFFFFF" strokeOpacity="0.2" strokeWidth="0.8"/>
            <line x1="280" y1="50" x2="60" y2="180" stroke="#FFFFFF" strokeOpacity="0.2" strokeWidth="0.8"/>
            <circle cx="200" cy="115" r="45" stroke="#FFFFFF" strokeOpacity="0.3" strokeWidth="1" strokeDasharray="4 4"/>
          </svg>
        );

      default:
        return (
          <svg className="w-full h-full opacity-60" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="240" fill="#08080C"/>
            <path d="M80 180 L200 60 L320 180 Z" stroke="#00FF94" strokeWidth="1.5" fill="#00FF94" fillOpacity="0.05"/>
            <circle cx="200" cy="120" r="30" stroke="#FFFFFF" strokeOpacity="0.3" strokeWidth="1"/>
            <circle cx="200" cy="120" r="3" fill="#00FF94"/>
          </svg>
        );
    }
  };

  return (
    <div className={`relative w-full h-full overflow-hidden bg-[#0A0A0E] flex items-center justify-center ${className}`}>
      {renderProceduralArtwork()}
      <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-transparent to-transparent opacity-80" />
      <div className="absolute bottom-2 left-3 text-[9px] font-mono text-zinc-500 uppercase tracking-widest">
        PROCEDURAL_SCHEMATIC // {slug.toUpperCase()}
      </div>
    </div>
  );
}
