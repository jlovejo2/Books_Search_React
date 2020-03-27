const path = require("path");
const router = require("express").Router();
const apiRoutes = require('./api');
const googleBooksController = require('../controllers/googleBooksController');

// API Routes
router.use('/api', apiRoutes);

//External API routes
router.route('/googleBooks/:selectValue/:inputValue')
    .get(googleBooksController.getBooks)

// If no API routes are hit, send the React app
// router.use(function(req, res) {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

module.exports = router;




