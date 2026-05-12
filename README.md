# SkillBadge — Certifications NFT sur Blockchain

> **MIABE Hackathon 2026 · Darollo Technologies Corporation · Code équipe : BF-02**

Plateforme blockchain permettant de certifier les compétences des jeunes autodidactes grâce à des badges NFT vérifiables sur Polygon.

---

## 🚀 Démo Live

**Frontend :** [skillbadge.vercel.app](https://skillbadge.vercel.app)  
**Smart Contract :** [Polygonscan Amoy](https://amoy.polygonscan.com)

---

## 📸 Aperçu

| Landing Page | Dashboard Formateur | Portfolio Apprenant | Portail Recruteur |
|---|---|---|---|
| Hero + CTA | Mint NFT + Historique | Badges + QR Code | Vérification blockchain |

---

## 🛠 Stack Technique

### Frontend
- **React 18** + **Vite 5**
- **Tailwind CSS** (dark mode + glassmorphism)
- **Framer Motion** (animations fluides)
- **React Router v6** (SPA routing)
- **Ethers.js v6** (interaction blockchain)
- **react-hot-toast** (notifications)
- **qrcode.react** (QR codes)

### Blockchain
- **Solidity 0.8.20**
- **OpenZeppelin ERC-721** (standard NFT)
- **Polygon Amoy Testnet** (chainId: 80002)
- **Hardhat** (déploiement + tests)

### Déploiement
- **Vercel** (frontend CI/CD)
- **IPFS** (metadata NFT)

---

## 📁 Structure du Projet

```
skillbadge/
├── contracts/
│   └── SkillBadge.sol          # Smart contract ERC-721
├── scripts/
│   └── deploy.js               # Script Hardhat de déploiement
├── src/
│   ├── components/
│   │   ├── badges/
│   │   │   └── BadgeCard.jsx   # Carte NFT avec QR + actions
│   │   ├── layout/
│   │   │   ├── Navbar.jsx      # Navigation + wallet
│   │   │   └── Footer.jsx
│   │   └── ui/
│   │       └── index.jsx       # Composants réutilisables
│   ├── contracts/
│   │   └── SkillBadgeABI.js    # ABI + config réseau
│   ├── hooks/
│   │   └── useWeb3.jsx         # Context MetaMask + ethers
│   ├── pages/
│   │   ├── LandingPage.jsx     # Page d'accueil
│   │   ├── TrainerDashboard.jsx# Dashboard formateur
│   │   ├── LearnerPortfolio.jsx# Portfolio apprenant
│   │   └── RecruiterPortal.jsx # Portail recruteur
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── hardhat.config.js
├── vercel.json
├── vite.config.js
├── tailwind.config.js
└── package.json
```

---

## ⚡ Installation & Lancement

### 1. Cloner et installer

```bash
git clone https://github.com/darollo-tech/skillbadge.git
cd skillbadge
npm install
```

### 2. Configurer l'environnement

```bash
cp .env.example .env
# Éditer .env et renseigner VITE_CONTRACT_ADDRESS
```

### 3. Lancer en développement

```bash
npm run dev
# → http://localhost:5173
```

### 4. Build production

```bash
npm run build
npm run preview
```

---

## 🔗 Déploiement du Smart Contract

### Prérequis
- MetaMask configuré sur Polygon Amoy
- MATIC de test (faucet : https://faucet.polygon.technology)
- Clé privée du wallet déployeur

### Installer Hardhat

```bash
npm install --save-dev hardhat @nomicfoundation/hardhat-toolbox @openzeppelin/contracts dotenv
```

### Variables d'environnement Hardhat

```bash
# .env (à la racine)
PRIVATE_KEY=votre_cle_privee_sans_0x
POLYGON_RPC_URL=https://rpc-amoy.polygon.technology/
POLYGONSCAN_API_KEY=votre_api_key_polygonscan
```

### Déployer

```bash
npx hardhat compile
npx hardhat run scripts/deploy.js --network polygonAmoy
```

Le script affichera l'adresse du contrat. Copiez-la dans votre `.env` :
```
VITE_CONTRACT_ADDRESS=0xVOTRE_ADRESSE_CONTRACT
```

### Vérifier sur Polygonscan

```bash
npx hardhat verify --network polygonAmoy 0xVOTRE_ADRESSE_CONTRACT
```

---

## 🎮 Utilisation

### Formateur
1. Connecter MetaMask (réseau Polygon Amoy)
2. Aller sur `/trainer`
3. Remplir : compétence, niveau, adresse wallet apprenant
4. Cliquer "Attribuer le Badge NFT"
5. Confirmer la transaction dans MetaMask

### Apprenant
1. Connecter MetaMask ou entrer son adresse
2. Aller sur `/portfolio`
3. Voir tous ses badges NFT
4. Partager via QR Code ou lien

### Recruteur
1. Aller sur `/verify`
2. Entrer l'adresse wallet du candidat **ou** l'ID du badge
3. Voir les certifications blockchain vérifiées instantanément

---

## 📜 Smart Contract

### Fonctions principales

```solidity
// Émettre un badge NFT
function mintBadge(
    address student,
    string calldata skill,
    string calldata level,
    string calldata tokenURI_
) external onlyTrainer returns (uint256 tokenId)

// Vérifier un badge
function verifyBadge(uint256 tokenId)
    external view returns (Badge memory badge, bool valid)

// Récupérer tous les badges d'un apprenant
function getStudentBadges(address student)
    external view returns (Badge[] memory badges)
```

### Structure Badge

```solidity
struct Badge {
    uint256 tokenId;   // ID NFT unique
    string  skill;     // Compétence certifiée
    string  level;     // debutant | intermediaire | avance | expert
    address trainer;   // Adresse du formateur
    address student;   // Adresse de l'apprenant
    uint256 issuedAt;  // Timestamp UNIX
    bool    isValid;   // false = révoqué
}
```

---

## 🌐 Déploiement Vercel

```bash
# Installer Vercel CLI
npm i -g vercel

# Déployer
vercel --prod

# Variables d'environnement à configurer sur vercel.com :
# VITE_CONTRACT_ADDRESS = 0x...
```

---

## 🏆 Hackathon MIABE 2026

**Équipe :** Darollo Technologies Corporation  
**Code :** BF-02  
**Catégorie :** Web3 / Blockchain pour l'éducation

**Problème résolu :** Les jeunes autodidactes d'Afrique n'ont aucun moyen de prouver leurs compétences techniques de façon crédible aux recruteurs.

**Solution :** Des badges NFT ERC-721 sur Polygon, émis par des formateurs vérifiés, stockés de façon permanente sur la blockchain, vérifiables par n'importe quel recruteur en quelques secondes.

**Impact :** Démocratiser l'accès à l'emploi tech pour les jeunes autodidactes du Burkina Faso et d'Afrique de l'Ouest.

---

## 📄 Licence

MIT — Darollo Technologies Corporation © 2026
