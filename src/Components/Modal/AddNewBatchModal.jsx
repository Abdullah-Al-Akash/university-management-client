
import { FaXmark } from "react-icons/fa6";

const AddNewBatchModal = () => {

    const addNewBatchHandler = ()=> {
        // fetch({method: 'POST', url: 'https://routine-management-system-backend.onrender.com/api/v1/routine'})
    }

    return (
        <dialog id="add_new_batch_modal" className="modal">
            <div className="modal-box">

                <div className="space-y-4">
                    <label htmlFor="confirm" className="font-semibold">Please type <span className="font-bold">confirm</span> to add new batch</label>
                    <input type="text" placeholder="confirm" id="confirm" className="my-inp"/>
                    <button type="submit" className="my-btn-one">Submit</button>
                </div>


                <div className="modal-action absolute top-0 right-1 mt-0">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="text-red-500 text-2xl"><FaXmark /></button>
                    </form>
                </div>
            </div>
        </dialog>
    );
};

export default AddNewBatchModal;