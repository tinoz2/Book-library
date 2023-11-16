import { BooksProps } from "../types/types"
import Button from '@mui/material/Button';
import { useDispatch } from "react-redux";
import { addToList } from "../redux/userSlice";
import buttonStyle from "../styleMUI/styleMUI"
import { ToastContainer } from 'react-toastify';

const Books: React.FC<BooksProps> = ({ id, title, date, page, img }) => {

    const dispatch = useDispatch()
    const handleAddToList = (id: string) => {
        dispatch(addToList({ id, title, date, page, img }))
    }

    return (
        <div className="flex flex-col w-80 m-auto p-6 rounded-md bg-zinc-800 mb-2">
            <img className="w-34" src={img} alt={img} />
            <h2 className="mt-2 text-lg font-bold">Title: {title}</h2>
            <h4 className="my-2 text-lg font-bold">Date: {date}</h4>
            <small className="text-lg font-bold">Pages: {page}</small>
            <Button onClick={() => handleAddToList(id)} variant="contained" style={buttonStyle} >
                Add to Favourite
            </Button>
            <ToastContainer />
        </div>
    )
}

export default Books