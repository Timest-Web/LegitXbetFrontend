import React, { ChangeEvent } from "react";


interface InputFieldProps {
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  disabled?:boolean
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  type,
  placeholder,
  value,
  onChange,
  disabled=false
}) => {
  return (
    <div className="flex flex-col space-y-2">
      <label htmlFor={label} className="font-bold pl-4">
        {label}
      </label>
      <input
        id={label}
        className="bg-[#ECEEF1] w-[19.0625rem] h-[2.8125rem] p-2 rounded"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
    </div>
  );
};

export default InputField