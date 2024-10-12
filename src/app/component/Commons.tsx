import {  ComponentProps } from "react";

interface ButtonProps extends ComponentProps<'button'> {
    color?: string;
    size?: "small" | "medium" | "large";
    variant?: "primary" | "secondary";
    disabled?: boolean;
    loading?: boolean;
    onClick?: () => void;
    children?: React.ReactNode;
    className?: string;
}

export const Button = (
    { className, children, size, variant, disabled, loading, onClick, ...props }: ButtonProps
) => {
    return <button
        className={
            `flex flex-row items-center justify-center gap-3 rounded-full text-center transition-all duration-300 font-semibold hover:scale-105
        ${size === "small" && " px-3 py-2"} 
        ${size === "medium" && " px-4 py-3"} 
        ${size === "large" && " px-6 py-4"} 
        ${variant === "primary" && " bg-AccentBright text-AccentDark"} 
        ${variant === "secondary" && " bg-AccentDark text-AccentBright"} 
        ${disabled && " opacity-50 cursor-not-allowed"} 
        ${loading && " opacity-50 cursor-not-allowed"} 
        ${loading && " animate-pulse duration-750"}
         ` + className}
        onClick={onClick}
        {...props}>
        {children}
    </button>
}