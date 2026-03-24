# 🌳 BitTree — Developer Link-in-Bio Platform

BitTree is a modern, developer-first Linktree alternative built with Next.js.
It lets developers create clean, customizable profile pages to showcase everything in one place — projects, portfolios, GitHub, social links, and more.

> **For Developers. By Developers.**

---

## 🚀 Live Demo

👉 https://bittree-demo.vercel.app *(update this with your actual link)*

---

## ✨ Features

* 🔐 Secure authentication (powered by Clerk)
* 🎨 Multiple modern templates (6 unique designs)
* 🔗 Custom link management (add, edit, delete)
* 👤 Profile customization (image + bio)
* 📊 Personal dashboard
* 👀 Live template preview before publishing
* ⚡ Built with Next.js for high performance
* 📱 Fully responsive (mobile-first)
* ✨ Smooth animations (Framer Motion)
* 🔔 Real-time notifications (React Toastify)

---

## 🎨 Templates

Choose from 6 developer-focused templates:

* Minimal
* Dark Dev
* Gradient Glow
* Code Inspired
* Portfolio Pro
* CyberPunk

Each template is optimized for performance and responsiveness.

---

## 🛠️ Tech Stack

* **Framework:** Next.js 16
* **Frontend:** React 19
* **Styling:** Tailwind CSS
* **Auth:** Clerk
* **Database:** MongoDB
* **Animations:** Framer Motion
* **Icons:** Lucide + React Icons

---

## 📁 Project Structure

```
BitTree/
├── app/
│   ├── api/
│   ├── dashboard/
│   ├── generate/
│   ├── edit/[handle]/
│   ├── templates/
│   ├── [handle]/
│   └── page.js
├── components/
├── lib/
├── public/
└── config files
```

---

## ⚙️ Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/khushkashyap/BitTree.git
cd BitTree
```

### 2. Install dependencies

```bash
npm install
```

### 3. Setup environment variables

Create `.env.local`:

```env
MONGODB_URI=your_mongodb_uri

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_key
CLERK_SECRET_KEY=your_secret

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard
```

⚠️ Never commit `.env.local`

---

### 4. Run locally

```bash
npm run dev
```

Open: http://localhost:3000

---

## 🔌 API Overview

| Route                   | Method | Description        |
| ----------------------- | ------ | ------------------ |
| `/api/add`              | POST   | Create profile     |
| `/api/update`           | POST   | Update profile     |
| `/api/delete`           | POST   | Delete profile     |
| `/api/profile/[handle]` | GET    | Get public profile |

---

## 🔒 Security

* Clerk authentication
* Protected routes via middleware
* User-specific data access
* Secure environment variables

---

## 🚀 Deployment

Recommended: **Vercel**

Steps:

1. Push repo to GitHub
2. Import into Vercel
3. Add env variables
4. Deploy

---

## 🧠 Future Improvements

* 📊 Link analytics
* 🌐 Custom domains
* 🤝 Team collaboration
* 🎨 Advanced UI customization
* 📱 Mobile app
* 🤖 AI-powered suggestions

---

## 🤝 Contributing

PRs are welcome!

```bash
git checkout -b feature/your-feature
git commit -m "Add feature"
git push origin feature/your-feature
```

---

## 📄 License

MIT License

---

## 👨‍💻 Author

**Khush Kumar Kashyap**

* GitHub: https://github.com/khushkashyap
* LinkedIn: https://linkedin.com/in/khush-kashyap

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub — it helps a lot!

---

## 💡 Built with ❤️ by a Developer, for Developers
