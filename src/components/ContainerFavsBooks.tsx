import { useSelector } from "react-redux"
import { RootState } from '../redux/store';
import FavsBooks from "./FavsBooks";
import { Link } from "react-router-dom";
import Loader from "../tools/Loader";
import { ToastContainer } from "react-toastify";

const ContainerFavsBooks: React.FC = () => {

    const favBooks = useSelector((state: RootState) => state.booksData)

    return (
        <div>
            <Link to='/' className="button-home">Home</Link>
            <Link to='/create' className="button-home">Create</Link>
            <h1 className="text-center text-5xl font-extrabold my-6">Favbooks</h1>
            <ul>
                {
                    favBooks.length > 0 ?
                        favBooks.map((favbook: any) => (
                            <FavsBooks
                                key={favbook.id}
                                id={favbook.id}
                                title={favbook.title}
                                date={favbook.date}
                                page={favbook.page}
                                img={favbook.img}
                            />
                        ))
                        :
                        <Loader />
                }
            </ul>
            <ToastContainer />
        </div>
    )
}

export default ContainerFavsBooks