import { Button } from '@mui/material';
import Form from 'react-bootstrap/Form';
import { buttonStyleCreate } from '../styleMUI/styleMUI';
import { FormEvent, useState } from 'react';
import CreateBooks from './CreateBooks';
import { BookCreated, listOfBookCreated } from '../types/types';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';

const ContainerCreateBooks: React.FC = () => {

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

    return (
        <div>
            <Link to='/' className="button-home">Home</Link>
            <Link to='/favs' className="button-home">Favs</Link>
            <h2 className="text-5xl text-center font-extrabold my-4">CreateBooks</h2>
            <Form onSubmit={handleSubmit} className='flex flex-col justify-center items-center'>
                <Form.Control className='p-2 rounded-sm my-2 w-80 text-zinc-950'
                    style={{ fontStyle: 'italic' }}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    size="lg"
                    type="text"
                    placeholder="Book title, Ex: 'Dune'" />

                <Form.Control className='p-2 rounded-sm my-2 w-80 text-zinc-950'
                    style={{ fontStyle: 'italic' }}
                    value={inputDate}
                    onChange={(e) => setInputDate(e.target.value)}
                    size="lg"
                    type="text"
                    placeholder="Book release date, Ex: '1965'" />

                <Form.Control className='p-2 rounded-sm my-2 w-80 text-zinc-950'
                    style={{ fontStyle: 'italic' }}
                    value={inputPage}
                    onChange={(e) => setInputPage(e.target.value)}
                    size="lg"
                    type="text"
                    placeholder="Book pages, Ex: '794'" />

                <Form.Control className='p-2 rounded-sm my-2'
                    type="file"
                    key={fileInputKey}
                    onChange={handleImageChange} />

                <Button type='submit'
                    style={buttonStyleCreate}
                >Submit</Button>

            </Form>
            <ul>
                {
                    createdBooks.map((book: BookCreated, index: number) => (
                        <CreateBooks
                            key={index}
                            id={book.id}
                            title={book.title}
                            img={book.img}
                            date={book.date}
                            page={book.page}
                        />
                    ))
                }
            </ul>
        </div>
    )
}

export default ContainerCreateBooks