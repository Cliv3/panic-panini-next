"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import Container from "@/app/global-components/Container/Container";

export default function Listen() {
  const textRef = useRef(null);
  const isInView = useInView(textRef, { once: true });

  return (
    <section id="listen" className="w-full py-8 lg:py-16">
      <Container customClasses="h-full">
        <div
          ref={textRef}
          className="flex flex-col w-full"
          style={{
            transform: isInView ? "none" : "translateX(-100px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          <h2 className="font-bold text-4xl md:text-5xl lg:text-6xl mb-8 mt-20 px-4">
            FIND US ON DEXSCREENER
          </h2>
          
          <div className="w-full h-[calc(100vh-12rem)] min-h-[400px] max-h-[800px] px-4 md:px-8 lg:px-12">
            <div className="w-full h-full rounded-lg overflow-hidden shadow-2xl bg-black">
              <iframe
                className="w-full h-full border-0"
                src="https://dexscreener.com/solana/9ng9PmgS2LaQjou7SpuzYi21qUMmWCGrnMYmmBEj8wBZ?embed=1&loadChartSettings=0&chartLeftToolbar=0&chartTheme=dark&theme=dark&chartStyle=0&chartType=usd&interval=15"
                title="DEXScreener Chart"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}