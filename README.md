
# Welcome to Aman Agarwal's CV

## Project info

**URL**: https://lovable.dev/projects/9a39bb19-f902-43dd-8e0c-151600441e13

## Deploying to GitHub Pages

To deploy this project to GitHub Pages, follow these steps:

1. Create a GitHub repository named `aman-agarwal-cv`
2. Connect your local project to the repository:
   ```sh
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/<YOUR-USERNAME>/aman-agarwal-cv.git
   git push -u origin main
   ```

3. Deploy the project using one of these methods:

   **Method 1: Using npm scripts**
   ```sh
   # Build and deploy
   npm run deploy
   ```

   **Method 2: Using the deploy script**
   ```sh
   # Make the script executable
   chmod +x deploy.sh
   
   # Update the GitHub username in the script
   # Then run
   ./deploy.sh
   ```

4. Your CV will be available at `https://<YOUR-USERNAME>.github.io/aman-agarwal-cv/`

## Development

Follow these steps to run the project locally:

```sh
# Step 1: Clone the repository
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory
cd aman-agarwal-cv

# Step 3: Install the dependencies
npm i

# Step 4: Start the development server
npm run dev
```

## Technologies Used

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS
