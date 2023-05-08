import React from "react";
import "./style.scss";

interface Iprops {
  className: string;
  placeholder: string;
  readOnly?: boolean;
  type?: string;
  inputType: "textArea" | "input";
  mb?: boolean;
  onChange?: (e: any) => void;
}

const Input = ({
  className,
  onChange,
  placeholder,
  readOnly,
  inputType,
  type,
  mb = true,
}: Iprops): JSX.Element => {
  return (
    <div className="input-wrapper">
      {inputType === "input" && (
        <div className={`${mb && "margin-bottom"}`}>
          <input
            placeholder={placeholder}
            onChange={onChange}
            className={`${className} ${readOnly && "read-only"}`}
            readOnly
            type={type}
          />
        </div>
      )}

      {inputType === "textArea" && (
        <div className="input-box">
          <textarea
            placeholder={placeholder}
            onChange={onChange}
            className={className}
          />
        </div>
      )}
    </div>
  );
};

export default Input;
