/* eslint-disable react/prop-types */
const RegularDayTab = ({ setRegularDayTab, regularDayTab }) => {
  console.log(regularDayTab);
  return (
    <div className="flex gap-3 items-center mt-5">
      <button
        onClick={() => setRegularDayTab("Tuesday")}
        className={`${
          regularDayTab == "Tuesday" ? "bg-emerald-300 font-bold px-3" : ""
        }`}
      >
        Tuesday
      </button>
      <button
        onClick={() => setRegularDayTab("Wednesday")}
        className={`${
          regularDayTab == "Wednesday" ? "bg-emerald-300 font-bold px-3" : ""
        }`}
      >
        Wednesday
      </button>
      <button
        onClick={() => setRegularDayTab("Thursday")}
        className={`${
          regularDayTab == "Thursday" ? "bg-emerald-300 font-bold px-3" : ""
        }`}
      >
        Thursday
      </button>
      <button
        onClick={() => setRegularDayTab("Saturday")}
        className={`${
          regularDayTab == "Saturday" ? "bg-emerald-300 font-bold px-3" : ""
        }`}
      >
        Saturday
      </button>
      <button
        onClick={() => setRegularDayTab("Sunday")}
        className={`${
          regularDayTab == "Sunday" ? "bg-emerald-300 font-bold px-3" : ""
        }`}
      >
        Sunday
      </button>
    </div>
  );
};

export default RegularDayTab;
