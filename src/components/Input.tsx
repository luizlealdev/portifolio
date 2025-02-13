import { FC } from "react";

interface InputProps {
    label: string;
    value?: string;
    type?: "text" | "number" | "email";
    required?: boolean;
    name: string;
    placeholder?: string;
    onChange?: (e: any) => void;
    maxLength?: number;
}

const Input: FC<InputProps> = ({
    label,
    value,
    type = "text",
    required = true,
    name,
    placeholder,
    onChange,
    maxLength = 50
}) => {
    return (
        <div className="flex flex-col gap-1">
            <label htmlFor={`input-${name}`} className="block text-sm font-medium">{label}</label>
            <input
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                maxLength={maxLength}
                required={required}
                name={`input-${name}`}
                id={`input-${name}`}
                className="bg-[#06284A]/10 text-white border-2 border-[#06284A]/60 block w-full rounded-lg p-3 focus:border-primary-blue outline-none"
            />
        </div>
    );
};

export default Input;
