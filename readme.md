# Web Crawler and Textual Data Vectorization Project

This project aims to implement a web crawling mechanism in JavaScript or TypeScript to fetch and extract data from any provided URL or website. The solution is designed to handle dynamic content or elements loaded asynchronously on web pages. Additionally, it includes a method to convert the crawled textual data into vectorized representations using an appropriate vectorization technique, such as Word Embeddings, and store the data in a Vector DB.

## Features

- **Web Crawling**: Implements a web crawling mechanism to fetch and extract data from any provided URL or website.
- **Dynamic Content Handling**: Capable of handling dynamic content or elements loaded asynchronously on web pages.
- **Textual Data Vectorization**: Converts the crawled textual data into vectorized representations using an appropriate technique (e.g., Word Embeddings).
- **Vector Database**: Stores the vectorized data in a Vector DB for efficient retrieval and analysis.
- **Text Query System**: Develops a system where users can submit text queries, vectorizing them using the same technique, and providing the top 3 relevant crawled data.

## Project Structure

The project is structured into the following directories:

- **server**: Contains the backend server code.
- **client**: Includes the frontend React application code.

## Technologies Used

- **Express**: Backend framework for handling HTTP requests and responses.
- **Pupeeteer**: Library to extract text from the requested URL.
- **MongoDB Atlas**: Hosted NoSQL database for storing and querying vectorized data.
- **Gemini API**: API used for creating embedddings.
- **React**: Frontend library for building user interfaces.

## Note
    This project will work with Hosted Mongo Atlas after adding vector keys too it. 
## Installation

1. Clone the repository: `git clone https://github.com/weekash/vectoroid.git`
2. Navigate to the server directory: `cd server`
3. Install dependencies: `npm install`
4. Add a `.env` file at root containing variables from `.env.example`
5. Start the server: `npm start`
6. Navigate to the client directory: `cd client`
7. Install dependencies: `npm install`
8. Add a `.env` file at root containing variables from `.env.example`
9. Start the client: `npm run dev`


## Setting Up
1. Get your Gemini API Key here https://aistudio.google.com/app/apikey
2. Enabling vector search in hosted mongodb atlas
https://www.mongodb.com/docs/atlas/atlas-vector-search/vector-search-overview/
## Usage

1. Access the web application in your browser.
2. Enter a URL or website to crawl and extract data.
3. Submit text queries to retrieve the top 3 relevant crawled data.

