import React from "react";
import { useEffect } from "react";
import { fetchUser } from "../redux/User/UserActions";
const UserContainer = () => {
  useEffect(() => {
    console.log(fetchUser());
  }, []);
  return <div>user</div>;
};

export default UserContainer;
