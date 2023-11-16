import axios from "axios"
import { useEffect, useState } from 'react'
import { listOfBooks } from "../types/types"
import Loader from "../tools/Loader"
import Books from "./Books"
import { Link } from "react-router-dom"

const ContainerBooks: React.FC = () => {

    const [books, setBooks] = useState<listOfBooks>([])

    useEffect(() => {
        const fetchingData = async () => {
            try {
                const API_KEY = 'AIzaSyDMFs8lr9Y-ilQEj3dSZ2pm6IsVaeqtr0I'
                const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=pride+prejudice&download=epub&key=${API_KEY}`)
                setBooks(response.data.items)
            }
            catch (error) {
                console.error("Error in your request", error)
            }
        }
        fetchingData()
    }, [])

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