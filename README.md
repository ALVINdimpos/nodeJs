My Brand API

My Brand API is a REST API built using Node.js and Express.js that serves as the backend for a contact form on a website. The API allows users to send queries or messages to a recipient via email.

My Brand API Screenshot
Deployment

The API has been deployed on Heroku and can be accessed via the following URL:

    https://my-brand-api.herokuapp.com/

Final Project Blog Article

For more information on the implementation of the My Brand API, check out my blog article.
Author

    Name: Alvin Fiston
    LinkedIn: https://www.linkedin.com/in/fistonalvin/

Installation

    Clone the repository to your local machine:

bash

git clone https://github.com/example/my-brand-api.git

    Navigate to the root directory of the project and install the required packages:

bash

cd my-brand-api
npm install

    Create a .env file in the root directory of the project and add the following environment variables:

makefile

EMAIL_ADDRESS=your_email_address
EMAIL_PASSWORD=your_email_password

    Start the development server:

npm run dev

Usage
Sending a query

To send a query or message via the API, make a POST request to the /api/send-query endpoint with the following request body:

perl

{
  "name": "fiston alvin",
  "email": fistonalvin@example.com",
  "message": "This is a test message."
}

Response

The API will return a 200 OK response with the following response body:

json

{
  "success": true,
  "message": "Message sent successfully."
}

Error handling

If the API encounters an error while sending the email, it will return a 500 Internal Server Error response with the following response body:

json

{
  "success": false,
  "message": "Error sending message."
}

Contributing

Contributions to the My Brand API are always welcome. Here are some ways you can contribute:

    Report bugs and make feature requests by opening issues on the GitHub repository.
    Submit pull requests to help fix issues or add new features.

Related projects

Here are some related projects that you might be interested in:

    My Brand Website - The frontend for the My Brand website that uses the My Brand API.

Licensing

The My Brand API is licensed under the MIT License.