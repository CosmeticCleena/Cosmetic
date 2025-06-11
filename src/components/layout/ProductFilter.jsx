import closeIcon from "../../assets/icons/close.svg";
import Accordion from "../../components/common/Accordion";
import FILTER_DATA from "../../configs/Filters.json";

const ProductFilter = ({ filters, handleUpdateFilters }) => {
  const isFilterEmpty = Object.values(filters).every(
    (filter) => filter.length === 0
  );
  const getFilterTitle = (filterType) => {
    switch (filterType) {
      case "category":
        return "Danh mục";
      case "skinCondition":
        return "Tình trạng da";
      case "featured":
        return "Nổi bật";
      case "price":
        return "Giá";
      default:
        return filterType;
    }
  };
  return (
    <div className="hidden md:block col-span-3 bg-white h-fit">
      <div className="flex flex-col space-y-4 border-y border-gray-200 py-5 px-5">
        <p className="text-md font-magnificent">Đã lọc</p>
        {!isFilterEmpty && (
          <div className="space-y-4 font-lato">
            {Object.entries(filters)?.map(([filterType, value], index) => (
              <div className="flex flex-col space-y-2" key={index}>
                {value?.length > 0 && (
                  <>
                    <p className="font-lato pl-3">
                      {getFilterTitle(filterType)}
                    </p>
                  </>
                )}
                <div className="flex flex-wrap gap-3">
                  {value?.map((item, index) => (
                    <div
                      className="flex w-fit space-x-3 border px-3 py-2"
                      key={index}
                    >
                      <p>{item}</p>
                      <img
                        src={closeIcon}
                        alt="close"
                        onClick={() =>
                          handleUpdateFilters(filterType, item, "remove")
                        }
                        loading="lazy"
                        className="hover:bg-gray-200"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
        <p className="text-[#D1AE62] font-lato text-xl">Xóa tất cả</p>
      </div>
      {FILTER_DATA.map((item, index) => {
        const transformedTitle = item.title
          .split(" ")
          .map((word, idx) =>
            idx === 0
              ? word.charAt(0).toLowerCase() + word.slice(1)
              : word.charAt(0).toUpperCase() + word.slice(1)
          )
          .join("");
        return (
          <Accordion
            title={transformedTitle}
            key={index}
            displayTitle={getFilterTitle(transformedTitle)}
            data={item.items}
            handleUpdateFilters={handleUpdateFilters}
          />
        );
      })}
    </div>
  );
};

export default ProductFilter;
