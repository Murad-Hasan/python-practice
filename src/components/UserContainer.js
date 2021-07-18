import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../redux/User/UserActions";

const UserContainer = () => {
  const dispatch = useDispatch()
  const userData = useSelector(state=>state.user.users)
  console.log(userData)
  useEffect(() => {
    dispatch(fetchUser())
  }, [dispatch]);
  return (
    <div className="user">
      <h2>User</h2>
      {
        userData.map(user=>
          <div key={user.id}>
            <h3>{user.name}</h3>
            </div>
            )
      }
    </div>
  )
};

export default UserContainer;
