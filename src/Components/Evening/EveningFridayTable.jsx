import TableWrapper from "../../Shared/TableWrapper";

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
                <td
                  colSpan={`${
                    courses?.["1"]?.courseCode === courses?.["2"]?.courseCode
                      ? "6"
                      : "3"
                  }`}
                  className={`px-[16px] border-r-[1px] py-[6px] text-[#000] border-[#000] border-2 text-[14px] `}
                >
                  {courses?.["1"]?.courseCode && (
                    <>
                      {courses?.["1"]?.courseCode} (
                      {courses?.["1"]?.courseTitle}) {courses?.["1"]?.teacher}
                    </>
                  )}
                </td>
                {courses?.["1"]?.courseCode !== courses?.["2"]?.courseCode ? (
                  <td
                    colSpan={`${
                      courses?.["2"]?.courseCode === courses?.["3"]?.courseCode
                        ? "6"
                        : "3"
                    }`}
                    className={`px-[16px] border-r-[1px] py-[6px] text-[#000] border-[#000] border-2 text-[14px]`}
                  >
                    {courses?.["2"]?.courseCode && (
                      <>
                        {courses?.["2"]?.courseCode} (
                        {courses?.["2"]?.courseTitle}) {courses?.["2"]?.teacher}
                      </>
                    )}
                  </td>
                ) : (
                  ""
                )}
                {/* Second Two Class */}
                <td
                  colSpan={`${
                    courses?.["3"]?.courseCode === courses?.["4"]?.courseCode
                      ? "6"
                      : "3"
                  }`}
                  className={`px-[16px] border-r-[1px] py-[6px] text-[#000] border-[#000] border-2 text-[14px] `}
                >
                  {courses?.["3"]?.courseCode && (
                    <>
                      {courses?.["3"]?.courseCode} (
                      {courses?.["3"]?.courseTitle}) {courses?.["3"]?.teacher}
                    </>
                  )}
                </td>
                {courses?.["3"]?.courseCode !== courses?.["4"]?.courseCode ? (
                  <td
                    colSpan={3}
                    className={`px-[16px] border-r-[1px] py-[6px] text-[#000] border-[#000] border-2 text-[14px]`}
                  >
                    {courses?.["4"]?.courseCode && (
                      <>
                        {courses?.["4"]?.courseCode} (
                        {courses?.["4"]?.courseTitle}) {courses?.["4"]?.teacher}
                      </>
                    )}
                  </td>
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
                <td
                  colSpan={`${
                    courses?.["5"]?.courseCode === courses?.["6"]?.courseCode
                      ? "6"
                      : "3"
                  }`}
                  className={`px-[16px] border-r-[1px] py-[6px] text-[#000] border-[#000] border-2 text-[14px] `}
                >
                  {courses?.["5"]?.courseCode && (
                    <>
                      {courses?.["5"]?.courseCode} (
                      {courses?.["5"]?.courseTitle}) {courses?.["5"]?.teacher}
                    </>
                  )}
                </td>
                <td
                  colSpan={`${
                    courses?.["6"]?.courseCode === courses?.["7"]?.courseCode
                      ? "6"
                      : "3"
                  }`}
                  className={`px-[16px] border-r-[1px] py-[6px] text-[#000] border-[#000] border-2 text-[14px]`}
                >
                  {courses?.["6"]?.courseCode && (
                    <>
                      {courses?.["6"]?.courseCode} (
                      {courses?.["6"]?.courseTitle}) {courses?.["6"]?.teacher}
                    </>
                  )}
                </td>
                {courses?.["6"]?.courseCode !== courses?.["7"]?.courseCode && (
                  <td
                    colSpan={3}
                    className={`px-[16px] border-r-[1px] py-[6px] text-[#000] border-[#000] border-2 text-[14px]`}
                  >
                    {courses?.["7"]?.courseCode && (
                      <>
                        {courses?.["7"]?.courseCode} (
                        {courses?.["7"]?.courseTitle}) {courses?.["7"]?.teacher}
                      </>
                    )}
                  </td>
                )}

                {/* 7 and 8 */}

                <td
                  colSpan={`${
                    courses?.["8"]?.courseCode === courses?.["9"]?.courseCode
                      ? "6"
                      : "3"
                  }`}
                  className={`px-[16px] border-r-[1px] py-[6px] text-[#000] border-[#000] border-2 text-[14px]`}
                >
                  {courses?.["8"]?.courseCode && (
                    <>
                      {courses?.["8"]?.courseCode} (
                      {courses?.["8"]?.courseTitle}) {courses?.["8"]?.teacher}
                    </>
                  )}
                </td>
                {courses?.["8"]?.courseCode !== courses?.["9"]?.courseCode && (
                  <td
                    colSpan={3}
                    className={`px-[16px] border-r-[1px] py-[6px] text-[#000] border-[#000] border-2 text-[14px]`}
                  >
                    {courses?.["9"]?.courseCode && (
                      <>
                        {courses?.["9"]?.courseCode} (
                        {courses?.["9"]?.courseTitle}) {courses?.["9"]?.teacher}
                      </>
                    )}
                  </td>
                )}
                <td
                  colSpan={`${
                    courses?.["10"]?.courseCode === courses?.["11"]?.courseCode
                      ? "6"
                      : "3"
                  }`}
                  className={`px-[16px] border-r-[1px] py-[6px] text-[#000] border-[#000] border-2 text-[14px]`}
                >
                  {courses?.["10"]?.courseCode && (
                    <>
                      {courses?.["10"]?.courseCode} (
                      {courses?.["10"]?.courseTitle}) {courses?.["10"]?.teacher}
                    </>
                  )}
                </td>
                {courses?.["10"]?.courseCode !==
                  courses?.["11"]?.courseCode && (
                  <td
                    colSpan={3}
                    className={`px-[16px] border-r-[1px] py-[6px] text-[#000] border-[#000] border-2 text-[14px]`}
                  >
                    {courses?.["11"]?.courseCode && (
                      <>
                        {courses?.["11"]?.courseCode} (
                        {courses?.["11"]?.courseTitle}){" "}
                        {courses?.["11"]?.teacher}
                      </>
                    )}
                  </td>
                )}
              </tr>
            );
          })}
      </table>
    </TableWrapper>
  );
};

export default EveningFridayTable;
