# Deployment Guide

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

## 🚀 Automatic Deployment

### How it works

1. **Push to main branch** - When you push code to the `main` branch, GitHub Actions automatically:
   - Installs dependencies
   - Builds the project
   - Deploys to GitHub Pages

2. **Deployment URL** - Your site will be available at:
   ```
   https://plingier.github.io/bnp-clone/
   ```

### Workflow Files

- **Main deployment**: `.github/workflows/deploy.yml`
  - Uses GitHub's latest Pages deployment method
  - Recommended for most cases

- **Legacy deployment**: `.github/workflows/deploy-legacy.yml`
  - Alternative method using peaceiris/actions-gh-pages
  - Can be used as backup

## 🔧 Manual Deployment

### Local Build

```bash
# Install dependencies
npm install

# Build for production
npm run build

# Preview locally
npm run preview
```

### Manual GitHub Pages Setup

1. Go to your repository settings
2. Navigate to "Pages" section
3. Set source to "GitHub Actions"
4. Deploy using the workflow files

## 📁 Project Structure

```
├── .github/
│   └── workflows/
│       ├── deploy.yml          # Main deployment workflow
│       └── deploy-legacy.yml   # Alternative deployment workflow
├── src/                        # Source code
├── dist/                       # Build output (generated)
├── public/                     # Static assets
└── package.json               # Project configuration
```

## ⚙️ Configuration

### Vite Config
- Base path: `/bnp-clone/` (for GitHub Pages)
- Build output: `dist/` directory

### Package.json
- Homepage: `https://plingier.github.io/bnp-clone/`
- Build script: `npm run build`

## 🐛 Troubleshooting

### Common Issues

1. **Build fails**
   - Check GitHub Actions logs
   - Ensure all dependencies are in package.json
   - Verify Node.js version (18+)

2. **White screen**
   - Check if base path is correct in vite.config.ts
   - Verify BrowserRouter basename in App.tsx
   - Ensure all assets are loading correctly

3. **Routing issues**
   - Check if 404.html exists in public folder
   - Verify React Router configuration

### Debug Steps

1. **Check Actions tab** in GitHub repository
2. **View deployment logs** for any errors
3. **Test locally** with `npm run build && npm run preview`
4. **Check browser console** for JavaScript errors

## 📞 Support

If you encounter issues:

1. Check the GitHub Actions logs
2. Review the deployment configuration
3. Test the build locally first
4. Ensure all environment variables are set correctly 