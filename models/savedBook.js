const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SavedBookSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    authors: {
      type: [String],
      required: true
    },
    subtitle: {
      type: String,
    },
    image: {
      type: String
    },
    preview: {
      type: String,
      required: true
    },
    link: {
      type: String,
      //possible validator for url of link.  Not using because use doesn't have control over url delivered from googlebooks
      // validate: { 
      //   validator: value => validator.isURL(value, { protocols: ['http','https','ftp'], require_tld: true, require_protocol: true }),
      //   message: 'Must be a Valid URL' 
      // }
    },
    googleID: {
      type: String
    }
  },
  {
    toJSON: {
      // include any virtual properties when data is requested
      virtuals: true
    }
  }
);

const SavedBook = mongoose.model("SavedBook", SavedBookSchema);

module.exports = SavedBook;
