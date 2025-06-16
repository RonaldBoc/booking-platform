# 🧩 Booking Platform – Projet multisite de réservation

Plateforme centralisée permettant à différents professionnels (coach, avocat, garagiste...) de gérer leur profil, disponibilités, réservations et paiements, à travers plusieurs sites web publics reliés à un backend commun.

> Développé avec Node.js, Sequelize, PostgreSQL, Docker, et Next.js.

---

## 📦 Fonctionnalités principales

- Gestion multi-professionnels (`coach`, `avocat`, `plombier`...)
- Réservation de créneaux avec gestion des disponibilités
- Paiement en ligne via Stripe
- Notifications e-mail client + professionnel
- Architecture scalable multisite (plusieurs fronts, une API)
- Système de notation et d’avis
- Interface admin centralisée

---

## 🚀 Installation locale (développement)

### 1. Cloner le projet
```bash
git clone https://github.com/ton-user/booking-platform.git
cd booking-platform
```

### 2. Lancer Docker
Assure-toi que Docker Desktop est lancé.

```bash
docker compose up --build
```

### 3. Accéder aux services
- Backend API : http://localhost:5045
- Frontend (à venir) : http://coach.local
- PostgreSQL : port 5432

### 4. Fichier `/etc/hosts` à modifier :
```bash
127.0.0.1 coach.local
127.0.0.1 api.local
```

---

## ⚙️ Structure du projet

```
booking-platform/
│
├── backend/                # API Express (Node.js)
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── server.js
│
├── frontend/               # Frontend Next.js (bientôt)
│   ├── core/               # Composants réutilisables
│   ├── config/             # Config par métier
│   └── projects/           # UI spécifiques (coach, avocat...)
│
├── docker/                 # Fichiers Docker + nginx
│   ├── Dockerfile.backend
│   └── nginx/default.conf
│
├── docker-compose.yml
└── docs/ARCHITECTURE.md    # Documentation technique
```

---

## 🧠 Utilisation avec GitHub Copilot

> Pour utiliser Copilot efficacement :
- Structure bien tes `models/` Sequelize (un fichier = une entité)
- Décris chaque fichier avec un commentaire JSDoc
- Commence toujours tes fichiers par un résumé du rôle du fichier
- Utilise des noms de fonctions explicites
- Commente les endpoints REST (`// POST /reservations - Crée une réservation`)

---

## 📝 Prochaines étapes

- [ ] Ajouter les modèles Sequelize (`User`, `Professionnel`, etc.)
- [ ] Créer les premières routes API REST
- [ ] Ajouter les contrôleurs
- [ ] Dockeriser le frontend
- [ ] Intégrer Stripe
- [ ] Ajout des tests unitaires (Jest)