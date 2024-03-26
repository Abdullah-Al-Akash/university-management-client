/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaXmark } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
const TeacherAssign = ({ courseId }) => {
  console.log(courseId, "modal");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [allReacher, setAllTeacher] = useState([]);
  const [loading, setLoading] = useState(true);
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
        const filteredResults = data
          .slice(0, 4)
          .filter((teacher) =>
            teacher.playerName
              .toLowerCase()
              .includes(searchQuery?.toLowerCase())
          );
        setAllTeacher(data.data);
        console.log(data);
        setLoading(false);
        if (filteredResults) {
          setSearchResults(filteredResults);
        } else {
          setSearchResults([]);
        }
      });
  };

  return (
    <dialog id="teacher_assign" className="modal">
      <div className="modal-box max-h-[50vh]">
        <div className="flex flex-col gap-2 justify-start items-start">
          <div className="h-[46px] mt-[18px] md:mt-auto relative overflow-hidden shadow-lg  rounded-[6px] w-full p">
            <FiSearch className=" text-[#636363] text-[18px] left-[17px] absolute top-1/2 -translate-y-1/2" />
            <input
              className="my-inp teacher_modal "
              placeholder="Search Individual Player"
              value={searchQuery}
              onBlur={() => setSearchResults([])}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyUp={handleSearch}
              onFocus={() => {
                setSearchResults(allReacher);
              }}
            />
          </div>
          {loading
            ? "Loading..."
            : teacher.length > 0 && (
                <ul className="">
                  <div className="bg-white p-[24px] flex flex-col gap-[8px] w-full rounded-[8px]">
                    {allReacher.map((teacher) => {
                      return (
                        <div
                          key={_id}
                          className="flex items-center justify-start gap-[13px] w-full hover:bg-gray-300 p-[8px] rounded-[8px] cursor-pointer"
                        >
                          Teacher Name , faculty
                        </div>
                      );
                    })}
                  </div>
                </ul>
              )}
          <button className="my-btn-one">Submit</button>
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
