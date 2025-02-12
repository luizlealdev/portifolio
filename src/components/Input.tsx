import { FC } from "react";

interface InputProps {
    label: string;
    value?: string;
    type?: "text" | "number" | "email";
    name: string;
    placeholder?: string;
    onChange?: (e: any) => void;
}

const Input: FC<InputProps> = ({
    label,
    value,
    type = "text",
    name,
    placeholder,
    onChange,
}) => {
    return (
        <div>
            <label htmlFor={`input-${name}`}>{label}</label>
            <input
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
            />
        </div>
    );
};

export default Input;
