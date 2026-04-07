# Guide de Déploiement - SOPI Immobilier
**www.sopi-immobilier.com**

---

## 📋 Table des Matières
1. [Prérequis](#prérequis)
2. [Configuration des Variables d'Environnement](#configuration-des-variables-denvironnement)
3. [Options de Déploiement](#options-de-déploiement)
4. [Configuration du Domaine](#configuration-du-domaine)
5. [Configuration des Emails Professionnels](#configuration-des-emails-professionnels)
6. [Certificat SSL](#certificat-ssl)
7. [Maintenance](#maintenance)

---

## 🔧 Prérequis

### Comptes Requis
- [ ] Compte Supabase (base de données)
- [ ] Clé API Google Gemini (AI Assistant)
- [ ] Compte de déploiement (Vercel/Netlify/VPS)
- [ ] Nom de domaine **sopi-immobilier.com** acheté

### Outils Locaux
```bash
node --version  # v20 ou supérieur
npm --version   # v10 ou supérieur
docker --version  # (optionnel) pour déploiement Docker
```

---

## 🔐 Configuration des Variables d'Environnement

### Backend (.env)
Créez un fichier `.env` dans le dossier `backend/` :

```env
# Port du serveur
PORT=4000

# CORS - Domaine du frontend
CORS_ORIGIN=https://www.sopi-immobilier.com

# Supabase Configuration
SUPABASE_URL=https://votre-projet.supabase.co
SUPABASE_ANON_KEY=votre_clé_anonyme_supabase

# Google Gemini AI
GEMINI_API_KEY=votre_clé_gemini_api

# Environment
NODE_ENV=production
```

### Frontend (.env)
Créez un fichier `.env` dans le dossier `frontend/` :

```env
# URL du Backend API
VITE_API_URL=https://api.sopi-immobilier.com

# Google Gemini API Key
GEMINI_API_KEY=votre_clé_gemini_api
VITE_GEMINI_API_KEY=votre_clé_gemini_api

# Supabase (si utilisé côté frontend)
VITE_SUPABASE_URL=https://votre-projet.supabase.co
VITE_SUPABASE_ANON_KEY=votre_clé_anonyme_supabase
```

---

## 🚀 Options de Déploiement

### Option 1 : Vercel (Recommandé pour simplicité)

#### Déploiement du Frontend
1. **Installer Vercel CLI** :
   ```bash
   npm install -g vercel
   ```

2. **Déployer le Frontend** :
   ```bash
   cd frontend
   vercel --prod
   ```

3. **Configurer le domaine** :
   - Dans le dashboard Vercel → Settings → Domains
   - Ajouter : `www.sopi-immobilier.com` et `sopi-immobilier.com`

#### Déploiement du Backend
Le backend nécessite un serveur Node.js persistant. Options :
- **Render.com** (gratuit avec limitations)
- **Railway.app**
- **Heroku**
- **VPS** (DigitalOcean, AWS, etc.)

**Sur Render.com** :
1. Créer un nouveau "Web Service"
2. Connecter le repo GitHub
3. Configurer :
   - Build Command: `cd backend && npm install && npm run build`
   - Start Command: `cd backend && npm start`
   - Root Directory: `/`
4. Ajouter les variables d'environnement
5. Le domaine sera : `https://votre-app.onrender.com`

---

### Option 2 : Netlify (Frontend) + Backend séparé

#### Frontend sur Netlify
```bash
# Installer Netlify CLI
npm install -g netlify-cli

# Déployer
cd frontend
netlify deploy --prod
```

Configuration automatique via `netlify.toml` (déjà créé).

---

### Option 3 : Docker sur VPS

**Avantages** : Contrôle total, coût prévisible, emails inclus possible

#### Sur un VPS (DigitalOcean, OVH, etc.)

1. **Installer Docker et Docker Compose** sur le serveur :
   ```bash
   curl -fsSL https://get.docker.com -o get-docker.sh
   sudo sh get-docker.sh
   sudo apt install docker-compose
   ```

2. **Cloner le projet** :
   ```bash
   git clone votre-repo
   cd SOPI
   ```

3. **Créer le fichier .env.production** :
   ```bash
   cp backend/.env.example .env.production
   # Éditer avec vos vraies valeurs
   nano .env.production
   ```

4. **Lancer avec Docker Compose** :
   ```bash
   docker-compose -f docker-compose.prod.yml up -d
   ```

5. **Vérifier les logs** :
   ```bash
   docker-compose logs -f
   ```

---

## 🌐 Configuration du Domaine

### DNS Configuration
Chez votre registraire de domaine (GoDaddy, OVH, Namecheap, etc.) :

#### Pour Vercel/Netlify :
```
Type    Nom     Valeur
A       @       76.76.21.21 (IP Vercel)
CNAME   www     cname.vercel-dns.com
```
*Les valeurs exactes vous seront fournies par Vercel/Netlify*

#### Pour VPS :
```
Type    Nom             Valeur
A       @               IP_DE_VOTRE_VPS
A       www             IP_DE_VOTRE_VPS
A       api             IP_DE_VOTRE_VPS
CNAME   mail            mail.votre-service-email.com
```

---

## 📧 Configuration des Emails Professionnels

### Oui, vous pouvez avoir des emails @sopi-immobilier.com !

**Important** : Vercel/Netlify ne fournissent PAS de service d'email. Vous devez utiliser un service tiers.

### Solutions Recommandées

#### 1. **Google Workspace** (Recommandé - Professionnel)
- **Prix** : ~5-6€/mois par utilisateur
- **Avantages** : Gmail interface, 30GB stockage, Google Drive, Calendar
- **Configuration** :
  1. S'inscrire sur [workspace.google.com](https://workspace.google.com)
  2. Vérifier le domaine `sopi-immobilier.com`
  3. Configurer les enregistrements MX dans votre DNS :
     ```
     Type  Priorité  Valeur
     MX    1         ASPMX.L.GOOGLE.COM
     MX    5         ALT1.ASPMX.L.GOOGLE.COM
     MX    5         ALT2.ASPMX.L.GOOGLE.COM
     MX    10        ALT3.ASPMX.L.GOOGLE.COM
     MX    10        ALT4.ASPMX.L.GOOGLE.COM
     ```
  4. Créer vos adresses : contact@sopi-immobilier.com, info@sopi-immobilier.com, etc.

#### 2. **Microsoft 365 Business Basic**
- **Prix** : ~5€/mois par utilisateur
- **Avantages** : Outlook, OneDrive, Teams
- Configuration similaire à Google Workspace

#### 3. **Zoho Mail** (Économique)
- **Prix** : Plan gratuit (5 utilisateurs max) ou 1€/mois
- **Avantages** : Bon rapport qualité-prix
- [zoho.com/mail](https://www.zoho.com/mail/)

#### 4. **ProtonMail** (Sécurité maximale)
- **Prix** : ~5€/mois
- **Avantages** : Chiffrement end-to-end
- [proton.me](https://proton.me)

#### 5. **Email avec votre VPS** (Si option Docker)
Si vous avez un VPS, vous pouvez installer votre propre serveur email :
- **Mail-in-a-Box** (plus facile)
- **Mailcow** (plus avancé)

⚠️ **Attention** : Gérer son propre serveur email demande de l'expertise technique.

### Enregistrements DNS pour les Emails

Une fois votre service d'email choisi, ajoutez ces enregistrements DNS :

```
# Exemple pour Google Workspace
Type    Nom     Valeur
MX      @       ASPMX.L.GOOGLE.COM (priorité 1)
TXT     @       v=spf1 include:_spf.google.com ~all
TXT     _dmarc  v=DMARC1; p=quarantine; rua=mailto:admin@sopi-immobilier.com
```

---

## 🔒 Certificat SSL (HTTPS)

### Avec Vercel/Netlify
✅ **SSL automatique et gratuit** (Let's Encrypt)
- Activé automatiquement sur votre domaine

### Avec VPS/Docker
Installation de Certbot pour Let's Encrypt :

```bash
# Installer Certbot
sudo apt install certbot python3-certbot-nginx

# Obtenir le certificat
sudo certbot --nginx -d sopi-immobilier.com -d www.sopi-immobilier.com

# Renouvellement automatique
sudo certbot renew --dry-run
```

---

## 🛠 Maintenance

### Scripts Utiles

```bash
# Installer toutes les dépendances
npm run install:all

# Développement local
npm run dev

# Build production
npm run build

# Docker - Lancer en production
npm run docker:prod

# Voir les logs Docker
npm run docker:logs

# Arrêter Docker
npm run docker:down
```

### Commandes Backend

```bash
cd backend

# Développement
npm run dev

# Build
npm run build

# Production
npm run prod

# Docker
npm run docker:build
npm run docker:run
```

### Commandes Frontend

```bash
cd frontend

# Développement
npm run dev

# Build
npm run build

# Preview du build
npm run preview

# Docker
npm run docker:build
npm run docker:run
```

---

## 📊 Monitoring & Analytics

### Recommandations
- **Vercel Analytics** (si déployé sur Vercel)
- **Google Analytics** (ajout dans frontend)
- **Sentry** (monitoring des erreurs)
- **Uptime Robot** (surveillance de disponibilité)

---

## 🆘 Troubleshooting

### Le site ne charge pas
1. Vérifier les DNS (propagation peut prendre 24-48h)
2. Vérifier les logs : `npm run docker:logs`
3. Tester l'API : `https://api.sopi-immobilier.com/api/health`

### Les emails ne fonctionnent pas
1. Vérifier les enregistrements MX avec `https://mxtoolbox.com`
2. Attendre la propagation DNS (24-48h)
3. Vérifier SPF/DKIM/DMARC

### Erreur CORS
1. Vérifier `CORS_ORIGIN` dans `.env` du backend
2. Doit correspondre exactement à l'URL du frontend

---

## 📞 Support

Pour toute question technique sur le déploiement :
- Documentation Vercel : [vercel.com/docs](https://vercel.com/docs)
- Documentation Netlify : [docs.netlify.com](https://docs.netlify.com)
- Support Supabase : [supabase.com/docs](https://supabase.com/docs)

---

## ✅ Checklist de Déploiement

- [ ] Domaine `sopi-immobilier.com` acheté
- [ ] Variables d'environnement configurées
- [ ] Base de données Supabase créée et configurée
- [ ] Clé API Google Gemini obtenue
- [ ] Frontend déployé sur Vercel/Netlify
- [ ] Backend déployé sur Render/Railway/VPS
- [ ] DNS configurés et propagés
- [ ] SSL/HTTPS activé
- [ ] Service d'email configuré (Google Workspace/Zoho/etc.)
- [ ] Enregistrements MX configurés
- [ ] Tests de l'application en production
- [ ] Emails de test envoyés/reçus

**Félicitations ! Votre application SOPI Immobilier est maintenant en ligne ! 🎉**
