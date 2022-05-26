import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const Modal = ({name,price,available_quantity}) => {
    const [user, loading] = useAuthState(auth);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    fetch("https://whispering-savannah-41163.herokuapp.com//uploadOrder", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
    .then(res=>res.json())
    .then(data=>{
        toast('success')
    })
    
    reset();
  };

  if (loading) {
    return <Loading />;
  }

    return (
        <div>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            for="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <div className="bg-gray-500">
            <h3 className="text-lg font-bold text-green-500">
              Congratulations ...!
            </h3>
            <div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  value={user?.displayName}
                  className="mb-3 input input-bordered w-full text-center"
                  {...register("name")}
                />
                <br />
                <input
                  value={user?.email}
                  className="mb-3 input input-bordered w-full text-center"
                  {...register("email")}
                />
                <br />
                <input
                  value={name}
                  placeholder="re type product name"
                  className="mb-3 input input-bordered w-full text-center"
                  {...register("productName")}
                />
                <br />
                <input
                  placeholder="Addresss"
                  className="mb-3 input input-bordered w-full text-center"
                  type="text"
                  {...register("address")}
                />
                <br />
                <input
                  placeholder="phone"
                  className="mb-3 input input-bordered w-full text-center"
                  type="number"
                  {...register("phone")}
                />
                <br />
                <input
                  placeholder="price"
                  className="mb-3 input input-bordered w-full text-center"
                  type="number"
                  {...register("total")}
                />
                <br />
                <input
                  placeholder="product quantity"
                  className="mb-3 input input-bordered w-full text-center"
                  type="number"
                  {...register("price", { min: 500, max: available_quantity })}
                />
                <br />
                {errors.price && (
                  <p className="text-red-800 font-bold">
                    minimum order 500 and max order {available_quantity}
                  </p>
                )}
                <br />
                <input
                  className="mb-3 btn btn-primary btn-outline px-36"
                  type="submit"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Modal;