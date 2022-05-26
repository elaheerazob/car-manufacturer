import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UserAdmin from './UserAdmin';

const Admin = () => {
    const {
      data: users,
      isLoading,
      refetch,
    } = useQuery("users", () =>
      fetch(`https://whispering-savannah-41163.herokuapp.com//user`, {
        method: "GET",
      }).then((res) => res.json())
    );
    if (isLoading) {
      return <Loading></Loading>;
    }
    return (
      <div>
        <h2 className="text-2xl">All Users:{users.length}</h2>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Make Admin</th>
                <th>Remove Admin</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <UserAdmin
                  key={user._id}
                  user={user}
                  refetch={refetch}
                ></UserAdmin>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

export default Admin;