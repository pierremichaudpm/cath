# 🚀 QUICKSTART - CaTH SITE

Démarrage rapide en 3 étapes!

## 📦 Installation (Aucune dépendance!)

```bash
# Aucune installation npm requise
# C'est du HTML/CSS/JavaScript pur
```

## 🎯 Démarrage Local

### Option 1: Python (Recommandé)
```bash
npm start
# ou
python -m http.server 8000
```
Puis ouvrir: **http://localhost:8000**

### Option 2: Autres serveurs
```bash
# PHP
php -S localhost:8000

# Node.js
npx http-server

# Live Server (VS Code)
# Installer l'extension, puis clic droit > Open with Live Server
```

### Option 3: Direct (⚠️ Modale peut ne pas fonctionner)
```bash
# Ouvrir simplement
open index.html
```

---

## 📁 Structure
```
CaTH SITE/
├── index.html              (Main)
├── css/
│   └── styles.css
├── js/
│   └── script.js
└── assets/images/
    ├── paintings/          (16 tableaux)
    └── profile/           (Photo)
```

---

## 🎨 Personnalisation Rapide

### Changer les couleurs
**Fichier:** `css/styles.css` (lignes 1-8)
```css
--coral: #FF6B4A;    /* Coral */
--teal: #2D9B9B;     /* Teal */
--purple: #6B4C93;   /* Purple */
--rose: #E75C88;     /* Rose */
--ocean: #1A5F7A;    /* Ocean */
```

### Ajouter une image
1. Placer dans `assets/images/paintings/`
2. Copier un bloc `<div class="painting-item">` dans `index.html`
3. Changer le numéro et les infos

### Changer le contenu
**Fichier:** `index.html`
- Ligne 23-25: Bio section
- Ligne 63-398: Gallery items
- Ligne 402-408: Contact info

---

## ✨ Fonctionnalités

✅ Responsive (mobile/tablet/desktop)
✅ Modale fullscreen (desktop only)
✅ Animations fluides
✅ Cadres texturés
✅ 5 couleurs différentes
✅ Contact links (tel/email)
✅ Aucune dépendance externe*

*Except Google Fonts (CDN)

---

## 🌐 Déploiement

### Netlify (2 min)
1. Push sur GitHub
2. Connecter repository à Netlify
3. Auto-deploy ✅

### GitHub Pages (1 min)
1. Créer repository
2. Push les fichiers
3. Activer GitHub Pages ✅

### Traditionnel (FTP)
1. Upload la structure entière
2. Pointer le domaine
3. C'est prêt! ✅

---

## 📊 Infos Utiles

| Aspect | Détail |
|--------|--------|
| **Navigateurs** | Chrome 90+, Firefox 88+, Safari 14+ |
| **Taille** | ~23 KB (HTML/CSS/JS) |
| **Build** | Aucun requis |
| **Dependencies** | Zéro (Google Fonts en CDN) |
| **Responsive** | Mobile/Tablet/Desktop |
| **Accessibility** | WCAG compliant |

---

## 📚 Ressources

- **README.md** - Documentation complète
- **RESTRUCTURATION.md** - Détail de la migration
- **STRUCTURE.txt** - Arborescence visuelle
- **RESUME_RESTRUCTURATION.txt** - Résumé
- **CHECKLIST.md** - Validation complète

---

## ❓ FAQ Rapide

**Q: Comment ajouter plus de tableaux?**
A: Copier un `painting-item` dans `index.html`, changer le src et les infos.

**Q: Puis-je changer les couleurs?**
A: Oui! Modifier les CSS variables en haut de `css/styles.css`.

**Q: La modale marche sur mobile?**
A: Non, volontairement (meilleure UX mobile).

**Q: Besoin d'installer npm?**
A: Non! C'est du HTML/CSS/JS pur.

**Q: Comment déployer?**
A: GitHub Pages ou Netlify en 2 minutes.

---

## 🎯 Prochaines Étapes

1. ✅ **Tester localement**: `npm start`
2. ✅ **Vérifier les images**: Voir galerie s'afficher
3. ✅ **Personnaliser**: Changer couleurs/texte
4. ✅ **Déployer**: Netlify/GitHub Pages

---

## 🆘 Support Rapide

❌ **Images ne s'affichent pas?**
→ Vérifier chemins dans `index.html`

❌ **Modale ne marche pas?**
→ Utiliser un serveur (pas `file://`)

❌ **Styles cassés?**
→ Vérifier chemin CSS: `href="css/styles.css"`

---

## 📧 Infos de Contact

**Catherine François**
- 📞 514 895-0961
- 📧 Cathfrancois@gmail.com

---

**Version:** 1.0.0
**Status:** ✅ Production Ready
**Dernière mise à jour:** 2024

Happy coding! 🎨