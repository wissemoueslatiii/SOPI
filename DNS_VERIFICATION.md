# Vérification DNS - sopi-immobilier.com

## Commandes de Vérification

### Windows PowerShell
```powershell
# Vérifier l'enregistrement A
nslookup sopi-immobilier.com

# Vérifier l'enregistrement CNAME
nslookup www.sopi-immobilier.com
```

### Résultats Attendus

#### Pour sopi-immobilier.com
```
Address: 216.198.79.1
```

#### Pour www.sopi-immobilier.com
```
Non-authoritative answer:
www.sopi-immobilier.com canonical name = c76b8b776916d392.vercel-dns-017.com
```

## Outils en Ligne

- **DNS Checker** : https://dnschecker.org/
  - Entrez : `sopi-immobilier.com`
  - Vérifiez que l'IP est `216.198.79.1` partout dans le monde

- **What's My DNS** : https://www.whatsmydns.net/
  - Entrez : `www.sopi-immobilier.com`
  - Type : CNAME
  - Doit pointer vers `c76b8b776916d392.vercel-dns-017.com.`

## Après Validation

Une fois les DNS propagés (statut ✅ dans Vercel) :

1. **SSL automatique** sera activé par Vercel (certificat Let's Encrypt)
2. Votre site sera accessible sur :
   - https://sopi-immobilier.com
   - https://www.sopi-immobilier.com
3. Vercel redirigera automatiquement HTTP vers HTTPS

## Troubleshooting

### "Invalid Configuration" persiste
- Attendez 24-48h pour la propagation complète
- Vérifiez qu'il n'y a pas de vieux enregistrements qui entrent en conflit
- Supprimez tous les anciens enregistrements A et CNAME pour ce domaine

### Le site affiche une erreur
- Vérifiez dans Vercel que les domaines sont bien en "Production"
- Dans Vercel Settings → Domains, assurez-vous que les deux domaines sont marqués comme production
