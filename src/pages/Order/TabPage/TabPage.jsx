import FoodCard from "../../../components/FoodCard/FoodCard";

const TabPage = ({ item }) => {
  return (
    <div className="grid md:grid-cols-3 gap-4 ">
      {item.map((item) => (
        <FoodCard key={item._id} item={item} />
      ))}
    </div>
  );
};

export default TabPage;
