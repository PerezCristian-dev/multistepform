const {Schema, model} = require("mongoose");

const ItemSchema = new Schema({
    id:{
        type:Number,
        required: true,
        unique: true,
    },
    title: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
});

module.exports = model("Item", ItemSchema);



    // id: 1,
    // title: "Make payments from almost anywhere",
    // desc: "We accept payment from almost EVERY country in the world.",
    // img: "src/assets/negocios-y-finanzas.png",