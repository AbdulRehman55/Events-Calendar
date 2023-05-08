import React from "react";
import "./style.scss";

interface Iprops {
  options: { label: string; value: string }[];
  placeholder?: string;
}

const DropDown = ({ options, placeholder }: Iprops): JSX.Element => {
  return (
    <div className="drop-down-container">
      <div className="drop-down-box">
        <select id="region" name="region" className="form-dropdown">
          <option value="">{placeholder}</option>
          {options.map(({ label, value }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default DropDown;
