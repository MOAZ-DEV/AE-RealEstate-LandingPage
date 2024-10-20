"use client"

import Image from "next/image";
import { ComponentProps, useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion";
import { Nav } from "./Layouts";

interface HeroProps extends ComponentProps<'div'> {
    className?: string;
    children?: React.ReactNode;
}

export const Hero = ({ className }: HeroProps) => {

    const
        HeroImage = () =>
            <Image className="absolute top-0 left-0 h-full w-screen !z-[0] brightness-75 object-cover"
                src={"https://images.pexels.com/photos/8134847/pexels-photo-8134847.jpeg?auto=compress&cs=tinysrgb&w=7360&h=4912&dpr=1"}
                alt={"Architect Building."} height={1000} width={1000} />,
        SliderTrack = () => {
            const [current, setCurrent] = useState(0);
            const list = [
                "We have made quality our habit. It’s not something that we just strive for – we live by this principle every day.",
                "Quality is embedded in everything we do, guiding each decision and action with precision and care.",
                "Our commitment to quality goes beyond a goal; it's a core value that defines our approach daily.",
                "We believe in delivering excellence consistently, making quality not just a target but a way of life."
            ];

            useEffect(() => {
                const interval = setInterval(() => {
                    setCurrent((prev) => (prev + 1) % list.length);
                }, 3000);
                return () => clearInterval(interval);
            })

            return <div className="flex flex-col gap-4 ml-auto !z-10 max-w-3xl min-h-32">
                <div className="flex flex-row gap-2">
                    {list.map((item, index) => (
                        <span key={index} className="flex w-full bg-[#ffffff45]">
                            <span className={`flex h-0.5 bg-[#ffffff95] w-0 ${(index - 1 >= current) ? "w-0" : `w-full`} transition-all duration-1000`}></span>
                        </span>
                    ))}
                </div>
                <div className="flex flex-row justify-between text-white">
                    <span className={`text-base font-medium w-1/4 opacity-65`}>{(current + 1).toString().padStart(2, '0')} / {(list.length).toString().padStart(2, '0')}</span>
                    <AnimatePresence mode="popLayout">
                        <motion.p
                            layout
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="text-xl md:text-2xl w-3/4">
                            {list[current]}
                        </motion.p>
                    </AnimatePresence>
                </div>

            </div>
        }
    return <div id="Hero" className={"relative flex flex-col justify-between gap-16 min-h-[90vh] px-6 md:px-12 py-6 overflow-hidden " + className}>
        <HeroImage />
        <Nav className="absolute top-0 left-0 w-full" />
        <span></span>
        <div className="flex flex-col gap-4 !z-10 max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold uppercase text-white">
                One Step Away
                from Exceptional Design.</h1>
            <p className="text-base font-normal text-white">
                At Nuvelti Design Studio, We craft visually stunning, functional, and cost-effective designs by collaborating closely with clients to bring their unique vision to life. Our dedication to excellence and creativity makes every project distinctive in today’s marketplace.</p>
        </div>
        <SliderTrack />
    </div>;
}