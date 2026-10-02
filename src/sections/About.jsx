import { useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { AnimatedTextLines } from "../components/AnimatedTextLines";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Icon } from "@iconify/react/dist/iconify.js";

const About = () => {
  const text = `Root-cause driven —
I trace every failure to its root,
validate the real execution path`;
  const aboutText = `Full-stack AI engineer building across the whole stack — TypeScript/React/Next.js up front, Node/Express/queues/workers behind, Postgres/Redis/Convex underneath, Docker/AWS/GCP on top. 7 systems shipped: Deadbolt, FlowDesk, Wabrix, Streak, Chattiphy, Voxify, ClipperAI — plus 271 merged PRs across open-source.
  Remote collaboration in English, issue-driven, CI on every PR:`;
  const imgRef = useRef(null);
  useGSAP(() => {
    gsap.to("#about", {
      scale: 0.95,
      scrollTrigger: {
        trigger: "#about",
        start: "bottom 80%",
        end: "bottom 20%",
        scrub: true,
        markers: false,
      },
      ease: "power1.inOut",
    });

    gsap.set(imgRef.current, {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
    });
    gsap.to(imgRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 2,
      ease: "power4.out",
      scrollTrigger: { trigger: imgRef.current },
    });
  });
  return (
    <section id="about" className="min-h-screen bg-black rounded-b-4xl">
      <AnimatedHeaderSection
        subTitle={"Innovating with code, Growing through technology"}
        title={"About"}
        text={text}
        textColor={"text-white"}
        withScrollTrigger={true}
      />
      <div className="flex flex-col items-center justify-between gap-16 px-1 sm:px-1 md:px-3 lg:px-6 pb-16 text-xl font-light tracking-wide lg:flex-row md:text-2xl lg:text-3xl text-white/60 ultra-small-screen">
        <img
          ref={imgRef}
          src="images/pfp.png"
          alt="Ryan Akmal Pasya"
          className="w-md rounded-3xl"
        />
        <div className="w-full">
          <AnimatedTextLines text={aboutText} className={"w-full"} />
          <div className="mt-4 space-y-2">
            <div className="flex items-center gap-3">
              <Icon icon="lucide:bot" className="text-white/80" />
              <span>AI orchestration — agents, RAG, routing, voice</span>
            </div>
            <div className="flex items-center gap-3">
              <Icon icon="lucide:workflow" className="text-white/80" />
              <span>Backend — queues, workers, webhooks, durable runs</span>
            </div>
            <div className="flex items-center gap-3">
              <Icon icon="lucide:activity" className="text-white/80" />
              <span>Reliability — tracing, recovery, observable infra</span>
            </div>
            <div className="flex items-center gap-3">
              <Icon icon="lucide:github" className="text-white/80" />
              <span>271 merged PRs — pylint, typeshed, OpenHands, Mastra + more</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
