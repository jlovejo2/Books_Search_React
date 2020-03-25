import axios from "axios";


export default {

  searchGoogleBooks: function(selectValue, inputValue) {

    return axios.get("/api/googleBooks/" + selectValue + "/" + inputValue);
  }
};
