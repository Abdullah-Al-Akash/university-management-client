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
  const days = watch('shift') === 'Evening' ? ['Friday', 'Saturday', 'Thursday'] : watch('shift') === 'Regular' ? ['Saturday', 'Sunday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'] : []
  const eveningRowIndexes = (watch('shift') === 'Evening' && watch('day') === 'Friday') ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] : (watch('shift') === 'Evening' && (watch('day') !== 'Friday' && watch('day') !== '')) ? [1, 2, 3, 4] : []
  const regularRowIndexes = watch('shift') === 'Regular' ? [1, 2, 3, 4, 5, 6] : []

  // TODO: Need dynamic courses by regulation and need dynamic regulation


  const courses = [
    { "_id": "6628a942c6b06d324d113ef3", "courseCode": "101", "courseTitle": "DSA", "credit": 3, "regulation": "2021" },
    { "_id": "6628a968c6b06d324d113ef5", "courseCode": "100", "courseTitle": "SPL", "credit": 3, "regulation": "2022" },
    { "_id": "6628a976c6b06d324d113ef7", "courseCode": "106", "courseTitle": "BSL", "credit": 3, "regulation": "2024" },
    { "_id": "6628aa6ec6b06d324d113efd", "courseCode": "3054", "courseTitle": "ISL", "credit": 3, "regulation": "2023" },
    { "_id": "6628aad4c6b06d324d113f00", "courseCode": "3052", "courseTitle": "SSL", "credit": 3, "regulation": "2022" },
    { "_id": "6628aaecc6b06d324d113f06", "courseCode": "25", "courseTitle": "NPG", "credit": 3, "regulation": "2021" },
    { "_id": "6628ab3cc6b06d324d113f0a", "courseCode": "215", "courseTitle": "Testing and maintenance", "credit": 3, "regulation": "2022" },
    { "_id": "6628ab48c6b06d324d113f0c", "courseCode": "245", "courseTitle": "Database", "credit": 3, "regulation": "2022" }
  ];
  const regulations = [2021, 2022, 2023, 2024]


  const handleInsertRoutineFunc = (form) => {
    const courses = []
    const rowIndexes = watch('shift') === 'Regular' ? regularRowIndexes : watch('shift') === 'Evening' ? eveningRowIndexes : []
    let countRowIndex = 0
    const {day, batch, sem, yearSem, shift, regulation } = form

    Object.keys(form).forEach(key => {
      if (key.startsWith('rowIndex-courseTitle') && countRowIndex < rowIndexes.length) {
        countRowIndex += 1

        const rowIndex = Number(key.split('rowIndex-courseTitle-')[1])
        const courseTitle = watch(key).split(',')[0]
        const courseCode = watch(key).split(',')[1]
        const credit = watch(key).split(',')[2] ? Number(watch(key).split(',')[2]) : ''

        const courseObj = {
          rowIndex,
          courseTitle,
          courseCode,
          credit, 
          teacher: '',
        }
        courses.push(courseObj)
      }
    })


    // console.log(form, 'form');
    // console.log(courses, 'courses');
    // console.log(countRowIndex, 'countRowIndex after');
    const newRoutine = {day, batch:Number(batch), sem, yearSem, shift, regulation, room: '', courses}
    console.log(newRoutine, 'newRoutine');


    axios.post(`${import.meta.env.VITE_SERVER_BASE_URL}/routine/insert-routine`, newRoutine).then(res => {
      console.log(res.data);
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
    <dialog id="insertRoutine" className="modal">
      <div className="modal-box">
        <form onSubmit={handleSubmit(handleInsertRoutineFunc)} className="space-y-2 w-full">


          {/*  Semester*/}
          <div className=''>
            <label htmlFor="semester" className="block mb-2 text-sm font-medium text-slate-500 dark:text-white">Semester</label>
            <select id='semester' className='my-inp' {...register("sem", { required: true })}>
              <option value={''}>Select semester</option>
              {
                ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th", "10th", "11th", "12th"].map((elem, ind) => {
                  return <option key={ind} value={elem}>{elem}</option>
                })

              }
            </select>
            {errors.sem && <p className="text-red-500">*This field is required</p>}
          </div>

          {/*  Regulation */}
          <div className=''>
            <label htmlFor="regulation" className="block mb-2 text-sm font-medium text-slate-500 dark:text-white">Regulation</label>
            <select id='regulation' className='my-inp' {...register("regulation", { required: true })}>
              <option value={''}>Select regulation</option>
              {
                regulations.map((elem, ind) => {
                  return <option key={ind} value={elem}>{elem}</option>
                })

              }
            </select>
            {errors.regulation && <p className="text-red-500">*This field is required</p>}
          </div>

          {/*  Shift */}
          <div className=''>
            <label htmlFor="shift" className="block mb-2 text-sm font-medium text-slate-500 dark:text-white">Shift</label>
            <select id='shift' className='my-inp' {...register("shift", { required: true })}>
              <option value={''}>Select shift</option>
              {
                ['Regular', 'Evening'].map((elem, ind) => {
                  return <option key={ind} value={elem}>{elem}</option>
                })

              }
            </select>
            {errors.shift && <p className="text-red-500">*This field is required</p>}
          </div>

          {/*  Day */}
          <div className=''>
            <label htmlFor="day" className="block mb-2 text-sm font-medium text-slate-500 dark:text-white">Day</label>
            {!days.length > 0 ? <h2 className="text-red-500 font-semibold">Select shift first!</h2> : <select id='day' className='my-inp' {...register("day", { required: true })}>
              <option value={''}>Select day</option>
              {days.map((elem, ind) => {
                return <option key={ind} value={elem}>{elem}</option>
              })

              }
            </select>}
            {errors.day && <p className="text-red-500">*This field is required</p>}
          </div>

          {/*  Batch */}
          <div className=''>
            <label htmlFor="batch" className="block mb-2 text-sm font-medium text-slate-500 dark:text-white">Batch</label>
            <input type="text" id='batch' className='my-inp' placeholder="Enter batch"  {...register("batch", { required: true })} />
            {errors.batch && <p className="text-red-500">*This field is required</p>}
          </div>

          {/*  Year/sem */}
          <div className=''>
            <label htmlFor="yearSem" className="block mb-2 text-sm font-medium text-slate-500 dark:text-white">Year/sem</label>
            <input type="text" id='yearSem' className='my-inp' placeholder="Enter yearSem - (ex: 2/3)"  {...register("yearSem", { required: true })} />
            {errors.yearSem && <p className="text-red-500">*This field is required</p>}
          </div>

          {/* Row indexes */}
          {eveningRowIndexes.length || regularRowIndexes.length ?
            <>
              <h2 className="font-semibold !mt-6 !mb-3">Assign classes</h2>
              {(watch('shift') === 'Evening' ? eveningRowIndexes : watch('shift') === 'Regular' ? regularRowIndexes : []).map((elem, ind) => {
                return <div key={ind} className=''>
                  <label htmlFor={`rowIndex-${elem}`} className="block mb-2 text-sm font-medium text-slate-500 dark:text-white">Row index {elem}</label>
                  <select id={`rowIndex-${elem}`} className='my-inp' {...register(`rowIndex-courseTitle-${elem}`)}>
                    <option value={''}>Select course title</option>
                    {
                      courses.filter(elem => elem?.regulation == watch('regulation'))?.map((elem, ind) => {
                        return <option key={ind} value={[elem.courseTitle, elem.courseCode, elem.credit]}>{elem.courseTitle}</option>
                      })
                    }
                  </select>
                </div>
              })}</> : ''}


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
