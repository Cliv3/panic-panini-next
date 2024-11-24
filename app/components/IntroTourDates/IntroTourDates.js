"use client";
import { useState } from "react";
import { useRef } from "react";
import { useInView } from "framer-motion";
import ScrollTo from "@/app/global-components/ScrollTo/ScrollTo";
import ButtonPrimary from "@/app/global-components/ButtonPrimary/ButtonPrimary";
import { MapMapper, Github } from "@/app/svg-icons/svg-icons";

const observerOptions = {
	rootMargin: "0px",
	threshold: 0.3,
};

const tourDates = [
	// {
	// 	id: 1,
	// 	date: "1",
	// 	dayTime: "Community For",
	// 	venue: "Hustlers",
	// 	city: "",
	// },
	// {
	// 	id: 2,
	// 	date: "22 Nov",
	// 	dayTime: "Wednesday 20.00 - 22.00",
	// 	venue: "Roundhouse, Chalk Bag Rd",
	// 	city: "Rome",
	// },
	// {
	// 	id: 3,
	// 	date: "10 Dec",
	// 	dayTime: "Saturday 20.00 - 22.00",
	// 	venue: "200 Camden High St",
	// 	city: "New York",
	// },
];

export default function IntroTourDates() {
	const sectionRef = useRef(null);
	const isInView = useInView(sectionRef, { once: true });
	const contractAddress = 'FMWRBWhr49k3JtPBhYT5mGXayvXJkpsuTaodzjTRpump';
	const [copied, setCopied] = useState(false);
  	const [activeSection, setActiveSection] = useState(0);

	const handleCopy = () => {
		navigator.clipboard.writeText(contractAddress);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	  };

	return (
<div
  className={`flex flex-col justify-center items-center lg:justify-end lg:items-end`}
  style={{
    transform: isInView ? "none" : "translateY(-100px)",
    opacity: isInView ? 1 : 0,
    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
  }}
  ref={sectionRef}
>
  <h2 className="text-white font-permanentMarker text-center text-2xl sm:text-3xl md:text-3xl lg:text-4xl mb-4">
    $WORK FOR YOUR FUTURE.
  </h2>
  <div className="flex flex-col items-center gap-y-4 w-full px-4 sm:px-6">
    <a
      href="https://dexscreener.com/solana/9ng9pmgs2laqjou7spuzyi21qummwcgrnmymmbej8wbz"
      target="_blank"
      rel="noreferrer"
      className="w-full flex justify-center"
    >
      <ButtonPrimary
        customClasses="flex items-center gap-x-1 text-sm my-3 lg:text-base lg:mb-0"
      >
        Buy on Dex screeener
      </ButtonPrimary>
    </a>
    <div className="flex flex-col sm:flex-row items-center justify-center w-full gap-2 sm:gap-4">
      <p className="bg-black p-2 text-white rounded-full text-sm sm:text-base text-center">
        <span className="font-bold">Contract Address: </span>
        {contractAddress.slice(0, 8)}...{contractAddress.slice(-8)}
      </p>
      <button
        onClick={handleCopy}
        className="bg-yellow-btn-primary hover:bg-yellow-500 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-md transition-all duration-300 text-sm sm:text-base w-24"
      >
        {copied ? 'Copied!' : 'Copy'}
      </button>
    </div>
  </div>
</div>

	);
}
