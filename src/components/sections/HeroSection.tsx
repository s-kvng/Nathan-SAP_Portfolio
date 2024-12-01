"use client";

import { DATA } from "@/data/resume";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import React from "react";
import BlurFade from "../magicui/blur-fade";
import BlurFadeText from "../magicui/blur-fade-text";
import { WavyBackground } from "../ui/wavy-background";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";

const BLUR_FADE_DELAY = 0.04;

const HeroSection = () => {
  const words = [
    {
      text: "Hi,",
    },
    {
      text: "I'm",
    },
    {
      text: `${DATA.name.split(" ")[0]}`,
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "👋",
    },
  ];

  return (
    <>
      <section id="hero">
        <WavyBackground className="mx-auto w-full max-w-3xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <TypewriterEffectSmooth
                className="!text-2xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                words={words}
              />
              <BlurFadeText
                className="max-w-[600px] md:text-xl"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-28 border">
                <AvatarImage
                  alt={DATA.name}
                  src={DATA.avatarUrl}
                  className=" object-fill"
                />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </WavyBackground>
      </section>
    </>
  );
};

export default HeroSection;
