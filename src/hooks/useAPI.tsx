import axios from "axios"
import { useState, useEffect } from "react"
import { listOfBooks } from "../types/types"

const useAPI = () => {

    const [books, setBooks] = useState<listOfBooks>([])

    useEffect(() => {
        const fetchingData = async () => {
            try {
                const API_KEY = 'AIzaSyDMFs8lr9Y-ilQEj3dSZ2pm6IsVaeqtr0I'
                const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=pride+prejudice&download=epub&key=${API_KEY}`)
                setBooks(response.data.items)
            }
            catch (error) {
                console.log("Error in your request", error)
            }
        }
        fetchingData()
    }, [])

    return {
        books
    }
}

export default useAPI