import { Button } from '@mui/material';
import Form from 'react-bootstrap/Form';
import { buttonStyleCreate } from '../styleMUI/styleMUI';
import CreateBooks from './CreateBooks';
import { BookCreated } from '../types/types';
import { Link } from 'react-router-dom';
import useCreateBooks from '../hooks/useCreateBooks';

const ContainerCreateBooks: React.FC = () => {

    const { handleSubmit, input, setInput, inputDate, setInputDate,
    inputPage, setInputPage, fileInputKey, handleImageChange, createdBooks }
    = useCreateBooks()

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