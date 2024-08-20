import Cover from "../../Shared/Cover/Cover";
import orderImg from "../../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../hooks/useMenu";

import TabPage from "../TabPage/TabPage";
import { useParams } from "react-router-dom";
import { useState } from "react";

const Order = () => {
  const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const drinks = menu.filter((item) => item.category === "drinks");
  return (
    <div>
      <Cover img={orderImg} title="Order Food" />

      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza </Tab>
          <Tab>Soup </Tab>
          <Tab>Dessert </Tab>
          <Tab>Drinks </Tab>
        </TabList>

        <TabPanel>
          <TabPage item={salad} />
        </TabPanel>
        <TabPanel>
          <TabPage item={pizza} />
        </TabPanel>
        <TabPanel>
          <TabPage item={soup} />
        </TabPanel>
        <TabPanel>
          <TabPage item={dessert} />
        </TabPanel>
        <TabPanel>
          <TabPage item={drinks} />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
