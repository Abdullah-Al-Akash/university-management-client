import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { FaBackward } from "react-icons/fa";
import UploadFacultiesModal from "../Modal/UploadFacultiesModal";
import Loading from "../../Shared/Loading";
import { CgClose } from "react-icons/cg";
import Swal from "sweetalert2";
import axios from "axios";
import InsertCourse from "../Modal/InsertCourse";
import { ToastContainer } from "react-toastify";

const CoursesPage = () => {
    const navigate = useNavigate();
    const [courses, setCourses] = useState([]);
    const [coursesLoading, setCoursesLoading] = useState(true);
    const [control, setControl] = useState(false);
    useEffect(() => {
        setCoursesLoading(true)
        axios(`${import.meta.env.VITE_SERVER_BASE_URL}/course/get-all-courses`).then(res => {
            // console.log(res.data);
            setCourses(res.data?.data)
            setCoursesLoading(false)
        }).catch(e => {
            console.log(e);
            setCoursesLoading(false)
        })
    }, [control]);

    const handleDeleteCourse = (courseName, _id) => {
        Swal.fire({
            title: "Are you sure?",
            text: `You won't to delete this course: "${courseName}"`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`${import.meta.env.VITE_SERVER_BASE_URL}/course/delete-course/${_id}`).then(res => {
                    console.log(res.data);
                    setControl(!control)
                }).catch(e => {
                    console.log(e);
                })

            }
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
                {/* Insert course */}
                <button
                    onClick={() => document.getElementById("insertCourse").showModal()}
                    className="relative px-5 py-2 font-medium text-white group"
                >
                    <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-purple-500 group-hover:bg-purple-700 group-hover:skew-x-12"></span>
                    <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-purple-700 group-hover:bg-purple-500 group-hover:-skew-x-12"></span>
                    <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-purple-600 -rotate-12"></span>
                    <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-purple-400 -rotate-12"></span>
                    <span className="relative">Insert course</span>
                </button>
            </div>

            <div className="text-end my-3">
                {coursesLoading ? (
                    <Loading />
                ) : (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                        {courses?.map((course, ind) => {
                            const { courseTitle, courseCode, credit, _id } = course;
                            return (
                                <div
                                    key={ind}
                                    className="rounded bg-slate-100 border shadow p-2 space-y-2 flex items-center justify-center flex-col relative"
                                >
                                    <h2 className="font-bold">{courseTitle}</h2>
                                    <h2 className="font-semibold"><span className="text-gray-500">Course code:</span> {courseCode}</h2>
                                    <h2 className="font-semibold"><span className="text-gray-500">Credit:</span> {credit}</h2>
                                    <button
                                        onClick={() => handleDeleteCourse(courseTitle, _id)}
                                        className="absolute -top-4 -right-2 cursor-pointer text-red-500"
                                    >
                                        <CgClose />
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>

            {/* Modal */}
            <InsertCourse control={control} setControl={setControl} />

            {/* Toast container */}
            <ToastContainer
                position="bottom-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    );
};

export default CoursesPage;
