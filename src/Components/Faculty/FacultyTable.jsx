import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useNavigate } from "react-router-dom";
import TableWrapper from "../../Shared/TableWrapper";
import { FaBackward, FaDownload } from "react-icons/fa6";
import UploadFacultiesModal from "../Modal/UploadFacultiesModal";
import { useEffect, useState } from "react";

const FacultyTable = () => {
  const navigate = useNavigate();
  const [facultyId, setFacultyId] = useState("65ffba1e6f7f8bf209a05e00");
  const [allFaculty, setAllFaculty] = useState([]);
  const [loading, setLoading] = useState(true);
  // const url = `https://routine-management-system-backend.onrender.com/api/v1/teacher/get-individual-routine/65ffba1e6f7f8bf209a05e00`;

  useEffect(() => {
    fetch(
      `https://routine-management-system-backend.onrender.com/api/v1/teacher`
    )
      .then((res) => res.json())
      .then((data) => {
        setAllFaculty(data?.data);
        console.log(data?.data);
        setLoading(false);
      })
      .catch((err) => console.log(err), setLoading(false));
  }, []);
  const FacultyName = allFaculty?.find((faculty) => faculty?._id === facultyId);
  const [loader, setLoader] = useState(false);

  const downloadPDF = () => {
    const capture = document.querySelector(".actual-receipt");
    setLoader(true);

    // Set capturing element and its parent elements to 100% height
    capture.style.height = "100%";
    capture.parentElement.style.height = "100%";

    // Adjust the styles for better rendering

    html2canvas(capture, { height: capture.offsetHeight }).then((canvas) => {
      const imgData = canvas.toDataURL("img/png");
      const doc = new jsPDF("p", "mm", "a4");

      // Set canvas height and add image to PDF
      const canvasHeight =
        (canvas.height * doc.internal.pageSize.getWidth()) / canvas.width;
      doc.addImage(
        imgData,
        "PNG",
        0,
        0,
        doc.internal.pageSize.getWidth(),
        canvasHeight
      );

      setLoader(false);

      // Save the PDF
      doc.save("winter-invoice.pdf");
    });
  };
  return (
    <div className="container mx-auto">
      <div className="my-5 flex justify-between items-center">
        <button
          className="flex items-center gap-2 font-medium"
          onClick={() => navigate(-1)}
        >
          <FaBackward /> <span>back</span>
        </button>
        <button
          onClick={() => document.getElementById("uploadFaculties").showModal()}
        >
          {" "}
          <a
            href="#_"
            className="relative px-5 py-2 font-medium text-white group"
          >
            <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-orange-400 group-hover:bg-orange-500 group-hover:skew-x-12"></span>
            <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-orange-500 group-hover:bg-orange-700 group-hover:-skew-x-12"></span>
            <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-orange-500 -rotate-12"></span>
            <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-orange-500 -rotate-12"></span>
            <span className="relative">Upload Faculties</span>
          </a>
        </button>
      </div>

      <div className="text-end my-3">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <select
            name=""
            className="outline-none bg-slate-200 p-2 cursor-pointer"
            id=""
            onChange={(e) => setFacultyId(e.target.value)}
          >
            {loading ? (
              <p>Loading...</p>
            ) : (
              allFaculty?.map((faculty) => {
                const { fullName, _id } = faculty;
                return (
                  <option className="cursor-pointer" key={_id} value={_id}>
                    {fullName}
                  </option>
                );
              })
            )}
          </select>
        )}
      </div>
      <div className="flex justify-between">
        <button
          onClick={downloadPDF}
          disabled={!(loader === false)}
          className="brand-btn flex items-center gap-2 px-4 py-2"
        >
          {loader ? <span>Downloading...</span> : <span>Download</span>}
          <FaDownload></FaDownload>
        </button>
      </div>
      <div className="actual-receipt">
        {
          <h2 className="text-center text-[36px] font-bold">
            {FacultyName?.fullName
              ? FacultyName?.fullName
              : allFaculty[0]?.fullName}
          </h2>
        }
        <TableWrapper maxWidth="max-w-[600px] mx-auto" borderStyle="">
          <table
            border={1}
            className="table-auto font-medium text-center  border-[#000] mx-auto w-full"
            cellPadding="0"
            cellSpacing={0}
          >
            <tr>
              <td
                className="text-[14px] border-[#000] border bg-white border-t border-b-[1px] border-r-[0px] text-[#000] p-[16px] text-center whitespace-nowrap"
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
              <td className="text-[14px] border-[#000] border border-b-[1px] border-r-[1px] text-[#000] p-[16px] text-center whitespace-nowrap">
                9:0-10:20am
              </td>
              <td className="text-[14px] border-[#000] border border-b-[1px] border-r-[1px] text-[#000] p-[16px] text-center whitespace-nowrap">
                10:30-11:50am
              </td>
              <td className="text-[14px] border-[#000] border border-b-[1px] border-r-[1px] text-[#000] p-[16px] text-center whitespace-nowrap">
                12:00-1:20pm
              </td>
              <td className="text-[14px] border-[#000] border border-b-[1px] border-r-[1px] text-[#000] p-[16px] text-center whitespace-nowrap">
                2:00-3:20pm
              </td>
              <td className="text-[14px] border-[#000] border border-b-[1px] border-r-[1px] text-[#000] p-[16px] text-center whitespace-nowrap">
                5:30-7:10pm
              </td>
              <td className="text-[14px] border-[#000] border border-b-[1px] border-r-[1px] text-[#000] p-[16px] text-center whitespace-nowrap">
                6:20-7:10pm
              </td>
            </tr>
            <tr>
              <td className="text-[14px] border-[#000] border border-b-[1px] border-r-[1px] text-[#000] p-[16px] text-center whitespace-nowrap">
                a
              </td>
              <td className="text-[14px] border-[#000] border border-b-[1px] border-r-[1px] text-[#000] p-[16px] text-center whitespace-nowrap">
                b
              </td>
              <td className="text-[14px] border-[#000] border border-b-[1px] border-r-[1px] text-[#000] p-[16px] text-center whitespace-nowrap">
                c
              </td>
              <td className="text-[14px] border-[#000] border border-b-[1px] border-r-[1px] text-[#000] p-[16px] text-center whitespace-nowrap">
                d
              </td>
              <td className="text-[14px] border-[#000] border border-b-[1px] border-r-[1px] text-[#000] p-[16px] text-center whitespace-nowrap">
                e
              </td>
              <td className="text-[14px] border-[#000] border border-b-[1px] border-r-[1px] text-[#000] p-[16px] text-center whitespace-nowrap">
                f
              </td>
              <td className="text-[14px] border-[#000] border border-b-[1px] border-r-[1px] text-[#000] p-[16px] text-center whitespace-nowrap">
                g
              </td>
            </tr>
          </table>
        </TableWrapper>
        <div className="mt-[40px]">
          <TableWrapper maxWidth="max-w-[615px] mx-auto" borderStyle="">
            <table
              border={1}
              className="table-auto font-medium text-center  border-[#000] mx-auto w-full"
              cellPadding="0"
              cellSpacing={0}
            >
              {/* table head */}
              <tr>
                <td className="text-[14px] border-[#000] border bg-white border-t border-b-[1px] border-r-[0px] text-[#000] p-[16px] text-center whitespace-nowrap">
                  Serial No
                </td>

                <td className="text-[14px] border-[#000] border border-b-[1px] border-r-[1px] text-[#000] p-[16px] text-center whitespace-nowrap">
                  Course Code
                </td>
                <td className="text-[14px] border-[#000] border border-b-[1px] border-r-[1px] text-[#000] p-[16px] text-center whitespace-nowrap">
                  Course Title
                </td>
                <td className="text-[14px] border-[#000] border border-b-[1px] border-r-[1px] text-[#000] p-[16px] text-center whitespace-nowrap">
                  Program
                </td>
                <td className="text-[14px] border-[#000] border border-b-[1px] border-r-[1px] text-[#000] p-[16px] text-center whitespace-nowrap">
                  Cr
                </td>
                <td className="text-[14px] border-[#000] border border-b-[1px] border-r-[1px] text-[#000] p-[16px] text-center whitespace-nowrap">
                  Cr Hr
                </td>
                <td className="text-[14px] border-[#000] border border-b-[1px] border-r-[1px] text-[#000] p-[16px] text-center whitespace-nowrap">
                  Batch & Year-Semester
                </td>
              </tr>
              {/* table footer */}
              <tr>
                <td
                  className="text-[14px] border-[#000] border bg-white border-t border-b-[1px] border-r-[0px] text-[#000] p-[16px] text-center whitespace-nowrap"
                  colSpan={4}
                >
                  Total Credits & Minutes
                </td>
                <td
                  className="text-[14px] border-[#000] border bg-white border-t border-b-[1px] border-r-[0px] text-[#000] p-[16px] text-center whitespace-nowrap"
                  colSpan={1}
                >
                  Total cr
                </td>
                <td
                  className="text-[14px] border-[#000] border bg-white border-t border-b-[1px] border-r-[0px] text-[#000] p-[16px] text-center whitespace-nowrap"
                  colSpan={1}
                >
                  Total cr Hr
                </td>
                <td
                  className="text-[14px] border-[#000] border bg-white border-t border-b-[1px] text-[#000] p-[16px] text-center whitespace-nowrap"
                  colSpan={1}
                >
                  Total cr Hr
                </td>
              </tr>
            </table>
          </TableWrapper>
        </div>
      </div>
      <UploadFacultiesModal></UploadFacultiesModal>
    </div>
  );
};

export default FacultyTable;
