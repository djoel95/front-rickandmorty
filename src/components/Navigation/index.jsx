import React from "react";
import Nav from "../Nav/Nav";

const Navigation = ({ children }) => {
  const location = useLocation();
  return (
    <div>
      {location.pathname !== "/" && location.pathname !== "/register" && (
        <Nav onSearch={onSearch} onRandomCard={handleRandomCard} />
      )}
      {children}
    </div>
  );
};

export default Navigation;
