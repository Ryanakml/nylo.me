import React, { useState, useRef } from "react";
import { ChevronDown, ExternalLink, Sparkles } from "lucide-react";
import { projects } from "../constants";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { CardSpotlight } from "@/components/ui/card-spotlight";

function GithubIcon({ size = 14, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function FrameworkIcon({ name, className = "w-5 h-5" }) {
  switch (name) {
    case "Go":
    case "Golang":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M1.811 10.231c-.047 0-.058-.023-.035-.059l.246-.315c.023-.035.081-.058.128-.058h4.172c.046 0 .058.035.035.07l-.199.303c-.023.036-.082.07-.117.07zM.047 11.306c-.047 0-.059-.023-.035-.058l.245-.316c.023-.035.082-.058.129-.058h5.328c.047 0 .07.035.058.07l-.093.28c-.012.047-.058.07-.105.07zm2.828 1.075c-.047 0-.059-.035-.035-.07l.163-.292c.023-.035.07-.07.117-.07h2.337c.047 0 .07.035.07.082l-.023.28c0 .047-.047.082-.082.082zm12.129-2.36c-.736.187-1.239.327-1.963.514-.176.046-.187.058-.34-.117-.174-.199-.303-.327-.548-.444-.737-.362-1.45-.257-2.115.175-.795.514-1.204 1.274-1.192 2.22.011.935.654 1.706 1.577 1.835.795.105 1.46-.175 1.987-.77.105-.13.198-.27.315-.434H10.47c-.245 0-.304-.152-.222-.35.152-.362.432-.97.596-1.274a.315.315 0 01.292-.187h4.253c-.023.316-.023.631-.07.947a4.983 4.983 0 01-.958 2.29c-.841 1.11-1.94 1.8-3.33 1.986-1.145.152-2.209-.07-3.143-.77-.865-.655-1.356-1.52-1.484-2.595-.152-1.274.222-2.419.993-3.424.83-1.086 1.928-1.776 3.272-2.02 1.098-.2 2.15-.07 3.096.571.62.41 1.063.97 1.356 1.648.07.105.023.164-.117.2m3.868 6.461c-1.064-.024-2.034-.328-2.852-1.029a3.665 3.665 0 01-1.262-2.255c-.21-1.32.152-2.489.947-3.529.853-1.122 1.881-1.706 3.272-1.95 1.192-.21 2.314-.095 3.33.595.923.63 1.496 1.484 1.648 2.605.198 1.578-.257 2.863-1.344 3.962-.771.783-1.718 1.273-2.805 1.495-.315.06-.63.07-.934.106zm2.78-4.72c-.011-.153-.011-.27-.034-.387-.21-1.157-1.274-1.81-2.384-1.554-1.087.245-1.788.935-2.045 2.033-.21.912.234 1.835 1.075 2.21.643.28 1.285.244 1.905-.07.923-.48 1.425-1.228 1.484-2.233z" />
        </svg>
      );
    case "TypeScript":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0H1.125zm14.108 10.372h2.529v9.643h-2.529v-9.643zm-7.632 0h7.106v2.091h-2.288v7.552H9.89v-7.552H7.601v-2.091z" />
        </svg>
      );
    case "PostgreSQL":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M23.5594 14.7228a.5269.5269 0 0 0-.0563-.1191c-.139-.2632-.4768-.3418-1.0074-.2321-1.6533.3411-2.2935.1312-2.5256-.0191 1.342-2.0482 2.445-4.522 3.0411-6.8297.2714-1.0507.7982-3.5237.1222-4.7316a1.5641 1.5641 0 0 0-.1509-.235C21.6931.9086 19.8007.0248 17.5099.0005c-1.4947-.0158-2.7705.3461-3.1161.4794a9.449 9.449 0 0 0-.5159-.0816 8.044 8.044 0 0 0-1.3114-.1278c-1.1822-.0184-2.2038.2642-3.0498.8406-.8573-.3211-4.7888-1.645-7.2219.0788C.9359 2.1526.3086 3.8733.4302 6.3043c.0409.818.5069 3.334 1.2423 5.7436.4598 1.5065.9387 2.7019 1.4334 3.582.553.9942 1.1259 1.5933 1.7143 1.7895.4474.1491 1.1327.1441 1.8581-.7279.8012-.9635 1.5903-1.8258 1.9446-2.2069.4351.2355.9064.3625 1.39.3772a.0569.0569 0 0 0 .0004.0041 11.0312 11.0312 0 0 0-.2472.3054c-.3389.4302-.4094.5197-1.5002.7443-.3102.064-1.1344.2339-1.1464.8115-.0025.1224.0329.2309.0919.3268.2269.4231.9216.6097 1.015.6331 1.3345.3335 2.5044.092 3.3714-.6787-.017 2.231.0775 4.4174.3454 5.0874.2212.5529.7618 1.9045 2.4692 1.9043.2505 0 .5263-.0291.8296-.0941 1.7819-.3821 2.5557-1.1696 2.855-2.9059.1503-.8707.4016-2.8753.5388-4.1012.0169-.0703.0357-.1207.057-.1362.0007-.0005.0697-.0471.4272.0307a.3673.3673 0 0 0 .0443.0068l.2539.0223.0149.001c.8468.0384 1.9114-.1426 2.5312-.4308.6438-.2988 1.8057-1.0323 1.5951-1.6698z" />
        </svg>
      );
    case "NATS":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M12.004 0H.404v18.807h9.938l1.714 1.602v-.026L15.966 24v-5.193h7.63V0H12.003zm7.578 14.45H15.38L6.898 6.519v7.93H4.116V4.376h4.349l8.344 7.784V4.375h2.773V14.45z" />
        </svg>
      );
    case "React":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.536 2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098z" />
        </svg>
      );
    case "Next.js":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.955 18.232L10.36 8.358v8.685H8.623V6.957h1.737l7.595 9.875v-9.875h1.737v11.275h-1.737z" />
        </svg>
      );
    case "Python":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M11.914 0C5.82 0 6.2 2.65 6.2 2.65l.006 2.748h5.814v.824H3.88S0 5.76 0 11.874c0 6.115 3.398 5.897 3.398 5.897h2.029v-2.855s-.11-3.398 3.344-3.398h5.759s3.235.053 3.235-3.125V2.65S18.17 0 11.914 0zm-3.235 1.764a1.087 1.087 0 110 2.174 1.087 1.087 0 010-2.174zM12.086 24c6.094 0 5.714-2.65 5.714-2.65l-.006-2.748h-5.814v-.824h8.14s3.88.462 3.88-5.652c0-6.115-3.398-5.897-3.398-5.897h-2.029v2.855s.11 3.398-3.344 3.398H9.47s-3.235-.053-3.235 3.125v5.759S5.83 24 12.086 24zm3.235-1.764a1.087 1.087 0 110-2.174 1.087 1.087 0 010 2.174z" />
        </svg>
      );
    case "Redis":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M21.272 5.093l-8.544-4.93a1.458 1.458 0 00-1.456 0L2.728 5.093A1.456 1.456 0 002 6.354v9.86a1.456 1.456 0 00.728 1.261l8.544 4.93c.45.26 1.006.26 1.456 0l8.544-4.93a1.456 1.456 0 00.728-1.261v-9.86a1.456 1.456 0 00-.728-1.261zM12 2.887l7.26 4.192-3.155 1.821L8.845 4.708 12 2.887zm-8 4.62l7.27 4.198v3.642L4 11.149V7.507zm8.73 13.606v-3.642l7.27-4.198v3.642l-7.27 4.198z" />
        </svg>
      );
    case "Supabase":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M21.362 9.354H12V.396a.396.396 0 00-.716-.233L.117 14.283a.396.396 0 00.307.633h9.362v8.958a.396.396 0 00.716.233l11.167-14.12a.396.396 0 00-.307-.633z" />
        </svg>
      );
    case "Prisma":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M23.593 19.03L13.126.965a1.312 1.312 0 00-2.285 0L.407 19.03a1.312 1.312 0 001.143 1.975h20.9a1.312 1.312 0 001.143-1.975zM12 3.655l8.745 15.093H3.255L12 3.655z" />
        </svg>
      );
    case "BullMQ":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <rect x="2" y="4" width="20" height="5" rx="1" />
          <path d="M4 9v9a2 2 0 002 2h12a2 2 0 002-2V9" />
          <path d="M10 13h4" />
        </svg>
      );
    case "LangChain":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" />
          <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
        </svg>
      );
    case "Convex":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      );
    case "Clerk":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0110 0v4" />
        </svg>
      );
    case "Groq":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      );
    case "Vapi":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M12 2v20M17 5v14M7 5v14M22 10v4M2 10v4" />
        </svg>
      );
    case "Express":
      return (
        <span className="text-[11px] font-mono font-bold tracking-tighter">ex</span>
      );
    case "tRPC":
      return (
        <span className="text-[10px] font-mono font-bold text-sky-400">tRPC</span>
      );
    default:
      return (
        <span className="text-xs font-mono font-bold">{name.slice(0, 2).toUpperCase()}</span>
      );
  }
}

// Featured Deadbolt Flagship — Uses official Aceternity 3D Card skeleton template
function DeadboltFeatured3DCard({ project }) {
  if (!project) return null;

  return (
    <CardContainer className="inter-var w-full flex justify-center py-4">
      <CardBody className="bg-[#0f0f0f] relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.15] border-neutral-800 hover:border-emerald-500/40 w-full sm:w-[32rem] md:w-[38rem] h-auto rounded-2xl p-6 sm:p-8 border flex flex-col justify-between transition-colors duration-300">
        {/* Subtle ambient glow behind */}
        <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-emerald-500/10 blur-[100px] group-hover/card:bg-emerald-500/20 transition-colors duration-500" />

        <div className="space-y-4">
          {/* Flagship Tag */}
          <CardItem translateZ="30" className="w-fit">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono text-emerald-400">
              <Sparkles size={12} />
              Flagship — Featured System
            </span>
          </CardItem>

          {/* Title */}
          <CardItem
            translateZ="50"
            className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center gap-2.5"
          >
            <span>{project.name}</span>
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
          </CardItem>

          {/* Description */}
          <CardItem
            as="p"
            translateZ="60"
            className="text-sm sm:text-[15px] text-neutral-400 leading-relaxed"
          >
            {project.description}
          </CardItem>

          {/* 3D Floating Image (translateZ 100) */}
          <CardItem translateZ="100" className="w-full mt-4">
            <div className="relative h-60 sm:h-72 w-full overflow-hidden rounded-xl bg-neutral-900 border border-neutral-800 group-hover/card:shadow-2xl transition-shadow duration-300">
              <img
                src={project.image}
                alt={project.name}
                className="h-full w-full object-cover object-top rounded-xl filter brightness-95 group-hover/card:brightness-100 group-hover/card:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-neutral-700/60 text-[10px] font-mono text-emerald-400">
                Shipped
              </div>
            </div>
          </CardItem>

          {/* Tech Frameworks — Icons Only with minimalist hover tooltip */}
          <CardItem translateZ="55" className="w-full pt-3">
            <div className="flex items-center gap-2">
              {project.frameworks.map((fw) => (
                <div
                  key={fw.id}
                  className="relative group/icon flex items-center justify-center w-10 h-10 rounded-xl bg-neutral-900/90 border border-neutral-800 text-neutral-400 hover:text-emerald-400 hover:border-emerald-500/50 hover:bg-neutral-800/90 hover:scale-105 transition-all duration-200 cursor-pointer shadow-sm"
                  aria-label={fw.name}
                >
                  <FrameworkIcon name={fw.name} className="w-5 h-5 transition-transform duration-200" />

                  {/* Minimalist Hover Tooltip */}
                  <div className="absolute -top-7 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded bg-black/95 border border-neutral-800 text-[10px] font-mono text-neutral-300 whitespace-nowrap opacity-0 translate-y-1 group-hover/icon:opacity-100 group-hover/icon:translate-y-0 pointer-events-none transition-all duration-150 shadow-xl z-50">
                    {fw.name}
                  </div>
                </div>
              ))}
            </div>
          </CardItem>
        </div>

        {/* Bottom Actions Row */}
        <div className="flex justify-between items-center mt-6 pt-5 border-t border-neutral-800/80">
          <CardItem translateZ={40} as="div">
            {project.source ? (
              <a
                href={project.source}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-neutral-400 hover:text-white transition-colors px-3 py-2 rounded-xl hover:bg-neutral-800"
              >
                <GithubIcon size={14} />
                <span>Source Code</span>
              </a>
            ) : null}
          </CardItem>

          <CardItem translateZ={40} as="div">
            <a
              href={project.live || project.source || "https://github.com/Ryanakml/Deadbolt"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-black bg-emerald-500 hover:bg-emerald-400 transition-colors px-4 py-2.5 rounded-xl shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:shadow-[0_0_20px_rgba(16,185,129,0.5)] cursor-pointer"
            >
              <span>{project.liveLabel || "Live Demo ↗"}</span>
              <ExternalLink size={13} />
            </a>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}

// Elevated project card for secondary/other projects with official Aceternity CardSpotlight
function ProjectCard({ project }) {
  return (
    <CardSpotlight
      radius={260}
      dotSize={2.5}
      colors={[
        [16, 185, 129],
        [5, 150, 105],
      ]}
      className="shadow-lg hover:shadow-[0_15px_35px_rgba(0,0,0,0.8)] h-full"
    >
      <div className="flex flex-col space-y-3.5">
        {/* Project Preview Image */}
        <div className="relative w-full h-44 sm:h-48 rounded-xl overflow-hidden bg-neutral-900 border border-neutral-800/80 group-hover/spotlight:border-neutral-700/80 transition-colors">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover object-top group-hover/spotlight:scale-105 transition-transform duration-500 filter brightness-90 group-hover/spotlight:brightness-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

          {/* Shipped Status Pill */}
          <div className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full bg-black/70 backdrop-blur-md border border-neutral-700/60 text-[10px] font-mono text-emerald-400 flex items-center gap-1.5 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Shipped</span>
          </div>
        </div>

        {/* Title with Live Emerald Dot */}
        <div className="flex items-center gap-2 pt-1">
          <h3 className="text-lg font-bold text-white group-hover/spotlight:text-emerald-400 transition-colors">
            {project.name}
          </h3>
          <span className="inline-block h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
        </div>

        {/* Description */}
        <p className="text-xs sm:text-[13px] text-neutral-400 leading-relaxed font-normal">
          {project.description}
        </p>

        {/* Framework Badges — Icons with tooltips */}
        <div className="flex flex-wrap items-center gap-1.5 pt-1">
          {project.frameworks.map((fw) => (
            <div
              key={fw.id}
              className="relative group/icon flex items-center justify-center w-8 h-8 rounded-lg bg-neutral-900/90 border border-neutral-800 text-neutral-400 hover:text-emerald-400 hover:border-emerald-500/50 hover:bg-neutral-800/90 hover:scale-110 transition-all duration-200 cursor-pointer shadow-sm"
              aria-label={fw.name}
            >
              <FrameworkIcon name={fw.name} className="w-4 h-4 transition-transform duration-200" />

              {/* Minimalist Hover Tooltip */}
              <div className="absolute -top-7 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded bg-black/95 border border-neutral-800 text-[10px] font-mono text-neutral-300 whitespace-nowrap opacity-0 translate-y-1 group-hover/icon:opacity-100 group-hover/icon:translate-y-0 pointer-events-none transition-all duration-150 shadow-xl z-50">
                {fw.name}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Actions */}
      <div className="flex items-center justify-between pt-4 mt-5 border-t border-neutral-800/80">
        {project.source ? (
          <a
            href={project.source}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-neutral-400 hover:text-white transition-colors px-3 py-1.5 rounded-lg hover:bg-neutral-800"
          >
            <GithubIcon size={13} />
            <span>Source</span>
          </a>
        ) : (
          <div />
        )}

        {project.live ? (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-emerald-400 hover:text-black transition-colors px-3 py-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-400 border border-emerald-500/30 hover:shadow-[0_0_15px_rgba(16,185,129,0.3)]"
          >
            <span>{project.liveLabel || "Live Demo"}</span>
            <ExternalLink size={12} />
          </a>
        ) : (
          <span className="text-[11px] font-mono text-neutral-500">
            {project.liveLabel}
          </span>
        )}
      </div>
    </CardSpotlight>
  );
}

export default function Projects() {
  const deadbolt =
    projects.find((p) => p.name?.toLowerCase().includes("deadbolt")) ??
    projects[0];
  const others = projects.filter((p) => p.id !== deadbolt?.id);
  const secondary = others.slice(0, 2);
  const rest = others.slice(2);
  const [showAll, setShowAll] = useState(false);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 max-w-5xl mx-auto">
      <div className="mb-10 text-left">
        <h2 className="text-3xl font-extrabold tracking-tight text-white mb-2 font-mono">
          FEATURED PROJECTS & SYSTEMS
        </h2>
        <p className="text-sm sm:text-base text-neutral-400">
          A showcase of durable infrastructure, distributed workers, customer-ops workspaces, and realtime AI apps.
        </p>
      </div>

      {/* Feature 1 — Deadbolt Flagship ONLY with 3D Card Demo Skeleton */}
      <DeadboltFeatured3DCard project={deadbolt} />

      {/* Other Projects Normal 2-Column Grid as before */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch mt-8">
        {secondary.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* Show more collapsible for rest of projects */}
      {showAll && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch mt-6">
          {rest.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}

      {rest.length > 0 && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowAll((v) => !v)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono border border-neutral-800 bg-[#0f0f0f] text-neutral-300 hover:text-white hover:border-emerald-500/40 hover:bg-neutral-900 transition-colors cursor-pointer"
          >
            {showAll ? "Show less" : `Show more (${rest.length} more)`}
            <ChevronDown
              size={14}
              className={`transition-transform duration-300 ${showAll ? "rotate-180" : ""}`}
            />
          </button>
        </div>
      )}
    </section>
  );
}
