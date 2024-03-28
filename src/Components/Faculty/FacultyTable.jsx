import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";
import { FaBackward, FaDownload } from "react-icons/fa";
import TableWrapper from "../../Shared/TableWrapper";
import UploadFacultiesModal from "../Modal/UploadFacultiesModal";

const FacultyTable = () => {
  const navigate = useNavigate();
  const [facultyId, setFacultyId] = useState("65ffba1e6f7f8bf209a05e00");
  const [allFaculty, setAllFaculty] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    fetch(
      `https://routine-management-system-backend.onrender.com/api/v1/teacher`
    )
      .then((res) => res.json())
      .then((data) => {
        setAllFaculty(data?.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const FacultyName = allFaculty?.find((faculty) => faculty?._id === facultyId);

  const downloadPDF = () => {
    setLoader(true);

    const blob = new Blob(
      [<MyDocument facultyName={FacultyName} allFaculty={allFaculty} />],
      { type: "application/pdf" }
    );
    const url = URL.createObjectURL(blob);
    window.open(url);
    setLoader(false);
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
            {allFaculty?.map((faculty) => {
              const { fullName, _id } = faculty;
              return (
                <option className="cursor-pointer" key={_id} value={_id}>
                  {fullName}
                </option>
              );
            })}
          </select>
        )}
      </div>

      <div className="flex justify-between">
        <button
          onClick={downloadPDF}
          disabled={loader}
          className="brand-btn flex items-center gap-2 px-4 py-2"
        >
          {loader ? <span>Downloading...</span> : <span>Download</span>}
          <FaDownload />
        </button>
      </div>

      <div className="actual-receipt">
        <PDFViewer style={{ width: "100%", height: "100vh" }}>
          <MyDocument facultyName={FacultyName} allFaculty={allFaculty} />
        </PDFViewer>
      </div>

      <UploadFacultiesModal />
    </div>
  );
};

const MyDocument = ({ facultyName, allFaculty }) => (
  <Document>
    <Page>
      <View style={styles.container}>
        <Text>
          {facultyName?.fullName
            ? facultyName?.fullName
            : allFaculty[0]?.fullName}
          <h3>Helo</h3>
        </Text>

        <div className="actual-receipt">
          {
            <h2 className="text-center text-[36px] font-bold">
              {facultyName?.fullName
                ? facultyName?.fullName
                : allFaculty[0]?.fullName}
            </h2>
          }
        </div>
      </View>
      <View>
        <Text>
          <h3 className="">Hello</h3>
        </Text>
      </View>
    </Page>
  </Document>
);

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default FacultyTable;
