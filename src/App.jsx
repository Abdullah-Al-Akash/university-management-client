import { useState } from "react";
import { useEffect } from "react";

import RegularDayTab from "./Components/Regular/RegularDayTab";
import RegularBatchTable from "./Components/Regular/RegularBatchTable";
import SelectShiftBatch from "./Shared/SelectShiftBatch";
import EveningDayTab from "./Components/Evening/EveningDayTab";
import RegularTable from "./Components/Regular/RegularTable";
import EveningTable from "./Components/Evening/EveningTable";
import EveningFridayTable from "./Components/Evening/EveningFridayTable";

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectBatch, setSelectBatch] = useState("");
  const [selectShift, setSelectShift] = useState("Regular");
  const [regularDayTab, setRegularDayTab] = useState("Saturday");
  const [eveningDayTab, setEveningDayTab] = useState("Thursday");
  /*  
  api : "https://routine-management-system-backend.onrender.com/api/v1/routine?day=Saturday&shift=Regular"
  */
  useEffect(() => {
    setLoading(true);
    console.log(selectShift, "from inside useEffect from app.jsx");
    // let url;
    // if (selectShift === "regular") {
    //   url =
    //     regularDayTab == "Tuesday"
    //       ? "Tuesday.json"
    //       : regularDayTab == "Wednesday"
    //       ? "Wednesday-routine.json"
    //       : regularDayTab == "Thursday"
    //       ? "Thursday-routine.json"
    //       : regularDayTab == "Saturday"
    //       ? "Saturday-routine.json"
    //       : regularDayTab == "Sunday" && "Sunday-ragular.json";
    // } else if (selectShift === "evening") {
    //   // TODO : Need to update for friday
    //   url =
    //     eveningDayTab === "Thursday"
    //       ? "EveningThursday.json"
    //       : eveningDayTab === "Saturday"
    //       ? "EveningSaturday.json"
    //       : eveningDayTab === "Friday"
    //       ? "EveningFriday.json"
    //       : "";
    // }
    fetch(
      `https://routine-management-system-backend.onrender.com/api/v1/routine?day=${regularDayTab}&shift=${selectShift}`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
        console.log(data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [regularDayTab, eveningDayTab, selectShift]);

  if (loading) {
    return <div className="h-screen bg-slate-200 flex items-center justify-center">
      <span className="animate-spin h-5 w-5 mr-3 border-2 border-l-red-500 border-r-green-500 border-t-white border-b-black  rounded-full "></span>
      <h2 className="font-bold text-xl">Loading <span className="text-green-500">.</span><span className="text-red-500">.</span><span className="text-black">.</span></h2>
    </div>;
  }

  return (
    <div className="container mx-auto">
      {/* To select shift and batch */}
      <SelectShiftBatch
        setSelectBatch={setSelectBatch}
        setSelectShift={setSelectShift}
        selectShift={selectShift}
        selectBatch={selectBatch}
      ></SelectShiftBatch>

      {/* Regular batch table */}
      {!selectBatch && selectShift === "Regular" && (
        <RegularTable data={data.data} loading={loading}></RegularTable>
      )}

      {/* Evening batch table  Friday*/}
      {!selectBatch &&
      selectShift === "Evening" &&
      eveningDayTab === "Friday" ? (
        <EveningFridayTable
          data={data.data}
          loading={loading}
        ></EveningFridayTable>
      ) : (
        !selectBatch &&
        selectShift === "Evening" &&
        eveningDayTab != "Friday" && (
          <EveningTable data={data.data} loading={loading} />
        )
      )}

      {/* Individual table */}
      {selectBatch && selectShift === "Regular" && (
        <RegularBatchTable selectBatch={selectBatch}></RegularBatchTable>
      )}

      {/* Regular day tab */}
      {selectShift == "Regular" && !selectBatch && (
        <RegularDayTab
          setRegularDayTab={setRegularDayTab}
          regularDayTab={regularDayTab}
        ></RegularDayTab>
      )}
      {/* Evening day tab */}
      {selectShift == "Evening" && !selectBatch && (
        <EveningDayTab
          setEveningDayTab={setEveningDayTab}
          eveningDayTab={eveningDayTab}
        ></EveningDayTab>
      )}
    </div>
  );
};

export default App;
