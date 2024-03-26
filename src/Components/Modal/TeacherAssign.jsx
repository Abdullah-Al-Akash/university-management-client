const TeacherAssign = () => {
  return (
    <dialog id="teacher_assign" className="modal">
      <div className="modal-box">
        <div className="flex flex-col gap-2 justify-start items-start">
          <input className="my-inp" type="search" name="" id="" />{" "}
          <button className="my-btn-one">Submit</button>
        </div>
        <div className="modal-action absolute top-0 right-1 mt-0">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="text-red-500 text-2xl">
              {/* <FaXmark /> */} X
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default TeacherAssign;
