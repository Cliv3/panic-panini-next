"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import Image from "next/image";
import Container from "@/app/global-components/Container/Container";
import Link from "next/link";

export default function About() {
  const textRef = useRef(null);
  const isInView = useInView(textRef, { once: true });

  return (
    <section
      id="about"
      className={`relative flex flex-col items-center justify-end w-full mt-16 mx-auto max-w-[150rem] lg:flex-row lg:mt-56`}
    >
      <Container customClasses="lg:absolute lg:left-1/2 lg:-translate-x-1/2">
        <div
          className="flex flex-col lg:max-w-md xl:max-w-2xl 2xl:max-w-4xl"
          ref={textRef}
          style={{
            transform: isInView ? "none" : "translateX(-100px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          <h2 className="font-bold text-6xl pb-6">WHAT IS $WORK?</h2>
          <p>
            A community dedicated to hustling in the trenches. While others
            sleep, we work together to build wealth and prosperity.{" "}
          </p>
          <p className="pt-8">
            $WORK isn’t about shortcuts or luck—it's about grit, hustle, and
            earning your rewards the right way. $WORK is more than just a token;
            it's a movement that values effort, persistence, and the drive to
            build something meaningful.
          </p>
          <div className="flex pt-8 gap-4">
            <Link href="https://x.com/Work_CTO">
              <svg
                fill="#1C2033"
                width="52"
                height="52"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M21.4016 56.7998C14.7016 56.7998 8.20156 54.8998 2.80156 51.1998C1.90156 50.5998 1.60156 49.4998 1.90156 48.4998C2.30156 47.4998 3.30156 46.8998 4.30156 47.0998C5.10156 47.1998 5.90156 47.2998 6.70156 47.2998C9.60156 47.2998 12.4016 46.6998 15.0016 45.5998C11.8016 43.9998 9.20156 41.1998 8.10156 37.5998C7.90156 36.8998 8.00156 36.1998 8.40156 35.5998C5.60156 32.9998 4.00156 29.3998 4.00156 25.4998V25.3998C4.00156 24.5998 4.40156 23.8998 5.10156 23.4998C5.20156 23.3998 5.30156 23.3998 5.40156 23.2998C4.50156 21.4998 4.00156 19.3998 4.00156 17.3998C4.00156 14.8998 4.60156 12.5998 5.80156 10.5998C6.20156 9.9998 6.80156 9.5998 7.60156 9.4998C8.30156 9.3998 9.10156 9.7998 9.50156 10.2998C14.3016 16.1998 21.2016 19.9998 28.6016 20.9998V20.8998C28.6016 13.3998 34.7016 7.2998 42.2016 7.2998C45.5016 7.2998 48.6016 8.4998 51.1016 10.6998C52.2016 10.2998 53.4016 9.4998 54.6016 8.7998C55.2016 8.3998 55.8016 7.9998 56.4016 7.6998C57.1016 7.2998 58.0016 7.2998 58.8016 7.7998C59.6016 8.2998 59.9016 9.0998 59.8016 9.8998C59.7016 10.4998 59.5016 11.8998 59.1016 13.3998C59.3016 13.3998 59.4016 13.3998 59.5016 13.3998C60.4016 13.1998 61.3016 13.5998 61.8016 14.3998C62.3016 15.1998 62.3016 16.0998 61.8016 16.8998C60.4016 18.9998 58.3016 20.3998 56.4016 21.6998C56.2016 21.7998 56.0016 21.9998 55.9016 22.0998C55.9016 22.1998 55.9016 22.2998 55.9016 22.3998C56.0016 39.1998 43.0016 56.7998 21.4016 56.7998ZM12.8016 50.9998C15.5016 51.7998 18.4016 52.1998 21.4016 52.1998C40.2016 52.1998 51.5016 36.8998 51.5016 22.0998C51.5016 21.6998 51.5016 21.2998 51.5016 20.8998C51.4016 20.0998 51.7016 19.2998 52.4016 18.7998C52.9016 18.3998 53.5016 17.9998 54.0016 17.5998C54.3016 17.3998 54.6016 17.1998 54.9016 16.9998C54.4016 16.7998 54.0016 16.2998 53.8016 15.7998C53.6016 15.2998 53.6016 14.6998 53.8016 14.1998C52.9016 14.5998 52.0016 14.8998 51.1016 15.0998C50.4016 15.1998 49.6016 14.9998 49.1016 14.3998C47.3016 12.4998 45.0016 11.4998 42.5016 11.4998C37.5016 11.4998 33.4016 15.5998 33.4016 20.5998C33.4016 21.1998 33.5016 21.8998 33.6016 22.6998C33.7016 23.3998 33.6016 24.0998 33.1016 24.5998C32.6016 25.0998 32.0016 25.3998 31.3016 25.3998C22.8016 24.9998 14.8016 21.4998 8.80156 15.5998C8.70156 16.0998 8.70156 16.5998 8.70156 17.0998C8.70156 20.1998 10.2016 22.9998 12.8016 24.6998C13.6016 25.2998 14.0016 26.2998 13.7016 27.2998C13.4016 28.2998 12.5016 28.8998 11.5016 28.8998C10.8016 28.8998 10.0016 28.7998 9.30156 28.5998C10.4016 31.3998 12.9016 33.5998 16.0016 34.1998C17.0016 34.3998 17.8016 35.2998 17.8016 36.3998C17.8016 37.4998 17.1016 38.3998 16.1016 38.5998C15.5016 38.7998 14.8016 38.8998 14.3016 38.9998C16.0016 40.9998 18.4016 42.1998 21.1016 42.1998C22.1016 42.1998 22.9016 42.7998 23.2016 43.6998C23.5016 44.5998 23.2016 45.5998 22.4016 46.1998C19.3016 48.5998 16.2016 50.1998 12.8016 50.9998Z" />
              </svg>
            </Link>
            <Link href="https://www.instagram.com/workonsolana/">
              <svg
                fill="#1C2033"
                width="52"
                height="52"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M62.9 19.2C62.8 16 62.2 13.7 61.5 11.6C60.8 9.5 59.7 7.8 58 6.1C56.3 4.4 54.6 3.4 52.6 2.6C50.6 1.8 48.4 1.3 45 1.2C41.5 1 40.5 1 32 1C23.5 1 22.6 1 19.2 1.1C15.8 1.2 13.7 1.8 11.6 2.5C9.5 3.2 7.8 4.4 6.1 6.1C4.4 7.8 3.3 9.5 2.6 11.6C1.8 13.6 1.3 15.8 1.2 19.2C1.1 22.6 1 23.5 1 32C1 40.5 1 41.4 1.1 44.8C1.2 48.2 1.8 50.3 2.5 52.4C3.2 54.5 4.3 56.2 6 57.9C7.7 59.6 9.5 60.7 11.5 61.4C13.5 62.1 15.7 62.7 19.1 62.8C22.5 63 23.4 63 31.9 63C40.4 63 41.3 63 44.7 62.9C48.1 62.8 50.2 62.2 52.3 61.5C54.4 60.8 56.1 59.7 57.8 58C59.5 56.3 60.6 54.5 61.3 52.5C62 50.5 62.6 48.3 62.7 44.9C62.8 41.7 62.8 40.7 62.8 32.2C62.8 23.7 63 22.6 62.9 19.2ZM57.3 44.5C57.2 47.5 56.6 49.1 56.2 50.3C55.6 51.7 54.9 52.8 53.8 53.8C52.7 54.9 51.7 55.5 50.3 56.2C49.2 56.6 47.6 57.2 44.5 57.3C41.3 57.3 40.3 57.3 32.1 57.3C23.9 57.3 22.8 57.3 19.6 57.2C16.6 57.1 15 56.5 13.8 56.1C12.4 55.5 11.3 54.8 10.3 53.7C9.2 52.6 8.6 51.6 7.9 50.2C7.5 49.1 6.9 47.5 6.8 44.4C6.8 41.3 6.8 40.3 6.8 32C6.8 23.7 6.8 22.7 6.9 19.5C7 16.5 7.6 14.9 8 13.7C8.6 12.3 9.3 11.2 10.3 10.2C11.4 9.1 12.4 8.5 13.8 7.9C14.9 7.5 16.5 6.9 19.6 6.8C22.8 6.7 23.8 6.7 32.1 6.7C40.4 6.7 41.4 6.7 44.6 6.8C47.6 6.9 49.2 7.5 50.4 7.9C51.8 8.5 52.9 9.2 53.9 10.2C55 11.3 55.6 12.3 56.3 13.7C56.7 14.8 57.3 16.4 57.4 19.5C57.5 22.7 57.5 23.7 57.5 32C57.5 40.3 57.4 41.3 57.3 44.5Z" />
                <path d="M32.0016 16.0996C23.1016 16.0996 16.1016 23.2996 16.1016 31.9996C16.1016 40.8996 23.3016 47.8996 32.0016 47.8996C40.7016 47.8996 48.0016 40.8996 48.0016 31.9996C48.0016 23.0996 40.9016 16.0996 32.0016 16.0996ZM32.0016 42.3996C26.2016 42.3996 21.6016 37.6996 21.6016 31.9996C21.6016 26.2996 26.3016 21.5996 32.0016 21.5996C37.8016 21.5996 42.4016 26.1996 42.4016 31.9996C42.4016 37.7996 37.8016 42.3996 32.0016 42.3996Z" />
                <path d="M48.7 19.1002C50.7435 19.1002 52.4 17.4436 52.4 15.4002C52.4 13.3567 50.7435 11.7002 48.7 11.7002C46.6565 11.7002 45 13.3567 45 15.4002C45 17.4436 46.6565 19.1002 48.7 19.1002Z" />
              </svg>
            </Link>
            <a
              href="https://t.me/YourTelegramChannel"
              target="_blank"
              rel="noreferrer"
              className="text-black hover:text-yellow-btn-primary transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="52"
                height="52"
                viewBox="0 0 64 64"
                fill="currentColor"
              >
                <path d="M32 0C14.32 0 0 14.32 0 32C0 49.68 14.32 64 32 64C49.68 64 64 49.68 64 32C64 14.32 49.68 0 32 0ZM47.36 21.76C46.72 27.84 44.16 41.28 42.88 47.36C42.24 50.24 41.28 51.2 40 51.84C37.12 52.48 34.88 50.88 32 49.28C27.52 46.4 25.28 44.8 20.8 41.92C15.68 38.4 19.2 36.48 22.08 33.6C22.72 32.96 35.52 21.12 35.84 20.16C35.84 20.16 36.16 19.2 35.52 18.88C34.88 18.56 34.24 18.88 33.6 18.88C32.96 18.88 25.92 23.36 12.16 32C10.24 33.28 8.32 34.24 6.72 33.92C4.8 33.6 1.28 32.64 -1.28 31.68C-3.84 30.72 -4.16 29.12 -2.24 28.16C11.52 21.44 31.04 14.72 45.44 11.84C47.36 11.52 51.52 12.48 51.52 16C51.84 16.96 51.52 19.2 47.36 21.76Z" />
              </svg>
            </a>

            {/* TikTok */}
            <a
              href="https://tiktok.com/@YourTikTokHandle"
              target="_blank"
              rel="noreferrer"
              className="text-black hover:text-yellow-btn-primary transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="52"
                height="52"
                viewBox="0 0 64 64"
                fill="currentColor"
              >
                <path d="M32.7 0.1C36.5 0 40.3 0 44.1 0C44.3 4.1 46.1 8.2 49.2 11C52.3 13.8 56.4 15.1 60.5 15V24.9C56.6 24.8 52.7 23.9 49.2 22.2C47.7 21.6 46.3 20.8 45 19.9C45 28.3 45 36.7 45 45.1C44.9 49.2 43.5 53.3 41 56.6C37.2 61.8 30.8 64.9 24.3 64.3C19.8 64 15.4 62.1 12 59C7.3 54.9 4.6 48.5 5.1 42.1C5.4 37.1 7.7 32.3 11.5 28.8C15.7 24.9 21.7 22.8 27.6 23.3C27.6 28.4 27.6 33.4 27.6 38.5C25.2 37.8 22.4 38 20.1 39.1C18.3 39.9 16.7 41.3 15.7 43C14.3 45.3 14.1 48.2 14.9 50.7C15.9 53.8 18.9 56.3 22.2 56.6C24.6 56.9 27.1 56.1 28.9 54.5C30 53.5 30.8 52.3 31.3 50.9C31.9 49.5 31.8 48 31.8 46.5C31.8 31.1 31.8 15.6 31.8 0.2C32.1 0.2 32.4 0.1 32.7 0.1Z" />
              </svg>
            </a>
          </div>
        </div>
      </Container>
      <Image
        className="w-full mt-5 max-h-96 object-cover lg:mt-0 lg:max-h-none lg:max-w-lg lg:block xl:max-w-xl"
        src="/money.png"
        width={750}
        height={533}
        alt="Holding guitar"
      />
    </section>
  );
}
