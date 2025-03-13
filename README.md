Express API Authentication Example
This is an Express.js project demonstrating different authentication methods to access an API. The project includes authentication types such as No Authentication, Basic Authentication, API Key, and Bearer Token.

Features
Implement different authentication methods:
- No Authentication
- Basic Authentication
- API Key Authentication
- Bearer Token Authentication
- Render API responses in an EJS template

Installation
1. Clone the repository:
- git clone https://github.com/nadi4567/Auth_Practise

2. Install dependencies
- npm i

3.Create a .env file in the root directory and add the following:
- USERNAME=your_username
- PASSWORD=your_password
- API_KEY=your_api_key
- BEARER_TOKEN=your_bearer_token

4. Start the server
- nodemon index.js or node index.js

Security Notes
- DO NOT expose your .env file in public repositories.
- Use .gitignore to prevent committing .env files:

