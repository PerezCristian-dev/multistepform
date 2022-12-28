const {Router} = require("express");
const {check} = require("express-validator");
const {Validar} = require("../middlewares/validations");


const {getItems, updatedItem, deleteItem, createItem}= require("../controllers/events")

const router = Router();

router.get("/", getItems);

// router.post("/", [], createItem);

// router.put("/", [], updatedItem);

// router.put("/", [], deleteItem);

module.exports = router;