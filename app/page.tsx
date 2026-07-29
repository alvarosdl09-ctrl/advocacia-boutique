"use client";

import React from "react";
import { Shield, Scale, FileText, Building2, PhoneCall, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-amber-500 selection:text-slate-950 overflow-x-hidden">
      
      {/* HEADER / NAV */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-3">
            <Scale className="w-6 h-6 sm:w-7 sm:h-7 text-amber-500 shrink-0" />
            <span className="font-serif text-base sm:text-xl font-bold tracking-wider text-slate-100">
              VALENTE & ASSOCIADOS
            </span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#atuacao" className="hover:text-amber-400 transition-colors">Áreas de Atuação</a>
            <a href="#diferenciais" className="hover:text-amber-400 transition-colors">O Escritório</a>
            <a href="#contato" className="hover:text-amber-400 transition-colors">Contato</a>
          </nav>

          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 sm:gap-2 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-slate-950 font-semibold px-3 py-2 sm:px-5 sm:py-2.5 rounded-lg text-xs sm:text-sm shadow-lg shadow-amber-500/10 transition-all duration-200"
          >
            <PhoneCall className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>Atendimento</span>
          </a>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-36 px-4 sm:px-6 max-w-7xl mx-auto flex flex-col items-center text-center overflow-hidden">
        {/* Glow de Fundo ajustado para não vazar */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[500px] h-[300px] bg-amber-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />

        <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-[10px] sm:text-xs font-semibold tracking-wider uppercase mb-6 sm:mb-8">
          <Shield className="w-3 h-3 sm:w-3.5 sm:h-3.5" /> Advocacia Empresarial & Blindagem Patrimonial
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-tight max-w-5xl text-slate-100 mb-6">
          Defesa Estratégica & Soluções Jurídicas de <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 font-semibold">Alta Complexidade</span>
        </h1>

        <p className="text-slate-400 text-sm sm:text-lg md:text-xl max-w-2xl font-light leading-relaxed mb-8 sm:mb-10">
          Protegemos os ativos, o patrimônio e os interesses de corporações e executivos através de uma atuação preventiva, ágil e sigilosa.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold px-6 py-3.5 sm:px-8 sm:py-4 rounded-xl text-sm sm:text-base shadow-xl shadow-amber-500/20 transition-all duration-200"
          >
            <span>Agendar Consulta Jurídica</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
          
          <a
            href="#atuacao"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 px-6 py-3.5 sm:px-8 sm:py-4 rounded-xl text-sm sm:text-base transition-all duration-200"
          >
            Conhecer Especialidades
          </a>
        </div>

        {/* Métricas / Destaques */}
        <div className="mt-16 sm:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 w-full pt-8 sm:pt-12 border-t border-slate-800/60">
          {[
            { label: "Anos de Experiência", value: "+15" },
            { label: "Patrimônio Protegido", value: "+R$ 500M" },
            { label: "Taxa de Sucesso", value: "98.4%" },
            { label: "Atendimento Corporativo", value: "24/7" },
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center p-2">
              <span className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-amber-400 mb-1">{item.value}</span>
              <span className="text-[11px] sm:text-xs md:text-sm text-slate-400">{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ÁREAS DE ATUAÇÃO */}
      <section id="atuacao" className="py-16 sm:py-24 px-4 sm:px-6 bg-slate-900/40 border-t border-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-slate-100 mb-3 sm:mb-4">Áreas de Atuação Especializada</h2>
            <p className="text-slate-400 max-w-xl mx-auto text-xs sm:text-sm md:text-base">
              Foco exclusivo no ambiente corporativo e estruturação patrimonial familiar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                icon: Building2,
                title: "Direito Societário & M&A",
                desc: "Estruturação de operações de fusões, aquisições, acordos de sócios e governança corporativa.",
              },
              {
                icon: Shield,
                title: "Proteção Patrimonial & Blindagem",
                desc: "Planejamento sucessório, criação de holdings familiares e proteção preventiva de bens de executivos.",
              },
              {
                icon: FileText,
                title: "Contratos de Alta Complexidade",
                desc: "Elaboração e negociação de contratos nacionais e internacionais com análise minuciosa de risco.",
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className="bg-slate-900/80 border border-slate-800/80 p-6 sm:p-8 rounded-2xl"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-5">
                  <service.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="font-serif text-lg sm:text-xl text-slate-100 mb-2 sm:mb-3">{service.title}</h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="py-8 sm:py-12 border-t border-slate-800 text-center text-[10px] sm:text-xs text-slate-500 px-4">
        <p>© 2026 Valente & Associados - Advocacia Boutique. Todos os direitos reservados.</p>
      </footer>
    </main>
  );
}
