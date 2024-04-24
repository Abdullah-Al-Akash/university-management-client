import { useForm } from "react-hook-form";
import { FaTimes } from "react-icons/fa";



const InsertRoutine = ({ setControl, control }) => {

  // TODO: Need to use it to rerender after insert routine
  // { setControl, control }

  const url = `https://routine-management-system-backend.onrender.com/api/v1`;


  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitted },
  } = useForm();
  const handleInsertRoutineFunc = (form) => {
    const { courseTitle, courseCode, semester, credit, regulation } = form
    console.log(form);

  };

  return (
    <dialog id="insertRoutine" className="modal">
      <div className="modal-box">
        <form onSubmit={handleSubmit(handleInsertRoutineFunc)} className="space-y-2 w-full">

          {/*  Semester*/}
          <div className=''>
            <label htmlFor="semester" className="block mb-2 text-sm font-medium text-slate-500 dark:text-white">Semester</label>
            <select id='semester' className='my-inp' {...register("semester", { required: true })}>
              <option value={''}>Select semester</option>
              {
                ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th", "10th", "11th", "12th"].map((elem, ind) => {
                  return <option key={ind} value={elem}>{elem}</option>
                })

              }
            </select>
            {errors.semester && <p className="text-red-500">*This field is required</p>}
          </div>
          
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
          {/*  Batch */}
          <div className=''>
            <label htmlFor="batch" className="block mb-2 text-sm font-medium text-slate-500 dark:text-white">Batch</label>
            <input type="text" id='batch' className='my-inp' placeholder="Enter batch"  {...register("batch", { required: true })} />
            {errors.batch && <p className="text-red-500">*This field is required</p>}
          </div>
          {/*  Regulation */}
          <div className=''>
            <label htmlFor="regulation" className="block mb-2 text-sm font-medium text-slate-500 dark:text-white">Regulation</label>
            <input type="text" id='regulation' className='my-inp' placeholder="Enter regulation"  {...register("regulation", { required: true })} />
            {errors.regulation && <p className="text-red-500">*This field is required</p>}
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

export default InsertRoutine;
