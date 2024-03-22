# SupportPlus React Application Installation Instructions

Please ensure that Django backend is running at port 8080
Report can be found: https://github.com/ntdev888/CS106A2_BackEnd

Run 'requirements.txt' before deploying Django app
Run 'npm install' before deploying react-app


## Prerequisites

Before you begin, ensure you have the following installed on your system:
- Node.js (Preferably the latest LTS version)
- npm (comes installed with Node.js) or yarn

You can check if they're installed by running `node -v` and `npm -v` (or `yarn -v` for yarn) in your terminal.

## Setting Up the Project

1. **Clone the Repository**

   Clone the application repository to your local machine using Git:

   ```bash
   git clone git@github.com:ntdev888/user-app.git
   cd path/to/user-app
   ```

   Replace `git@github.com:ntdev888/user-app.git` with the URL of your project's Git repository.

2. **Install Dependencies**

   Inside the project directory, install the necessary npm packages specified in `package.json`:

   ```bash
   npm install
   ```
   
   Or if you're using yarn:
   
   ```bash
   yarn install
   ```

3. **Environment Configuration**

   If your application requires environment variables (for API endpoints, secret keys, etc.), set them up:

   - Create a `.env` file in the root directory of your project.
   - Add environment-specific variables on new lines in the form of `NAME=VALUE`.

     For example:
     ```plaintext
     REACT_APP_API_URL=https://localhost:8080
     ```

## Running the Development Server

1. **Start the Development Server**

   Run the following command to start the development server:

   ```bash
   npm start
   ```
   
   Or with yarn:
   
   ```bash
   yarn start
   ```

   This command runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page will automatically reload if you make edits.

## Building for Production

To build the app for production, run:

```bash
npm run build
```

Or with yarn:

```bash
yarn build
```

This command builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

## Additional Commands

- **Testing**: Run `npm test` (or `yarn test`) to launch the test runner in interactive watch mode.
- **Ejecting**: Run `npm run eject` (or `yarn eject`) if you need to customize configuration files. **Note:** This is a one-way operation. Once you eject, you can’t go back!

---