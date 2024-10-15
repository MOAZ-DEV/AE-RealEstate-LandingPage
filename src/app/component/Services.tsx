"use client"

import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const INITIAL_DATA = [
    { id: '01', name: 'Creative Interior Design', description: 'We blend creativity and art to craft stylish spaces with 3D renderings and detailed technical drawings for a smooth finish.' },
    { id: '02', name: 'Precise Finishing', description: 'Our services ensure your design is executed flawlessly, making your space both beautiful and functional.' },
    { id: '03', name: 'Effective Architectural Solutions', description: 'We tackle complex challenges with practical designs, optimizing space and functionality.' },
    { id: '04', name: 'Beautiful Landscape Design', description: 'We create functional and appealing outdoor spaces by balancing colors and textures to enhance natural beauty.' },
]

export const Services = () => {

    const ref = useRef(null);
    const { scrollXProgress } = useScroll({ container: ref, axis: 'x' });
    const scaleX = useSpring(scrollXProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
      });
    const [Services] = useState(INITIAL_DATA);

    useEffect(() => { console.log(scaleX) }, [scaleX]);

    return <div id="Services" className="flex flex-col gap-20 items-center justify-center py-40 bg-AccentOrganicGray">
        <h1 className="text-6xl font-medium text-AccentBright text-center max-w-[945px]">
            We offer a comprehensive range of services to meet all your design and construction needs.</h1>
        <div ref={ref} className="flex flex-row items-start justify-start p-20 w-full overflow-y-auto max-w-full no-scrollbar">
            <div className="flex flex-row items-start justify-start gap-28 mx-40 w-fit">
                {Services.map(({ id, name, description }, idx) =>
                    <div key={idx} className="flex flex-col items-start justify-start gap-4 min-w-[475px]">
                        <h3 className="opacity-45 text-AccentBright text-5xl font-medium">{id}</h3>
                        <h4 className="text-AccentBright text-3xl font-semibold">{name}</h4>
                        <p className="opacity-45 text-AccentBright text-xl font-medium leading-[125%]">{description}</p>
                    </div>)}
            </div>
        </div>
        <div className="flex flex-row items-start w-[400px] max-w-[800px] bg-[#00000025]">
            <motion.div
                className="h-[2px] w-full bg-white left-0"
                style={{
                    scaleX: scaleX
                }} />
        </div>
    </div>
}