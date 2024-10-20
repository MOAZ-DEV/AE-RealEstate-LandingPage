'use client'

import ArrowDownLeft from "@/svgs/Arrow--down-left.svg";
import Image from "next/image";
import { useState } from "react";
import { Button } from "./Commons";

const INITIAL_DATA = [
    { name: '01. Cozy Family Home Renovation', description: `For this project, we revitalized an outdated family home, blending classic and modern elements. The renovation included a complete redesign of the living and dining areas, custom-built storage solutions, and a new kitchen layout optimized for both cooking and entertaining. We brought warmth and comfort to the space with carefully selected decor and finishes.` },
    { name: '02. Luxurious Office Space', description: `We transformed a traditional office into a contemporary workspace that promotes creativity and productivity. This project involved custom woodwork, ergonomic furniture, and strategic lighting to enhance the overall ambiance. The result is a vibrant and inspiring environment that caters to both individual focus and collaborative work.` },
    { name: '03. Modern Minimalist Apartment', description: `A sleek and sophisticated apartment designed with a minimalist aesthetic. This project features clean lines, open spaces, and a neutral color palette, accented with custom furniture and European-standard finishes. From concept to completion, we ensured every detail aligned with the client's vision of a serene and functional living space.` },
    { name: '04. Boutique Café Interior Design', description: `This project involved designing a cozy and inviting café that balances style with functionality. We used a mix of natural materials, vibrant colors, and custom furniture to create a space that feels both unique and welcoming. The design not only reflects the brand’s personality but also enhances the customer experience, making it a popular spot for locals.` },
    { name: '05. Elegant Event Venue Transformation', description: `We transformed a bare venue into an elegant event space that caters to various occasions. From weddings to corporate events, this project involved custom decor, flexible seating arrangements, and dynamic lighting solutions. The result is a versatile and visually stunning venue that can be tailored to any event's needs.` },
];

export const Archive = () => {
    const [works] = useState(INITIAL_DATA);

    return <div className="flex flex-col gap-20 items-center justify-center py-24 md:py-32 2xl:py-40">
        <div className="flex flex-col items-center w-screen px-6 md:px-20">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-medium text-AccentDark text-center max-w-[900px] ">
                Discover our standout projects that highlight our excellence and innovative design.</h1>
        </div>
        <div className="flex flex-col items-center w-screen px-6">
            {works.map(({ name, description }, idx) => (
                <div key={idx} className={
                    `group flex flex-row items-center gap-16 w-full py-4 border-y border-AccentDark my-[-.5px] *:z-10 px-4 hover:px-4 transition-all relative ` +
                    `after:absolute after:top-0 after:even:left-0 after:right-0 after:h-full after:w-0 hover:after:w-full after:bg-AccentDark after:z-[0] after:transition-all after:duration-400`
                }>
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-accentDark w-full group-hover:text-AccentBright transition-all">{name}</h2>
                    <div className="flex items-center justify-center bg-AccentBright rounded group-hover:border border-AccentDark hover:*:!rotate-[-135deg] *:transition-all group-hover:invert cursor-pointer h-9 aspect-square transition-all">
                        <Image src={ArrowDownLeft} alt={`Visit: ${name}`} className="group-hover:rotate-180 transition-all" />
                    </div>
                    <p className="max-md:hidden text-xl font-medium text-gray-600 w-full max-w-[675px] line-clamp-1 leading-[220%] group-hover:invert transition-all">{description}</p>
                </div>
            ))}
        </div>
        <Button variant="secondary" size="medium">
            Explore More
            <Image src={ArrowDownLeft} alt={"Explore More"} className="invert -rotate-180" />
        </Button>
    </div>
}