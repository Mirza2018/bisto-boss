import { FaBook, FaCalendar, FaHome, FaShoppingCart, FaUsers, FaUtensils, FaWallet } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";


const Dhasboard = () => {
    const { cart } = useCart()
    // Todo: Load data from the server use dynamin admin panel
    // const isAdmin = true;
    const [isAdmin]=useAdmin()

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side bg-[#D1A054]">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="nav-link menu p-4 w-80 min-h-full  text-base-content">
                    {/* Sidebar content here */}
                    {
                        isAdmin ? <>
                            <li><NavLink to='/dashboard/home'><FaHome /> Admin Home</NavLink></li>
                            <li><NavLink to='/dashboard/reservation'><FaUtensils /> Add items</NavLink></li>
                            <li><NavLink to='/dashboard/history'><FaWallet /> Manage Items</NavLink></li>
                            <li><NavLink to='/dashboard/bookings'><FaBook/> Manage Booking</NavLink></li>
                            <li><NavLink to='/dashboard/allusers'><FaUsers /> All Users</NavLink></li>
                           
                        </> : <>
                            <li><NavLink to='/dashboard/home'><FaHome /> User Home</NavLink></li>
                            <li><NavLink to='/dashboard/reservation'><FaCalendar /> Reservations</NavLink></li>
                            <li><NavLink to='/dashboard/history'><FaWallet /> Payment History</NavLink></li>
                            <li><NavLink to='/dashboard/mycart'><FaShoppingCart /> My Cart <span className="badge badge-secondary">+{cart?.length || 0}</span></NavLink></li>
                        </>
                    }

                    <div className="divider"></div>
                    <li><NavLink to='/'><FaHome /> Home</NavLink></li>
                    <li><NavLink to='/menu'> Menu</NavLink></li>
                    <li><NavLink to='/order/salad'>Order</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default Dhasboard;