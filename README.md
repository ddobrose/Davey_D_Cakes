# DaveyDCakes
An online ordering website for a bakery called DaveyDCakes

## Link
https://daveydcakes.netlify.app/

## Description
DaveyDCakes is a full stack ordering app for a fake bakery. It uses Django and React to save user, guest profile, cart, and order information. You can create your own custom profile with a favorite flavor, edit that profile, and start placing orders. Your orders show up in your past orders tab.

## Code overview
- The app utilizes React for the front end with a django backend.
- For the backend it uses Django Rest Framework to store all information and JWT for authorization and authentication.
- I utilize the Django User model as a foreign key to the custom guest model, then 2 other models for Carts and Orders. There is a boolean to determine whether a cart has been submitted.
- The frontend uses UseContext to set up the login system and pass user information throughout the App.
- the app uses react-bootstrap and bootswatch lux theme for styling.

## Screenshots

## Home Page-
The Home page utilizes Hero Banners for the different links on the page as well as a Navbar and footer throughout the app for navigation links. 
![Home Page](/public/images/daveycakeshome.png)


## Menu Page-
The menu page utilizes Card components with choices for Flavors, decorations, and sizes of cakes. When one is clicked a function runs that fills out the custom order form on the next page with the corresponding selection and adjusts price accordingly as well.
![Menu Page](/public/images/daveycakesmenu.png)
![Menu Page](/public/images/daveycakesmenu2.png)

## Order Page
This page includes a form that is used to place custom orders to the backend server, It adjusts the form state and places the order via fetch. It also connects it to a cart automatically and redirects you to the cart page after a modal that confirms your order went through.

![Order Form](/public/images/daveycakesorder.png)
![Order Form](/public/images/daveycakesorder2.png)

## Register/Guest create and Login
Register and Login forms are used for Registering and logging in a user and a form is also used to create a custom guest profile with your name, email and favorite flavor. UseContext is used to perform all necessary functions for logging in and authentication to the backend server.
![Register](/public/images/profileeditandcreate.png)
![Register](/public/images/registeruser.png)


## Future goals- 
Some of the future goals for the App include:
- Creating a system for placing an order without being logged in. 
- Adding a date to the cart model so that previous orders will show the date of purchase.
- Adding a payment processor like paypal or stripe.
- Adding Stores to the database with addresses and Google map api to find a store and set it as your home store.
- Find a way to enact rewards points and track them on the backend to use them to go towards future purchases.