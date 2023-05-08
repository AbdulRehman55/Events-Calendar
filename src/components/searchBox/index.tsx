import React from "react";
import "./style.scss";

interface Iprops {
  placeholder: string;
  type?: string;
  onChange?: (e: any) => void;
}

const SearchBox = ({ type, placeholder }: Iprops): JSX.Element => {
  return (
    <div className="search-box">
      <span className="icon"></span>
      <input type={type} placeholder={placeholder}></input>
    </div>
  );
};

export default SearchBox;
