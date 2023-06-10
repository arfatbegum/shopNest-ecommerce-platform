const Enquiry = require("../models/enquiryModal");
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../utils/validateMongoDbId");

//Create a Enquiry
const createEnquiry = asyncHandler(async (req, res) => {
    try {
        const newEnquiry = await Enquiry.create(req.body);
        res.json(newEnquiry);
    } catch (error) {
        throw new Error(error);
    }
});

//Get a Enquiry
const getEnquiry = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);
    try {
        const getEnquiry = await Enquiry.findById(id);
        res.json(getEnquiry);
    } catch (error) {
        throw new Error(error);
    }
});

//Update a Enquiry
const updateEnquiry = asyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
        const updatedEnquiry = await Enquiry.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        res.json(updatedEnquiry);
    } catch (error) {
        throw new Error(error);
    }
});

//Delete a Enquiry
const deleteEnquiry = asyncHandler(async (req, res) => {
    const { _id } = req.params;
    console.log(_id);
    try {
        const deletedEnquiry = await Enquiry.findOneAndDelete(_id);
        res.json(deletedEnquiry);
    } catch (error) {
        throw new Error(error);
    }
});

//Get All Enquiry
const getAllEnquiry = asyncHandler(async (req, res) => {
    try {
        const getAllEnquiry = await Enquiry.find();
        res.json(getAllEnquiry);
    } catch (error) {
        throw new Error(error);
    }
});



module.exports = {
    createEnquiry,
    updateEnquiry,
    deleteEnquiry,
    getEnquiry,
    getAllEnquiry
};