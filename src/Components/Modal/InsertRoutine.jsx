import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaTimes } from "react-icons/fa";
import { Bounce, toast } from "react-toastify";

const InsertRoutine = ({ setControl, control }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitted },
  } = useForm();
  const days =
    watch("shift") === "Evening"
      ? ["Friday", "Saturday", "Thursday"]
      : watch("shift") === "Regular"
      ? ["Saturday", "Sunday", "Tuesday", "Wednesday", "Thursday", "Friday"]
      : [];
  const eveningRowIndexes =
    watch("shift") === "Evening" && watch("day") === "Friday"
      ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
      : watch("shift") === "Evening" &&
        watch("day") !== "Friday" &&
        watch("day") !== ""
      ? [1, 2, 3, 4]
      : [];
  const regularRowIndexes =
    watch("shift") === "Regular" ? [1, 2, 3, 4, 5, 6] : [];

  const [courses, setCourses] = useState([]);
  const [coursesLoading, setCoursesLoading] = useState(false);

  const [regulations, setRegulations] = useState([]);
  const [regulationsLoading, setRegulationsLoading] = useState(false);

  const [batches, setBatches] = useState([]);
  const [batchesLoading, setBatchesLoading] = useState(false);

  // TODO: Need dynamic courses by regulation and need dynamic regulation

  // Courses
  useEffect(() => {
    setCoursesLoading(true);
    if (watch("regulation")) {
      axios(
        `${
          import.meta.env.VITE_SERVER_BASE_URL
        }/course/courses-by-regulation/${watch("regulation")}`
      )
        .then((res) => {
          setCoursesLoading(false);
          setCourses(res.data?.data);
        })
        .catch((e) => {
          setCoursesLoading(false);
          console.log(e.response);
        });
    } else {
      setCoursesLoading(false);
    }
  }, [watch("regulation")]);

  // Regulation
  useEffect(() => {
    setRegulationsLoading(true);
    axios(`${import.meta.env.VITE_SERVER_BASE_URL}/course/regulations`)
      .then((res) => {
        setRegulationsLoading(false);
        setRegulations(res.data?.data);
      })
      .catch((e) => {
        setRegulationsLoading(false);
        console.log(e.response);
      });
  }, []);

  // Batches
  useEffect(() => {
    setBatchesLoading(true);
    axios(`${import.meta.env.VITE_SERVER_BASE_URL}/routine/get-batches`)
      .then((res) => {
        setBatchesLoading(false);
        setBatches(res.data?.data);
      })
      .catch((e) => {
        setBatchesLoading(false);
        console.log(e.response);
      });
  }, []);

  const handleInsertRoutineFunc = (form) => {
    const courses = [];
    const rowIndexes =
      watch("shift") === "Regular"
        ? regularRowIndexes
        : watch("shift") === "Evening"
        ? eveningRowIndexes
        : [];
    let countRowIndex = 0;
    const { day, batch, sem, yearSem, shift, regulation, room } = form;

    Object.keys(form).forEach((key) => {
      if (
        key.startsWith("rowIndex-courseTitle") &&
        countRowIndex < rowIndexes.length
      ) {
        countRowIndex += 1;

        const rowIndex = Number(key.split("rowIndex-courseTitle-")[1]);
        const courseTitle = watch(key).split(",")[0] || "";
        const courseCode = watch(key).split(",")[1] || "";
        const credit = watch(key).split(",")[2]
          ? Number(watch(key).split(",")[2])
          : "";

        const courseObj = {
          rowIndex,
          courseTitle,
          courseCode,
          credit,
        };
        courses.push(courseObj);
      }
    });

    // console.log(form, 'form');
    // console.log(courses, 'courses');
    // console.log(countRowIndex, 'countRowIndex after');
    const newRoutine = {
      day,
      batch: Number(batch),
      room,
      sem,
      yearSem,
      shift,
      regulation,
      courses,
    };
    console.log(newRoutine, "newRoutine");

    axios
      .post(
        `${import.meta.env.VITE_SERVER_BASE_URL}/routine/insert-routine`,
        newRoutine
      )
      .then((res) => {
        console.log(res.data);
        setControl(!control);
        const modal = document.getElementById("insertRoutine");
        modal.close();
        toast.success(res.data?.message, {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      })
      .catch((e) => {
        console.log(e.response);
        toast.error(
          e.response?.data?.errorMessage || e.response?.data?.message,
          {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          }
        );
      });
  };

  return (
    <dialog id="insertRoutine" className="modal">
      <div className="modal-box">
        <form
          onSubmit={handleSubmit(handleInsertRoutineFunc)}
          className="space-y-2 w-full"
        >
          {/*  Semester*/}
          <div className="">
            <label
              htmlFor="semester"
              className="block mb-2 text-sm font-medium text-slate-500 dark:text-white"
            >
              Semester
            </label>
            <select
              id="semester"
              className="my-inp"
              {...register("sem", { required: true })}
            >
              <option value={""}>Select semester</option>
              {[
                "1st",
                "2nd",
                "3rd",
                "4th",
                "5th",
                "6th",
                "7th",
                "8th",
                "9th",
                "10th",
                "11th",
                "12th",
              ].map((elem, ind) => {
                return (
                  <option key={ind} value={elem}>
                    {elem}
                  </option>
                );
              })}
            </select>
            {errors.sem && (
              <p className="text-red-500">*This field is required</p>
            )}
          </div>

          {/*  Regulation */}
          <div className="">
            <label
              htmlFor="regulation"
              className="block mb-2 text-sm font-medium text-slate-500 dark:text-white"
            >
              Regulation
            </label>
            {regulationsLoading ? (
              <span className="loading loading-ring loading-lg"></span>
            ) : !regulations.length > 0 ? (
              <h2 className="text-red-500 font-semibold">
                Insert course first!
              </h2>
            ) : (
              <select
                id="regulation"
                className="my-inp"
                {...register("regulation", { required: true })}
              >
                <option value={""}>Select regulation</option>
                {regulations.map((elem, ind) => {
                  return (
                    <option key={ind} value={elem}>
                      {elem}
                    </option>
                  );
                })}
              </select>
            )}
            {errors.regulation && (
              <p className="text-red-500">*This field is required</p>
            )}
          </div>

          {/*  Shift */}
          <div className="">
            <label
              htmlFor="shift"
              className="block mb-2 text-sm font-medium text-slate-500 dark:text-white"
            >
              Shift
            </label>
            <select
              id="shift"
              className="my-inp"
              {...register("shift", { required: true })}
            >
              <option value={""}>Select shift</option>
              {["Regular", "Evening"].map((elem, ind) => {
                return (
                  <option key={ind} value={elem}>
                    {elem}
                  </option>
                );
              })}
            </select>
            {errors.shift && (
              <p className="text-red-500">*This field is required</p>
            )}
          </div>

          {/*  Day */}
          <div className="">
            <label
              htmlFor="day"
              className="block mb-2 text-sm font-medium text-slate-500 dark:text-white"
            >
              Day
            </label>
            {!days.length > 0 ? (
              <h2 className="text-red-500 font-semibold">
                Select shift first!
              </h2>
            ) : (
              <select
                id="day"
                className="my-inp"
                {...register("day", { required: true })}
              >
                <option value={""}>Select day</option>
                {days.map((elem, ind) => {
                  return (
                    <option key={ind} value={elem}>
                      {elem}
                    </option>
                  );
                })}
              </select>
            )}
            {errors.day && (
              <p className="text-red-500">*This field is required</p>
            )}
          </div>

          {/*  Batch */}
          <div className="">
            <label
              htmlFor="batch"
              className="block mb-2 text-sm font-medium text-slate-500 dark:text-white"
            >
              Batch
            </label>
            {batchesLoading ? (
              <span className="loading loading-ring loading-lg"></span>
            ) : (
              <select
                id="batch"
                className="my-inp"
                {...register("batch", { required: true })}
              >
                <option value={""}>Select batch</option>
                {batches.map((elem, ind) => {
                  return (
                    <option key={ind} value={elem}>
                      {elem}
                    </option>
                  );
                })}
              </select>
            )}
            {errors.batch && (
              <p className="text-red-500">*This field is required</p>
            )}
          </div>

          {/*  Year/sem */}
          <div className="">
            <label
              htmlFor="yearSem"
              className="block mb-2 text-sm font-medium text-slate-500 dark:text-white"
            >
              Year/sem
            </label>
            <select
              id="yearSem"
              className="my-inp"
              {...register("yearSem", { required: true })}
            >
              <option value={""}>Select year/sem</option>
              {[
                "1/1",
                "1/2",
                "1/3",
                "2/1",
                "2/2",
                "2/3",
                "3/1",
                "3/2",
                "3/3",
                "4/1",
                "4/2",
                "4/3",
              ].map((elem, ind) => {
                return (
                  <option key={ind} value={elem}>
                    {elem}
                  </option>
                );
              })}
            </select>
            {errors.yearSem && (
              <p className="text-red-500">*This field is required</p>
            )}
          </div>

          {/*  Room */}
          <div className="">
            <label
              htmlFor="room"
              className="block mb-2 text-sm font-medium text-slate-500 dark:text-white"
            >
              Room
            </label>
            <input
              type="text"
              id="room"
              className="my-inp"
              {...register("room", { required: true })}
              placeholder="Enter room"
            />
            {errors.room && (
              <p className="text-red-500">*This field is required</p>
            )}
          </div>

          {/* Row indexes */}
          {coursesLoading ? (
            <span className="loading loading-ring loading-lg"></span>
          ) : eveningRowIndexes.length || regularRowIndexes.length ? (
            <>
              <h2 className="font-semibold !mt-6 !mb-3">Assign classes</h2>
              {(watch("shift") === "Evening"
                ? eveningRowIndexes
                : watch("shift") === "Regular"
                ? regularRowIndexes
                : []
              ).map((elem, ind) => {
                return (
                  <div key={ind} className="">
                    <label
                      htmlFor={`rowIndex-${elem}`}
                      className="block mb-2 text-sm font-medium text-slate-500 dark:text-white"
                    >
                      Row index {elem}
                    </label>
                    <select
                      id={`rowIndex-${elem}`}
                      className="my-inp"
                      {...register(`rowIndex-courseTitle-${elem}`)}
                    >
                      <option value={""}>Select course title</option>
                      {courses?.map((elem, ind) => {
                        return (
                          <option
                            key={ind}
                            value={[
                              elem.courseTitle,
                              elem.courseCode,
                              elem.credit,
                            ]}
                          >
                            {elem.courseTitle}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                );
              })}
            </>
          ) : (
            ""
          )}

          <button type="submit" className="my-btn-one my-1">
            Insert
          </button>
        </form>
        <div className="modal-action fixed top-0 right-1 mt-0">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="text-red-500 text-2xl">
              <FaTimes />
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default InsertRoutine;
