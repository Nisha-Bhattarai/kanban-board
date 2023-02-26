import React from "react";
import "./Header.css";

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  return (
    <div className="header">
      <div className="wrapper">
        <h1 className="header-title">{title}</h1>
      </div>
    </div>
  );
};

export default React.memo(Header);
