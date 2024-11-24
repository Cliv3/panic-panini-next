"use client";

import { useRef, useState, useEffect } from "react";
import BandIdentity from "../BandIdentity/BandIdentity";
import Container from "@/app/global-components/Container/Container";
import IntroTourDates from "../IntroTourDates/IntroTourDates";
import NewAlbum from "../NewAlbum/NewAlbum";
import BackToTop from "../BackToTop/BackToTop";
import { useInView } from "framer-motion";
import CookieConsent from "react-cookie-consent";

const observerOptions = {
  rootMargin: "0px",
  threshold: 0,
};

export default function Intro() {
  const [isScrollTopVisible, setIsScrollTopVisible] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const { scrollY } = window;
    if (scrollY > 50 && !isInView) {
      setIsScrollTopVisible(true);
    } else {
      setIsScrollTopVisible(false);
    }
  }, [isInView]);

  const togglePlay = () => {
    const video = document.querySelector("#backgroundVideo");
    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <section
      id="intro"
      className={`relative flex flex-col items-center h-[100svh] w-full overflow-hidden max-h-[93rem] min-h-[43rem] lg:h-screen lg:flex-row lg:justify-start`}
      ref={sectionRef}
    >
      <BandIdentity />
      <div className="absolute w-full h-full top-0 left-0">
        <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-b from-purple-500 to-pink-500 opacity-10"></div>
        <div className="absolute w-full h-full top-0 left-0 bg-hero-pattern bg-repeat"></div>
        {!isPlaying && (
          <>
            <button
              onClick={togglePlay}
              className="absolute top-[48%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 
                           bg-yellow-btn-primary hover:bg-blue-500 text-white
                           rounded-full w-16 h-16 flex items-center justify-center
                           transition-all duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                />
              </svg>
            </button>
            <p
              className="absolute sm:top-[55%] top-[58%] left-1/2 transform -translate-x-1/2 text-white 
                     text-center font-bold z-20 bg-black/30 px-4 py-2 rounded-lg
                     sm:text-base text-sm"
            >
              If You Are Ready To $WORK For Your Bags, Press Play!
            </p>
          </>
        )}
        <video
          id="backgroundVideo"
          autoPlay={false}
          loop
          poster="/m.webp"
          className="object-cover w-full h-full z-10"
          playsInline
        >
          <source src="./small.webm" type="video/webm" />
          <source src="./small.mp4" type="video/mp4" />
        </video>
      </div>


      {isPlaying && (
        <Container customClasses="flex flex-col justify-center items-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 lg:justify-end lg:items-end">
          <IntroTourDates />
        </Container>
      )}
      <NewAlbum customClasses="mt-auto z-50 lg:hidden" />
      <BackToTop
        customClasses={`reveal${isScrollTopVisible ? " visible" : ""}`}
      />
      {/* <CookieConsent
				disableStyles={true}
				buttonText="Consent"
				cookieName="cookie_consent"
				buttonClasses="bg-yellow-btn-primary rounded-full p-1 px-3 text-sm text-xs text-white"
				containerClasses="w-full fixed !bottom-0 bg-fluo-green p-3 z-[50] lg:bg-stone-300/70 lg:backdrop-blur-lg lg:left-8 lg:!bottom-2 lg:rounded-md lg:max-w-md"
				contentClasses="text-sm leading-none mb-1 lg:text-white"
				expires={20}>
				This website uses cookies to enhance the user experience.
			</CookieConsent> */}
    </section>
  );
}
