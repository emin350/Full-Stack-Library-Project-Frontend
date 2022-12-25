import React from "react";

const Books = ( {books, deleteBook, lendBook, backBook} ) => {
  return (
    <div className="container mt-5">
      <table className="table table-hover table-dark">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Book Name</th>
            <th scope="col">Author</th>
            <th scope="col">Department</th>
            <th scope="col">Quantity</th>
            <th scope="col">Process</th>
          </tr>
        </thead>
        <tbody>
            {
                books.map((book,index) =>{
                    return(
                    <tr scope="col" key={index}>
                       <td scope="col" >{book._id}</td>
                       <td data-bs-toggle="tooltip" data-bs-placement="right" title={book.comments}>{book.bookName}</td>
                       <td>{book.author}</td>
                       <td>{book.department}</td>
                       <td>{book.quantity}</td>
                       <td>
                       <td><button onClick={() => deleteBook(book._id)} className="btn btn-danger">Delete</button></td>
                       <td><button onClick={() => lendBook(book._id)} className="btn btn-success">Lend</button></td>
                       <td><button onClick={() => backBook(book._id)} className="btn btn-primary">Back</button> </td>
                       </td>
                    </tr>
                    )
                })
            }
        </tbody>
      </table>
    </div>
  );
};

export default Books;
