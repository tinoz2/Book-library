import { useState, FormEvent } from "react"
import { listOfBookCreated } from "../types/types"
import { v4 as uuidv4 } from 'uuid';

const useCreateBooks = () => {

    const [input, setInput] = useState('')
    const [inputDate, setInputDate] = useState('')
    const [inputPage, setInputPage] = useState('')
    const [imageInput, setImageInput] = useState<File | null>(null)
    const [createdBooks, setCreatedBooks] = useState<listOfBookCreated>([]);
    const [fileInputKey, setFileInputKey] = useState<number>(0)

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const newBookTitle = input.trim();
        const newBookDate = inputDate.trim()
        const newBookPage = inputPage.trim()

        if (newBookTitle && newBookDate && newBookPage && imageInput) {
            const newBook = {
                id: uuidv4(),
                title: newBookTitle,
                date: newBookDate,
                page: newBookPage,
                img: URL.createObjectURL(imageInput)
            }
            setCreatedBooks((prevBooks) => [...prevBooks, newBook] as listOfBookCreated)
        }

        setInput('')
        setInputDate('')
        setInputPage('')
        setImageInput(null)
        setFileInputKey((prevKey) => prevKey + 1)
    }

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setImageInput(e.target.files[0]);
        }
    };

    return {
        handleSubmit,
        input,
        setInput,
        inputDate,
        setInputDate,
        inputPage,
        setInputPage,
        fileInputKey,
        handleImageChange,
        createdBooks
    }
}

export default useCreateBooks