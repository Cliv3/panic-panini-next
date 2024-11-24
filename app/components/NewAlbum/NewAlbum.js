import { useRef } from "react";
import { useInView } from "framer-motion";

export default function NewAlbum({ customClasses }) {
	const comingSoonRef = useRef(null);
	const isInView = useInView(comingSoonRef, { once: true });
	return (
		<div
			className={`flex flex-col items-center justify-center p-4${customClasses ? ` ${customClasses}` : ""
				}`}
			ref={comingSoonRef}
			style={{
				transform: isInView ? "none" : "translateX(-100px)",
				opacity: isInView ? 1 : 0,
				transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
			}}
		>
			<h4 className="text-white font-permanentMarker text-center text-xl sm:text-2xl">
				WHILE OTHERS ARE
			</h4>
			<h4 className="text-white font-rockSalt text-center text-xl sm:text-2xl">
				Trying to Get Rich Quick,
			</h4>
			<p className="text-fluo-green text-center text-base sm:text-lg">
				$WORK FOR YOUR BAGS, $WORK FOR YOUR FUTURE.
			</p>
		</div>

	);
}
