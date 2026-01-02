# PayNDeliver - Simple E-commerce Store

A lightweight, frontend-only e-commerce store designed for selling merchandise with Cash on Delivery (COD) and Mobile Money payment options.

## Features

-   **Simple Product Catalog**: Display 3-5 products with details.
-   **Dual Payment Options**:
    -   **Cash on Delivery (COD)**: Pay when you receive.
    -   **Mobile Money**: Pay upfront with instructions and discount support.
-   **Order Management**:
    -   Unique Order ID generation.
    -   Admin dashboard to track and manage orders (Password: `admin123`).
    -   Local Storage based database (No backend required).
-   **Responsive Design**: Works on Mobile, Tablet, and Desktop.

## Setup Instructions

1.  **Clone or Download** this repository.
2.  **Open `index.html`** in your browser to start the store.
3.  **To access the Admin Panel**:
    -   Go to `admin.html` (or click the link if you add one, currently hidden/direct access).
    -   Login with password: `admin123`.

## Deployment (GitHub Pages)

1.  Push this code to a GitHub repository.
2.  Go to **Settings** > **Pages**.
3.  Select the `main` branch and `/root` folder.
4.  Save. Your site will be live in minutes!

## Customization

-   **Products**: Edit the `products` array in `script.js` to change items, prices, and images.
-   **Mobile Money Number**: Update the number in `order.html` and `about.html`.
-   **Google Forms**: To actually submit to Google Forms, update the `handleOrderSubmit` function in `script.js` to POST to your Google Form entry IDs.

## Technologies Used

-   HTML5
-   CSS3
-   JavaScript (Vanilla)
