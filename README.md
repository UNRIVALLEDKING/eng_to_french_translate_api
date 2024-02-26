# English to French Translation REST API

This RESTful API translates English text to French using a POST request method.

## Usage

### API Endpoint

The API endpoint for translation is located at:

```
https://nice-blue-cygnet-robe.cyclic.app/translate
```

### Request Format

l̥
Send a POST request to the above endpoint with a JSON body containing the English text to translate. Example request body:

```json
{
  "text": "Hello, how are you?"
}
```

### Response Format

The API responds with a JSON object containing the translated text in French:

```json
{
  "translation": "Bonjour, comment ça va?"
}
```

### Error Handling

The API handles missing or empty text content with a 400 Bad Request error. It also handles any other invalid routes with a 404 Not Found error.

### Testing

You can test the API using tools like Postman. Simply send a POST request to the endpoint mentioned above with the appropriate request body.

## Hosting

The API is hosted at [https://nice-blue-cygnet-robe.cyclic.app/](https://nice-blue-cygnet-robe.cyclic.app/). You can check the status here and utilize Postman for testing at [https://nice-blue-cygnet-robe.cyclic.app/translate](https://nice-blue-cygnet-robe.cyclic.app/translate).

## Running the Server

- Clone the repository.
- Install dependencies using `npm install`.
- Run the server using `npm run start` or `npm run dev`.

## Additional Information

- Language/Framework: Node.js with Express
- Translation Service/Library: Bing Translate API
- Error Handling: Custom error handling with appropriate status codes and messages
