# k&stacks Website

Personal website for Krister Alasaarela - Custom software solutions for startups and small businesses.

## 🚀 Live Website

The website is deployed as a static site on Render.com.

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Custom CSS
- **Routing**: React Router DOM
- **Deployment**: Render.com Static Site

## 📁 Project Structure

```
k&stacks_website/
├── public/                 # Static assets (images, icons, robots.txt, sitemap.xml)
├── src/
│   ├── components/        # React components
│   │   ├── About/
│   │   ├── ClientLogos/
│   │   ├── Footer/
│   │   ├── Gallery/
│   │   ├── Hero/
│   │   ├── Navigation/
│   │   └── Services/
│   ├── pages/            # Page components
│   ├── types/            # TypeScript type definitions
│   └── assets/           # Stylesheets
├── dist/                 # Build output (generated)
└── index.html           # Main HTML template
```

## 🏃‍♂️ Development

### Prerequisites

- Node.js 18+
- npm

### Setup

1. Clone the repository:

```bash
git clone <your-repo-url>
cd k&stacks_website
```

2. Install dependencies:

```bash
npm install
```

3. Start development server:

```bash
npm run dev
```

The development server will start at `http://localhost:3000`

### Available Scripts

- `npm run dev` - Start Vite development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 🚀 Deployment on Render.com

This project is optimized for deployment on [Render.com](https://render.com) as a static site, following their [Create React App deployment guide](https://render.com/docs/deploy-create-react-app).

### Deployment Steps:

1. **Connect Repository**:

   - Go to [Render Dashboard](https://dashboard.render.com)
   - Click "New" → "Static Site"
   - Connect your GitHub repository

2. **Configure Build Settings**:

   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist`
   - **Node Version**: 18 (or latest LTS)

3. **Client-Side Routing**:

   - The project includes a `public/_redirects` file that handles React Router routing
   - This ensures all routes redirect to `index.html` for client-side routing

4. **Deploy**:
   - Click "Create Static Site"
   - Render will automatically build and deploy your site
   - Your site will be available at `https://your-site-name.onrender.com`

### Build Configuration

The project uses Vite with optimized settings for static deployment:

- **Output Directory**: `dist` (as required by Render)
- **Code Splitting**: Vendor and router chunks separated
- **Minification**: ESBuild for fast builds
- **No Source Maps**: Disabled for production

## 🎨 Features

- **Responsive Design**: Mobile-first approach with desktop optimization
- **Modern UI**: Clean, professional design
- **Fast Loading**: Optimized build with code splitting
- **SEO Friendly**: Proper meta tags, robots.txt, and sitemap
- **Gallery**: Dynamic image gallery with responsive layout
- **Services**: Interactive accordion-style service descriptions
- **Contact**: Multiple contact methods and social links

## 📊 Performance

- **Lighthouse Score**: Optimized for performance
- **Bundle Size**: ~185KB total (gzipped: ~65KB)
- **Image Optimization**: All images served from public folder
- **Caching**: Static assets cached by Render's CDN

## 🔧 Configuration

### Environment Variables

No environment variables are required for this static site deployment.

### Build Optimization

The Vite configuration includes:

- ESBuild minification for fast builds
- Code splitting for vendor libraries
- Optimized chunk sizes
- No source maps in production

## 📝 Content Management

To update website content:

1. **Services**: Edit `src/components/Services/servicesData.ts`
2. **Gallery**: Add images to `public/` and update `src/components/Gallery/galleryData.ts`
3. **About**: Edit `src/components/About/About.tsx`
4. **Client Logos**: Update `src/components/ClientLogos/ClientLogos.tsx`

## 🔍 SEO

The site includes:

- Comprehensive meta tags
- Open Graph tags for social sharing
- Twitter Card support
- Structured data (JSON-LD)
- Robots.txt and sitemap.xml
- Semantic HTML structure

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -am 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Contact

- **Email**: krister.alasaarela@gmail.com
- **LinkedIn**: [linkedin.com/in/kristeralasaarela](https://linkedin.com/in/kristeralasaarela)
- **Twitter**: [@1aurentius](https://x.com/1aurentius)

---

Built with ❤️ by Krister Alasaarela
