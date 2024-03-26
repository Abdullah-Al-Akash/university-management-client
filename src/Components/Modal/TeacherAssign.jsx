/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaXmark } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
const TeacherAssign = ({ courseId, rowIndex: index }) => {
  console.log(courseId, index, "modal");
  const [searchQuery, setSearchQuery] = useState("");
  const [allReacher, setAllTeacher] = useState([]);
  const [selectedTeacherName, setSelectedTeacherName] = useState({});
  const [loading, setLoading] = useState(true);
  const [selectTeacher, setSelectTeacher] = useState({});
  // Function to handle search logic
  const handleSearch = () => {
    // Perform search logic based on searchQuery
    // Update searchResults state with matching players
    // For example:
    fetch(
      "https://routine-management-system-backend.onrender.com/api/v1/teacher"
    )
      .then((res) => res.json())
      .then((data) => {
        const filteredResults = data.data.filter((teacher) => {
          return teacher.fullName
            .toLowerCase()
            .includes(searchQuery?.toLowerCase());
        });

        setLoading(false);
        if (filteredResults) {
          setAllTeacher(filteredResults);
          setSelectedTeacherName({});
        } else {
          console.log(data.data);
          setAllTeacher(data.data);
          setSelectedTeacherName({});
        }
      });
  };
  const handleTeacherAssign = (id, name) => {
    const teacherId = id;
    const rowIndex = index;
    const routineId = courseId;
    const obj = {
      routineId,
      teacherId,
      rowIndex,
    };
    setSelectTeacher(obj);
    setSelectedTeacherName({ name });
    setAllTeacher([]);
    setSearchQuery("");
  };
  const handleSubmit = () => {
    console.log(selectTeacher);
  };
  return (
    <dialog id="teacher_assign" className="modal">
      <div className="modal-box max-h-[50vh] ">
        <div className="flex flex-col gap-2 justify-start items-start">
          <div className="h-[46px] mt-[18px] md:mt-auto relative overflow-hidden shadow-lg  rounded-[6px] w-full p">
            <FiSearch className=" text-[#636363] text-[18px] left-[17px] absolute top-1/2 -translate-y-1/2" />
            <input
              className="my-inp teacher_modal "
              placeholder="Search Individual Player"
              value={searchQuery}
              onChange={(e) => {
                setSelectedTeacherName({});
                setSelectTeacher({})
                setSearchQuery(e.target.value);
              }}
              onKeyUp={() => {
                setSelectedTeacherName({});
                setSelectTeacher({})
                handleSearch();
              }}
              onFocus={() => {
                handleSearch();
                setSelectTeacher({})
              }}
            />
          </div>
          {loading ? (
            "Loading..."
          ) : !(allReacher.length > 0) ? (
            searchQuery === "" && selectedTeacherName ? (
              <p>
                <span className="font-medium">Selected: </span>
                <span className="text-orange-400">
                  {selectedTeacherName?.name}
                </span>
              </p>
            ) : (
              <p className="mt-[10px] text-red-600">Not Match Teacher Name.</p>
            )
          ) : (
            <ul className="w-full">
              <div className="bg-white p-[24px] flex flex-col gap-[8px] w-full rounded-[8px]">
                {allReacher?.slice(0, 4).map((teacher) => {
                  const { fullName, sortForm, _id } = teacher;
                  return (
                    <div
                      onClick={() => handleTeacherAssign(_id, fullName)}
                      key={teacher?._id}
                      className="flex flex-col w-full hover:bg-gray-300 p-[8px] rounded-[8px] cursor-pointer bg-slate-200"
                    >
                      <h2>
                        <span className="font-semibold">Name: </span>
                        <span className="text-orange-500">{fullName}</span>
                      </h2>
                      <h2>
                        <span className="font-semibold">Nick Name: </span>
                        <span className="text-orange-500">{sortForm}</span>
                      </h2>
                    </div>
                  );
                })}
              </div>
            </ul>
          )}
          <button onClick={handleSubmit} className="my-btn-one">
            Submit
          </button>
        </div>
        <div className="modal-action fixed top-0 right-1 mt-0">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="text-red-500 text-2xl">
              <FaXmark />
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default TeacherAssign;
