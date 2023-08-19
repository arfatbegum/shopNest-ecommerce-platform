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
const paypal = require('paypal-rest-sdk');

// Configure PayPal SDK with your sandbox (test) credentials
paypal.configure({
    mode: 'sandbox',
    client_id: process.env.PAYPAL_CLIENT_ID,
    client_secret: process.env.PAYPAL_SECRET,
})


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
    if (findAdmin.role !== 'admin')
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
const signOut = asyncHandler(async (req, res) => {
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
        const deleteAUser = await User.findByIdAndDelete(id);
        res.json(deleteAUser);

    } catch (error) {
        throw new Error(error);
        console.log(error)
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
    const { productId, color, quantity, price } = req.body;
    const { _id } = req.user;
    validateMongoDbId(_id);
    try {
        // Check if the same product is already in the user's cart
        const existingCartItem = await Cart.findOne({
            userId: _id,
            productId
        });

        if (existingCartItem) {
            // If the product is already in the cart, update its quantity
            existingCartItem.quantity += quantity;
            await existingCartItem.save();
            res.json(existingCartItem);
        } else {
            // If the product is not in the cart, create a new cart item
            const newCart = await new Cart({
                userId: _id,
                productId,
                color,
                quantity,
                price
            }).save();
            res.json(newCart);
        }
    } catch (error) {
        throw new Error(error);
    }
});


// Get Cart 
const getCart = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    validateMongoDbId(_id);
    try {
        const cart = await Cart.find({ userId: _id }).populate("productId").populate("color");
        res.json(cart);
    } catch (error) {
        throw new Error(error);
    }
});

// update Cart 
const updateCart = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { newQuantity } = req.body;

    try {
        const updatedCart = await Cart.findByIdAndUpdate(id, { quantity: newQuantity }, { new: true });
        res.json(updatedCart);
    } catch (error) {
        throw new Error(error);
    }
});


// Remove Cart 
const removeCart = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);
    try {
        const cart = await Cart.findByIdAndDelete(id);
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


const createOrder = asyncHandler(async (req, res) => {
    const { shippingInfo, orderItems, totalPrice, totalPriceAfterDiscount, paymentInfo } = req.body;
    const { _id } = req.user;
    validateMongoDbId(_id);

    try {
        const order = await Order.create({
            shippingInfo,
            orderItems,
            totalPrice,
            totalPriceAfterDiscount,
            paymentInfo,
            user: _id,
        });

        const paymentAmount = parseFloat(totalPriceAfterDiscount).toFixed(2);

        const createPaymentJson = {
            intent: 'sale',
            payer: {
                payment_method: 'paypal',
            },
            redirect_urls: {
                return_url: 'http://localhost:3000/success',
                cancel_url: 'http://localhost:3000/cancel',
            },
            transactions: [
                {
                    amount: {
                        total: paymentAmount,
                        currency: 'USD',
                    },
                    description: 'Your order description here',
                },
            ],
        };

        // Create a PayPal payment
        paypal.payment.create(createPaymentJson, async function (error, payment) {
            if (error) {
                return res.status(500).json({ error: 'Error processing payment' });
            } else {
                // Save the PayPal payment ID and payment information to the order
                order.paypalPaymentId = payment.id;
                order.paymentInfo = paymentInfo; // Save paymentInfo to the order
                await order.save();

                // Clear the user's cart after successfully creating the order
                req.user.cart = [];
                await req.user.save();
                // Redirect the user to PayPal's approval URL
                for (let i = 0; i < payment.links.length; i++) {
                    if (payment.links[i].rel === 'approval_url') {
                        return res.json({ approvalUrl: payment.links[i].href });
                    }
                }
            }
        });
    } catch (error) {
        throw new Error(error);
    }
});



// Get orders for a specific user
const getUserOrders = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    const userOrders = await Order.find({ user: _id })
      .populate("orderItems.productId")
      .populate("orderItems.color");
    res.json(userOrders);
  });
  

// Get all orders
const getOrders = asyncHandler(async (req, res) => {
    const orders = await Order.find()
        .populate("orderItems.productId")
        .populate("orderItems.color");
    res.json(orders);
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
    signOut,
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
    getUserOrders,
    updateOrderStatus,
    updateCart
};