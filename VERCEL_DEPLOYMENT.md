# 🚀 Guide Rapide - Déploiement Vercel

## Étape 1 : Installer Vercel CLI

```powershell
npm install -g vercel
```

## Étape 2 : Se connecter à Vercel

```powershell
vercel login
```

Cela ouvrira votre navigateur pour vous connecter avec votre compte (GitHub, GitLab, ou email).

## Étape 3 : Déployer le Frontend

### Option A : Déploiement depuis le dossier frontend

```powershell
cd frontend
vercel
```

Lors de la première fois, Vercel vous posera des questions :
- **Set up and deploy?** → YES
- **Which scope?** → Choisissez votre compte
- **Link to existing project?** → NO
- **Project name?** → `sopi-immobilier` (ou laissez par défaut)
- **In which directory is your code located?** → `./` 
- **Want to override settings?** → YES
  - **Build Command:** `npm run build`
  - **Output Directory:** `dist`
  - **Install Command:** `npm install`

### Pour déployer en production :

```powershell
cd frontend
vercel --prod
```

## Étape 4 : Configurer le Domaine www.sopi-immobilier.com

1. Allez sur [vercel.com/dashboard](https://vercel.com/dashboard)
2. Sélectionnez votre projet `sopi-immobilier`
3. Allez dans **Settings** → **Domains**
4. Cliquez sur **Add Domain**
5. Entrez : `www.sopi-immobilier.com`
6. Vercel vous donnera les enregistrements DNS à configurer

## Étape 5 : Configurer les Variables d'Environnement sur Vercel

1. Dans votre projet Vercel → **Settings** → **Environment Variables**
2. Ajoutez :
   ```
   VITE_API_URL = https://votre-backend.onrender.com
   VITE_GEMINI_API_KEY = votre_clé_gemini
   VITE_SUPABASE_URL = votre_url_supabase
   VITE_SUPABASE_ANON_KEY = votre_clé_supabase
   ```

## ⚠️ Important : Le Backend

Vercel est excellent pour le **frontend**, mais **ne supporte pas bien les serveurs Node.js persistants** comme notre backend Express.

### Pour le Backend, utilisez l'une de ces options :

#### Option 1 : Render.com (Gratuit pour commencer)
1. Allez sur [render.com](https://render.com)
2. Créez un compte
3. **New +** → **Web Service**
4. Connectez votre repo GitHub
5. Configuration :
   - **Name:** `sopi-backend`
   - **Root Directory:** `backend`
   - **Build Command:** `npm install && npm run build`
   - **Start Command:** `npm start`
6. Ajoutez les variables d'environnement (PORT, SUPABASE_URL, etc.)
7. Copiez l'URL donnée (ex: `https://sopi-backend.onrender.com`)

#### Option 2 : Railway.app
Plus rapide à configurer, interface simple.

#### Option 3 : Votre VPS avec Docker (ce que vous avez déjà)
Si vous avez un VPS, gardez le backend sur Docker et pointez le frontend Vercel vers votre API.

## 📝 Résumé de l'Architecture Recommandée

```
┌─────────────────────────────────────┐
│  www.sopi-immobilier.com            │
│  Frontend React (Vercel)            │
│  ✅ SSL automatique                 │
│  ✅ CDN mondial                     │
└─────────────────┬───────────────────┘
                  │
                  │ API Calls
                  ▼
┌─────────────────────────────────────┐
│  api.sopi-immobilier.com            │
│  Backend Express (Render/Railway)   │
│  ✅ Base de données Supabase        │
│  ✅ API Gemini                      │
└─────────────────────────────────────┘
```

## 🎯 Commandes Rapides

```powershell
# Développement local
npm run dev

# Build local pour tester
cd frontend
npm run build

# Preview du build
npm run preview

# Déployer sur Vercel (production)
vercel --prod
```

## ✅ Checklist

- [ ] Compte Vercel créé
- [ ] Vercel CLI installé (`npm install -g vercel`)
- [ ] Connecté à Vercel (`vercel login`)
- [ ] Frontend déployé (`cd frontend && vercel --prod`)
- [ ] Backend déployé sur Render/Railway
- [ ] Variables d'environnement configurées
- [ ] Domaine `www.sopi-immobilier.com` ajouté dans Vercel
- [ ] DNS configurés chez votre registraire
- [ ] VITE_API_URL pointe vers le bon backend

## 🆘 Dépannage

### "Command not found: vercel"
```powershell
npm install -g vercel
```

### Le site affiche une erreur 404
Vérifiez que `outputDirectory` est bien `dist` dans les settings Vercel.

### Les appels API échouent
Vérifiez `VITE_API_URL` dans les variables d'environnement Vercel.

---

**Prêt à déployer ?** Commencez par `npm install -g vercel` puis `vercel login` ! 🚀
