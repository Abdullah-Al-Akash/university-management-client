import { useState } from "react";
import TableWrapper from "../../Shared/TableWrapper";
import TeacherAssign from "../Modal/TeacherAssign";
import Loading from "../../Shared/Loading";

const EveningTable = ({
    data,
    loading,
    selectShift,
    regularDayTab,
    eveningDayTab,
    setControl,
    control,
}) => {
    const [courseId, setCourseId] = useState("");
    const [rowIndex, setRowIndex] = useState(null);
    console.log(data, "from evening table");

    if (loading) {
        return <Loading></Loading>;
      }

    return (
            <TableWrapper>
                <table className="min-w-full table-auto mb-1 border border-black">
                    <thead>
                        <tr>
                            <th className="border border-black p-3">Batch</th>
                            <th className="border border-black p-3">Year/Sem</th>
                            <th className="border border-black p-3">Sem No.</th>
                            <th className="border border-black p-3">Room No.</th>
                            <th className="border border-black p-3">5:30pm - 6:20pm</th>
                            <th className="border border-black p-3">6:20pm - 7:10pm</th>
                            <th className="border border-black border-b-0 p-3"></th>
                            <th className="border border-black p-3">7:20pm - 8:10pm</th>
                            <th className="border border-black p-3">8:10pm - 9:00pm</th>
                        </tr>
                    </thead>

                    <tbody className=" text-center font-semibold">
                        {loading
                            ? "loading"
                            : data?.map((elem, ind) => {
                                const { batch, yearSem, sem, room, courses, _id } = elem;
                                const classesBeforeBreak = courses.slice(0, 2);
                                const classesAfterBreak = courses.slice(2, 4);

                                console.log(classesBeforeBreak);
                                return (
                                    <tr key={ind}>
                                        <td className="border border-black p-3">{batch}</td>
                                        <td className="border border-black p-3">{yearSem}</td>
                                        <td className="border border-black p-3">{sem}</td>
                                        <td className="border border-black p-3">{room}</td>
                                        {classesBeforeBreak[0]?.courseCode ===
                                            classesBeforeBreak[1]?.courseCode ? (
                                            <td
                                                onClick={() => {
                                                    if (
                                                        classesBeforeBreak[0]?.courseCode ||
                                                        classesBeforeBreak[0]?.courseTitle
                                                    ) {
                                                        setCourseId(_id);
                                                        setRowIndex(classesBeforeBreak[0]?.rowIndex);
                                                    }
                                                }}
                                                className={`border border-black p-3`}
                                                onDoubleClick={() => {
                                                    if (
                                                        classesBeforeBreak[0]?.courseCode ||
                                                        classesBeforeBreak[0]?.courseTitle
                                                    ) {
                                                        document
                                                            .getElementById("teacher_assign")
                                                            .showModal();
                                                    }
                                                }}
                                                colSpan={2}
                                            >
                                                {`${classesBeforeBreak[0]?.courseCode ?? ""} ${classesBeforeBreak[0]?.courseTitle
                                                    ? `(${classesBeforeBreak[0]?.courseTitle})`
                                                    : ""
                                                    } ${classesBeforeBreak[0]?.teacher?.sortForm ?? ""}`}
                                            </td>
                                        ) : (
                                            classesBeforeBreak?.map((elem, ind) => (

                                                <td
                                                    key={ind}
                                                    onClick={() => {
                                                        if (elem?.courseCode || elem?.courseTitle) {
                                                            setCourseId(_id);
                                                            setRowIndex(elem?.rowIndex);
                                                        }
                                                    }}
                                                    onDoubleClick={() => {
                                                        if (elem?.courseCode || elem?.courseTitle) {
                                                            document
                                                                .getElementById("teacher_assign")
                                                                .showModal();
                                                        }
                                                    }}
                                                    className={`border border-black p-3`}
                                                >
                                                    {`${elem?.courseCode ?? ""} ${elem?.courseTitle ? `(${elem?.courseTitle})` : ""
                                                        }  ${elem?.teacher?.sortForm ?? ""}`}
                                                </td>
                                            ))
                                        )}
                                        {ind === 0 && (
                                            <td rowSpan={data.length}>
                                                <div className="flex flex-col font-bold">
                                                    {"BREAK".split("").map((elem, ind) => (
                                                        <span key={ind}>{elem}</span>
                                                    ))}
                                                </div>
                                            </td>
                                        )}
                                        {classesAfterBreak[0]?.courseCode ===
                                            classesAfterBreak[1]?.courseCode ? (
                                            <td
                                                onClick={() => {
                                                    if (
                                                        classesAfterBreak[0]?.courseCode ||
                                                        classesAfterBreak[0]?.courseTitle
                                                    ) {
                                                        setCourseId(_id);
                                                        setRowIndex(classesAfterBreak[0]?.rowIndex);
                                                    }
                                                }}
                                                onDoubleClick={() => {
                                                    if (
                                                        classesAfterBreak[0]?.courseCode ||
                                                        classesAfterBreak[0]?.courseTitle
                                                    ) {
                                                        document
                                                            .getElementById("teacher_assign")
                                                            .showModal();
                                                    }
                                                }}
                                                className={`border border-black p-3`}
                                                colSpan={2}
                                            >
                                                {`${classesAfterBreak[0]?.courseCode ?? ""} ${classesAfterBreak[0]?.courseTitle
                                                    ? `(${classesAfterBreak[0]?.courseTitle})`
                                                    : ""
                                                    } ${classesAfterBreak[0]?.teacher?.sortForm ?? ""}`}
                                            </td>
                                        ) : (
                                            classesAfterBreak?.map((elem, ind) => (
                                                <td
                                                    key={ind}
                                                    onClick={() => {
                                                        if (elem?.courseCode || elem?.courseTitle) {
                                                            setCourseId(_id);
                                                            setRowIndex(elem?.rowIndex);
                                                        }
                                                    }}
                                                    onDoubleClick={() => {
                                                        if (elem?.courseCode || elem?.courseTitle) {
                                                            document
                                                                .getElementById("teacher_assign")
                                                                .showModal();
                                                        }
                                                    }}
                                                    className={`border border-black p-3`}
                                                >
                                                    {`${elem?.courseCode ?? ""} ${elem?.courseTitle ? `(${elem?.courseTitle})` : ""
                                                        } ${elem?.teacher?.sortForm ?? ""}`}
                                                </td>
                                            ))
                                        )}
                                    </tr>
                                );
                            })}
                    </tbody>
                </table>


            {/* Teacher assign modal  */}
            <TeacherAssign
                courseId={courseId}
                rowIndex={rowIndex}
                selectShift={selectShift}
                regularDayTab={regularDayTab}
                eveningDayTab={eveningDayTab}
                setControl={setControl}
                control={control}
            />
            </TableWrapper>
    );
};

export default EveningTable;
