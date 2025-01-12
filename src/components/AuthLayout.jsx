/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const AuthLayout = ({ children, auth = true }) => {
  const authStatus = useSelector((state) => state.auth.authStatus);

  const navigate = useNavigate();

  const [loader, setLoader] = useState(true);

  useEffect(() => {
    if (auth && authStatus !== auth) {
      navigate("/login");
    } else if (!auth && authStatus !== auth) {
      navigate("/");
    }

    setLoader(false);
  }, [authStatus, auth, navigate]);

  return loader ? null : <>{children}</>;
};

export default AuthLayout;
