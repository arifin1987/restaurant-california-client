import { Link, Outlet } from "react-router-dom";
import { FaShoppingCart, FaHome } from "react-icons/fa";

const Dashboard = () => {
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
            </Link>
          </li>
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
