const AddNewBatchModal = () => {
    return (
        <dialog id="add_new_batch_modal" className="modal">
            <div className="modal-box">

                <div>
                    <p>Please type <span>confirm</span> to add new batch</p>
                </div>


                <div className="modal-action">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn">Close</button>
                    </form>
                </div>
            </div>
        </dialog>
    );
};

export default AddNewBatchModal;