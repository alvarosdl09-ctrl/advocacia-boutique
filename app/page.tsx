"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Clock3,
  FileText,
  Mail,
  MapPin,
  PhoneCall,
  Shield,
} from "lucide-react";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-10 max-w-2xl sm:mb-12">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-amber-400">
        {eyebrow}
      </p>
      <h2 className="mb-4 font-serif text-2xl leading-tight text-slate-100 sm:text-3xl lg:text-4xl">
        {title}
      </h2>
      <p className="max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">{description}</p>
    </div>
  );
}

type ShimmerButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
};

function ShimmerButton({ href, children, className, variant = "primary" }: ShimmerButtonProps) {
  return (
    <motion.a
      whileHover={{ y: -2, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      href={href}
      className={cn(
        "group relative isolate inline-flex w-full items-center justify-center overflow-hidden rounded-2xl px-6 py-3.5 text-sm font-semibold transition-all duration-300 sm:w-auto sm:px-8 sm:py-4 sm:text-base",
        variant === "primary"
          ? "bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 text-slate-950 shadow-[0_18px_45px_-15px_rgba(245,158,11,0.45)]"
          : "border border-slate-700/70 bg-slate-900/70 text-slate-100 hover:border-amber-400/35 hover:bg-slate-800",
        className
      )}
    >
      <span className="absolute inset-0 bg-[linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.22)_40%,transparent_80%)] opacity-0 transition duration-500 group-hover:animate-[shimmer_1.4s_linear_infinite] group-hover:opacity-100" />
      <span className="absolute inset-0 rounded-2xl border border-white/10" />
      <span className="relative z-10 flex items-center justify-center gap-3">{children}</span>
    </motion.a>
  );
}

const areas = [
  {
    icon: Building2,
    title: "Direito Societário & M&A",
    description:
      "Estruturação de operações, governança corporativa e transações de alta relevância com foco em segurança jurídica e eficiência comercial.",
  },
  {
    icon: Shield,
    title: "Proteção Patrimonial & Blindagem",
    description:
      "Planejamento sucessório e soluções preventivas para preservar patrimônio, reputação e interesses de executivos e famílias de forma discreta e eficiente.",
  },
  {
    icon: FileText,
    title: "Contratos de Alta Complexidade",
    description:
      "Elaboração, revisão e negociação de contratos com análise minuciosa de risco, clareza jurídica e alinhamento estratégico.",
  },
];

const diferenciais = [
  "Atendimento exclusivo, confidencial e personalizado para demandas sensíveis.",
  "Visão estratégica com foco em proteção preventiva, preservação patrimonial e resolução eficaz.",
  "Equipe com forte atuação em operações corporativas, planejamento patrimonial e gestão de risco.",
];

const contatos = [
  {
    icon: PhoneCall,
    title: "Telefone",
    value: "+55 (11) 99999-0000",
    href: "tel:+5511999990000",
  },
  {
    icon: Mail,
    title: "E-mail",
    value: "contato@valenteassociados.com.br",
    href: "mailto:contato@valenteassociados.com.br",
  },
  {
    icon: MapPin,
    title: "Endereço",
    value: "São Paulo, SP",
    href: "https://maps.google.com/?q=Sao+Paulo+SP",
  },
];

const metrics = [
  { label: "Anos de experiência", value: "+15" },
  { label: "Patrimônio protegido", value: "+R$ 500M" },
  { label: "Taxa de sucesso", value: "98,4%" },
  { label: "Atendimento corporativo", value: "24/7" },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-slate-950 font-sans text-slate-100 antialiased selection:bg-amber-500 selection:text-slate-950">
      <a
        href="#conteudo-principal"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-amber-500 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-slate-950"
      >
        Pular para o conteúdo principal
      </a>

      <header className="sticky top-0 z-50 border-b border-slate-800/70 bg-slate-950/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4">
          <a href="#top" className="flex items-center gap-2 sm:gap-3">
            <Image
              src="/logo.svg"
              alt="Logotipo da Valente & Associados, escritório de advocacia boutique"
              width={220}
              height={56}
              priority
              className="h-10 w-auto sm:h-12"
            />
          </a>

          <nav aria-label="Navegação principal" className="flex flex-wrap items-center justify-center gap-3 text-sm font-medium text-slate-300 sm:gap-6 md:gap-8">
            <a href="#atuacao" className="transition-colors hover:text-amber-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">
              Áreas de Atuação
            </a>
            <a href="#diferenciais" className="transition-colors hover:text-amber-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">
              O Escritório
            </a>
            <a href="#contato" className="transition-colors hover:text-amber-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">
              Contato
            </a>
          </nav>

          <a
            href="https://wa.me/5511999990000"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Entrar em contato por WhatsApp com a Valente & Associados"
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-amber-600 to-amber-500 px-3 py-2 text-xs font-semibold text-slate-950 shadow-lg shadow-amber-500/10 transition-all duration-200 hover:from-amber-500 hover:to-amber-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 sm:px-5 sm:py-2.5 sm:text-sm"
          >
            <PhoneCall className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            <span>Atendimento</span>
          </a>
        </div>
      </header>

      <section id="top" className="relative overflow-hidden px-4 py-24 sm:px-6 sm:py-32 md:py-40 lg:py-48">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(199,155,79,0.28),_transparent_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(7,17,31,0.96),rgba(7,17,31,0.78),rgba(7,17,31,0.95))]" />
        <motion.div
          className="pointer-events-none absolute inset-0 opacity-70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 1.2 }}
        >
          <div className="absolute left-1/2 top-[14%] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-amber-400/20 blur-[120px]" />
          <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-slate-100/10 blur-3xl" />
          <div className="absolute right-[-5%] top-[25%] h-72 w-72 rounded-full bg-amber-500/10 blur-[140px] animate-float-soft" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.08),_transparent_45%)]" />
        </motion.div>
        <Image
          src="/hero-office.svg"
          alt="Ilustração profissional de um escritório de advocacia boutique"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-35"
        />

        <div id="conteudo-principal" className="relative mx-auto flex max-w-7xl flex-col items-center text-center">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-400/25 bg-amber-500/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.3em] text-amber-300 sm:px-4 sm:py-2 sm:text-xs">
            <Shield className="h-3.5 w-3.5" />
            Advocacia Boutique · Estratégia Jurídica
          </p>

          <h1 className="mb-6 max-w-5xl font-serif text-3xl font-normal leading-tight text-slate-50 sm:text-5xl md:text-6xl lg:text-7xl">
            Soluções jurídicas de alto padrão para empresas, executivos e patrimônio
            <span className="ml-2 bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 bg-clip-text font-semibold text-transparent">
              com precisão e discrição
            </span>
          </h1>

          <p className="mb-8 max-w-2xl text-sm leading-8 text-slate-300 sm:text-lg md:text-xl">
            Atuação preventiva, estratégica e discreta para proteger ativos, reputação e decisões sensíveis em negócios e famílias.
          </p>

          <div className="flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row">
            <ShimmerButton href="#contato" className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">
              <span>Agendar consulta</span>
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </ShimmerButton>
            <ShimmerButton href="#atuacao" variant="secondary" className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">
              Conhecer especialidades
            </ShimmerButton>
          </div>

          <div className="mt-16 grid w-full gap-4 border-t border-slate-800/60 pt-8 sm:mt-20 sm:grid-cols-2 md:grid-cols-4 sm:gap-6 sm:pt-12">
            {metrics.map((item) => (
              <div key={item.label} className="flex flex-col items-center rounded-2xl border border-slate-800/60 bg-slate-900/55 p-4 shadow-[0_10px_35px_-25px_rgba(0,0,0,0.8)]">
                <span className="mb-1 font-serif text-2xl font-bold text-amber-400 sm:text-3xl">
                  {item.value}
                </span>
                <span className="text-center text-[11px] text-slate-400 sm:text-xs md:text-sm">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="atuacao" className="border-t border-slate-800/50 bg-slate-900/40 px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center sm:mb-16">
            <SectionHeading
              eyebrow="Especialidades"
              title="Atuação estratégica e personalizada"
              description="Soluções jurídicas sob medida para negócios, executivos e famílias que demandam segurança, clareza e resposta objetiva."
            />
          </div>

          <div className="grid gap-4 sm:gap-6 md:grid-cols-12">
            {areas.map((service, index) => {
              const Icon = service.icon;
              const isFeatured = index === 0;

              return (
                <motion.article
                  key={service.title}
                  whileHover={{ y: -6, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 220, damping: 18 }}
                  className={cn(
                    "group relative overflow-hidden rounded-[28px] border border-slate-800/80 bg-slate-900/80 p-6 shadow-[0_20px_50px_-30px_rgba(0,0,0,0.95)] sm:p-8",
                    isFeatured ? "md:col-span-7" : "md:col-span-5"
                  )}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(199,155,79,0.18),_transparent_55%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-transparent opacity-70" />
                  <div className="relative">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-amber-500/20 bg-amber-500/10 text-amber-400 transition-all duration-300 group-hover:border-amber-400/50 group-hover:bg-amber-500/15">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mb-3 font-serif text-lg text-slate-100 sm:text-xl">{service.title}</h3>
                    <p className="text-sm leading-relaxed text-slate-400">{service.description}</p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="diferenciais" className="border-t border-slate-800/50 px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="O escritório"
              title="Atendimento jurídico com foco em resultado, proteção preventiva e confiança."
              description="Com uma abordagem estratégica e próxima, a Valente & Associados oferece suporte jurídico sólido para empresas e pessoas que buscam segurança em decisões de alto impacto."
            />
          </div>

          <div className="rounded-3xl border border-slate-800/80 bg-slate-900/70 p-6 shadow-[0_20px_50px_-30px_rgba(0,0,0,0.95)] sm:p-8">
            <div className="mb-6 flex items-center gap-3">
              <Clock3 className="h-5 w-5 text-amber-400" />
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">
                Diferenciais principais
              </span>
            </div>
            <ul className="space-y-4">
              {diferenciais.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-slate-300">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-amber-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="contato" className="border-t border-slate-800/50 bg-slate-900/40 px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Contato"
            title="Fale com um advogado especializado para o próximo passo."
            description="Estamos prontos para avaliar sua demanda e indicar a melhor estratégia jurídica com agilidade, confidencialidade e foco em resultado."
          />

          <div className="grid gap-4 md:grid-cols-3">
            {contatos.map((item) => {
              const Icon = item.icon;

              return (
                <motion.a
                  key={item.title}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  whileHover={{ y: -4, scale: 1.01 }}
                  className="rounded-2xl border border-slate-800/80 bg-slate-950/70 p-6 transition-all duration-200 hover:border-amber-500/30 hover:bg-slate-900"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mb-2 text-base font-semibold text-slate-100">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-400">{item.value}</p>
                </motion.a>
              );
            })}
          </div>

          <div className="mt-8 rounded-[32px] border border-amber-400/20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-6 shadow-[0_30px_80px_-35px_rgba(0,0,0,0.85)] sm:p-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">
                  Consulta estratégica
                </p>
                <h3 className="mb-3 font-serif text-2xl text-slate-100 sm:text-3xl">
                  Agende uma conversa reservada para discutir sua necessidade jurídica.
                </h3>
                <p className="text-sm leading-7 text-slate-400 sm:text-base">
                  Resposta objetiva, confidencialidade e direcionamento claro para a melhor estratégia de proteção.
                </p>
              </div>
              <ShimmerButton href="mailto:contato@valenteassociados.com.br" className="max-w-sm lg:w-auto">
                <span>Solicitar contato</span>
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </ShimmerButton>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-800 px-4 py-8 text-center text-[11px] text-slate-500 sm:px-6 sm:py-12 sm:text-sm">
        <p>© 2026 Valente & Associados. Advocacia Boutique. Todos os direitos reservados.</p>
      </footer>
    </main>
  );
}
