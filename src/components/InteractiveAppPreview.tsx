'use client';

import React, { useState } from 'react';
import { Play, Check, QrCode, Music, Cpu, FileText, Gamepad2, Sparkles, Clock, Eye, Layers } from 'lucide-react';

interface InteractiveAppPreviewProps {
  slug: string;
  title: string;
}

export default function InteractiveAppPreview({ slug, title }: InteractiveAppPreviewProps) {
  // State for Workshop OS
  const [shopStatus, setShopStatus] = useState<'idle' | 'working'>('working');
  const [shopMinutes, setShopMinutes] = useState(42);

  // State for Fidelizacion
  const [stamps, setStamps] = useState(7);

  // State for SoundSpace
  const [isPlaying, setIsPlaying] = useState(false);
  const [bpm, setBpm] = useState(124);

  // State for Recomendador
  const [activeTag, setActiveTag] = useState<'scifi' | 'cyberpunk' | 'synth'>('synth');

  // State for Suite Industrial
  const [machineStatus, setMachineStatus] = useState<'normal' | 'optimized'>('normal');

  // State for CAD
  const [cadLayer, setCadLayer] = useState<'all' | 'dimensions'>('dimensions');

  // State for Game
  const [gameAction, setGameAction] = useState(false);

  switch (slug) {
    case 'taller-gestion-saas':
      return (
        <div className="w-full h-full p-4 flex flex-col justify-between bg-[#08080c] select-none font-mono text-xs">
          <div className="flex items-center justify-between border-b border-white/10 pb-2">
            <span className="text-[10px] text-zinc-400 flex items-center gap-1.5">
              <span className={`w-2 h-2 rounded-full ${shopStatus === 'working' ? 'bg-[#00FF94] shadow-[0_0_8px_#00FF94]' : 'bg-amber-400'}`} />
              OPERARIO: ROBERTO M.
            </span>
            <span className="text-[10px] text-[#00FF94]">ORDEN #108</span>
          </div>

          <div className="py-1 space-y-1">
            <div className="flex justify-between text-[11px] text-zinc-300">
              <span>VEHÍCULO: BMW SERIE 3</span>
              <span className="text-zinc-500">M-4512-KL</span>
            </div>
            <div className="flex items-center justify-between p-2 rounded-lg bg-white/[0.03] border border-white/5">
              <span className="text-[10px] text-zinc-400">TIEMPO EN TALLER:</span>
              <span className="text-white font-bold tabular-nums">03h {shopMinutes}m</span>
            </div>
          </div>

          <button
            onClick={() => {
              setShopStatus(prev => prev === 'working' ? 'idle' : 'working');
              if (shopStatus === 'working') setShopMinutes(m => m + 1);
            }}
            className={`w-full py-2 px-3 rounded-lg text-[10px] font-bold tracking-wider uppercase transition-colors flex items-center justify-center gap-2 ${
              shopStatus === 'working'
                ? 'bg-[#00FF94]/15 border border-[#00FF94]/40 text-[#00FF94] hover:bg-[#00FF94]/25'
                : 'bg-white/10 border border-white/20 text-white hover:bg-white/20'
            }`}
          >
            <Clock className="w-3 h-3" />
            <span>{shopStatus === 'working' ? '✓ EN REPARACIÓN (PAUSAR)' : 'INICIAR FICHAJE'}</span>
          </button>
        </div>
      );

    case 'fidelizacion-comercios':
      return (
        <div className="w-full h-full p-4 flex flex-col justify-between bg-[#08080c] select-none font-mono text-xs">
          <div className="flex items-center justify-between border-b border-white/10 pb-2">
            <span className="text-[10px] text-zinc-400 flex items-center gap-1.5">
              <QrCode className="w-3 h-3 text-[#00FF94]" />
              TARJETA DIGITAL
            </span>
            <span className="text-[10px] text-[#00FF94]">CLIENTE VIP</span>
          </div>

          <div className="py-1 text-center">
            <p className="text-[10px] text-zinc-400 mb-1.5">SELLOS PARA CAFÉ GRATIS</p>
            <div className="flex justify-center gap-1.5">
              {[...Array(10)].map((_, i) => (
                <div
                  key={i}
                  className={`w-4 h-4 rounded-full flex items-center justify-center text-[8px] font-bold ${
                    i < stamps
                      ? 'bg-[#00FF94] text-black shadow-[0_0_6px_rgba(0,255,148,0.4)]'
                      : 'bg-white/5 border border-white/10 text-zinc-600'
                  }`}
                >
                  {i < stamps ? '✓' : i + 1}
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => setStamps(prev => (prev >= 10 ? 1 : prev + 1))}
            className="w-full py-2 px-3 rounded-lg text-[10px] font-bold tracking-wider uppercase bg-[#00FF94] text-black hover:bg-[#5CFFB8] transition-colors"
          >
            {stamps >= 10 ? '¡PREMIO DESBLOQUEADO!' : '+ REGISTRAR COMPRA (SELLO)'}
          </button>
        </div>
      );

    case 'soundspace-musical':
      return (
        <div className="w-full h-full p-4 flex flex-col justify-between bg-[#08080c] select-none font-mono text-xs">
          <div className="flex items-center justify-between border-b border-white/10 pb-2">
            <span className="text-[10px] text-zinc-400 flex items-center gap-1.5">
              <Music className="w-3 h-3 text-cyan-400" />
              SESSION: VALENCIA_JAM
            </span>
            <span className="text-[10px] text-cyan-400">{bpm} BPM</span>
          </div>

          <div className="flex items-center justify-center gap-1 py-2 h-10">
            {[40, 75, 30, 95, 60, 85, 45, 100, 70, 50, 90, 65, 35].map((h, i) => (
              <div
                key={i}
                className="w-1.5 bg-gradient-to-t from-cyan-500 to-[#00FF94] rounded-full transition-all duration-300"
                style={{
                  height: isPlaying ? `${Math.min(100, h * (1 + (i % 3) * 0.2))}%` : '20%',
                  opacity: isPlaying ? 0.9 : 0.3,
                }}
              />
            ))}
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex-1 py-1.5 rounded-lg text-[10px] font-bold bg-cyan-400/20 border border-cyan-400/40 text-cyan-300 hover:bg-cyan-400/30 flex items-center justify-center gap-1"
            >
              <Play className="w-3 h-3 fill-current" />
              <span>{isPlaying ? 'PAUSAR' : 'REPRODUCIR DEMO'}</span>
            </button>
            <button
              onClick={() => setBpm(b => b === 140 ? 110 : b + 5)}
              className="px-2.5 py-1.5 rounded-lg text-[10px] bg-white/5 border border-white/10 text-zinc-300 hover:text-white"
            >
              TAP BPM
            </button>
          </div>
        </div>
      );

    case 'recomendador-multimedia':
      return (
        <div className="w-full h-full p-4 flex flex-col justify-between bg-[#08080c] select-none font-mono text-xs">
          <div className="flex items-center justify-between border-b border-white/10 pb-2">
            <span className="text-[10px] text-zinc-400 flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-purple-400" />
              VECTOR SEARCH // TF-IDF
            </span>
            <span className="text-[10px] text-purple-400">98.4% MATCH</span>
          </div>

          <div className="py-1 space-y-1.5">
            <div className="flex gap-1.5">
              {(['synth', 'scifi', 'cyberpunk'] as const).map(tag => (
                <button
                  key={tag}
                  onClick={() => setActiveTag(tag)}
                  className={`px-2 py-0.5 rounded text-[9px] uppercase border transition-colors ${
                    activeTag === tag
                      ? 'bg-purple-500/20 border-purple-400 text-purple-300 font-bold'
                      : 'bg-white/5 border-white/10 text-zinc-500'
                  }`}
                >
                  #{tag}
                </button>
              ))}
            </div>
            <p className="text-[10px] text-zinc-300 truncate">
              {activeTag === 'synth' && '♪ Blade Runner 2049 OST (Vangelis Model)'}
              {activeTag === 'scifi' && '🎬 Interstellar • Espacio-Tiempo Tensor'}
              {activeTag === 'cyberpunk' && '🎮 Neuromancer Neural Graph Rec'}
            </p>
          </div>

          <div className="w-full py-1.5 px-3 rounded-lg text-[9px] bg-purple-500/10 border border-purple-500/30 text-purple-300 text-center">
            FILTRADO COLABORATIVO EN TIEMPO REAL
          </div>
        </div>
      );

    case 'suite-industrial':
      return (
        <div className="w-full h-full p-4 flex flex-col justify-between bg-[#08080c] select-none font-mono text-xs">
          <div className="flex items-center justify-between border-b border-white/10 pb-2">
            <span className="text-[10px] text-zinc-400 flex items-center gap-1.5">
              <Cpu className="w-3 h-3 text-[#00FF94]" />
              SCADA LINEA 04
            </span>
            <span className="text-[10px] text-[#00FF94]">OEE: 94.2%</span>
          </div>

          <div className="py-1 grid grid-cols-2 gap-2 text-[10px]">
            <div className="p-1.5 rounded bg-white/[0.02] border border-white/5">
              <span className="text-zinc-500 block text-[9px]">VIBRACIÓN:</span>
              <span className="text-white font-bold">{machineStatus === 'normal' ? '0.12 mm/s' : '0.08 mm/s'}</span>
            </div>
            <div className="p-1.5 rounded bg-white/[0.02] border border-white/5">
              <span className="text-zinc-500 block text-[9px]">TEMP MOTOR:</span>
              <span className="text-[#00FF94] font-bold">54.2 ºC</span>
            </div>
          </div>

          <button
            onClick={() => setMachineStatus(m => m === 'normal' ? 'optimized' : 'normal')}
            className="w-full py-1.5 px-3 rounded-lg text-[10px] font-bold bg-[#00FF94]/15 border border-[#00FF94]/40 text-[#00FF94] hover:bg-[#00FF94]/25 text-center"
          >
            {machineStatus === 'normal' ? '⚡ APLICAR OPTIMIZACIÓN AI' : '✓ PARÁMETROS CALIBRADOS'}
          </button>
        </div>
      );

    case 'cad-intelligence':
      return (
        <div className="w-full h-full p-4 flex flex-col justify-between bg-[#08080c] select-none font-mono text-xs">
          <div className="flex items-center justify-between border-b border-white/10 pb-2">
            <span className="text-[10px] text-zinc-400 flex items-center gap-1.5">
              <Layers className="w-3 h-3 text-amber-400" />
              DWG/PDF BLUEPRINT
            </span>
            <span className="text-[10px] text-amber-400">38 COTAS</span>
          </div>

          <div className="py-1 space-y-1">
            <div className="flex justify-between text-[10px] text-zinc-300">
              <span>COTA DETECTADA #04:</span>
              <span className="text-amber-400 font-bold">Ø 45.2 ± 0.05 mm</span>
            </div>
            <div className="p-1.5 rounded bg-white/[0.02] border border-white/5 text-[9px] text-zinc-400">
              ESPECIFICACIÓN: ACERO AISI 316L • TOLERANCIA DIN 7168
            </div>
          </div>

          <button
            onClick={() => setCadLayer(l => l === 'all' ? 'dimensions' : 'all')}
            className="w-full py-1.5 px-3 rounded-lg text-[10px] font-bold bg-amber-400/15 border border-amber-400/40 text-amber-300 hover:bg-amber-400/25 text-center flex items-center justify-center gap-1.5"
          >
            <Eye className="w-3 h-3" />
            <span>{cadLayer === 'dimensions' ? '✓ CAPA COTAS ACTIVA' : 'MOSTRAR TODAS LAS CAPAS'}</span>
          </button>
        </div>
      );

    case 'videojuego-indie':
      return (
        <div className="w-full h-full p-4 flex flex-col justify-between bg-[#08080c] select-none font-mono text-xs">
          <div className="flex items-center justify-between border-b border-white/10 pb-2">
            <span className="text-[10px] text-zinc-400 flex items-center gap-1.5">
              <Gamepad2 className="w-3 h-3 text-rose-400" />
              UNITY 6 ENGINE
            </span>
            <span className="text-[10px] text-[#00FF94]">60 FPS VSYNC</span>
          </div>

          <div className="py-1 grid grid-cols-3 gap-1.5 text-[9px] text-center">
            <div className="p-1 rounded bg-white/[0.02] border border-white/5">
              <span className="text-zinc-500 block">DRAW CALLS</span>
              <span className="text-white font-bold">{gameAction ? '24' : '18'}</span>
            </div>
            <div className="p-1 rounded bg-white/[0.02] border border-white/5">
              <span className="text-zinc-500 block">ENTIDADES</span>
              <span className="text-white font-bold">{gameAction ? '350' : '120'}</span>
            </div>
            <div className="p-1 rounded bg-white/[0.02] border border-white/5">
              <span className="text-zinc-500 block">FRAME TIME</span>
              <span className="text-[#00FF94] font-bold">16.2 ms</span>
            </div>
          </div>

          <button
            onClick={() => {
              setGameAction(true);
              setTimeout(() => setGameAction(false), 800);
            }}
            className={`w-full py-1.5 px-3 rounded-lg text-[10px] font-bold text-center transition-all ${
              gameAction
                ? 'bg-rose-500 text-white shadow-[0_0_12px_rgba(244,63,94,0.5)]'
                : 'bg-rose-500/20 border border-rose-500/40 text-rose-300 hover:bg-rose-500/30'
            }`}
          >
            {gameAction ? '💥 DISPARO Y FÍSICA CALCULADA' : '▶ SIMULAR ACCIÓN DE COMBATE'}
          </button>
        </div>
      );

    default:
      return (
        <div className="w-full h-full p-4 flex flex-col justify-between bg-[#08080c] select-none font-mono text-xs">
          <div className="flex items-center justify-between border-b border-white/10 pb-2">
            <span className="text-[10px] text-zinc-400 flex items-center gap-1.5">
              <FileText className="w-3 h-3 text-accent" />
              {title.toUpperCase()}
            </span>
            <span className="text-[10px] text-accent">LIVE DEMO</span>
          </div>
          <div className="py-2 text-center">
            <span className="text-xs text-white font-bold block mb-1">PROTOTIPO INTERACTIVO</span>
            <span className="text-[10px] text-zinc-400">Next.js 14 • Microservicios • RLS</span>
          </div>
          <div className="w-full py-1.5 rounded-lg bg-white/5 border border-white/10 text-center text-[10px] text-zinc-300">
            PROBAR DEMO TÉCNICA →
          </div>
        </div>
      );
  }
}
