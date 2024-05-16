const url = require('url');

// Correct the URL:
const youtubeUrl = 'https://www.youtube.com/watch?v=4QnOHgms9jQ';

// Parse the URL:
const parsedUrl = url.parse(youtubeUrl, true); // Set 'true' to parse query string

console.log(`Path: ${parsedUrl.pathname}`);
console.log(`Query: ${JSON.stringify(parsedUrl.query)}`);
