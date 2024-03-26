import TableWrapper from '../../Shared/TableWrapper';

const EveningTable = ({ data, loading }) => {
    console.log(data, 'from evening table');
    return (
        <TableWrapper>
            <table className='min-w-full table-auto mb-1 border border-black'>
                <thead>
                    <tr>
                        <th className='border border-black p-3'>Batch</th>
                        <th className='border border-black p-3'>Year/Sem</th>
                        <th className='border border-black p-3'>Sem No.</th>
                        <th className='border border-black p-3'>Room No.</th>
                        <th className='border border-black p-3'>5:30pm - 6:20pm
                        </th>
                        <th className='border border-black p-3'>6:20pm - 7:10pm
                        </th>
                        <th className='border border-black border-b-0 p-3'></th>
                        <th className='border border-black p-3'>7:20pm - 8:10pm
                        </th>
                        <th className='border border-black p-3'>8:10pm - 9:00pm
                        </th>
                    </tr>
                </thead>

                <tbody className=' text-center font-semibold'>
                    {loading
                        ? "loading"
                        : data?.map((elem, ind) => {
                            const { batch, yearSem, sem, room, courses } = elem
                            const classesBeforeBreak = courses.slice(0, 2)
                            const classesAfterBreak = courses.slice(2, 4)
                            return <tr key={ind} >
                                <td className='border border-black p-3'>{batch}</td>
                                <td className='border border-black p-3'>{yearSem}</td>
                                <td className='border border-black p-3'>{sem}</td>
                                <td className='border border-black p-3'>{room}</td>
                                {
                                    classesBeforeBreak[0]?.[1]?.courseCode === classesBeforeBreak[1]?.[2]?.courseCode ? <td className={`border border-black p-3`} colSpan={2}>
                                        {`${classesBeforeBreak[0]?.[1]?.courseCode ?? ''} ${classesBeforeBreak[0]?.[1]?.courseTitle ? `(${classesBeforeBreak[0]?.[1]?.courseTitle})` : ''} ${classesBeforeBreak[0]?.[1]?.teacher?.sortForm ?? ''}`}
                                    </td> : classesBeforeBreak?.map((elem, ind) => <td key={ind} className={`border border-black p-3`}>
                                        {`${elem[ind + 1]?.courseCode ?? ''} ${elem[ind + 1]?.courseTitle ? `(${elem[ind + 1]?.courseTitle})` : ''}  ${elem[ind + 1]?.teacher?.sortForm ?? ''}`}
                                    </td>
                                    )
                                }
                                {ind === 0 && <td rowSpan={data.length}><div className='flex flex-col font-bold'>{"BREAK".split('').map((elem, ind) => <span key={ind}>{elem}</span>)}</div></td>}
                                {
                                    classesAfterBreak[0]?.[3]?.courseCode === classesAfterBreak[1]?.[4]?.courseCode ? <td className={`border border-black p-3`} colSpan={2}>
                                        {`${classesBeforeBreak[0]?.[3]?.courseCode ?? ''} ${classesBeforeBreak[0]?.[3]?.courseTitle ? `(${classesBeforeBreak[0]?.[3]?.courseTitle})` : ''} ${classesBeforeBreak[0]?.[3]?.teacher?.sortForm ?? ''}`}
                                    </td> : classesAfterBreak?.map((elem, ind) => <td key={ind} className={`border border-black p-3`}>
                                        {`${elem[ind + 3]?.courseCode ?? ''} ${elem[ind + 3]?.courseTitle ? `(${elem[ind + 3]?.courseTitle})` : ''} ${elem[ind + 3]?.teacher?.sortForm ?? ''}`}
                                    </td>)
                                }
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </TableWrapper>
    );
};

export default EveningTable;