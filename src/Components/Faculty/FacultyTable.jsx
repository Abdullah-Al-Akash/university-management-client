import TableWrapper from "../../Shared/TableWrapper";

const FacultyTable = () => {
  return (
    <div>
      <TableWrapper>
        <table
          border={1}
          className="table-auto font-medium text-center border border-[#000] table-ui w-full "
          cellPadding="0"
          cellSpacing={0}
        >
          <tr>
            <td
              className="text-[14px] border-[#000] border bg-white border-b-[1px] border-r-[1px] text-[#000] p-[16px] text-center whitespace-nowrap"
              rowSpan={2}
              colSpan={1}
            >
              Day
            </td>

            <td
              className="text-[14px] border-[#000] border border-b-[1px] border-r-[1px] text-[#000] p-[16px] text-center whitespace-nowrap"
              colSpan={6}
            >
              Time
            </td>
          </tr>
          <tr>
            <td className="text-[14px] border-[#000] border border-b-[1px] border-r-[1px] text-[#000] p-[16px] text-center">
              9:0-10:20am
            </td>
            <td className="text-[14px] border-[#000] border border-b-[1px] border-r-[1px] text-[#000] p-[16px] text-center">
              10:30-11:50am
            </td>
            <td className="text-[14px] border-[#000] border border-b-[1px] border-r-[1px] text-[#000] p-[16px] text-center">
              12:00-1:20pm
            </td>
            <td className="text-[14px] border-[#000] border border-b-[1px] border-r-[1px] text-[#000] p-[16px] text-center">
              2:00-3:20pm
            </td>
            <td className="text-[14px] border-[#000] border border-b-[1px] border-r-[1px] text-[#000] p-[16px] text-center">
              5:30-7:10pm
            </td>
            <td className="text-[14px] border-[#000] border border-b-[1px] border-r-[1px] text-[#000] p-[16px] text-center">
              6:20-7:10pm
            </td>
          </tr>
          <tr>
            <td className="text-[14px] border-[#000] border border-b-[1px] border-r-[1px] text-[#000] p-[16px] text-center">
              a
            </td>
            <td className="text-[14px] border-[#000] border border-b-[1px] border-r-[1px] text-[#000] p-[16px] text-center">
              b
            </td>
            <td className="text-[14px] border-[#000] border border-b-[1px] border-r-[1px] text-[#000] p-[16px] text-center">
              c
            </td>
            <td className="text-[14px] border-[#000] border border-b-[1px] border-r-[1px] text-[#000] p-[16px] text-center">
              d
            </td>
            <td className="text-[14px] border-[#000] border border-b-[1px] border-r-[1px] text-[#000] p-[16px] text-center">
              e
            </td>
            <td className="text-[14px] border-[#000] border border-b-[1px] border-r-[1px] text-[#000] p-[16px] text-center">
              f
            </td>
            <td className="text-[14px] border-[#000] border border-b-[1px] border-r-[1px] text-[#000] p-[16px] text-center">
              g
            </td>
          </tr>
        </table>
      </TableWrapper>
    </div>
  );
};

export default FacultyTable;
