"use client";

import Image from "next/image";
import Container from "@/app/global-components/Container/Container";
import ButtonPrimary from "@/app/global-components/ButtonPrimary/ButtonPrimary";
import NewAlbum from "../NewAlbum/NewAlbum";
import ScrollTo from "@/app/global-components/ScrollTo/ScrollTo";

export default function BandIdentity() {
	return (
		<>
			<div className="w-full py-3 z-50 lg:hidden">
				<Container customClasses="px-2.5 flex items-center justify-between font-sm">
					<Image className="max-w-[6rem] h-auto " src="/money.png" width={324} height={236} alt="$WORK TOKEN IMAGE" />
					<ScrollTo toId="shows" duration={1500}>
						<ButtonPrimary customClasses="text-sm">ROADMAP</ButtonPrimary>
					</ScrollTo>
				</Container>
			</div>
			<div className="hidden h-full flex-col justify-between grow-0 shrink-0 bg-black z-10 bg-opacity-30 lg:flex">
				<div className="logo-container border-y-[1.25rem] border-fluo-green py-4 opacity-1">
					<Image className="px-12 py-3 h-auto" src="/money.png" width={400} height={236} alt="$WORK Logo" />
					<div className="flex justify-center">
						<p className="text-white font-bold text-4xl">$WORK</p>
					</div>
				</div>
				<NewAlbum />
			</div>
		</>
	);
}
