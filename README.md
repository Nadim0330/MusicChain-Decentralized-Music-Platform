# 🎵 Decentralized Social Media for Musicians

A full-stack DApp where musicians can upload their music, receive likes and connect anonymously with producers and fans. Built using React, Solidity, IPFS and Ethereum (Sepolia Testnet) — with blockchain-based ownership, messaging and interaction.
check it out on: https://musicchain-decentralized-music-platform.onrender.com/
---

## 🚀 Features

- 🎧 Upload songs to IPFS via Pinata  
- 🔐 Store metadata and interactions on Ethereum blockchain  
- ❤️ Like music directly on-chain  
- 🧾 Generate blockchain-based ownership certificates  
- 🧑‍🤝‍🧑 View and connect with other musicians  
- 💬 Secure on-chain messaging (private blockchain)  
- ✅ Fully decentralized, no local storage  
- 🦊 Connect via MetaMask (Sepolia only)  

---

## ⚙️ Tech Stack

- **Frontend**: React / Next.js, Tailwind CSS  
- **Smart Contracts**: Solidity  
- **Blockchain**: Ethereum (Sepolia Testnet)  
- **Wallet Integration**: ethers.js, MetaMask  
- **File Storage**: IPFS via Pinata  
- **Backend Infra**: Alchemy  
- **Chat Chain**: Custom private chain for 1-to-1 messages  

---

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/music-dapp.git
   cd music-dapp
2. **Install Dependencies**
   ```bash
   npm install
3. **Set Up Environment Variables**
   - Create a .env.local file in the root directory and paste the following:
   ```bash
   NEXT_PUBLIC_PINATA_API_KEY=your_pinata_api_key
   NEXT_PUBLIC_PINATA_SECRET_API=your_pinata_secret
   NEXT_PUBLIC_ALCHEMY_API_URL=https://eth-sepolia.g.alchemy.com/v2/your_alchemy_api_key
4. **Install Dependencies**
   ```bash
   npm run dev
- Visit http://localhost:3000 in your browser.
