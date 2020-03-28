import React from "react";

const BooksContext = React.createContext({
  apiBooks: [],
  handleSaveBook: () => {},
  handleDeleteBook: () => {},
});

export default BooksContext;