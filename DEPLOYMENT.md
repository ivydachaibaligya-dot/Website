# AUREVANT Launch Checklist (Netlify)

The site is hosted on Netlify and is currently private (team login). Before going public:

1. **Custom domain:** after connecting it in Netlify, set `url` in `src/config/site.ts` to the new domain. Canonical URLs, Open Graph tags, `sitemap.xml`, `robots.txt`, and structured data all read from it.
2. **Pricing:** set `hourlyRate` for each service in `src/config/pricing.ts` (leave `null` to show "Available on request").
3. **Forms:** confirm form detection is enabled (Site configuration → Forms), redeploy, and check that the `contact` and `quote-request` forms are listed. Forms are declared statically in `public/__forms.html`; keep field names there in sync with the React forms.
4. **Notifications:** add an email notification for new form submissions.
5. **Visitor access:** switch Site configuration → Access & security → Visitor access to public only when approved.
6. **Live test:** submit the contact form, the homepage consultation form, and a pricing quote request, then confirm each appears in Netlify Forms and in the notification inbox.
7. **Search Console:** submit `https://<domain>/sitemap.xml` after launch.

---

# Vercel Deployment Guide

This guide will walk you through deploying the AUREVANT website to Vercel.

## 🚀 Prerequisites

Before deploying, ensure you have:

- A [Vercel account](https://vercel.com/signup) (free)
- A [GitHub account](https://github.com/signup) (free)
- Your code pushed to a GitHub repository

## 📋 Step-by-Step Deployment

### Method 1: Deploy via Vercel Dashboard (Recommended)

1. **Push Code to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Import Project in Vercel**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Click "Import" on your GitHub repository
   - Vercel will automatically detect Next.js

3. **Configure Project Settings**
   - **Project Name**: Enter your preferred project name
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: Leave as `./` 
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `.next` (auto-detected)
   - **Install Command**: `npm install` (auto-detected)

4. **Environment Variables** (Optional)
   - Add any environment variables if needed
   - For this project, no environment variables are required

5. **Deploy**
   - Click "Deploy"
   - Wait for deployment to complete (usually 1-2 minutes)
   - Vercel will provide a live URL (e.g., `https://your-project.vercel.app`)

### Method 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **Follow the prompts**
   - Link to existing project or create new one
   - Confirm settings
   - Deploy

## ⚙️ Post-Deployment Configuration

### Custom Domain

1. Go to your project in Vercel Dashboard
2. Navigate to Settings → Domains
3. Add your custom domain (e.g., `your-domain.com`)
4. Update DNS records as instructed by Vercel

### Environment Variables

If you need to add environment variables later:

1. Go to Project Settings → Environment Variables
2. Add new variables
3. Redeploy to apply changes

## 🔄 Automatic Deployments

Vercel automatically deploys when you:

- Push to your connected Git branch
- Open a pull request
- Merge a pull request

### Branch Preview

Vercel provides preview URLs for:
- Every pull request
- Every git branch

## 📊 Monitoring

### Deployment Logs

- View deployment logs in Vercel Dashboard
- Access real-time build output
- Debug build failures

### Analytics

- Vercel provides built-in analytics
- Monitor performance, visitor data
- Track deployment history

## 🔧 Common Issues & Solutions

### Build Failures

**Issue**: Build fails during deployment

**Solutions**:
1. Check build logs in Vercel Dashboard
2. Ensure all dependencies are in package.json
3. Verify Node.js version compatibility
4. Run `npm run build` locally to reproduce

### Environment Variables Missing

**Issue**: App crashes due to missing environment variables

**Solution**:
1. Add required variables in Project Settings
2. Redeploy to apply changes

### Custom Domain Issues

**Issue**: Custom domain not working

**Solutions**:
1. Verify DNS records are correct
2. Wait for DNS propagation (up to 48 hours)
3. Check SSL certificate status in Vercel

## 🎯 Best Practices

### 1. Branch Strategy
- Use `main` branch for production
- Use feature branches for development
- Test changes in preview deployments

### 2. Performance Optimization
- Vercel automatically optimizes images
- Enable Edge Functions for better performance
- Use Vercel Analytics for monitoring

### 3. Security
- Keep dependencies updated
- Use environment variables for sensitive data
- Enable Vercel's security features

## 📱 Scaling

Vercel automatically handles:
- SSL certificates
- CDN distribution
- Global edge network
- Automatic scaling

No manual configuration needed.

## 💰 Cost

- **Hobby Plan**: Free (perfect for personal projects)
- **Pro Plan**: $20/month (for production use)
- **Enterprise**: Custom pricing

The Hobby Plan includes:
- Unlimited deployments
- Automatic HTTPS
- Global CDN
- 100GB bandwidth per month

## 🆚 Alternative Deployment Platforms

While Vercel is recommended, you can also deploy to:

- **Netlify**: Similar to Vercel, great Next.js support
- **AWS Amplify**: AWS infrastructure, good for AWS users
- **Railway**: Simple deployment, supports databases
- **Digital Ocean**: Full control, good for custom setups

## 📞 Support

If you encounter issues:

1. Check [Vercel Documentation](https://vercel.com/docs)
2. Search [Vercel Community](https://vercel.com/community)
3. Contact Vercel Support (available on paid plans)

---

Your AUREVANT website is now live! 🎉
