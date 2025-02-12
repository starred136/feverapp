import React from "react";
import { useNavigate } from "react-router-dom";

const RedirectComponent = ({ targetPath, children }) => {
  const navigate = useNavigate();

  return <div onClick={() => navigate(targetPath)}>{children}</div>;
};

export default RedirectComponent;
