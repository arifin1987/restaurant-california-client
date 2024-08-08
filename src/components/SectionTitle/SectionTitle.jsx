const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="text-center my-4">
      <p className="text-green-500 my-2">{subHeading}</p>
      <h1 className="text-4xl text-black uppercase border-y-2 py-4 w-1/3 mx-auto">
        {heading}
      </h1>
    </div>
  );
};

export default SectionTitle;
