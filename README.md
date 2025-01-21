
# Host App (Micro-Frontend)

This is the **Host App** of a micro-frontend architecture using Webpack Module Federation. It consumes remote components exposed by the **Remote App**.

## Features

- Serves as the main application (container) for micro-frontends.
- Loads a remote module (`RemoteComponent`) from the **Remote App**.
- Uses Webpack 5 with Module Federation for seamless integration.
- Shared dependencies to minimize bundle size and ensure consistency.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) (v8 or higher)
- A modern browser (Chrome, Firefox, etc.)


## Project Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/host-app.git
   cd host-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## Configuration

### Webpack Module Federation
The Host App uses Webpack's Module Federation Plugin to load a remote module from the Remote App.

**Key Configuration:**
- `remotes`:
  
  ```javascript
  remotes: {
    remoteApp: 'remoteApp@https://username.github.io/remote-app/remoteEntry.js',
  },
  ```

Update the URL in `webpack.config.js` if the Remote App's deployment location changes.

## Deployment

This project is deployed using GitHub Pages.

### Steps to Deploy:
1. Build the app:
   ```bash
   npm run build
   ```

2. Deploy to GitHub Pages:
   ```bash
   npm run deploy
   ```

3. The app will be available at:
   ```
   https://username.github.io/host-app/
   ```

---

## Project Structure

```
host-app/
├── public/
│   ├── index.html      # HTML template
├── src/
│   ├── components/
│   │   └── App.jsx     # Main App component
│   ├── index.js        # Entry point
├── package.json        # Project metadata and scripts
├── webpack.config.js   # Webpack configuration
```

## Scripts

- `npm start` - Runs the development server.
- `npm run build` - Builds the app for production.
- `npm run deploy` - Deploys the app to GitHub Pages.

## Dependencies

### Core
- `react` (v18.2.0)
- `react-dom` (v18.2.0)

### DevDependencies
- `webpack` (v5.x)
- `webpack-dev-server` (v5.x)
- `webpack-cli` (v6.x)
- `html-webpack-plugin` (v5.x)
- `babel-loader` (v9.x)
- `gh-pages` (v5.x)

## Troubleshooting

### Common Issues

1. **Remote Module Not Found**
   - Ensure the Remote App is deployed and accessible.
   - Check the `remoteEntry.js` URL in `webpack.config.js`.

2. **Version Mismatch**
   - React versions must match across the Host and Remote Apps.
   - Verify shared dependency versions in `package.json`.

3. **GitHub Pages Not Reflecting Changes**
   - Ensure the `gh-pages` branch is selected in the GitHub Pages settings.
   - Re-run `npm run deploy` after making changes.
