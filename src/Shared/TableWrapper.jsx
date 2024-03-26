/* eslint-disable react/prop-types */
const TableWrapper = ({ children, minWidth, borderStyle }) => {
  console.log(minWidth);
    return (
      <section
        className={`overflow-x-auto custom-table-class rounded-[6px] ${
          borderStyle ? borderStyle : "border border-black"
        }`}
      >
        <div className={` ${minWidth ? minWidth : "min-w-[1000px]"}`}>
          {children}
        </div>
      </section>
    );
  };
  
  export default TableWrapper;
  