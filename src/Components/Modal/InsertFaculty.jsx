import axios from "axios";
import { useForm } from "react-hook-form";
import { FaTimes } from "react-icons/fa";
import { Bounce, toast } from "react-toastify";



const InsertFaculty = ({ setControl, control }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitted },
  } = useForm();



  const handleInsertRoutineFunc = (form) => {
 
    // const {fullName, sortForm} = form

    axios.post(`${import.meta.env.VITE_SERVER_BASE_URL}/teacher/create-teacher`, form).then(res => {
      setControl(!control)
      toast.success(res.data?.message, {
        position: "bottom-right",
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
      console.log(e.response);
      toast.error(e.response?.data?.errorMessage || e.response?.data?.message, {
        position: "bottom-right",
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
    <dialog id="insertFacultyModal" className="modal">
      <div className="modal-box">
        <form onSubmit={handleSubmit(handleInsertRoutineFunc)} className="space-y-2 w-full">


  

          {/*  fullName */}
          <div className=''>
            <label htmlFor="fullName" className="block mb-2 text-sm font-medium text-slate-500 dark:text-white">Full name</label>
            <input type="text" id='fullName' className='my-inp' placeholder="Enter full name"  {...register("fullName", { required: true })} />
            {errors.fullName && <p className="text-red-500">*This field is required</p>}
          </div>

          {/*  Short form */}
          <div className=''>
            <label htmlFor="shortForm" className="block mb-2 text-sm font-medium text-slate-500 dark:text-white">Short form</label>
            <input type="text" id='shortForm' className='my-inp' placeholder="Enter short form"  {...register("sortForm", { required: true })} />
            {errors.sortForm && <p className="text-red-500">*This field is required</p>}
          </div>


          <button type="submit" className="my-btn-one my-1">Insert</button>


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

export default InsertFaculty;
