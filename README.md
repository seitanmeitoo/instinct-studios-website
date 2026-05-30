# Instinct Studios — Site web

Site web d’**Instinct Studios**.

## Aperçu

Ce dépôt contient :
- une page principale en **HTML** (`index.html`) ;
- un petit serveur **Node.js / Express** (`server.js`) pour servir le site ;
- la configuration Node (`package.json`).

## Prérequis

- **Node.js 20.x** (voir le champ `engines` dans `package.json`).

## Installation

```bash
npm install
```

## Lancer en local

```bash
npm start
```

Par défaut, le serveur démarre via `server.js`.

## Structure du projet

- `index.html` : page du site
- `server.js` : serveur Express (avec compression / sécurité)
- `package.json` : dépendances et scripts

## Déploiement

Ce projet peut être déployé sur n’importe quelle plateforme supportant Node.js (ex. Render, Railway, Fly.io, VPS, etc.).

Étapes générales :
1. installer les dépendances (`npm install`) ;
2. exécuter `npm start`.

## Licence

- Créateur : [LAST](https://www.youtube.com/@Lasteuuuuu).
- Le **code** est sous licence **MIT** (voir `LICENSE`).
- Les **images / médias / logos** ne sont **pas** open-source : **tous droits réservés** (voir `NOTICE`).
