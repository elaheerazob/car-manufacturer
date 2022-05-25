import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';

const AllOrder = () => {
    const url = `http://localhost:5000/orders/`;
    const {
      data: order,
      isLoading,
      refetch,
    } = useQuery(["order"], () =>
      fetch(url, {
        method: "GET",
      }).then((res) => res.json())
    );
  
    const handleDelete = (id) => {
      const proceed = window.confirm("Are You Sure Order Delete?");
      if (proceed) {
        const url = `http://localhost:5000/order/${id}`;
        // console.log(url);
        fetch(url, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              toast("Order Delete");
            }
          });
      }
    };
    if (isLoading) {
      return <Loading></Loading>;
    }
    return (
      <div>
        <h1 className="text-center text-secondary uppercase mt-5 mb-5 text-2xl">
          All Order:{order.length}
        </h1>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Product Name</th>
                <th>Address</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {order.map((a, index) => (
                <tr key={a._id}>
                  <th>{index + 1}</th>
                  <td>{a.name}</td>
                  <td>{a.productName}</td>
                  <td>{a.address}</td>
                  <td>{a.phone}</td>
                  <td>{a.price}</td>
                  <button disabled={a.paid}
                    onClick={() => handleDelete(a._id)}
                    className="btn btn-accent"
                  >
                    Delete
                  </button>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

export default AllOrder;