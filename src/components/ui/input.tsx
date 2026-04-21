import React from 'react';

interface FormFieldProps {
    id: string;
    name: string;
    label: string;
    type?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
    placeholder?: string;
    className?: string;
}

const FormField: React.FC<FormFieldProps> = ({
    id,
    name,
    label,
    type = 'text',
    value,
    onChange,
    required = false,
    placeholder,
    className = 'w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
}) => {
    return (
        <div>
            <label
                htmlFor={id}
                className="block text-sm font-medium text-gray-100 mb-1"
            >
                {label}
            </label>
            <input
                type={type}
                id={id}
                name={name}
                value={value}
                onChange={onChange}
                className={className}
                required={required}
                placeholder={placeholder}
            />
        </div>
    );
};

export default FormField;