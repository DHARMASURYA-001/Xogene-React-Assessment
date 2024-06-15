# Xogene React Assessment - Drug Search React Application

Welcome to the Xogene React Assessment repository. This project is a React web application that utilizes the RxNorm API for drug search and details.


## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed Node.js and npm.
- You have a working internet connection.

## Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/drug-search-app.git
    cd drug-search-app
    ```

2. **Install the dependencies**:
    ```bash
    npm install
    ```

3. **Install necessary polyfills for Webpack 5**:
    ```bash
    npm install buffer timers-browserify --save-dev
    ```

4. **Add fallback configuration for Node.js modules**:
   Create a `config-overrides.js` file in the root of your project with the following content:
    ```javascript
    const webpack = require('webpack');

    module.exports = function override(config) {
      config.resolve.fallback = {
        buffer: require.resolve('buffer/'),
        timers: require.resolve('timers-browserify'),
      };
      config.plugins = (config.plugins || []).concat([
        new webpack.ProvidePlugin({
          Buffer: ['buffer', 'Buffer'],
        }),
      ]);
      return config;
    };
    ```

5. **Install `react-app-rewired`**:
    ```bash
    npm install react-app-rewired --save-dev
    ```

6. **Update `package.json` scripts**:
   Modify the `start`, `build`, and `test` scripts in your `package.json` to use `react-app-rewired`:
    ```json
    "scripts": {
      "start": "react-app-rewired start",
      "build": "react-app-rewired build",
      "test": "react-app-rewired test",
      "eject": "react-scripts eject"
    }
    ```

## Running the Application

1. **Start the development server**:
    ```bash
    npm start
    ```

    This will start the application and open it in your default web browser. If it doesn't, navigate to `http://localhost:3000`.

## Folder Structure

├── node_modules
├── public
│ ├── index.html
│ └── ...
├── src
│ ├── components
│ │ ├── Searchpage.js
│ │ ├── DrugDetailPage.js
│ │ └── ...
│ ├── api.js
│ ├── App.js
│ ├── index.js
│ └── ...
├── package.json
├── config-overrides.js
├── README.md

## Usage

- **Search Drugs**: Enter the name of a drug in the search bar and click "Search". If the drug is found, a list of results will be displayed.
- **View Drug Details**: Click on a drug name from the search results to view detailed information about the drug.

## Troubleshooting

If you encounter any issues, ensure that you have correctly installed all dependencies and that your configuration is properly set up. If problems persist, consult the documentation for [React](https://reactjs.org/docs/getting-started.html).

## Contributing

To contribute to this project, fork the repository, create a new branch, and submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
