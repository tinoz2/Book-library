import useAPI from "../hooks/useAPI"
import Loader from "../tools/Loader"
import Books from "./Books"
import { Link } from "react-router-dom"

const ContainerBooks: React.FC = () => {

    const { books } = useAPI()

    return (
        <div>
            <h1 className=" font-extrabold text-5xl text-center mb-4 text-zinc-50 uppercase mt-4">Books Page</h1>
            <div className="m-12 text-center">
                <Link to='/favs' className="button-home">Favourites Books</Link>
                <Link to='/create' className="button-home">Create books</Link>
            </div>
            <ul className="grid">
                {
                    books.length > 0 ? (
                        books.map((b: any) => (
                            <Books
                                key={b.id}
                                id={b.id}
                                title={b.volumeInfo.title}
                                date={b.volumeInfo.publishedDate}
                                page={b.volumeInfo.pageCount}
                                img={b.volumeInfo.imageLinks.thumbnail}
                            />
                        ))
                    )
                        : (
                            <Loader />
                        )
                }
            </ul>
        </div>
    )
}

export default ContainerBooks