"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./Commons";
import { PlaySvg } from "./Svgs";

const SPRING_OPTIONS = {
    type: "spring",
    mass: 9,
    stiffness: 300,
    damping: 80,
};

const INITIAL_IMAGES = [
    { value: "IMG-01", url: "https://images.unsplash.com/photo-1623625434531-d130448273c1?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", },
    { value: "IMG-02", url: "https://images.unsplash.com/photo-1622015663084-307d19eabbbf?q=80&w=1942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", },
    { value: "IMG-03", url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", },
];

const generateRandomKey = () => Math.random().toString(36).substring(2) + "rend";

export const Landscape = () => {
    const progressRef = useRef<HTMLDivElement>(null);
    const [imagesList, setImagesList] = useState(INITIAL_IMAGES);
    const [progress, setProgress] = useState(0);
    const [progressDivWidth, setProgressDivWidth] = useState(0);

    const reorderImages = (direction: 'left' | 'right') => {
        const updatedImages = [...imagesList];
        const randomKey = generateRandomKey();
        if (direction === 'left') {
            const firstImage = updatedImages.shift();
            if (firstImage) updatedImages.push({ ...firstImage, value: randomKey });
            setProgress(prev => prev - 100 / INITIAL_IMAGES.length);
        } else if (direction === 'right') {
            const lastImage = updatedImages.pop();
            if (lastImage) updatedImages.unshift({ ...lastImage, value: randomKey });
            setProgress(prev => prev + 100 / INITIAL_IMAGES.length);
        }
        setImagesList(updatedImages);
    };

    useEffect(() => {
        if (progress === -100) setProgress(0);
        if (progress > 100) setProgress(100 - 100 / INITIAL_IMAGES.length);
    }, [progress]);

    useEffect(() => {
        const interval = setInterval(() => reorderImages('left'), 2500);
        if (progressRef.current) {
            setProgressDivWidth(progressRef.current.scrollWidth);
        }
        return () => clearInterval(interval);
    }, [imagesList]);

    return (
        <div id="Landscape" className="relative flex flex-col items-center py-24 md:py-32 2xl:py-40 h-fit">
            <span className="absolute top-0 left-0 h-full w-screen max-w-full z-[1] bg-gradient-to-t from-AccentBright via-transparent to-transparent"></span>
            <motion.div
            initial={{
                scale: 1.1
            }}
            whileInView={{
                scale: 1
            }}
            viewport={{ once: true}}
            transition={{
                duration: 2
            }}
                className="absolute top-0 left-0 h-full w-screen z-[0] brightness-75 object-cover pointer-events-none"
                animate={{
                    background: `url(${imagesList[1].url})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }} />

            <div className="flex flex-col items-center gap-16 z-10 w-full">
                <h1 className="text-4xl md:text-6xl font-medium text-AccentBright px-11">
                    Build your dream Landscape.</h1>
                <motion.div className="flex flex-row 3xl:gap-x-40 items-center justify-center w-full">
                    {imagesList.map(({ url, value }, idx) => (
                        <motion.div
                            layout
                            key={value}
                            initial={{ scale: 0.6 }}
                            animate={{ scale: idx === 1 ? 1 : 0.8 }}
                            exit={{ scale: 0.6 }}
                            className="flex items-center justify-center rounded-xl overflow-hidden shadow-md h-[165px] md:h-[400px] xl:h-[600px] min-w-fit object-cover aspect-video"
                            style={{
                                backgroundImage: `url(${url})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                            transition={SPRING_OPTIONS}>
                            <Button variant="primary" size="medium">
                                <PlaySvg />Play Video
                            </Button>
                        </motion.div>
                    ))}
                </motion.div>

                <div ref={progressRef} className="flex flex-row w-[90%] max-w-[800px] bg-[#00000025]">
                    <motion.div
                        className="h-[2px] w-1/3 bg-black"
                        style={{
                            x: -progress * (progressDivWidth / 100),
                            transition: '.5s',
                        }} />
                </div>
            </div>
        </div>
    );
};
