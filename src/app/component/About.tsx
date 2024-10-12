export const About = () => {

    return <div className="flex flex-row gap-4 p-12">
        <h1 className="text-[40px] font-medium leading-[115%] w-full">
            Creating stunning, functional, and affordable designs, we bring your unique vision to life with excellence and creativity.</h1>
        <div className="flex flex-col justify-between gap-96 w-full">
            <p className="text-2xl font-medium text-[#00000065] *:text-AccentDark">
                From the initial <span>consultation to the final touches,</span> our dedicated team works closely with you to ensure <span>every detail aligns with your vision.</span> We don’t just design spaces; we create <span>personalized and practical experiences</span> that <span>perfectly reflect your style and needs.</span> Your <span>satisfaction</span> is our top priority, and we strive to make the design process as <span> engaging and inspiring</span> as the finished result.</p>
            <div className="flex flex-row gap-3">
                <div className="border-t border-AccentDark py-2">
                    <h5 className="text-lg font-medium">Expertise and Quality</h5>
                    <p className="text-base opacity-75 font-normal leading-snug">Our team of skilled professionals brings extensive experience to every project, delivering top-notch design and superior finishing quality.</p></div>
                <div className="border-t border-AccentDark py-2">
                    <h5 className="text-lg font-medium">Affordable and Results-Driven</h5>
                    <p className="text-base opacity-75 font-normal leading-snug">We strive to offer designs that are not only beautiful but also cost-effective, aligning with your budget without compromising on quality or style.</p></div>
            </div>
        </div>
    </div>
}