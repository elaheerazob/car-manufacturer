import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../hooks/useAdmin';


const Dashboard = () =>  {
    const [user] = useAuthState(auth);
    const [admin] =useAdmin(user);
    return (
        <div className="drawer drawer-mobile mt-10 bg-gray-300">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <h2 className='text-2xl font-bold text-purple-500'>Welcome to your Dashboard</h2>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label for="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                   {!admin &&  <li><Link to="/dashboard">My Order</Link></li>}
                   <li><Link to="/dashboard/profile">Profile</Link></li>
                   { !admin && <li><Link to="/dashboard/addReview">Add Review</Link></li>}

                    {admin && (
                        <>
                        <li><Link to="/dashboard/allOrder">All Order</Link></li>
                        <li><Link to="/dashboard/addproduct">Add Product</Link></li>
                        <li><Link to="/dashboard/manageProduct">Manage Product</Link></li>
                        <li><Link to="/dashboard/admin">Admin</Link></li>
                        </>
                    )}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;