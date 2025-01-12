import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/features/authSlices";
import authService from "../../appwrite/auth";
function Logout() {
  const dispatch = useDispatch();
  const handelLogout = () => {
    authService.logout().then(() => {
      dispatch(logout());
    });
  };

  return (
    <button
      className="inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
      onClick={handelLogout}
    >
      Logout
    </button>
  );
}

export default Logout;
