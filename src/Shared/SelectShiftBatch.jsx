/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
const SelectShiftBatch = ({ setSelectBatch, setSelectShift, selectShift }) => {
  return (
    <div className="flex justify-between items-center">
      {/* Select shift */}
      <div>
        <label htmlFor="" className="font-bold">
          Select Shift:{" "}
        </label>
        <select
          className="border-2 my-[10px] px-5 py-3 cursor-pointer outline-none"
          onChange={(e) => setSelectShift(e.target.value)}
          value={selectShift}
        >
          <option value="Regular">Regular</option>
          <option value="Evening">Evening</option>
        </select>
      </div>

      {/* Added new batch*/}
      <button className="btn">Added new button</button>

      {/* Select batch */}
      <div>
      {/* <div>
        <label htmlFor="" className="font-bold">
          Select Batch:{" "}
        </label>
        <select
          className="border-2 my-[10px] px-5 py-3 cursor-pointer outline-none"
          onChange={(e) => setSelectBatch(e.target.value)}
          name=""
          id=""
        >
          <option value="">Selected Batch</option>

          <option value="16">16th</option>
          <option value="17">17th</option>
          <option value="18">18th</option>
          <option value="19">19th</option>
          <option value="20">20th</option>
          <option value="21">21th</option>
          <option value="22">22th</option>
          <option value="23">23th</option>
          <option value="24">24th</option>
          <option value="25">25th</option>
          <option value="26">26th</option>
          <option value="27">27th</option>
        </select>
      </div> */}
    </div>
  );
};

export default SelectShiftBatch;
