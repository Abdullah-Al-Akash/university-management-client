import { useState } from "react";
import { useEffect } from "react";

import RegularDayTab from "./Components/Regular/RegularDayTab";
import RegularBatchTable from "./Components/Regular/RegularBatchTable";
import SelectShiftBatch from "./Shared/SelectShiftBatch";
import EveningDayTab from "./Components/Evening/EveningDayTab";
import RegularTable from "./Components/Regular/RegularTable";

const App = () => {
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectBatch, setSelectBatch] = useState("");
  const [selectShift, setSelectShift] = useState("regular");
  const [regularDayTab, setRegularDayTab] = useState("Tuesday");
  const [eveningDayTab, setEveningDayTab] = useState("Thursday");
  /*  
  api : "https://routine-management-system-backend.onrender.com/api/v1/routine?day=Saturday&shift=Regular"
  */
  useEffect(() => {
    fetch(
      `${regularDayTab == "Tuesday"
        ? "Tuesday.json"
        : regularDayTab == "Wednesday"
          ? "Wednesday-routine.json"
          : regularDayTab == "Thursday"
            ? "Thursday-routine.json"
            : regularDayTab == "Saturday"
              ? "Saturday-routine.json"
              : regularDayTab == "Sunday"
                ? "Sunday-ragular.json"
                : ""
      }`
    )
      .then((res) => res.json())
      .then((data) => {
        setDatas(data);
        setLoading(false);
        console.log(data);
      });
  }, [regularDayTab]);



  return (
    <div className="container mx-auto">

      {/* To select shift and batch */}
      <SelectShiftBatch
        setSelectBatch={setSelectBatch}
        setSelectShift={setSelectShift}
        selectBatch={selectBatch}
      ></SelectShiftBatch>

      {/* Regular batch table */}
      {!selectBatch && selectShift === "regular" && (
        <RegularTable data={datas} loading={loading}></RegularTable>
      )}

      {/* Evening batch table */}
      {
        !selectBatch && selectShift === "evening" && `${eveningDayTab} Evening`
      }
      
      {selectBatch && selectShift === "regular" && (
        <RegularBatchTable selectBatch={selectBatch}></RegularBatchTable>
      )}
      {selectShift == "regular" && !selectBatch && (
        <RegularDayTab
          setRegularDayTab={setRegularDayTab}
          regularDayTab={regularDayTab}
        ></RegularDayTab>
      )}
      {selectShift == "evening" && !selectBatch && (
        <EveningDayTab
        setEveningDayTab={setEveningDayTab}
        eveningDayTab={eveningDayTab}
        ></EveningDayTab>
      )}
    </div>
  );
};

export default App;
