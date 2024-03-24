import { useState } from "react";
import { useEffect } from "react";

import RegularDayTab from "./Components/Regular/RegularDayTab";
import RegularBatchTable from "./Components/Regular/RegularBatchTable";
import SelectShiftBatch from "./Shared/SelectShiftBatch";
import EveningDayTab from "./Components/Evening/EveningDayTab";
import RegularTable from "./Components/Regular/RegularTable";
import EveningTable from "./Components/Evening/EveningTable";

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectBatch, setSelectBatch] = useState("");
  const [selectShift, setSelectShift] = useState("regular");
  const [regularDayTab, setRegularDayTab] = useState("Tuesday");
  const [eveningDayTab, setEveningDayTab] = useState("Thursday");
  /*  
  api : "https://routine-management-system-backend.onrender.com/api/v1/routine?day=Saturday&shift=Regular"
  */
  useEffect(() => {
    setLoading(true)
    console.log(selectShift, 'from inside useEffect from app.jsx');
    let url
    if (selectShift === 'regular') {
      url = regularDayTab == "Tuesday"
        ? "Tuesday.json"
        : regularDayTab == "Wednesday"
          ? "Wednesday-routine.json"
          : regularDayTab == "Thursday"
            ? "Thursday-routine.json"
            : regularDayTab == "Saturday"
              ? "Saturday-routine.json"
              : regularDayTab == "Sunday"
              && "Sunday-ragular.json"
    } else if (selectShift === 'evening') {
      // TODO : Need to update for friday
      url = eveningDayTab === 'Thursday' ? 'EveningThursday.json' : eveningDayTab === 'Saturday' ? 'EveningSaturday.json' : "EveningSaturday.json"
    }
    fetch(
      `${url}`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
        console.log(data);
      }).catch(e => {
        console.log(e);
      })
  }, [regularDayTab, eveningDayTab, selectShift]);

  console.log(selectShift, 'from app.js');

  if (loading) {
    return 'loading...'
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
      {!selectBatch && selectShift === "regular" && (
        <RegularTable data={data} loading={loading}></RegularTable>
      )}

      {/* Evening batch table */}
      {
        !selectBatch && selectShift === "evening" && <EveningTable data={data} loading={loading} />
      }

      {/* Individual table */}
      {selectBatch && selectShift === "regular" && (
        <RegularBatchTable selectBatch={selectBatch}></RegularBatchTable>
      )}


      {/* Regular day tab */}
      {selectShift == "regular" && !selectBatch && (
        <RegularDayTab
          setRegularDayTab={setRegularDayTab}
          regularDayTab={regularDayTab}
        ></RegularDayTab>
      )}
      {/* Evening day tab */}
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
