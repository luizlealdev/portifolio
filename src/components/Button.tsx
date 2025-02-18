import { LoaderCircle } from "lucide-react";
import React, { FC } from "react";

interface ButtonProps {
    type?: "button" | "submit";
    children: React.ReactNode;
    isLoading?: boolean;
    className?: string;
    //onClick?: (e: any) => void;
}

const Button: FC<ButtonProps> = ({
    children,
    type = "button",
    isLoading,
    className,
    //onClick,
}) => {
    return (
        <button
            type={type}
            disabled={isLoading}
            className={`py-3 px-6 bg-primary-green-light hover:bg-primary-green-dark focus:bg-primary-green-dark text-white transition-all duration-150 ease-in-out rounded-full font-inter font-medium flex justify-center ${className} ${
                isLoading ? "opacity-80 cursor-wait" : ""
            }`}
        >
            {isLoading ? (
                <LoaderCircle className="w-7 animate-spin duration-200 text-center" />
            ) : (
                children
            )}
        </button>
    );
};
export default Button;
