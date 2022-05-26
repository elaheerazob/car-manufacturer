import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const Profile = () => {
  const [user] = useAuthState(auth);
  const [users, setUsers] = useState();

  useEffect(() => {
    fetch(`http://localhost:5000/user/${user.email}`)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [user?.email]);
  console.log(user.email);

  const navigate = useNavigate();

  const editPage = (id) => {
    navigate(`/myprofile/${id}`)

  };
  console.log(users);
  return (
    <div>
      <div>
        <h1>User id:{users?._id}</h1>
        <h1>user email: {users?.email}</h1>
        <h1>user role: {users?.role}</h1>
        <h1>user name: {users?.address}</h1>
        <h1>user address: {users?.name}</h1>
        <h1>user linkdin: {users?.linkdin}</h1>
        <h1>user pacebook: {users?.facebook}</h1>
        <h1>user age: {users?.age}</h1>
        <div>
          <button onClick={() => editPage (users?._id)} className="btn btn-success px-10">Edit</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
