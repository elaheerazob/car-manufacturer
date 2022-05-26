import React from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

const MyProfile = () => {
  const { id } = useParams();

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    fetch(`http://localhost:5000/userprofile`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div>
      <form className="w-1/4 mx-auto" onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="user name"
          className="input input-bordered mb-2 w-full"
          {...register("name")}
        />
        <br />
        <input
          placeholder="address"
          className="input input-bordered mb-2 w-full"
          {...register("address")}
        />
        <br />
        <input
          placeholder="facebook link"
          className="input input-bordered mb-2 w-full"
          type="text"
          {...register("facebook")}
        />
        <br />
        <input
          placeholder="linkdin link"
          className="input input-bordered mb-2 w-full"
          type="text"
          {...register("linkdin")}
        />
        <br />
        <input
          placeholder="age"
          className="input input-bordered mb-2 w-full"
          type="number"
          {...register("age")}
        />
        <br />
        <input className="btn btn-md px-10 mt-3" type="submit" />
      </form>
    </div>
  );
};

export default MyProfile;
