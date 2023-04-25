const Color = require("../models/colorModal");
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../utils/validateMongoDbId");

//Create a Color
const createColor = asyncHandler(async (req, res) => {
    try {
        const newColor = await Color.create(req.body);
        res.json(newColor);
    } catch (error) {
        throw new Error(error);
    }
});

//Get a Color
const getColor = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);
    try {
        const getColor = await Color.findById(id);
        res.json(getColor);
    } catch (error) {
        throw new Error(error);
    }
});

//Update a Color
const updateColor = asyncHandler(async (req, res) => {
    const { _id } = req.params;
    try {
        const updatedColor = await Color.findOneAndUpdate(_id, req.body, {
            new: true,
        });
        res.json(updatedColor);
    } catch (error) {
        throw new Error(error);
    }
});

//Delete a Color
const deleteColor = asyncHandler(async (req, res) => {
    const { _id } = req.params;
    console.log(_id);
    try {
        const deletedColor = await Color.findOneAndDelete(_id);
        res.json(deletedColor);
    } catch (error) {
        throw new Error(error);
    }
});

//Get All Color
const getAllColor = asyncHandler(async (req, res) => {
    try {
        const getAllColor = await Color.find();
        res.json(getAllColor);
    } catch (error) {
        throw new Error(error);
    }
});



module.exports = {
    createColor,
    updateColor,
    deleteColor,
    getColor,
    getAllColor
};