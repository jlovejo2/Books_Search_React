import React from "react";

const BooksContext = React.createContext({
  apiBooks: [],
  handleBtnClick: () => {}
});

export default BooksContext;