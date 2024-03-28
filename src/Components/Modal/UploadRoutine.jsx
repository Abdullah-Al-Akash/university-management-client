import { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import "./UploadRoutine.css";
import Swal from "sweetalert2";
const UploadRoutine = ({ setControl, control }) => {
  const [error, setError] = useState(null);
  const [lineCount, setLineCount] = useState(10);
  const [textareaStyle, setTextareaStyle] = useState({
    outlineColor: "black",
  });

  const url = `https://routine-management-system-backend.onrender.com/api/v1`;

  useEffect(() => {
    const textarea = document.querySelector("textarea[name='routineByJSON']");
    if (textarea) {
      textarea.scrollTop = textarea.scrollHeight; // Auto scroll to bottom on mount
    }
  }, []);

  const handleInputChange = (event) => {
    const textAreaValue = event.target.value;
    const lines = textAreaValue.split("\n").length;
    setLineCount(lines === 0 ? 1 : lines);
    if (textAreaValue.trim() === "") {
      setError(null); // Clear error if textarea is empty
      setTextareaStyle({ outlineColor: "black" }); // Reset outline color
    } else {
      try {
        JSON.parse(textAreaValue);
        setError(null);
        setTextareaStyle({ outlineColor: "black" }); // Reset outline color
      } catch (error) {
        setError(extractErroneousData(error.message)); // Set error to the portion of data causing the error
        setTextareaStyle({ outlineColor: "red" }); // Set outline color to red
      }
    }
  };

  const handleUploadRoutine = async (e) => {
    e.preventDefault();

    try {
      const textAreaValue = e.target.elements.routineByJSON.value;
      if (!isValidJSON(textAreaValue)) {
        throw new Error("Input is not in valid JSON format");
      }

      const dataArray = JSON.parse(textAreaValue);

      const response = await fetch(`${url}/routine/insert-routines`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataArray),
      });

      if (response.ok) {
        console.log("Routine uploaded successfully");
        // Reset textarea value after successful upload
        e.target.elements.routineByJSON.value = "";
        setControl(!control);
        const modal = document.getElementById("uploadRoutine");
        modal.close();
        Swal.fire({
          title: "Upload Routine Successfully!",
          position: "top-center",
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        setControl(!control);
        throw new Error("Failed to upload routine");
      }
    } catch (error) {
      console.error("Error:", error.message);
      setError(error.message);
    }
  };

  const isValidJSON = (str) => {
    try {
      JSON.parse(str);
      return true;
    } catch (error) {
      return false;
    }
  };

  const extractErroneousData = (errorMessage) => {
    const matches = errorMessage.match(/line (\d+)/);
    if (matches) {
      return `Error: ${errorMessage}`;
    } else {
      return errorMessage;
    }
  };

  const renderLineNumbers = () => {
    const lineNumberArray = [];
    for (let i = 1; i <= lineCount; i++) {
      const lineNumberClassName =
        error && error.includes(`line ${i}`)
          ? "line-number error"
          : "line-number";
      const style =
        error && error.includes(`line ${i}`)
          ? { backgroundColor: "red", borderRadius: "5px", color: "white" }
          : {};
      lineNumberArray.push(
        <div key={i} className={lineNumberClassName} style={style}>
          {i}
        </div>
      );
    }
    return lineNumberArray;
  };

  return (
    <dialog id="uploadRoutine" className="modal">
      <div className="modal-box flex">
        <form
          className="textarea-container flex-grow"
          onSubmit={handleUploadRoutine}
        >
          <div className="overflow-y-auto h-[550px] border outline-dark border-gray-400">
            <div className="flex min-h-[550p] ">
              <div className="mt-[10px] ps-2 ">
                <div className="line-numbers leading-[20.9px] text-[18px] text-center">
                  {renderLineNumbers()}
                </div>
              </div>
              <textarea
                name="routineByJSON"
                placeholder="Please Write JSON Format"
                className="w-full resize-none  p-3 rounded-lg min-h-[550px] leading-[24.9px] text-[18px] border-0 !outline-none"
                style={textareaStyle}
                rows={lineCount} // Set number of rows dynamically
                onChange={handleInputChange}
              ></textarea>
            </div>
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <div className="text-right">
            <button
              type="submit"
              className="mt-2 bg-purple-500 hover:bg-purple-800 hover:text-white px-10 py-3 rounded-lg font-medium "
              disabled={error}
            >
              Upload Routine
            </button>
          </div>
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

export default UploadRoutine;
