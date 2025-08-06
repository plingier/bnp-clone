# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/0fcc1d86-3fe7-4231-8502-05b6dde9bdcf

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/0fcc1d86-3fe7-4231-8502-05b6dde9bdcf) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

### Automatic Deployment (GitHub Actions)

This project includes GitHub Actions workflows for automatic deployment to GitHub Pages:

1. **Main Deployment**: Uses the latest GitHub Pages deployment method
   - File: `.github/workflows/deploy.yml`
   - Automatically deploys when you push to the `main` branch
   - Uses GitHub's built-in Pages deployment

2. **Legacy Deployment**: Alternative method using peaceiris/actions-gh-pages
   - File: `.github/workflows/deploy-legacy.yml`
   - Can be used as a backup or alternative deployment method

### Manual Deployment

Simply open [Lovable](https://lovable.dev/projects/0fcc1d86-3fe7-4231-8502-05b6dde9bdcf) and click on Share -> Publish.

### Local Build

To build the project locally:

```bash
npm run build
```

This will create a `dist` folder with the production build.

## GitHub Pages Configuration

The project is configured for GitHub Pages deployment at:
- **URL**: https://plingier.github.io/bnp-clone/
- **Base Path**: `/bnp-clone/`
- **Source**: GitHub Actions (automatic deployment)

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
