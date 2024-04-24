import axios from "axios";
import { useForm } from "react-hook-form";
import { FaTimes } from "react-icons/fa";
import { Bounce, toast } from "react-toastify";



const InsertCourse = ({ setControl, control }) => {

    // TODO: Need to use it to rerender after insert routine
    // { setControl, control }

    const url = `https://routine-management-system-backend.onrender.com/api/v1`;

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isSubmitted },
    } = useForm();
    const handleInsertCourseFunc = (form) => {
        const { courseTitle, courseCode, credit, regulation } = form
        axios.post(`${url}/course/create-course`, {
            courseTitle, courseCode, credit, regulation
        }).then(res => {
            console.log(res.data);
            toast.success(res.data?.message, {
                position: "bottom-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        }).catch(e => {
            toast.error(e.response?.data?.errorMessage, {
                position: "bottom-center",
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

    };

    return (
        <dialog id="insertCourse" className="modal">
            <div className="modal-box">
                <form onSubmit={handleSubmit(handleInsertCourseFunc)} className="space-y-2 w-full">


                    {/*  Course title */}
                    <div className=''>
                        <label htmlFor="courseTitle" className="block mb-2 text-sm font-medium text-slate-500 dark:text-white">Course title</label>
                        <input type="text" id='courseTitle' className='my-inp' placeholder="Enter course title"  {...register("courseTitle", { required: true })} />
                        {errors.courseTitle && <p className="text-red-500">*This field is required</p>}
                    </div>
                    {/*  Course code */}
                    <div className=''>
                        <label htmlFor="courseCode" className="block mb-2 text-sm font-medium text-slate-500 dark:text-white">Course code</label>
                        <input type="text" id='courseCode' className='my-inp' placeholder="Enter course code"  {...register("courseCode", { required: true })} />
                        {errors.courseCode && <p className="text-red-500">*This field is required</p>}
                    </div>
                    {/*  Credit */}
                    <div className=''>
                        <label htmlFor="credit" className="block mb-2 text-sm font-medium text-slate-500 dark:text-white">Credit</label>
                        <input type="text" id='credit' className='my-inp' placeholder="Enter credit"  {...register("credit", { required: true })} />
                        {errors.credit && <p className="text-red-500">*This field is required</p>}
                    </div>
                    {/*  Regulation */}
                    <div className=''>
                        <label htmlFor="regulation" className="block mb-2 text-sm font-medium text-slate-500 dark:text-white">Regulation</label>
                        <input type="text" id='regulation' className='my-inp' placeholder="Enter regulation"  {...register("regulation", { required: true })} />
                        {errors.regulation && <p className="text-red-500">*This field is required</p>}
                    </div>

                    <button type="submit" className="my-btn-one my-1">Insert Course</button>


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

export default InsertCourse;
