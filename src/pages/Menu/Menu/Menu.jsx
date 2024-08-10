import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Restaurant California | Our Menu</title>
      </Helmet>
      <Cover img={menuImg} title={"Our Menu"} />
    </div>
  );
};

export default Menu;
