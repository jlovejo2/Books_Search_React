import axios from "axios";


export default {

  searchGoogleBooks: function(selectValue, inputValue) {
    return axios.get("/googleBooks/" + selectValue + "/" + inputValue);
  },

  saveBook: function(bookObj) {
    return axios.post("/api/savedBooks/", bookObj);
  },

  findAllSavedBooks: function() {
    return axios.get("/api/savedBooks/");
  },

  findSavedBook: function(id) {
      return axios.get('/api/savedBooks' + id)
  },

  removeBook: function(id) {
      return axios.delete('api/savedBooks/' + id);
  }
};
