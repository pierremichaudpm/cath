# 🛠️ MAINTENANCE - CaTH SITE

Guide de maintenance et administration du projet.

---

## 📋 Checklist de Maintenance Régulière

### Hebdomadaire
- [ ] Vérifier les logs d'erreurs (console navigateur)
- [ ] Tester la modale sur desktop
- [ ] Vérifier le responsive (mobile/tablet/desktop)
- [ ] Tester les liens de contact

### Mensuel
- [ ] Optimiser les images si nécessaire
- [ ] Vérifier les performances (PageSpeed)
- [ ] Mettre à jour la bio si nécessaire
- [ ] Vérifier les animations

### Trimestriel
- [ ] Audit de sécurité
- [ ] Vérification des dépendances (Google Fonts)
- [ ] Test de compatibilité navigateurs
- [ ] Backup des données

---

## 🔧 Tâches Courantes

### Ajouter un Tableau
1. Placer image dans `assets/images/paintings/`
2. Copier bloc `painting-item` dans `index.html`
3. Mettre à jour:
   - `data-frame` (coral, teal, purple, rose, ocean)
   - `style="--offset: X"` (0-120)
   - `src="assets/images/paintings/X.jpg"`
   - Titre, année, medium

### Supprimer un Tableau
1. Localiser le bloc dans `index.html`
2. Supprimer l'ensemble du `<div class="painting-item">`
3. Supprimer l'image de `assets/images/paintings/`

### Changer le Profil
1. Remplacer `assets/images/profile/cath.jpg`
2. S'assurer même nom et format
3. Optimiser taille (180x180 minimum)

### Modifier la Bio
1. Ouvrir `index.html`
2. Localiser `.bio-content` (ligne ~29)
3. Modifier les 3 paragraphes

### Modifier les Couleurs
1. Ouvrir `css/styles.css`
2. Localiser `:root` (ligne 1)
3. Changer les variables CSS (--coral, --teal, etc.)

---

## 🚀 Déploiement

### Test Local
```bash
npm start
# ou
python -m http.server 8000
```

### Vérification Avant Déploiement
- [ ] Tous chemins corrects
- [ ] Images optimisées
- [ ] Pas d'erreurs console
- [ ] Responsive testé
- [ ] Modale testée (desktop)

### Déploiement Netlify
```bash
git push origin main
# Netlify auto-déploie
```

### Déploiement Manual
1. Compresser le dossier
2. FTP upload au serveur
3. Pointer le domaine
4. Tester l'accès

---

## 📊 Performance

### Optimisation Images
```bash
# Installer ImageMagick ou équivalent
convert painting.jpg -quality 85 -resize 1200x900 optimized.jpg
```

### Checker PageSpeed
1. Aller sur pagespeed.web.dev
2. Entrer URL du site
3. Analyser résultats
4. Optimiser si score < 80

### Taille Fichiers Actuels
- index.html: ~12 KB
- styles.css: ~8 KB
- script.js: ~3 KB
- **Total:** ~23 KB (sans images)

### Recommandations
- Images: < 2 MB chacune
- JPG quality: 80-85%
- Optimiser avec TinyJPG ou Squoosh

---

## 🔒 Sécurité

### HTTPS
- ✅ Netlify: Automatique (Let's Encrypt)
- ✅ GitHub Pages: Automatique
- ⚠️ Hébergement traditionnel: Configurer SSL

### Content Security Policy
Actuellement: Aucune restriction (safe pour site statique)

### Données Sensibles
- ✅ Email et téléphone publics (volontaire)
- ✅ Pas de base de données
- ✅ Pas de cookies
- ✅ Pas de tracking

---

## 🐛 Debugging

### Modale ne s'affiche pas
1. Vérifier console (F12)
2. S'assurer serveur local (pas file://)
3. Vérifier viewport > 768px
4. Recharger page

### Images ne s'affichent pas
1. Vérifier chemins dans HTML
2. Vérifier fichiers existent
3. Vérifier permissions
4. Vérifier extensions (.jpg minuscule)

### Styles cassés
1. Vérifier chemin CSS: `css/styles.css`
2. Vérifier pas d'erreurs console
3. Vider cache (Ctrl+Shift+Delete)
4. Recharger page

### Script ne marche pas
1. Vérifier chemin JS: `js/script.js`
2. Vérifier console pour erreurs
3. Vérifier viewport width
4. Vérifier pas de conflits

---

## 📈 Monitoring

### Google Analytics (Optionnel)
```html
<!-- Ajouter avant </head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Hotjar (Optionnel)
```html
<!-- Ajouter avant </head> -->
<script async src="//static.hotjar.com/c/hotjar-123456.js?sv=6"></script>
```

### Monitoring Uptime
- Utiliser Uptime Robot (gratuit)
- Vérifier site accessible 24/7
- Recevoir alertes si down

---

## 🔄 Versioning

### Git Workflow
```bash
# Feature
git checkout -b feature/new-paintings
# ... modifications ...
git commit -m "feat: add new paintings"
git push origin feature/new-paintings
# PR → Merge

# Bugfix
git checkout -b bugfix/modal-issue
# ... fixes ...
git commit -m "fix: modal responsive issue"
git push origin bugfix/modal-issue
# PR → Merge
```

### Tagging Releases
```bash
git tag -a v1.1.0 -m "Add new paintings"
git push origin v1.1.0
```

---

## 📚 Backup

### Backup Régulier
- [ ] Quotidien: Images locales
- [ ] Hebdomadaire: Code entier
- [ ] Mensuel: Archive complète

### Endroits à Sauvegarder
1. `assets/images/` (Critique)
2. `index.html` (Critique)
3. Fichiers `.css` et `.js`
4. `package.json`

### Services Cloud
- GitHub (Gratuit, illimité)
- Dropbox/Google Drive
- Netlify (Auto-backup)

---

## 🎨 Personnalisation Avancée

### Ajouter Dark Mode
```css
@media (prefers-color-scheme: dark) {
  body {
    background: #1a1a1a;
    color: #f0f0f0;
  }
  /* ... autres couleurs ... */
}
```

### Ajouter Animations Supplémentaires
```css
@keyframes slideIn {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}
```

### Ajouter Pages Supplémentaires
1. Créer `about.html`
2. Copier structure de `index.html`
3. Modifier contenu
4. Ajouter nav ou liens

---

## 📞 Support Technique

### Problèmes Courants

**Q: Site lent?**
- Optimiser images (TinyJPG)
- Activer cache navigateur
- Utiliser CDN (Cloudflare gratuit)

**Q: Modale buggée?**
- Vérifier viewport > 768px
- Vérifier pas de conflits JS
- Vérifier chemins images

**Q: Images cassées?**
- Vérifier chemins (case-sensitive!)
- Vérifier extensions (.jpg minuscule)
- Vérifier fichiers existent

**Q: Responsive cassé?**
- Vérifier viewport meta tag
- Vérifier media queries CSS
- Tester multi-navigateurs

---

## 🔐 Credentials & Secrets

### Informations Publiques
- Email: Cathfrancois@gmail.com
- Tel: +1 514-895-0961
- (Volontairement publiques)

### Secrets (Ne pas committer!)
- Si API key future: Utiliser `.env`
- Si authentification: Utiliser backend
- Ajouter à `.gitignore`

---

## 📅 Planning de Maintenance

### Q1 (Jan-Mar)
- [ ] Audit initial
- [ ] Optimisation images
- [ ] Testing complet

### Q2 (Avr-Jun)
- [ ] Nouvelles peintures
- [ ] Bio update
- [ ] Performance check

### Q3 (Jul-Sep)
- [ ] Sécurité update
- [ ] Navigateurs test
- [ ] Backup check

### Q4 (Oct-Déc)
- [ ] Review annuel
- [ ] Planification 2025
- [ ] Archivage

---

## 🎯 Objectifs de Maintenance

### Court Terme (1-3 mois)
- Stabilité 100%
- Aucun bug
- Performance >80

### Moyen Terme (3-6 mois)
- Nouvelles fonctionnalités?
- Amélioration UX
- Sécurité max

### Long Terme (6+ mois)
- Modernisation tech
- Évolution design
- Expansion contenu

---

## 📝 Logs de Maintenance

### Template Log
```
Date: YYYY-MM-DD
Maintenance: [Type]
Changements: [Description]
Impact: [None/Low/Medium/High]
Status: [Complété/En cours/Bloqué]
Notes: [Détails additionnels]
```

### Exemple
```
Date: 2024-01-15
Maintenance: Optimisation Images
Changements: Compression JPG à 85%
Impact: Performance +15%
Status: Complété
Notes: Utilisé TinyJPG, gain 2MB
```

---

## 🚨 Incidents

### Template Incident
```
Date: YYYY-MM-DD HH:MM
Incident: [Description]
Cause: [Root cause]
Solution: [Fix applied]
Temps: [Duration]
Prevention: [Future measures]
```

### Exemple
```
Date: 2024-01-10 14:30
Incident: Modale ne s'ouvre pas
Cause: Chemin JS cassé
Solution: Vérifier `src="js/script.js"`
Temps: 10 minutes
Prevention: Tests auto avant deploy
```

---

## ✅ Checklist Déploiement

- [ ] Code testé localement
- [ ] Pas d'erreurs console
- [ ] Images optimisées
- [ ] Chemins vérifiés
- [ ] Responsive testé
- [ ] Modale testée
- [ ] Contact links testés
- [ ] Performance OK
- [ ] Sécurité OK
- [ ] Backup fait
- [ ] Git commité
- [ ] Push sur main
- [ ] Netlify building
- [ ] URL accessible
- [ ] Vérification finale

---

## 📞 Contacts Utiles

- **Netlify Support**: support.netlify.com
- **GitHub Issues**: github.com/username/repo/issues
- **Google Fonts**: fonts.google.com
- **TinyJPG**: tinyjpg.com

---

## 🎓 Formation & Documentation

### Ressources Internes
- README.md - Vue d'ensemble
- QUICKSTART.md - Démarrage rapide
- STRUCTURE.txt - Arborescence
- CHECKLIST.md - Validation complète

### Ressources Externes
- MDN Web Docs
- CSS-Tricks
- Dev.to
- Stack Overflow

---

**Version:** 1.0.0
**Dernière mise à jour:** 2024
**Responsable:** Catherine François
**Status:** ✅ Actif
