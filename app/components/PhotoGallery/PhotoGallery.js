"use client";

import { useState, useRef } from "react";
import { useInView } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Image from "next/image";
import Container from "@/app/global-components/Container/Container";
import { MapMapper, Calendar } from "@/app/svg-icons/svg-icons";

const galleryThumbnails = [
  {
    id: 1,
    src: "/gallery/work/1.webp",
    slides: [
      { src: "/gallery/work/1.webp" },
      // { src: "/gallery/slider-images/slider-2.jpg" },
      // { src: "/gallery/slider-images/slider-3.jpg" },
    ],
  },
  {
    id: 2,
    src: "/gallery/work/2.webp",
    slides: [
      { src: "/gallery/work/2.webp" },
      // { src: "/gallery/slider-images/slider-5.jpg" },
      // { src: "/gallery/slider-images/slider-6.jpg" },
    ],
  },
  {
    id: 3,
    src: "/gallery/work/4.webp",
    slides: [
      { src: "/gallery/work/4.webp" },
      // { src: "/gallery/slider-images/slider-8.jpg" },
      // { src: "/gallery/slider-images/slider-9.jpg" },
    ],
  },
  {
    id: 4,
    src: "/gallery/work/3.png",
    slides: [
      { src: "/gallery/work/3.png" },
      // { src: "/gallery/slider-images/slider-11.jpg" },
      // { src: "/gallery/slider-images/slider-12.jpg" },
    ],
  },
  {
    id: 5,
    src: "/gallery/work/9.jpg",
    slides: [
      { src: "/gallery/work/9.jpg" },
      // { src: "/gallery/slider-images/slider-14.jpg" },
      // { src: "/gallery/slider-images/slider-15.jpg" },
    ],
  },
  {
    id: 6,
    src: "/gallery/work/11.jpg",
    slides: [
      { src: "/gallery/work/11.jpg" },
      // { src: "/gallery/slider-images/slider-17.jpg" },
      // { src: "/gallery/slider-images/slider-18.jpg" },
    ],
  },
  {
    id: 7,
    src: "/gallery/work/10.jpg",
    slides: [
      { src: "/gallery/work/10.jpg" },
      // { src: "/gallery/slider-images/slider-17.jpg" },
      // { src: "/gallery/slider-images/slider-18.jpg" },
    ],
  },
  {
    id: 8,
    src: "/gallery/work/8.jpg",
    slides: [
      { src: "/gallery/work/8.jpg" },
      // { src: "/gallery/slider-images/slider-17.jpg" },
      // { src: "/gallery/slider-images/slider-18.jpg" },
    ],
  },
  {
    id: 9,
    src: "/gallery/work/5.gif",
    slides: [
      { src: "/gallery/work/5.gif" },
      // { src: "/gallery/slider-images/slider-17.jpg" },
      // { src: "/gallery/slider-images/slider-18.jpg" },
    ],
  },
  {
    id: 10,
    src: "/gallery/work/6.jpeg",
    slides: [
      { src: "/gallery/work/10.jpeg" },
      // { src: "/gallery/slider-images/slider-17.jpg" },
      // { src: "/gallery/slider-images/slider-18.jpg" },
    ],
  },
  {
    id: 11,
    src: "/gallery/work/7.jpg",
    slides: [
      { src: "/gallery/work/7.jpg" },
      // { src: "/gallery/slider-images/slider-17.jpg" },
      // { src: "/gallery/slider-images/slider-18.jpg" },
    ],
  },
];

export default function PhotoGallery() {
  const [openGallery, setOpenGallery] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  const clickHandler = (index) => {
    setOpenGallery(true);
    setGalleryIndex(index);
  };

  return (
    <section
      id="photo-gallery"
      className={`w-full mt-16 pb-14 lg:mt-56 lg:pb-56 lg:mb-[22.5rem]`}
      style={{
        transform: isInView ? "none" : "translateY(100px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
      ref={sectionRef}
    >
      <Container>
        <h2 className="font-bold text-6xl pb-6">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5">
          {galleryThumbnails.map((item, index) => {
            return (
              <div className="flex flex-col mb-5 leading-none" key={item.id}>
                <div className="w-full aspect-square rounded-lg transition-all">
                  <Image
                    className="rounded-lg cursor-pointer hover:opacity-60 transition-all w-full h-full object-cover"
                    src={item.src}
                    width={400}
                    height={400}
                    alt="Gallery thumbnail"
                    onClick={() => clickHandler(index)}
                  />
                </div>
                {/* <h5 className="text-sm md:text-lg xl:text-xl font-medium">{item.club}</h5>
								<span className="flex">
									<MapMapper />
									<h5 className="ml-2 text-sm md:text-lg">{item.city}</h5>
								</span>
								<span className="flex">
									<Calendar />
									<h5 className="ml-2 text-sm md:text-lg">{item.date}</h5>
								</span> */}
              </div>
            );
          })}
          <Lightbox
            open={openGallery}
            close={() => setOpenGallery(false)}
            slides={galleryThumbnails[galleryIndex].slides}
          />
        </div>
      </Container>
    </section>
  );
}
