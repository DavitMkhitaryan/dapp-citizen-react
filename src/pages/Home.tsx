import Modal from "../components/Modal";
import Pagination from "../components/Pagination";
import { TailSpin } from 'react-loader-spinner';
import useCitizensList from "../hooks/useCitizensList";
import useCitizensNotes from "../hooks/useCitizensNotes";

const Home = () => {

    const { currentTableData, citizenList, currentPage, pageSize, setCurrentPage } = useCitizensList();
    const { modalDisplayed, setModalDisplayed, handleModalClose, currentNote, noteLoading, setSelectedCitizenNote } = useCitizensNotes();

    return (
        <main className="h-screen flex items-center justify-center flex-col gap-5">
            {modalDisplayed && <Modal onClose={handleModalClose}>
                {noteLoading ? <TailSpin
                    height="30"
                    width="30"
                    color="rgb(74 222 128)"
                    ariaLabel="tail-spin-loading"
                    radius="1"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                /> : <><p className="text-lg font-bold text-green-500">Notes: </p>
                    <p className="truncate">{currentNote}</p></>}
            </Modal>}
            <div className="flex justify-between text-base w-[20rem] px-1 md:text-lg md:w-[50rem] md:px-1">
                <p>Citizens List</p>
                <p>Total Records: <span className="font-bold text-green-500">{citizenList.length}</span></p>
            </div>
            <table className="border-2 border-gray table-fixed w-[22rem] md:w-[50rem] h-[18rem] m-12 text-center text-sm md:text-base">
                <thead className="border-b-2 shadow-sm py-2 bg-gray-200">
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody className="h-[100%]">
                    {currentTableData.map((citizen) => {
                        return (
                            <tr
                                key={citizen.id}
                                className='hover:bg-gray-200 hover:cursor-pointer active:bg-gray-400'
                                onClick={() => {
                                    setSelectedCitizenNote(citizen.id);
                                    setModalDisplayed(true);
                                }}
                            >
                                <td>{citizen.id}</td>
                                <td>{citizen.name}</td>
                                <td>{citizen.age}</td>
                                <td>{citizen.city}</td>
                            </tr>
                        );
                    })}
                </tbody>
                <Pagination
                    className="border-t-2 py-1.3 w-[21.8rem] md:w-[49.85rem] flex justify-center bg-gray-200"
                    currentPage={currentPage}
                    totalCount={citizenList.length}
                    pageSize={pageSize}
                    onPageChange={(page: any) => setCurrentPage(page)}
                    siblingCount={1} />
            </table>
        </main>
    );
}

export default Home;