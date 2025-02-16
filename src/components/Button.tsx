import React, {FC} from "react";

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
            className={`py-3 px-6 bg-primary-green-light hover:bg-primary-green-dark focus:bg-primary-green-dark text-white transition-all duration-150 ease-in-out rounded-full font-inter font-medium ${className}`}
        >
            {children}
        </button>
    );
};
export default Button;
