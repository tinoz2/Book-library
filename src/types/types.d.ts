export interface Book {
    id: string
    volumeInfo: {
        title: string
        publishedDate: string
        pageCount: number
        imageLinks: {
            thumbnail: string
        }
    }
}

export type listOfBooks = Book[]

export interface BooksProps {
    id: string
    title: string
    date: string
    page: number
    img: string
}

export interface BookCreated {
    id: string
    title: string
    date: number
    page: number
    img: string
}

export type listOfBookCreated = BookCreated[]
