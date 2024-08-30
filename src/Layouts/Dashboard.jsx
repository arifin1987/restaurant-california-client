import { Link, Outlet } from "react-router-dom";
import { FaShoppingCart, FaHome } from "react-icons/fa";
import useCart from "../hooks/useCart";

const Dashboard = () => {
  const [cart] = useCart();
  const isAdmin = true;
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <Outlet />
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side bg-[#D1B067]">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu   min-h-full w-80 p-4">
          {/* Sidebar content here */}
          {isAdmin ? (
            <>
              <li>
                <Link to="/dashboard/home">
                  <FaHome />
                  Admin Home
                </Link>
              </li>
              <li>
                <Link>Add Items</Link>
              </li>
              <li>
                <Link>Manage Items</Link>
              </li>
              <li>
                <Link>Manage Bookings</Link>
              </li>
              <li>
                <Link to="/dashboard/allusers">All Users</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link>
                  <FaHome />
                  User Home
                </Link>
              </li>
              <li>
                <Link to="/dashboard/mycart">
                  <FaShoppingCart />
                  My Cart
                  <div className="badge badge-secondary">
                    {cart.length || 0}
                  </div>
                </Link>
              </li>
            </>
          )}
          {/* This portion will remain same for admin user as well as general users */}
          <div className="divider"></div>
          <li>
            <Link to="/">
              <FaHome />
              Home
            </Link>
          </li>
          <li>
            <Link to="/menu">Our Menu</Link>
          </li>
          <li>
            <Link to="/order/salad">Order Food</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
