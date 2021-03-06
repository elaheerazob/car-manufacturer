import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddReview = () => {
    const {
      register,
      formState: { errors },
      handleSubmit,
      reset,
    } = useForm();
    const imageStorageKey = "ff4a3bca6feff6db86f309b98922d201";
  
    const onSubmit = async (data) => {
      const image = data.image[0];
      const formData = new FormData();
      formData.append("image", image);
      const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
      fetch(url, {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((result) => {
            if (result.success) {
                const img = result.data.url;
                const product = {
                  name: data.name,
                  email: data.email,
                  description:data.description,
                  price:data.price,
                  order_quantity:data.order_quantity,
                  available_quantity:data.available_quantity,
                  img: img,
                };
            //send to your database:
            fetch("https://whispering-savannah-41163.herokuapp.com/uploadReview", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(product),
            })
              .then((res) => res.json())
              .then((inserted) => {
                if (inserted.insertedId) {
                  toast.success("Product added successfully");
                  reset();
                } else {
                  toast.error("Failed to add the Product");
                }
              });
          }
        });
    };
    return (
      <div className="mt-10   ">
        <div>
        <h1 className="text-2xl  text-secondary font-bold ">Review Add</h1>
        </div>
        <div>
        <form className="mb-10 " onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className="input input-bordered w-full max-w-xs"
              {...register("name", {
                required: {
                  value: true,
                  message: "Name is Required",
                },
              })}
            />
            <label className="label">
              {errors.name?.type === "required" && (
                <span className="label-text-alt text-red-600">
                  {errors.name.message}
                </span>
              )}
            </label>
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <input
              type="text"
              placeholder="Your Description"
              className="input input-bordered w-full max-w-xs"
              {...register("description", {
                required: {
                  value: true,
                  message: "Name is Required",
                },
              })}
            />
            <label className="label">
              {errors.description?.type === "required" && (
                <span className="label-text-alt text-red-600">
                  {errors.description.message}
                </span>
              )}
            </label>
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Image</span>
            </label>
            <input
              type="file"
              className="input input-bordered w-full max-w-xs"
              {...register("image", {
                required: {
                  value: true,
                  message: "Image is Required",
                },
              })}
            />
            <label className="label">
              {errors.name?.type === "required" && (
                <span className="label-text-alt text-red-600">
                  {errors.name.message}
                </span>
              )}
            </label>
          </div>
  
          <input
            className="btn w-full max-w-xs text-white btn-accent"
            type="submit"
            value="Add"
          />
        </form>
        </div>
      </div>
    );
  };

export default AddReview;