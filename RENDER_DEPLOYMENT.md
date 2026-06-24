# Render Deployment Guide for Courthouse-AI

## Prerequisites
- GitHub account with Courthouse-AI repository
- Render account (free tier available at https://render.com)
- Google Gemini API Key

## Steps to Deploy

### 1. Prepare Your Repository
Your repository is already configured with:
- `render.yaml` - Render deployment configuration
- `vite.config.ts` - Updated for dynamic PORT binding
- `package.json` - All dependencies specified

### 2. Deploy on Render

1. Go to [Render Dashboard](https://dashboard.render.com)
2. Click **"New +"** → **"Web Service"**
3. Connect your GitHub repository: `haistud/Courthouse-AI`
4. Fill in the deployment settings:
   - **Name**: `courthouse-ai` (or your preferred name)
   - **Environment**: `Node`
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm run preview`
   - **Plan**: Free (or upgrade as needed)

### 3. Set Environment Variables

1. In the Render dashboard, go to your service's **Environment** tab
2. Add the following environment variable:
   - **Key**: `GEMINI_API_KEY`
   - **Value**: Your actual Gemini API key (get it from [Google AI Studio](https://ai.google.dev/))

### 4. Deploy

Click **"Deploy"** and Render will:
- Clone your repository
- Install dependencies with `npm install`
- Build the project with `npm run build`
- Start the server with `npm run preview`

## Important Notes

- **Free Tier**: The free tier on Render has limitations (spins down after 15 minutes of inactivity)
- **Build Time**: First deploy may take 5-10 minutes
- **Logs**: Monitor deployment in the Render dashboard's "Logs" tab
- **API Key**: Never commit your actual API key to the repository. Use environment variables only.

## Troubleshooting

### Build fails with "module not found"
- Ensure all dependencies are in `package.json`
- Check Node.js version compatibility

### Port issues
- The `vite.config.ts` is configured to use `process.env.PORT` (Render's standard)
- No manual port configuration needed

### API key not loading
- Verify `GEMINI_API_KEY` is set in Render's environment variables
- Check that the variable name matches exactly

## Local Testing Before Deployment

```bash
# Install dependencies
npm install

# Set your local environment
cp .env.example .env.local
# Edit .env.local and add your GEMINI_API_KEY

# Run development server
npm run dev

# Build and preview (simulates production)
npm run build
npm run preview
```

## Next Steps

After successful deployment:
1. Your app will be live at: `https://courthouse-ai-<random>.onrender.com`
2. Test all AI features
3. Set up custom domain (optional, paid feature)
4. Configure auto-deploy on git push (available in Render settings)
