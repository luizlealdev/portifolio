import React, { FC } from "react";

interface ButtonProps {
    children: React.ReactNode;
    isLoading?: boolean;
    className?: string;
    onClick?: (e: any) => void;
}

const Button: FC<ButtonProps> = ({
    children,
    isLoading,
    className,
    onClick,
}) => {
    return (
        <button
            className={`py-3 px-5 bg-primary-green rounded-full font-inter font-medium ${className}`}
        >
            {children}
        </button>
    );
};
export default Button;
