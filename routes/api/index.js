const router = require("express").Router();
const savedBookRoutes = require("./savedBooks");

// Book routes
router.use("/savedBooks", savedBookRoutes);

module.exports = router;