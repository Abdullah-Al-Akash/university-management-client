import TableWrapper from "../../Shared/TableWrapper";
import TeacherAssign from "../Modal/TeacherAssign";

const EveningFridayTable = ({ data, loading }) => {
  console.log(data, "Friday");
  return (
    <TableWrapper>
      <table
        border={1}
        className="table-auto font-bold text-center border-2 border-[#000] table-ui w-full text-white"
        cellPadding="0"
        cellSpacing={0}
        //   style={{
        //     position: "relative", // Ensure table remains on top of watermark
        //     zIndex: 1, // Set higher z-index to keep table above watermark
        //   }}
      >
        <thead>
          <tr>
            <td
              className="text-[14px] border-[#000] border-2 border-b-[1px] border-r-[1px] text-black p-[16px] text-center whitespace-nowrap"
              rowSpan={2}
              colSpan={3}
            >
              Batch
            </td>
            <td
              className="text-[14px] border-[#000]  border-2 border-b-[1px] border-r-[1px] text-[#000] p-[16px] text-center"
              rowSpan={2}
              colSpan={3}
            >
              Year/ Sem
            </td>
            <td
              className="text-[14px] border-[#000]  border-2 border-b-[1px] border-r-[1px] text-[#000] p-[16px] text-center"
              rowSpan={2}
              colSpan={2}
            >
              Sem No
            </td>
            <td
              className="text-[14px]  border-[#000] border-2 border-b-[1px] border-r-[1px] text-[#000] p-[16px] text-center"
              rowSpan={2}
              colSpan={2}
            >
              Room Number
            </td>
            <td
              className="text-[14px] border-[#000] border-2 border-b-[1px] border-r-[1px] text-[#000] p-[16px] text-center whitespace-nowrap"
              rowSpan={2}
              colSpan={3}
            >
              09:00-09:50
            </td>
            <td
              className="text-[14px] border-[#000] border-2 border-b-[1px] border-r-[1px] text-[#000] p-[16px] text-center whitespace-nowrap"
              rowSpan={2}
              colSpan={3}
            >
              9:50 - 10:40
            </td>
            <td
              className="text-[14px] border-[#000] border-2 border-b-[1px] border-r-[1px] text-[#000] p-[16px] text-center whitespace-nowrap"
              rowSpan={2}
              colSpan={3}
            >
              10:50 - 11:40
            </td>
            <td
              className="text-[14px] border-[#000] border-2 border-b-[1px] border-r-[1px] text-[#000] p-[16px] text-center whitespace-nowrap"
              rowSpan={2}
              colSpan={3}
            >
              11:40 - 12:30
            </td>

            <td className="text-[14px] border-[#000] border-2 border-b-[1px] border-r-[1px] text-[#000] p-[16px] text-center whitespace-nowrap"></td>
            {/* After Break */}
            <td
              className="text-[14px] border-[#000] border-2 border-b-[1px] border-r-[1px] text-[#000] p-[16px] text-center whitespace-nowrap"
              rowSpan={2}
              colSpan={3}
            >
              2:10 - 3:00
            </td>
            <td
              className="text-[14px] border-[#000] border-2 border-b-[1px] border-r-[1px] text-[#000] p-[16px] text-center whitespace-nowrap"
              rowSpan={2}
              colSpan={3}
            >
              3:00 - 3:50
            </td>
            <td
              className="text-[14px] border-[#000] border-2 border-b-[1px] border-r-[1px] text-[#000] p-[16px] text-center whitespace-nowrap"
              rowSpan={2}
              colSpan={3}
            >
              3:50 -4:40
            </td>
            <td
              className="text-[14px] border-[#000] border-2 border-b-[1px] border-r-[1px] text-[#000] p-[16px] text-center whitespace-nowrap"
              rowSpan={2}
              colSpan={3}
            >
              4:50 - 5:40
            </td>
            <td
              className="text-[14px] border-[#000] border-2 border-b-[1px] border-r-[1px] text-[#000] p-[16px] text-center whitespace-nowrap"
              rowSpan={2}
              colSpan={3}
            >
              5:40 - 6:30
            </td>
            <td
              className="text-[14px] border-[#000] border-2 border-b-[1px] border-r-[1px] text-[#000] p-[16px] text-center whitespace-nowrap"
              rowSpan={2}
              colSpan={3}
            >
              6:50 - 7:40
            </td>
            <td
              className="text-[14px] border-[#000] border-2 border-b-[1px] border-r-[1px] text-[#000] p-[16px] text-center whitespace-nowrap"
              rowSpan={2}
              colSpan={3}
            >
              7:40 - 8:30
            </td>
          </tr>
        </thead>

        {/* table body start here  */}
        {!loading &&
          data?.map((item, index) => {
            const { _id, batch, courses, room, sem, yearSem } = item;
            const classesBeforeBreak = courses.slice(0, 4);

            console.log(classesBeforeBreak, "Class Before Break");

            const classesAfterBreak = courses.slice(4, 11);

            return (
              <tr key={_id}>
                <td
                  className={`px-[16px] border-r-[1px] bg-white py-[6px] text-[#000] border-[#000] border-2 text-[14px]`}
                  colSpan={3}
                >
                  {batch}th
                </td>
                <td
                  className={`px-[16px] border-r-[1px] bg-white py-[6px] text-[#000] border-[#000] border-2 text-[14px]`}
                  colSpan={3}
                >
                  {yearSem}
                </td>
                <td
                  className="px-[16px] border-r-[1px] py-[6px] text-[#000] border-[#000] border-2 text-[14px]"
                  colSpan={2}
                >
                  {sem}
                </td>
                <td
                  className="px-[
                          16px] border-r-[1px] py-[6px] text-[#000] border-[#000] border-2 text-[14px]"
                  colSpan={2}
                >
                  {room}
                </td>
                {/* First Two Class */}
                {classesBeforeBreak[0]?.[1]?.courseTitle ? (
                  <td
                    onClick={() =>
                      document.getElementById("teacher_assign").showModal()
                    }
                    colSpan={`${
                      classesBeforeBreak[0]?.[1]?.courseCode ===
                      classesBeforeBreak[1]?.[2]?.courseCode
                        ? "6"
                        : "3"
                    }`}
                    className={`px-[16px] border-r-[1px] py-[6px] text-[#000] border-[#000] border-2 text-[14px] `}
                  >
                    {classesBeforeBreak[0]?.[1]?.courseCode && (
                      <>
                        {classesBeforeBreak[0]?.[1]?.courseCode} (
                        {classesBeforeBreak[0]?.[1]?.courseTitle}){" "}
                        {classesBeforeBreak[0]?.[1]?.teacher?.sortForm ?? ""}
                      </>
                    )}
                  </td>
                ) : (
                  <td
                    colSpan={`${
                      classesBeforeBreak[0]?.[1]?.courseCode ===
                      classesBeforeBreak[1]?.[2]?.courseCode
                        ? "6"
                        : "3"
                    }`}
                    className={`px-[16px] border-r-[1px] py-[6px] text-[#000] border-[#000] border-2 text-[14px] `}
                  >
                    {classesBeforeBreak[0]?.[1]?.courseCode && (
                      <>
                        {classesBeforeBreak[0]?.[1]?.courseCode} (
                        {classesBeforeBreak[0]?.[1]?.courseTitle}){" "}
                        {classesBeforeBreak[0]?.[1]?.teacher?.sortForm ?? ""}
                      </>
                    )}
                  </td>
                )}
                {classesBeforeBreak[0]?.[1]?.courseCode !==
                classesBeforeBreak[1]?.[2]?.courseCode ? (
                  courses[1]?.[2]?.courseTitle ? (
                    <td
                      onClick={() =>
                        document.getElementById("teacher_assign").showModal()
                      }
                      colSpan={`${
                        classesBeforeBreak[1]?.[2]?.courseCode ===
                        classesBeforeBreak[2]?.[3]?.courseCode
                          ? "6"
                          : "3"
                      }`}
                      className={`px-[16px] border-r-[1px] py-[6px] text-[#000] border-[#000] border-2 text-[14px]`}
                    >
                      {classesBeforeBreak[1]?.[2]?.courseCode && (
                        <>
                          {classesBeforeBreak[1]?.[2]?.courseCode} (
                          {classesBeforeBreak[1]?.[2]?.courseTitle}){" "}
                          {classesBeforeBreak[1]?.[2]?.teacher?.sortForm ?? ""}
                        </>
                      )}
                    </td>
                  ) : (
                    <td
                      colSpan={`${
                        classesBeforeBreak[1]?.[2]?.courseCode ===
                        classesBeforeBreak[2]?.[3]?.courseCode
                          ? "6"
                          : "3"
                      }`}
                      className={`px-[16px] border-r-[1px] py-[6px] text-[#000] border-[#000] border-2 text-[14px]`}
                    >
                      {classesBeforeBreak[1]?.[2]?.courseCode && (
                        <>
                          {classesBeforeBreak[1]?.[2]?.courseCode} (
                          {classesBeforeBreak[1]?.[2]?.courseTitle}){" "}
                          {classesBeforeBreak[1]?.[2]?.teacher?.sortForm ?? ""}
                        </>
                      )}
                    </td>
                  )
                ) : (
                  ""
                )}
                {/* Second Two Class */}
                {classesBeforeBreak[2]?.[3]?.courseTitle ? (
                  <td
                    onClick={() =>
                      document.getElementById("teacher_assign").showModal()
                    }
                    colSpan={`${
                      classesBeforeBreak[2]?.[3]?.courseCode ===
                      classesBeforeBreak[3]?.[4]?.courseCode
                        ? "6"
                        : "3"
                    }`}
                    className={`px-[16px] border-r-[1px] py-[6px] text-[#000] border-[#000] border-2 text-[14px] `}
                  >
                    {classesBeforeBreak[2]?.[3]?.courseCode && (
                      <>
                        {classesBeforeBreak[2]?.[3]?.courseCode} (
                        {classesBeforeBreak[2]?.[3]?.courseTitle}){" "}
                        {classesBeforeBreak[2]?.[3]?.teacher?.sortForm ?? ""}
                      </>
                    )}
                  </td>
                ) : (
                  <td
                    colSpan={`${
                      classesBeforeBreak[2]?.[3]?.courseCode ===
                      classesBeforeBreak[3]?.[4]?.courseCode
                        ? "6"
                        : "3"
                    }`}
                    className={`px-[16px] border-r-[1px] py-[6px] text-[#000] border-[#000] border-2 text-[14px] `}
                  >
                    {classesBeforeBreak[2]?.[3]?.courseCode && (
                      <>
                        {classesBeforeBreak[2]?.[3]?.courseCode} (
                        {classesBeforeBreak[2]?.[3]?.courseTitle}){" "}
                        {classesBeforeBreak[2]?.[3]?.teacher?.sortForm ?? ""}
                      </>
                    )}
                  </td>
                )}
                {classesBeforeBreak[2]?.[3]?.courseCode !==
                classesBeforeBreak[3]?.[4]?.courseCode ? (
                  classesBeforeBreak[3]?.[4]?.courseTitle ? (
                    <td
                      onClick={() =>
                        document.getElementById("teacher_assign").showModal()
                      }
                      colSpan={3}
                      className={`px-[16px] border-r-[1px] py-[6px] text-[#000] border-[#000] border-2 text-[14px]`}
                    >
                      {classesBeforeBreak[3]?.[4]?.courseCode && (
                        <>
                          {classesBeforeBreak[3]?.[4]?.courseCode} (
                          {classesBeforeBreak[3]?.[4]?.courseTitle}){" "}
                          {classesBeforeBreak[3]?.[4]?.teacher?.sortForm ?? ""}
                        </>
                      )}
                    </td>
                  ) : (
                    <td
                      colSpan={3}
                      className={`px-[16px] border-r-[1px] py-[6px] text-[#000] border-[#000] border-2 text-[14px]`}
                    >
                      {classesBeforeBreak[3]?.[4]?.courseCode && (
                        <>
                          {classesBeforeBreak[3]?.[4]?.courseCode} (
                          {classesBeforeBreak[3]?.[4]?.courseTitle}){" "}
                          {classesBeforeBreak[3]?.[4]?.teacher?.sortForm ?? ""}
                        </>
                      )}
                    </td>
                  )
                ) : (
                  ""
                )}
                <td className="px-[16px] border-r-[1px] py-[6px] text-[#000] border-[#000] border-2 border-t-0 border-b-0 text-[20px]">
                  {" "}
                  {index === 4 ? "B" : ""} {index === 5 ? "R" : ""}{" "}
                  {index === 6 ? "E" : ""} {index === 7 ? "A" : ""}{" "}
                  {index === 8 ? "K" : ""}
                </td>
                {/* After Half Period */}
                {/* Number 5 */}
                {classesAfterBreak[0]?.[5]?.courseTitle ? (
                  <td
                    onClick={() =>
                      document.getElementById("teacher_assign").showModal()
                    }
                    colSpan={`${
                      classesAfterBreak[0]?.[5]?.courseCode ===
                      classesAfterBreak[1]?.[6]?.courseCode
                        ? "6"
                        : "3"
                    }`}
                    className={`px-[16px] border-r-[1px] py-[6px] text-[#000] border-[#000] border-2 text-[14px] `}
                  >
                    {classesAfterBreak[0]?.[5]?.courseCode && (
                      <>
                        {classesAfterBreak[0]?.[5]?.courseCode} (
                        {classesAfterBreak[0]?.[5]?.courseTitle}){" "}
                        {classesAfterBreak[0]?.[5]?.teacher?.sortForm ?? ""}
                      </>
                    )}
                  </td>
                ) : (
                  <td
                    colSpan={`${
                      classesAfterBreak[0]?.[5]?.courseCode ===
                      classesAfterBreak[1]?.[6]?.courseCode
                        ? "6"
                        : "3"
                    }`}
                    className={`px-[16px] border-r-[1px] py-[6px] text-[#000] border-[#000] border-2 text-[14px] `}
                  >
                    {classesAfterBreak[0]?.[5]?.courseCode && (
                      <>
                        {classesAfterBreak[0]?.[5]?.courseCode} (
                        {classesAfterBreak[0]?.[5]?.courseTitle}){" "}
                        {classesAfterBreak[0]?.[5]?.teacher?.sortForm ?? ""}
                      </>
                    )}
                  </td>
                )}
                {classesAfterBreak[1]?.[6]?.courseCode ? (
                  <td
                    onClick={() =>
                      document.getElementById("teacher_assign").showModal()
                    }
                    colSpan={`${
                      classesAfterBreak[1]?.[6]?.courseCode ===
                      classesAfterBreak[2]?.[7]?.courseCode
                        ? "6"
                        : "3"
                    }`}
                    className={`px-[16px] border-r-[1px] py-[6px] text-[#000] border-[#000] border-2 text-[14px]`}
                  >
                    {classesAfterBreak[1]?.[6]?.courseCode && (
                      <>
                        {classesAfterBreak[1]?.[6]?.courseCode} (
                        {classesAfterBreak[1]?.[6]?.courseTitle}){" "}
                        {classesAfterBreak[1]?.[6]?.teacher?.sortForm ?? ""}
                      </>
                    )}
                  </td>
                ) : (
                  <td
                    colSpan={`${
                      classesAfterBreak[1]?.[6]?.courseCode ===
                      classesAfterBreak[2]?.[7]?.courseCode
                        ? "6"
                        : "3"
                    }`}
                    className={`px-[16px] border-r-[1px] py-[6px] text-[#000] border-[#000] border-2 text-[14px]`}
                  >
                    {classesAfterBreak[1]?.[6]?.courseCode && (
                      <>
                        {classesAfterBreak[1]?.[6]?.courseCode} (
                        {classesAfterBreak[1]?.[6]?.courseTitle}){" "}
                        {classesAfterBreak[1]?.[6]?.teacher?.sortForm ?? ""}
                      </>
                    )}
                  </td>
                )}
                {classesAfterBreak[1]?.[6]?.courseCode !==
                  classesAfterBreak[2]?.[7]?.courseCode &&
                  (classesAfterBreak[2]?.[7]?.courseCode ? (
                    <td
                      onClick={() =>
                        document.getElementById("teacher_assign").showModal()
                      }
                      colSpan={3}
                      className={`px-[16px] border-r-[1px] py-[6px] text-[#000] border-[#000] border-2 text-[14px]`}
                    >
                      {classesAfterBreak[2]?.[7]?.courseCode && (
                        <>
                          {classesAfterBreak[2]?.[7]?.courseCode} (
                          {classesAfterBreak[2]?.[7]?.courseTitle}){" "}
                          {classesAfterBreak[2]?.[7]?.teacher?.sortForm ?? ""}
                        </>
                      )}
                    </td>
                  ) : (
                    <td
                      colSpan={3}
                      className={`px-[16px] border-r-[1px] py-[6px] text-[#000] border-[#000] border-2 text-[14px]`}
                    >
                      {classesAfterBreak[2]?.[7]?.courseCode && (
                        <>
                          {classesAfterBreak[2]?.[7]?.courseCode} (
                          {classesAfterBreak[2]?.[7]?.courseTitle}){" "}
                          {classesAfterBreak[2]?.[7]?.teacher?.sortForm ?? ""}
                        </>
                      )}
                    </td>
                  ))}

                {/* 7 and 8 */}

                {classesAfterBreak[3]?.[8]?.courseCode ? (
                  <td
                    onClick={() =>
                      document.getElementById("teacher_assign").showModal()
                    }
                    colSpan={`${
                      classesAfterBreak[3]?.[8]?.courseCode ===
                      classesAfterBreak[4]?.[9]?.courseCode
                        ? "6"
                        : "3"
                    }`}
                    className={`px-[16px] border-r-[1px] py-[6px] text-[#000] border-[#000] border-2 text-[14px]`}
                  >
                    {classesAfterBreak[3]?.[8]?.courseCode && (
                      <>
                        {classesAfterBreak[3]?.[8]?.courseCode} (
                        {classesAfterBreak[3]?.[8]?.courseTitle}){" "}
                        {classesAfterBreak[3]?.[8]?.teacher?.sortForm ?? ""}
                      </>
                    )}
                  </td>
                ) : (
                  <td
                    colSpan={`${
                      classesAfterBreak[3]?.[8]?.courseCode ===
                      classesAfterBreak[4]?.[9]?.courseCode
                        ? "6"
                        : "3"
                    }`}
                    className={`px-[16px] border-r-[1px] py-[6px] text-[#000] border-[#000] border-2 text-[14px]`}
                  >
                    {classesAfterBreak[3]?.[8]?.courseCode && (
                      <>
                        {classesAfterBreak[3]?.[8]?.courseCode} (
                        {classesAfterBreak[3]?.[8]?.courseTitle}){" "}
                        {classesAfterBreak[3]?.[8]?.teacher?.sortForm ?? ""}
                      </>
                    )}
                  </td>
                )}
                {classesAfterBreak[3]?.[8]?.courseCode !==
                  classesAfterBreak[4]?.[9]?.courseCode &&
                  (classesAfterBreak[4]?.[9]?.courseCode ? (
                    <td
                      onClick={() =>
                        document.getElementById("teacher_assign").showModal()
                      }
                      colSpan={3}
                      className={`px-[16px] border-r-[1px] py-[6px] text-[#000] border-[#000] border-2 text-[14px]`}
                    >
                      {classesAfterBreak[4]?.[9]?.courseCode && (
                        <>
                          {classesAfterBreak[4]?.[9]?.courseCode} (
                          {classesAfterBreak[4]?.[9]?.courseTitle}){" "}
                          {classesAfterBreak[4]?.[9]?.teacher?.sortForm ?? ""}
                        </>
                      )}
                    </td>
                  ) : (
                    <td
                      colSpan={3}
                      className={`px-[16px] border-r-[1px] py-[6px] text-[#000] border-[#000] border-2 text-[14px]`}
                    >
                      {classesAfterBreak[4]?.[9]?.courseCode && (
                        <>
                          {classesAfterBreak[4]?.[9]?.courseCode} (
                          {classesAfterBreak[4]?.[9]?.courseTitle}){" "}
                          {classesAfterBreak[4]?.[9]?.teacher?.sortForm ?? ""}
                        </>
                      )}
                    </td>
                  ))}
                {classesAfterBreak[5]?.[10]?.courseCode ? (
                  <td
                    onClick={() =>
                      document.getElementById("teacher_assign").showModal()
                    }
                    colSpan={`${
                      classesAfterBreak[5]?.[10]?.courseCode ===
                      classesAfterBreak[6]?.[11]?.courseCode
                        ? "6"
                        : "3"
                    }`}
                    className={`px-[16px] border-r-[1px] py-[6px] text-[#000] border-[#000] border-2 text-[14px]`}
                  >
                    {classesAfterBreak[5]?.[10]?.courseCode && (
                      <>
                        {classesAfterBreak[5]?.[10]?.courseCode} (
                        {classesAfterBreak[5]?.[10]?.courseTitle}){" "}
                        {classesAfterBreak[5]?.[10]?.teacher?.sortForm ?? ""}
                      </>
                    )}
                  </td>
                ) : (
                  <td
                    colSpan={`${
                      classesAfterBreak[5]?.[10]?.courseCode ===
                      classesAfterBreak[6]?.[11]?.courseCode
                        ? "6"
                        : "3"
                    }`}
                    className={`px-[16px] border-r-[1px] py-[6px] text-[#000] border-[#000] border-2 text-[14px]`}
                  >
                    {classesAfterBreak[5]?.[10]?.courseCode && (
                      <>
                        {classesAfterBreak[5]?.[10]?.courseCode} (
                        {classesAfterBreak[5]?.[10]?.courseTitle}){" "}
                        {classesAfterBreak[5]?.[10]?.teacher?.sortForm ?? ""}
                      </>
                    )}
                  </td>
                )}
                {classesAfterBreak[5]?.[10]?.courseCode !==
                  classesAfterBreak[6]?.[11]?.courseCode &&
                  (classesAfterBreak[6]?.[11]?.courseCode ? (
                    <td
                      onClick={() =>
                        document.getElementById("teacher_assign").showModal()
                      }
                      colSpan={3}
                      className={`px-[16px] border-r-[1px] py-[6px] text-[#000] border-[#000] border-2 text-[14px]`}
                    >
                      {classesAfterBreak[6]?.[11]?.courseCode && (
                        <>
                          {classesAfterBreak[6]?.[11]?.courseCode} (
                          {classesAfterBreak[6]?.[11]?.courseTitle}){" "}
                          {classesAfterBreak[6]?.[11]?.teacher?.sortForm ?? ""}
                        </>
                      )}
                    </td>
                  ) : (
                    <td
                      colSpan={3}
                      className={`px-[16px] border-r-[1px] py-[6px] text-[#000] border-[#000] border-2 text-[14px]`}
                    >
                      {classesAfterBreak[6]?.[11]?.courseCode && (
                        <>
                          {classesAfterBreak[6]?.[11]?.courseCode} (
                          {classesAfterBreak[6]?.[11]?.courseTitle}){" "}
                          {classesAfterBreak[6]?.[11]?.teacher?.sortForm ?? ""}
                        </>
                      )}
                    </td>
                  ))}
              </tr>
            );
          })}
      </table>
      <TeacherAssign></TeacherAssign>
    </TableWrapper>
  );
};

export default EveningFridayTable;
