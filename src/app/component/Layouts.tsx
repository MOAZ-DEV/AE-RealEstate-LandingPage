import { ComponentProps } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/app/component/Commons';
import LogoSvg from '@/svgs/logo.svg'
import ArrowTopSvg from '@/svgs/Arrow--top.svg'
import ArrowUpRightSvg from '@/svgs/Arrow--up-right.svg'
import FBSvg from '@/svgs/Logo--facebook.svg'
import INSvg from '@/svgs/Logo--instagram.svg'
import XSvg from '@/svgs/Logo--x.svg'

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
            { label: 'About', href: '/#About' },
            { label: 'Landscape', href: '/#Landscape' },
            { label: 'Archive', href: '/#Archive' },
            { label: 'Services', href: '/#Services' }
        ], Menu = () =>
            <div className='hidden md:flex flex-row items-center gap-6 ml-auto font-semibold'>
                {menuList.map(({ label, href }) => <Link
                    className='opacity-35 hover:opacity-95 duration-150 relative after:absolute after:-bottom-[2px] after:left-0 after:h-[2px] after:w-0 after:bg-AccentDark after:rounded-full hover:after:w-full after:transition-all'
                    key={label} href={href}>
                    {label}
                </Link>)}
            </div>;

    return <nav className={"flex flex-row items-center justify-between gap-16 w-full py-4 px-6 md:px-12 " + className} {...props}>
        <Image src={LogoSvg} alt={'Memar Logo'} />
        <Menu />
        <Button size='medium' variant='secondary'>Let’s Talk!</Button>
    </nav>
}

interface FooterProps extends ComponentProps<'footer'> {
    className?: string;
    children?: React.ReactNode;
}

export const Footer = ({ className, ...props }: FooterProps) => {

    return <footer className={"flex flex-col items-center justify-between w-full py-4 px-6 md:px-12 text-center bg-AccentDark text-AccentBright " + className} {...props}>
        <div className='flex flex-col xl:flex-row items-start justify-between max-xl:gap-16 py-12 xl:py-20 w-full'>
            <div className='flex flex-col gap-12 items-start'>
                <h1 className='text-3xl sm:text-4xl md:text-5xl font-medium *:opacity-45 max-w-[775px] text-left'>
                    <span>We are</span> ready to collaborate. Drop us a Line, <span>or simply have a chat.</span></h1>
                <Button size='medium' variant='primary'>
                    Get Started
                    <Image src={ArrowUpRightSvg} alt={'Get Started.'} /></Button>
                <div className='flex flex-col gap-3'>
                    <p className='text-base font-semibold'>Stay Connected</p>
                    <ul className='flex flex-row gap-5'>
                        <li>
                            <Image src={FBSvg} alt='Follow Facebook Page.' /></li>
                        <li>
                            <Image src={INSvg} alt='Follow Instagram Page.' /></li>
                        <li>
                            <Image src={XSvg} alt='Follow X Page' /></li>
                    </ul>
                </div>
            </div>
            <div className='flex flex-col items-start gap-12'>
                <div className='flex flex-col gap-1 items-start'>
                    <p className='text-base font-semibold'>Address</p>
                    <Link href='/' className='opacity-45 underline text-xl font-semibold'>
                        Fifth District, New Cairo, Egypt</Link>
                </div>
                <div className='flex flex-col sm:flex-row gap-12'>
                    <div className='flex flex-col gap-1 items-start'>
                        <p className='text-base font-semibold'>Email</p>
                        <Link href='/' className='opacity-45 underline text-xl font-semibold'>
                            info@arab-estate.com</Link>
                    </div>
                    <div className='flex flex-col gap-1 items-start'>
                        <p className='text-base font-semibold'>Landline</p>
                        <Link href='/' className='opacity-45 underline text-xl font-semibold'>
                            +2 000-0000-0000</Link>
                    </div>
                </div>
                <div className='flex flex-col gap-1 items-start'>
                    <p className='text-base font-semibold'>Text/Call</p>
                    <Link href='/' className='opacity-45 underline text-xl font-semibold'>
                        +20 000-0000-000</Link>
                </div>
            </div>
        </div>
        <div className='flex flex-row items-center justify-between gap-4 w-full'>
            <p className='opacity-45 text-sm font-semibold text-left'>
                Nuvelti Design Studio © 2019 - 2024. Design By MA-Designs.</p>
            <Link href={'/#Hero'}>
            <Button className='border border-white rounded-full bg-AccentDark p-4 aspect-square hover:scale-110 hover:invert transition-all'>
                <Image src={ArrowTopSvg} alt='Go Top.' />
            </Button>
            </Link>
        </div>
    </footer>;
}