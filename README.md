# Modular Backend

ModularBackend is a backend application designed with clean architecture principles. It uses TypeScript and Node.js with Express for handling HTTP requests and Firebase for data storage. The project is organized into different layers to maintain a clear separation of concerns and improve maintainability.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Fredrikhov/ModularBackend.git
   cd ModularBackend
   ```
2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Set up enviroment variables**

   Create a `.env` file in the root directory and add the following variables:

   ```bash
   serviceAccount='{your-firebase-serivce-account}'
   PORT=3000
   ```

## Usage

After starting the application, it will be running on `http://localhost:3000`. You can interact with the API using tools like Postman or curl.

## Project structure

```
📦src
 ┣ 📂adapters
 ┃ ┣ 📂database
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┗ 📜makeDb.ts
 ┃ ┗ 📂web
 ┃ ┃ ┣ 📂controllers
 ┃ ┃ ┃ ┣ 📜deleteController.ts
 ┃ ┃ ┃ ┣ 📜getController.ts
 ┃ ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┃ ┣ 📜postController.ts
 ┃ ┃ ┃ ┗ 📜putController.ts
 ┃ ┃ ┣ 📂middlewares
 ┃ ┃ ┃ ┗ 📜index.ts
 ┃ ┃ ┗ 📂routes
 ┃ ┃ ┃ ┗ 📜index.ts
 ┣ 📂entities
 ┃ ┣ 📜blog.ts
 ┃ ┗ 📜index.ts
 ┣ 📂frameworks
 ┃ ┗ 📂express
 ┃ ┃ ┗ 📜index.ts
 ┗ 📂interactors
 ┃ ┣ 📜index.ts
 ┃ ┗ 📜makeInteractor.ts

```

- **`adapters/`**: Contains code for interacting with external systems (e.g., database, web frameworks).
- **`entities/`**: Defines core business entities.
- **`frameworks/`**: Contains framework-specific code (e.g., Express).
- **`Interactors/`**: Contains business logic and application use cases.

## Contributing

We welcome contributions to enhance this project! Please follow these steps:

1. Fork the repository.

   ```bash
   git clone https://github.com/Fredrikhov/ModularBackend.git
   ```

2. Create a new branch
   ```bash
   git checkout -b 'feature/your-feature-name'
   ```
3. Commit your changes
   ```bash
   git commit -m 'Add some feature'
   ```
4. Push to the branch
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

If you have any questions or feedback, please feel free to open an issue or contact me at fredrik@hovweb.org.
