# Basic Express-JS

**Project Description**

This is an Express-based REST API application demonstrating several common API routes and techniques such as handling query parameters, path parameters, body parsing, error handling, and router usage.

## Table of Contents

- [Installation](#installation)
- [Folder Structure](#folder-structure)
- [Usage](#usage)
- [Routes](#routes)
- [Error Handling](#error-handling)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

---

## Installation

Follow these steps to get this project running locally on your machine.

**1. Clone the repository**

Clone this repository to your local machine using the following command:

```bash
git clone https://github.com/your-username/project-name.git
```

**2. Navigate into the project directory**

```bash
cd project-name
```

**3. Install dependencies**
Use either npm or yarn to install the dependencies.

```bash
npm install
```

or

```bash
yarn install
```

**4. Run the application**

Once the dependencies are installed, you can run the application using:

```bash
npm start
```

or

```bash
yarn start
```

By default, the app will be running on `http://localhost:3000`.

---

## Folder Structure

Here is the basic folder structure of the project:

```
Express-Js/
├── dist/                   # This folder contains the compiled files 
├── node_modules/           # This is where all your project dependencies are installed.
├── src/                    # Source code
│   ├── app/
│   ├── app.ts              # This is the entry point for the Express app. It sets up middleware, routes, etc.
│   └── server.ts           # This file handles the server setup, such as starting the server and listening on a specific port.
├── package.json            # Project metadata, scripts and dependencies
└── README.md               # This file, which explains how to set up, use, and understand the project.



```

---

## Usage

After the application is running, you can access the following routes:

**Health Check Endpoint**

- GET `/health`

    - Returns the health status of the server.

Example response:

```json
{
  "message": "Server is running..."
}
```

**Path Parameters**

1. `GET /users/:userId`

   - Retrieves user information by userId.

Example response:

```json
{
  "success": true,
  "code": 200
}
```

2. `GET /products/:productId/:subProductId`

   - Retrieves product and sub-product information based on their respective IDs.

Example response:

```json
{
  "success": true,
  "code": 200
}
```

**POST Request**

- POST `/product`

  - Creates a new product with provided data in the request body.

Request body:

```json
{
  "name": "Product Name",
  "price": 100
}
```

Example response:

```json
{
  "message": "Success",
  "code": 200,
  "data": {
    "name": "Product Name",
    "price": 100
  }
}
```

**Query Parameters**

- GET `/orders`

  - Retrieves orders based on query parameters.

Example query:

```json
/orders?status=delivered&date=2024-11-16
```

Example response:

```json
{
  "success": true,
  "code": 200
}
```

**Router Usage**

- GET `/salary` - Retrieves salary details.

Example response:

```json
{
  "message": "Success",
  "code": 200,
  "data": {}
}
```

---

## Routes

`/health` (GET)

- **Description:** Health check route to confirm the server is running.

- **Response:**

```json
{
  "message": "Server is running..."
}
```

`/users/:userId` (GET)

- **Description:** Retrieve user details based on userId.

- **Response:**

```json
{
  "success": true,
  "code": 200
}
```

`/products/:productId/:subProductId` (GET)

- **Description:** Retrieve product and sub-product details based on their respective IDs.

- **Response:**

```json
{
  "success": true,
  "code": 200
}
```

`/product` (POST)

- **Description:** Create a new product.

- **Request Body:**

```json
{
  "name": "Product Name",
  "price": 100
}
```

`/orders` (GET)

- **Description:** Retrieve orders based on query parameters.

**Example:** `/orders?status=delivered`

---

## Error Handling

The application includes standard error handling for all routes. If an error occurs, the API will return a consistent error response structure.

**Example Error Response:**

For 404 errors:

```json
{
  "success": false,
  "code": 404,
  "message": "Sorry, the resource you are looking for cannot be found on this server.",
  "errors": [
    {
      "message": "Cannot GET /unknown-route on this server"
    }
  ]
}
```

For internal server errors:

```json
{
  "success": false,
  "code": 500,
  "message": "Internal Server Error",
  "errors": null
}
```

--- 

## Technologies Used

- **Node.js:** JavaScript runtime for building server-side applications.

- **Express:** Web framework for building REST APIs.

- **TypeScript:** Superset of JavaScript, providing static types.

- **npm / yarn:** Dependency management.

---

## License

This project is licensed under the MIT License - see the LICENSE file for details.
