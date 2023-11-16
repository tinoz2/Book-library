import React from "react";
import { useDispatch } from "react-redux";
import { BooksProps } from "../types/types";
import { removeToList } from "../redux/userSlice";
import { Button } from "@mui/material";

const FavsBooks: React.FC<BooksProps> = ({ img, date, title, page, id }) => {

    const dispatch = useDispatch();
    const handleRemoveToList = (bookId: string) => {
        dispatch(removeToList(bookId));
    };

    return (
        <>
            <div className="flex justify-center flex-col items-center bg-zinc-800 w-60 m-auto rounded-md p-2 my-6">
                <img className="my-4" src={img} alt={title} />
                <div className="flex flex-col m-4">
                    <h2 className=" font-bold text-xl">
                        Title: <span>{title}</span>
                    </h2>
                    <h4 className=" font-bold text-xl my-4">
                        Release date: <span>{date}</span>
                    </h4>
                    <small className="font-bold text-xl">
                        Number of pages: <span>{page}</span>
                    </small>
                    <Button onClick={() => handleRemoveToList(id)}
                        style={{marginTop: '1rem', fontWeight: 'bold'}}
                        color="error"
                        variant="contained" size="medium">
                        Remove
                    </Button>
                </div>
            </div>
            <hr />
        </>
    );
};

export default FavsBooks;
