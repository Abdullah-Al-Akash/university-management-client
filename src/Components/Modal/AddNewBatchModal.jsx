import { useForm } from "react-hook-form";
import { FaXmark } from "react-icons/fa6";

const AddNewBatchModal = () => {
  <button className="text-red-500 text-2xl" onClick={() => reset()}>
    <FaXmark />
  </button>;
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm(); // initialize the hook
  const addNewBatchHandler = (form) => {
    const { confirm } = form;
    if (confirm) {
      fetch(
        `https://routine-management-system-backend.onrender.com/api/routine/add-new-batch`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({}),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    }
  };

  console.log(errors, 12);

  return (
    <dialog id="add_new_batch_modal" className="modal">
      <div className="modal-box">
        <form className="space-y-4" onSubmit={handleSubmit(addNewBatchHandler)}>
          <label htmlFor="confirm" className="font-semibold">
            Please type <span className="font-bold">Confirm</span> to add new
            batch
          </label>
          <div className="space-y-2">
            <input
              type="text"
              placeholder="Confirm"
              id="confirm"
              {...register("confirm", {
                validate: (value) =>
                  value === "Confirm" || 'Value must be "Confirm"',
              })}
              className="my-inp"
            />
            {/* {errors.confirm?.message && <span className="text-red-500">*{errors.confirm?.message}</span>} */}
          </div>

          <button
            type="submit"
            className={`my-btn-one ${
              watch("confirm") != "Confirm" && "!opacity-35"
            }`}
            disabled={watch("confirm") != "Confirm"}
          >
            Submit
          </button>
        </form>

        <div className="modal-action absolute top-0 right-1 mt-0">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="text-red-500 text-2xl" onClick={() => reset()}>
              <FaXmark />
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default AddNewBatchModal;
