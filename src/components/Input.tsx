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
    maxLength = 50,
}) => {
    return (
        <div className="flex flex-col gap-1">
            <label
                htmlFor={`input-${name}`}
                className="block text-sm font-medium"
            >
                {label}
            </label>
            <input
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                maxLength={maxLength}
                required={required}
                name={name}
                id={`input-${name}`}
                className="bg-[#dbe2fb]/5 dark:bg-[#06284A]/5 border-2  border-[#dbe2fb]/55 dark:border-[#06284A]/80 text-font-primary block w-full rounded-lg p-3 focus:border-primary-blue outline-none"
            />
        </div>
    );
};

export default Input;
