"use client";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";

/**
 * 1:1 Official Aceternity UI ExpandableCard (Standard List Variant)
 * https://ui.aceternity.com/components/expandable-card
 */
export function ExpandableCardStandard({ cards }) {
  const [active, setActive] = useState(null);
  const ref = useRef(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm h-full w-full z-[90]"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[100] p-4">
            <motion.button
              key={`button-${active.id || active.ctaLink || active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-4 right-4 md:top-6 md:right-6 items-center justify-center bg-white dark:bg-neutral-800 rounded-full h-8 w-8 z-50 cursor-pointer shadow-lg"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.id || active.ctaLink || active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden shadow-2xl border border-neutral-800"
            >
              <motion.div layoutId={`image-${active.id || active.ctaLink || active.title}-${id}`}>
                <img
                  width={400}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-44 sm:h-52 object-contain bg-neutral-950 p-8"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4 sm:p-6">
                  <div>
                    <motion.h3
                      layoutId={`title-${active.id || active.ctaLink || active.title}-${id}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200 text-lg sm:text-xl"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.id || active.ctaLink || active.title}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400 text-sm mt-0.5"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layoutId={`button-${active.id || active.ctaLink || active.title}-${id}`}
                    href={active.ctaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 text-sm rounded-full font-bold bg-emerald-500 hover:bg-emerald-400 text-white shrink-0 ml-4 transition-colors"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="pt-2 relative px-4 sm:px-6">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-44 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-2xl mx-auto w-full flex flex-col gap-3">
        {cards.map((card) => {
          const cardKey = card.id || card.ctaLink || card.title;
          return (
            <motion.div
              layoutId={`card-${cardKey}-${id}`}
              key={`card-${cardKey}-${id}`}
              onClick={() => setActive(card)}
              className="group p-4 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-900 hover:border-emerald-500/50 hover:shadow-[0_0_36px_-12px_rgba(16,185,129,0.5)] bg-neutral-900/40 border border-neutral-800/80 rounded-2xl cursor-pointer transition-all duration-200"
            >
              <div className="flex gap-4 flex-col md:flex-row items-center w-full md:w-auto">
                <motion.div layoutId={`image-${cardKey}-${id}`} className="shrink-0">
                  <img
                    width={56}
                    height={56}
                    src={card.src}
                    alt={card.title}
                    className="h-14 w-14 rounded-xl object-contain bg-neutral-800/80 p-2"
                  />
                </motion.div>
                <div className="flex-1 text-center md:text-left">
                  <motion.h3
                    layoutId={`title-${cardKey}-${id}`}
                    className="font-medium text-neutral-800 dark:text-neutral-200 text-base"
                  >
                    {card.title}
                  </motion.h3>
                  <motion.p
                    layoutId={`description-${cardKey}-${id}`}
                    className="text-neutral-600 dark:text-neutral-400 text-xs sm:text-sm mt-0.5"
                  >
                    {card.description}
                  </motion.p>
                </div>
              </div>
              <motion.button
                layoutId={`button-${cardKey}-${id}`}
                className="px-4 py-1.5 text-xs sm:text-sm rounded-full font-semibold bg-neutral-800 text-neutral-200 mt-4 md:mt-0 shrink-0 transition-all duration-200 group-hover:bg-emerald-500 group-hover:text-black group-hover:shadow-[0_0_20px_-4px_rgba(16,185,129,0.7)]"
              >
                {card.ctaText} <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5">↗</span>
              </motion.button>
            </motion.div>
          );
        })}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black dark:text-white"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};
