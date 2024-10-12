import { ComponentProps } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/app/component/Commons';
import LogoSvg from '@/svgs/logo.svg'

interface MainProps extends ComponentProps<'main'> {
    className?: string;
    children?: React.ReactNode;
}

export const Main = ({ className, children, ...props }: MainProps) => {

    return <main className={"flex flex-col h-screen w-screen overflow-x-hidden overflow-y-auto bg-AccentBright text-AccentDark " + className} {...props}>
        {children}
    </main>;
}

interface NavProps extends ComponentProps<'nav'> {
    className?: string;
    children?: React.ReactNode;
}

export const Nav = ({ className, ...props }: NavProps) => {

    const
        menuList = [
            { label: 'About', href: '/#about' },
            { label: 'Landscape', href: '/#landscape' },
            { label: 'Works', href: '/#works' },
            { label: 'Services', href: '/#services' }
        ], Menu = () =>
            <div className='flex flex-row items-center gap-6 ml-auto font-semibold'>
                {menuList.map(({ label, href }) => <Link
                    className='opacity-35 hover:opacity-95 duration-150 relative after:absolute after:-bottom-[2px] after:left-0 after:h-[2px] after:w-0 after:bg-AccentDark after:rounded-full hover:after:w-full after:transition-all'
                    key={label} href={href}>
                    {label}
                </Link>)}
            </div>;

    return <nav className={"flex flex-row items-center justify-between gap-16 w-full py-4 px-12 " + className} {...props}>
        <Image src={LogoSvg} alt={'Memar Logo'} />
        <Menu />
        <Button size='medium' variant='secondary'>Let’s Talk!</Button>
    </nav>
}
