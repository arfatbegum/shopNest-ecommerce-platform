const User = require("../models/userModel");
const Product = require("../models/productModel");
const Cart = require("../models/cartModal");
const Coupon = require("../models/couponModal");
const Order = require("../models/orderModal");
const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const { generateToken } = require("../config/jsonwebtoken");
const validateMongoDbId = require("../utils/validateMongoDbId");
const { generateRefreshToken } = require("../config/refreshToken");
const sendEmail = require("./emailController");
const crypto = require("crypto");
const uniqid = require('uniqid');

// Create a User
const createUser = asyncHandler(async (req, res) => {
    const email = req.body.email;
    const findUser = await User.findOne({ email: email });

    if (!findUser) {
        const newUser = await User.create(req.body);
        res.json(newUser);
    } else {
        throw new Error("User Already Exists");
    }
});

// Signin a user
const signinUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    // check if user exists or not
    const findUser = await User.findOne({ email });
    if (findUser && (await findUser.isPasswordMatched(password))) {
        const refreshToken = await generateRefreshToken(findUser?._id);
        const updateuser = await User.findByIdAndUpdate(
            findUser.id,
            {
                refreshToken: refreshToken,
            },
            { new: true }
        );
        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            maxAge: 72 * 60 * 60 * 1000,
        });
        res.json({
            _id: findUser?._id,
            firstname: findUser?.firstname,
            lastname: findUser?.lastname,
            email: findUser?.email,
            mobile: findUser?.mobile,
            token: generateToken(findUser?._id),
        });
    } else {
        throw new Error("Invalid Credentials");
    }
});

// Signin a Admin
const signinAdmin = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    // check if user exists or not
    const findAdmin = await User.findOne({ email });
    if (findAdmin.role !== 'Aadmin')
        throw new Error('Not Authorised');
    if (findAdmin && (await findAdmin.isPasswordMatched(password))) {
        const refreshToken = await generateRefreshToken(findAdmin?._id);
        const updateAdmin = await User.findByIdAndUpdate(
            findAdmin.id,
            {
                refreshToken: refreshToken,
            },
            { new: true }
        );
        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            maxAge: 72 * 60 * 60 * 1000,
        });
        res.json({
            _id: findAdmin?._id,
            firstname: findAdmin?.firstname,
            lastname: findAdmin?.lastname,
            email: findAdmin?.email,
            mobile: findAdmin?.mobile,
            token: generateToken(findAdmin?._id),
        });
    } else {
        throw new Error("Invalid Credentials");
    }
});

// Sign Out functionality
const SignOut = asyncHandler(async (req, res) => {
    const cookie = req.cookies;
    if (!cookie?.refreshToken) throw new Error("No Refresh Token in Cookies");
    const refreshToken = cookie.refreshToken;
    const user = await User.findOne({ refreshToken });
    if (!user) {
        res.clearCookie("refreshToken", {
            httpOnly: true,
            secure: true,
        });
        return res.sendStatus(204);
    }
    await User.findOneAndUpdate(refreshToken, {
        refreshToken: "",
    });
    res.clearCookie("refreshToken", {
        httpOnly: true,
        secure: true,
    });
    res.sendStatus(204);
});

// handle refresh token
const handleRefreshToken = asyncHandler(async (req, res) => {
    const cookie = req.cookies;
    if (!cookie?.refreshToken) throw new Error("No Refresh Token in Cookies");
    const refreshToken = cookie.refreshToken;
    const user = await User.findOne({ refreshToken });
    if (!user) throw new Error("No Refresh token present in Database or not matched");
    jwt.verify(refreshToken, process.env.JWT_SECRET, (err, decoded) => {
        if (err || user.id !== decoded.id) {
            throw new Error("Something wrong with refresh token");
        }
        const accessToken = generateToken(user?._id);
        res.json({ accessToken });
    });
});


// Get all users
const getallUsers = asyncHandler(async (req, res) => {
    try {
        const getUsers = await User.find();
        res.json(getUsers);
    } catch (error) {
        throw new Error(error);
    }
});

// Get a single user
const getUser = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);

    try {
        const getaUser = await User.findById(id);
        res.json({
            getaUser,
        });
    } catch (error) {
        throw new Error(error);
    }
});

// Update a user
const updatedUser = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    validateMongoDbId(id);

    try {
        const updatedUser = await User.findByIdAndUpdate(
            _id,
            {
                firstname: req?.body?.firstname,
                lastname: req?.body?.lastname,
                email: req?.body?.email,
                mobile: req?.body?.mobile,
            },
            {
                new: true,
            }
        );
        res.json(updatedUser);
    } catch (error) {
        throw new Error(error);
    }
});

// Delete a single user
const deleteUser = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);

    try {
        const deleteaUser = await User.findByIdAndDelete(id);
        res.json({
            deleteaUser,
        });
    } catch (error) {
        throw new Error(error);
    }
});

// Block User
const blockUser = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);

    try {
        const blockuser = await User.findByIdAndUpdate(
            id,
            {
                isBlocked: true,
            },
            {
                new: true,
            }
        );
        res.json(blockuser);
    } catch (error) {
        throw new Error(error);
    }
});

// Unblock User
const unblockUser = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);

    try {
        const unblock = await User.findByIdAndUpdate(
            id,
            {
                isBlocked: false,
            },
            {
                new: true,
            }
        );
        res.json({
            message: "User UnBlocked",
        });
    } catch (error) {
        throw new Error(error);
    }
});

//Update Password
const updatePassword = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    const { password } = req.body;
    validateMongoDbId(_id);
    const user = await User.findById(_id);
    if (password) {
        user.password = password;
        const updatedPassword = await user.save();
        res.json(updatedPassword);
    } else {
        res.json(user);
    }
});

//Save forgot Password Token
const forgotPasswordToken = asyncHandler(async (req, res) => {
    const { eamil } = req.body;
    const user = await User.findOne({ eamil });
    if (!user) throw new Error("User not Found with this Email");
    try {
        const token = await user.createPasswordResetToken();
        await user.save();
        const resetURL = `Please follow this link to reset your password. This link is valid till 10 minutes.<a href='http://localhost:5000/api/user/forgot-password ${token}'>Click here</a>`
        const data = {
            to: eamil,
            subject: "Forgot Password Link",
            text: "Hello",
            html: resetURL,
        }
        sendEmail(data);
        res.json(token);
    }
    catch (error) {
        throw new Error(error);
    }
});

//Save forgot Password
const forgotPassword = asyncHandler(async (req, res) => {
    const { password } = req.body;
    const { token } = req.params;
    const hashedToken = crypto.createHash("sha256").update(token).digest("hex");
    const user = await User.findOne({
        passwordResetToken: hashedToken,
        passwordResetExpires: { $gt: Date.now() }
    });
    if (!user) throw new Error("Token Expired! Please try again later.");
    user.password = password;
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save();
    res.json(user);
});

//Save address
const saveAddress = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    validateMongoDbId(_id);
    try {
        const updatedUser = await User.findByIdAndUpdate(
            _id,
            {
                address: req?.body?.address,
            },
            {
                new: true,
            }
        );
        res.json(updatedUser);
    } catch (error) {
        throw new Error(error);
    }
}
);
//get wishlist
const getWishlist = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    try {
        const findUser = await User.findById(_id).populate('wishlist');
        res.json(findUser);
    } catch (error) {
        throw new Error(error);
    }
}
);

//Add To Cart functinality
const addToCart = asyncHandler(async (req, res) => {
    const { cart } = req.body;
    const { _id } = req.user;
    validateMongoDbId(_id);
    try {
        let products = [];
        const user = await User.findById(_id);
        //check if user already have product in cart
        const alreadyExistCart = await Cart.findOne({ orderby: user._id });
        if (alreadyExistCart) {
            alreadyExistCart.remove();
        }
        for (let i = 0; i < cart.length; i++) {
            let object = {};
            object.product = cart[i]._id;
            object.count = cart[i].count;
            object.color = cart[i].color;
            let getPrice = await Product.findById(cart[i]._id).select('price').exec();
            object.price = getPrice.price;
            products.push(object);
        }

        let cartTotal = 0;
        for (let i = 0; i < products.length; i++) {
            cartTotal = cartTotal + products[i].price * products[i].count;
        }
        let newCart = await new Cart({
            products,
            cartTotal,
            orderby: user?._id,
        }).save();
        res.json(newCart);
    } catch (error) {
        throw new Error(error);
    }
}
);

// Get Cart 
const getCart = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    validateMongoDbId(_id);

    try {
        const cart = await Cart.findOne({ orderby: _id }).populate("products.product");
        res.json(cart);
    } catch (error) {
        throw new Error(error);
    }
});

// Remove Cart 
const removeCart = asyncHandler(async (req, res) => {
    const { _id } = req.params;
    validateMongoDbId(_id);

    try {
        const user = await User.findOne({ _id });
        const cart = await Cart.findOneAndRemove({ orderby: user._id });
        res.json(cart);
    } catch (error) {
        throw new Error(error);
    }
});

//apply Coupon functionality
const applyCoupon = asyncHandler(async (req, res) => {
    const { coupon } = req.body;
    const { _id } = req.params;
    validateMongoDbId(_id);
    try {
        const validCoupon = await Coupon.findOne({ name: coupon });
        if (validCoupon === null)
            throw new Error("Invalid Coupon");
        res.json(validCoupon);
    } catch (error) {
        throw new Error(error);
    }
    const user = await User.findOne({ _id });
    let { cartTotal } = await Cart.findOne({ orderby: user._id }).populate("products.product")
    let totalAfterDiscount = (cartTotal - (cartTotal * validCoupon.discount) / 100).toFixed(2);
    await Cart.findByIdAndUpdate({ orderby: user._id }, { totalAfterDiscount }, { new: true });
});

//apply Coupon functionality
const createOrder = asyncHandler(async (req, res) => {
    const { COD, couponApplied } = req.body;
    const { _id } = req.user;
    validateMongoDbId(_id);
    try {
        if (!COD)
            throw new Error("Cash on Delivery Failed");
        const user = await User.findOne({ _id });
        let userCart = await Cart.findOne({ orderby: user._id });
        let totalAmount = 0;
        if (couponApplied && userCart.totalAfterDiscount) {
            totalAmount = userCart.totalAfterDiscount;
        } else {
            totalAmount = userCart.cartTotal;
        }
        let newOrder = await new Order({
            products: userCart.products,
            paymentIntent: {
                id: uniqid(),
                method: "COD",
                amount: totalAmount,
                status: "Cash on Delivery",
                created: Date.now,
                currency: "usd",
            },
            orderby: user._id,
            orderStatus: "Cash on Delivery",
        }).save();
        let update = userCart.products.map((item) => {
            return {
                updateOne: {
                    filter: { _id: item.product._id },
                    update: { $inc: { quantity: -item.count, sold: +item.count } },
                }
            }
        })
        const updated = await Product.bulkWrite(update, {})
        res.json({ message: "success" });
    } catch (error) {
        throw new Error(error);
    }
    let { cartTotal } = await Cart.findOne({ orderby: user._id }).populate("products.product")
    let totalAfterDiscount = (cartTotal - (cartTotal * validCoupon.discount) / 100).toFixed(2);
    await Cart.findByIdAndUpdate({ orderby: user._id }, { totalAfterDiscount }, { new: true });
});

// Get orders 
const getOrders = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    validateMongoDbId(_id);

    try {
        const orders = await Order.findOne({ orderby: _id }).populate("products.product");
        res.json(orders);
    } catch (error) {
        throw new Error(error);
    }
});


// Update order 
const updateOrderStatus = asyncHandler(async (req, res) => {
    const { status } = req.body;
    const { id } = req.params;
    validateMongoDbId(id);
    try {
        const updatedOrderStatus = await Order.findByIdAndUpdate(
            id,
            {
                orderStatus: status,
                paymentIntent: {
                    status: status,
                }
            },
            {
                new: true,
            }
        );
        res.json(updatedOrderStatus);
    } catch (error) {
        throw new Error(error);
    }
});

module.exports = {
    createUser,
    signinUser,
    signinAdmin,
    SignOut,
    getallUsers,
    getUser,
    updatedUser,
    deleteUser,
    handleRefreshToken,
    blockUser,
    unblockUser,
    updatePassword,
    forgotPasswordToken,
    forgotPassword,
    getWishlist,
    saveAddress,
    addToCart,
    getCart,
    removeCart,
    applyCoupon,
    createOrder,
    getOrders,
    updateOrderStatus
};