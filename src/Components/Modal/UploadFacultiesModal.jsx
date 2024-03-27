import { FaXmark } from "react-icons/fa6";

const UploadFacultiesModal = () => {
  return (
    <dialog id="uploadFaculties" className="modal">
      <div className="modal-box">
        <textarea
          name=""
          id=""
          placeholder="Please Write JSON Format"
          className="w-full resize-none border outline-orange-300 border-gray-400 p-3 rounded-lg"
          cols="30"
          rows="10"
        ></textarea>
        <div className="text-right">
          <button className="bg-orange-300 px-10 py-3 rounded-lg font-medium">
            Upload
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

export default UploadFacultiesModal;
