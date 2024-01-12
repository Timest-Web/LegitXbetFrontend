import FilterComponent from "./FilterComponent";


const SearchFilter = () => {

  return (
    <div className="flex justify-evenly md:space-x-2">
      <input
        type="text"
        placeholder="Search"
        className=" bg-searchIcon bg-no-repeat bg-[center_left_1rem] border-[#292D32] border w-[12rem] md:w-[14.0625rem] h-[2.5625rem] rounded-[2.1875rem] pl-12 bg-[#ECEEF1]"
      />
      <FilterComponent/>
    </div>
  );
};

export default SearchFilter;
