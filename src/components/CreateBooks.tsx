import Button from '@mui/material/Button';
import { useDispatch } from "react-redux";
import { addToList } from "../redux/userSlice";
import buttonStyle from "../styleMUI/styleMUI";
import { BookCreated } from "../types/types";
import { ToastContainer } from 'react-toastify';

const CreateBooks: React.FC<BookCreated> = ({ title, img, id, date, page }) => {

    const dispatch = useDispatch()
    const handleAddToList = (id: string) => {
        dispatch(addToList({ id, title, img, date, page }))
    }

    return (
        <div className="flex flex-col justify-center items-center mt-8">
            <img className="w-80 h-auto border-2 rounded-md" src={img} alt={title} />
            <p className="text-xl mt-2">{title}</p>
            <small className="mt-2 text-center max-w-md break-words text-base">
                {date}
            </small>
            <small className="mt-2 text-center max-w-md break-words text-sm">
                {page}
            </small>
            <Button onClick={() => handleAddToList(id)} variant="contained" style={buttonStyle} >
                Add to Favourite
            </Button>
            <ToastContainer />
        </div>
    );
};

export default CreateBooks;