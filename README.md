# 🌳 BitTree - Developer Link in Bio Platform

BitTree is a modern, developer-focused Linktree clone built with Next.js. It allows developers to create beautiful, customizable link profiles with multiple templates to showcase their projects, social profiles, portfolios, and more—all from one link in their bio.

**For Developers. By Developers.**

---

## ✨ Features

- 🔐 **Secure Authentication** - Clerk-powered authentication for secure user management
- 🎨 **Multiple Templates** - 6 professionally designed templates to choose from:
  - Minimal - Clean and simple design
  - Dark Dev - Developer-focused dark theme
  - Gradient Glow - Eye-catching gradient effects
  - Code Inspired - Tech-inspired design
  - Portfolio Pro - Portfolio showcase template
  - CyberPunk - Futuristic cyberpunk aesthetic
- 🔗 **Custom Links Management** - Add, edit, and organize your links
- 📸 **Profile Customization** - Add profile pictures and descriptions
- 📊 **Dashboard** - Manage all your BitTrees from one place
- 🎯 **Profile Preview** - See your profile before publishing
- 🚀 **High Performance** - Built with Next.js for optimal speed
- 📱 **Responsive Design** - Works seamlessly on all devices
- ✨ **Smooth Animations** - Powered by Framer Motion
- 🔔 **Toast Notifications** - Real-time feedback with React Toastify

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|-----------|
| **Frontend Framework** | [Next.js 16.1.6](https://nextjs.org/) |
| **React** | v19.0.0 |
| **Styling** | [Tailwind CSS 3.4.1](https://tailwindcss.com/) |
| **Authentication** | [@clerk/nextjs 6.37.5](https://clerk.com/) |
| **Database** | [MongoDB 6.12.0](https://www.mongodb.com/) |
| **Animations** | [Framer Motion 12.34.3](https://www.framer.com/motion/) |
| **Icons** | [React Icons 5.5.0](https://react-icons.github.io/react-icons/), [Lucide React 0.575.0](https://lucide.dev/) |
| **Notifications** | [React Toastify 11.0.3](https://fkhadra.github.io/react-toastify/introduction) |
| **Linting** | ESLint 9 |
| **CSS Processing** | PostCSS 8 |

---

## 📁 Project Structure

```
BitTree/
├── app/                          # Next.js App Router
│   ├── api/                      # API Routes
│   │   ├── add/route.js         # Create new BitTree profile
│   │   ├── delete/route.js      # Delete BitTree profile
│   │   ├── profile/[handle]/route.js # Get public profile
│   │   └── update/route.js      # Update BitTree profile
│   ├── dashboard/page.js        # User dashboard
│   ├── discover/page.js         # Discover BitTrees
│   ├── edit/[handle]/page.js    # Edit profile
│   ├── generate/page.js         # Create new profile
│   ├── pricing/page.js          # Pricing page
│   ├── templates/page.js        # Browse templates
│   ├── [handle]/page.js         # Public profile view
│   ├── layout.js                # Root layout
│   ├── page.js                  # Home page
│   └── globals.css              # Global styles
├── components/                   # React Components
│   ├── DeleteBitTreeButton.js   # Delete profile button
│   ├── Footer.js                # Footer component
│   ├── Navbar.js                # Navigation bar
│   ├── TemplatePreview.js       # Template preview
│   └── templatesDesign/         # Template Components
│       ├── BaseTemplate.js
│       ├── CodeInspiredTemplate.js
│       ├── CyberPunkTemplate.js
│       ├── DarkDevTemplate.js
│       ├── GradientGlowTemplate.js
│       ├── MinimalTemplate.js
│       └── PortfolioProTemplate.js
├── lib/                          # Utility Functions
│   ├── mongodb.js               # MongoDB connection manager
│   └── templateMap.js           # Template mapping
├── public/                       # Static assets
├── package.json                 # Dependencies
├── next.config.mjs              # Next.js configuration
├── tailwind.config.mjs          # Tailwind CSS configuration
├── postcss.config.mjs           # PostCSS configuration
├── jsconfig.json                # JavaScript configuration
├── eslint.config.mjs            # ESLint configuration
└── README.md                    # This file
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, or pnpm package manager
- MongoDB database (local or cloud)
- Clerk account for authentication

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/yourusername/bittree.git
cd bittree
```

2. **Install dependencies:**
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Set up environment variables:**
Create a `.env.local` file in the root directory:
```env
# MongoDB Connection
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/bittree?retryWrites=true&w=majority

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard
```

4. **Run the development server:**
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. **Open your browser:**
Navigate to [http://localhost:3000](http://localhost:3000)

---

## 📝 Available Scripts

```bash
# Development server with hot reload
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run ESLint
npm run lint
```

---

## 🔌 API Routes

### POST `/api/add`
Create a new BitTree profile
- **Authentication:** Required (Clerk)
- **Body Parameters:**
  - `handle` (string): Unique profile handle
  - `template` (string): Template ID
  - `links` (array): Array of link objects
  - `pic` (string): Profile picture URL
  - `desc` (string): Profile description

### POST `/api/update`
Update an existing BitTree profile
- **Authentication:** Required (Clerk)
- **Body Parameters:** Same as add route

### POST `/api/delete`
Delete a BitTree profile
- **Authentication:** Required (Clerk)
- **Body Parameters:**
  - `handle` (string): Profile handle to delete

### GET `/api/profile/[handle]`
Get public profile data
- **Authentication:** Not required
- **URL Parameters:**
  - `handle` (string): Profile handle

---

## 🎨 Available Templates

BitTree comes with 6 professionally designed templates:

1. **Minimal** - Minimalist design perfect for professionals
2. **Dark Dev** - Dark theme optimized for developer portfolios
3. **Gradient Glow** - Vibrant gradient design with glowing effects
4. **Code Inspired** - Tech-inspired design with code elements
5. **Portfolio Pro** - Portfolio showcase template
6. **CyberPunk** - Futuristic cyberpunk aesthetic

Each template is fully responsive and works seamlessly on all devices.

---

## 📦 Database Schema

### BitTree Profile Collection
```javascript
{
  _id: ObjectId,
  userId: String,              // Clerk User ID
  handle: String,              // Unique profile handle (lowercase)
  template: String,            // Selected template ID
  pic: String,                 // Profile picture URL
  desc: String,                // Profile description
  links: [
    {
      title: String,           // Link title
      url: String,             // Link URL
      icon: String             // Icon identifier
    }
  ],
  createdAt: Date,
  updatedAt: Date
}
```

---

## 🔒 Security Features

- ✅ Clerk authentication for secure user management
- ✅ Server-side authentication verification
- ✅ User isolation (users can only manage their own profiles)
- ✅ MongoDB connection pooling in development
- ✅ Environment variables for sensitive data

---

## 🚀 Deployment

### Deploy on Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Add environment variables in Vercel dashboard
5. Deploy!

### Other Platforms

BitTree can be deployed on any platform that supports Node.js:
- Railway
- Heroku
- DigitalOcean
- AWS
- Google Cloud
- Azure

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 📞 Support & Contact

For support, email support@bittree.dev or open an issue on GitHub.

---

## 🎯 Roadmap

- [ ] Analytics dashboard for link clicks
- [ ] Custom domain support
- [ ] Link analytics and tracking
- [ ] Team collaboration features
- [ ] Advanced customization options
- [ ] Mobile app
- [ ] AI-powered link organization

---

## 💡 Built with ❤️ for Developers
