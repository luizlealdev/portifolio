import {FC} from "react";

interface TextAreaProps {
    label: string;
    value?: string;
    name: string;
    required?: boolean;
    placeholder?: string;
    onChange?: (e: any) => void;
    maxLength?: number;
}

const TextArea: FC<TextAreaProps> = ({
                                         label,
                                         value,
                                         name,
                                         required = true,
                                         placeholder,
                                         onChange,
                                         maxLength = 50
                                     }) => {
    return (
        <div className="flex flex-col gap-1">
            <label htmlFor={`textarea-${name}`} className="block text-sm font-medium">{label}</label>
            <textarea
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                maxLength={maxLength}
                required={required}
                name={`textarea-${name}`}
                id={`textarea-${name}`}
                className="bg-[#06284A]/10 text-white border-2 border-[#06284A]/60 block w-full rounded-lg p-3 focus:border-primary-blue outline-none h-52 max-h-52"
            />
        </div>
    );
};

export default TextArea;
