# ShopNest - Your Ultimate Online Shopping Destination
Welcome to ShopNest, your premier online shopping destination! At ShopNest, we offer an unrivaled online shopping experience, combining a vast selection of products, user-friendly navigation, and top-notch customer service. Our mission is to provide you with a seamless and enjoyable shopping journey, right from the comfort of your home.

The ShopNest Admin Panel is a powerful and intuitive tool designed to streamline the management and operation of your e-commerce website. With a user-friendly interface and comprehensive features, our admin panel empowers you to efficiently oversee various aspects of your online store, from product management to customer support and analytics.

In the world of e-commerce, a robust and efficient backend system is the backbone of a successful online store. Our e-commerce platform leverages cutting-edge technologies, with Node.js, Express.js, MongoDB, and Mongoose working seamlessly together to create a powerful and flexible backend infrastructure.

## Homepage:

- Eye-catching Banner: A visually appealing banner featuring the latest promotions, seasonal offers, and new arrivals.

- Categories: Clear and organized categories for easy navigation, including Fashion, Electronics, Home & Living, Beauty & Personal Care, Sports & Fitness, and more.

- Search Bar: A prominent search bar with auto-suggest functionality for quick product discovery.

- Featured Products: Highlighted products that are trending or on sale, enticing shoppers to explore further.

- Customer Reviews: Real customer reviews and ratings for popular products to build trust and aid purchasing decisions.

- Newsletter Signup: Option to subscribe to our newsletter for exclusive offers, updates, and promotions.

## Product Listings:

- Filtering and Sorting: Robust filtering options by price, brand, size, color, and more, along with sorting by relevance, price, and popularity.

- Product Cards: Clear product images, pricing, and an "Add to Cart", "Wishlist", "Product Details", and "Compare Product" button.

- Product Details: A "Product Details" button for shoppers to see product details and navigate the product details.

## Product Pages:

- High-Resolution Images: Multiple high-quality images from different angles to showcase the product.

- Detailed Descriptions: Comprehensive product descriptions, specifications, and features to assist customers in making informed decisions.

- Customer Reviews: A dedicated section for customer reviews and ratings, fostering transparency and trust.

- Related Products: Suggestions for related or complementary products to encourage cross-selling.

## Shopping Cart:

- Cart Summary: A summary of items in the cart, including quantities, prices, and total cost.

- Promo Code Entry: A field for entering promo codes or discounts.

- Checkout Button: A clear "Proceed to Checkout" button to initiate the payment process.

## Checkout:

- Billing and Shipping Information: User-friendly forms for entering billing and shipping details, with the option to save addresses for future purchases.

- Payment Options: Multiple secure payment options, including credit/debit cards, PayPal, and cash-on-delivery (COD).

- Order Summary: A summary of the order, including items, prices, shipping fees, and estimated delivery dates.

- Order Confirmation: A confirmation page with an order number and details sent to the customer's email.

## User Accounts:

- User Registration: A simple and quick registration process, allows users to create accounts for a personalized shopping experience.

- Order History: Access to a history of past orders, including tracking information.

- Wishlists: The ability to create and manage wishlists for future purchases.

- Comparelist: The ability to create and manage Comparelist.

## Customer Support:

- Live Chat: Real-time chat support for customer inquiries and assistance.

- FAQs and Help Center: Comprehensive FAQs and a help center to address common questions and concerns.

- Contact Information: Clear contact information, including email and phone support.

## Security:

- Secure Transactions: SSL encryption for secure data transmission during payments.

- Privacy Policy: A transparent privacy policy outlining data usage and protection.

## Mobile Responsiveness:

A mobile-responsive design ensures seamless shopping on smartphones and tablets.

## Shipping and Returns:

Shipping Options: Multiple shipping options with tracking for customer convenience.

Return Policy: Clear and fair return and exchange policies with easy-to-follow procedures.

## Social Media Integration:

Links to and integration with social media platforms to share products and reviews with friends and followers.

## API ENDPOINTS

### User
- user/signup (POST)
- user/signin (POST)
- user/signin-admin (POST)
- user/forgot-password-token (PUT)
- user/forgot-password/:token0 (PUT)
- user/update-password (PUT)
- user/all-users (GET)
- user/:id (GET)
- user/:id (DELETE)
- user/update-user (PUT)
- user/block-user/:id (PUT)
- user/unblock-user/:id (PUT)
- user/cart (POST)
- user/cart/:id (PUT)
- user/cart (GET)
- user/cart/:id (DELETE)
- user/create-order (POST)
- user/all-orders (GET) FOR ADMIN
- user/orders (GET)
- user/orders/update-order/:id (PUT)
- user/apply-coupon (POST)
- user/orders (GET)
- user/wishlist (GET)
- user/comparelist (GET)

### Product
- product/ (POST)
- product/ (GET)
- product/:id (GET)
- product/:id (PUT)
- product/:id (DELETE)
- product/rating (PUT)
- product/wishlist (PUT)
- product/comparelist (PUT)

### Product Category
- product-category/ (POST)
- product-category/ (GET)
- product-category/:id (GET)
- product-category/:id (PUT)
- product-category/:id (DELETE)

  ### Blog
- blog/ (POST)
- blog/ (GET)
- blog/:id (GET)
- blog/:id (PUT)
- blog/:id (DELETE)
- blog/like-blogs(PUT)
- blog/disLike-blogs (PUT)

  ### Blog Category
- blog-category/ (POST)
- blog-category/ (GET)
- blog-category/:id (GET)
- blog-category/:id (PUT)
- blog-category/:id (DELETE)

  ### Brand
- brand/ (POST)
- brand/ (GET)
- brand/:id (GET)
- brand/:id (PUT)
- brand/:id (DELETE)

### Color
- color/ (POST)
- color/ (GET)
- color/:id (GET)
- color/:id (PUT)
- color/:id (DELETE)

### Coupon
- coupon/ (POST)
- coupon/ (GET)
- coupon/:id (GET)
- coupon/:id (PUT)
- coupon/:id (DELETE)

  ### Enquiry
- enquiry/ (POST)
- enquiry/ (GET)
- enquiry/:id (GET)
- enquiry/:id (PUT)
- enquiry/:id (DELETE)

 ### Image Upload
- upload/ (POST)
- upload/delete-img/:id (DELETE)

ShopNest is committed to providing an exceptional online shopping experience. We strive to deliver quality products, exceptional customer service, and a user-friendly platform to make your shopping journey delightful and convenient. Join us today and discover a world of endless shopping possibilities at your fingertips!

