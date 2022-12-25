import React from "react";

function AddBook({book, handleChange, addBook}) {
  return (
    <div>
      <div className="container w-50 mt-5 border border-secondary">
        <form style={{ padding: "20px 20px 10px 20px" }}>
          <div className="form-floating mb-3">
            <input
              type="text" value={book.bookName} onChange={handleChange}
              className="form-control"
              id="floatingInput"
              placeholder="BookName"
              name="bookName"
            />
            <label for="floatingInput">Book Name</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text" value={book.author} onChange={handleChange}
              className="form-control"
              id="floatingInput"
              placeholder="Author"
              name="author"
            />
            <label for="floatingInput">Author</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="number" value={book.quantity} onChange={handleChange}
               className="form-control"
              id="floatingInput"
              placeholder="Quantity"
              name="quantity"
            />
            <label for="floatingInput">Quantity</label>
          </div>
          <div className="form-floating mb-3">
            <select
              className="form-select" value={book.department} onChange={handleChange}
              id="floatingSelect" name = "department"
              aria-label="Floating label select example"
            >
              <option selected>Departments</option>
              <option value="History">History</option>
              <option value="Religious">Religious</option>
              <option value="Music">Music</option>
              <option value="Study">Study</option>
            </select>
            <label for="floatingSelect">Select Book Department</label>
          </div>
          <div class="form-floating mb-3">
            <textarea
              className="form-control" value={book.comments} onChange={handleChange}
              placeholder="Leave a comment here" name="comments"
              id="floatingTextarea"
            ></textarea>
            <label for="floatingTextarea">Comments</label>
          </div>
          <button type="button" className="btn btn-primary"onClick={addBook}>Add Book</button>
        </form>
      </div>
    </div>
  );
}

export default AddBook;
