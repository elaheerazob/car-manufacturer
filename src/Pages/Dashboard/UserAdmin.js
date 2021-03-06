import React from 'react';
import { toast } from 'react-toastify';

const UserAdmin = ({ user, refetch ,index }) => {
    const { email, role } = user;
    const makeAdmin = () => {
      fetch(`https://whispering-savannah-41163.herokuapp.com/user/admin/${email}`, {
        method: "PUT",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data?.modifiedCount) {
            refetch();
            toast.success("successfully made an admin");
          }
        });
    };
    return (
      <tr>
        <th>{index + 1}</th>
        <td>{email}</td>
        <td>
          {role !== "admin" && (
            <button onClick={makeAdmin} className="btn btn-xs">
              Make Admin
            </button>
          )}
        </td>
        <td>
          <button className="btn btn-xs btn-accent">Remove User</button>
        </td>
      </tr>
    );
  };

export default UserAdmin;