import { getData, postData, putData, deleteData } from "integration";

// Example: GET
const fetchBooks = async () => {
    const res = await getData("books");
    if (res.success) console.log("Fetched books:", res.data);
    else console.error(res.error);
};

// Example: POST
const addBook = async () => {
    const payload = { title: "Java Basics", author: "Uday Patil" };
    const res = await postData("books", payload);
    console.log(res);
};

// Example: PUT
const updateBook = async () => {
    const payload = { id: 1, title: "Advanced Java" };
    const res = await putData("books/update", payload);
    console.log(res);
};

// Example: DELETE
const removeBook = async () => {
    const res = await deleteData("books/delete", { id: 1 });
    console.log(res);
};
