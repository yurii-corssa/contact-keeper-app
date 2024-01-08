# Contact Keeper App

## Overview

The Contact Keeper App is a full-stack application that allows users to
register, log in, and manage their personal contacts. It features a clean and
user-friendly interface for easy management of contacts, including
functionalities for adding, editing, deleting, and filtering contacts.

![Contact Keeper App Main Interface](./assets/main-interface.gif)

## Features

- User Authentication - Secure login and registration system.
- Contact Management - Add, edit, delete, filtered and view personal contacts.
- Real-time Data - Instantly reflects changes in the contact list.
- Responsive Design - Compatible with various devices and screen sizes.
- Email Verification - Ensures verified user registration.

## Technologies Used

- **Frontend:**

  - **React.js** - Main framework for UI
  - **Redux** - For state management
  - **Redux Persist** - For persisting Redux state
  - **React Router** - For in-app navigation
  - **Formik** - For form handling
  - **Chakra UI** - For component styling
  - **Framer Motion** - For animations
  - **Axios** - For HTTP requests

- **Backend:**

  - **Node.js** - As the runtime environment for the application.
  - **Express.js** - Used to build the web server and manage routes.
  - **MongoDB with Mongoose** - For database management. Mongoose is used for
    schema definition and data validation.
  - **JSON Web Tokens (JWT)** - For secure authentication.
  - **Joi** - For request validation, ensuring that incoming requests follow the
    expected format.
  - **Nodemailer** - For sending out email verifications to users upon
    registration.
  - **Bcrypt** - For hashing and securing user passwords.
  - **Morgan** - As an HTTP request logger middleware for Node.js.
  - **Dotenv** - To manage environment variables.
  - **Cross-env** - To set and use environment variables across different
    platforms.
  - **Jimp** - For image processing tasks.
  - **Multer** - For handling multipart/form-data, primarily used for uploading
    files.
    [Contacts Manager API](https://github.com/yurii-corssa/contacts-manager-api)

- **Additional Tools:**
  - **ESLint** - For static code analysis
  - **Prettier** - For code formatting
  - **Git** - For version control
  - **GitHub Actions** - For CI/CD

## Getting Started

To get a local copy up and running, follow these simple steps.

### Installation

1. Clone the repo

   ```sh
   git clone https://github.com/yurii-corssa/contact-keeper-app.git
   ```

2. Install NPM packages

   ```sh
   npm install
   ```

3. Start the application
   ```sh
   npm start
   ```

## Usage

After logging in, users can manage their contacts. The application provides
functionalities to:

- Add a new contact
- Edit an existing contact
- Delete a contact
- Filter contacts
- View a list of all contacts

![Contact Management Interface](./assets/management-interface.gif)
