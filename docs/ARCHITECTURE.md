# Architecture de la plateforme Booking Multisite

## 📁 Structure des dossiers

### Backend (Node.js / Express + Sequelize)
- /backend
  - /config          # config DB, Stripe, email, etc.
  - /controllers     # logique métier (booking, auth, paiement)
  - /models          # Sequelize models
  - /routes          # API endpoints
  - /services        # envoi email, paiements, rappels, etc.
  - /middleware      # auth, validation
  - server.js        # point d'entrée express

### Frontend (React ou Next.js multi-projets)
- /frontend
  - /core            # composants partagés (ReservationForm, Calendar, ProfileCard)
  - /config          # fichiers de config métier : coach.json, avocat.json, etc.
  - /projects
    - /coach         # UI spécifique aux coachs
    - /avocat        # UI spécifique aux avocats
    - /garage        # UI spécifique aux garagistes
  - /public          # assets communs
  - /utils           # helpers, formatteurs, hooks
  - app.js / index.js

### Docker
- /docker
  - /nginx/default.conf
  - Dockerfile.backend
  - Dockerfile.frontend
- docker-compose.yml

## 🧱 Modèles principaux

### User
- id, email, password, role, nom, téléphone, type_professionnel, created_at

### Professionnel
- id, user_id, bio, ville, region, photo_url, services, prix_min, prix_max, note_moyenne, slug, public

### Disponibilité
- id, professionnel_id, jour_semaine, heure_debut, heure_fin, recurrence

### Réservation
- id, professionnel_id, user_id, date_heure, status, message

### Paiement
- id, reservation_id, montant, stripe_payment_id, status

## 💻 Exemple de composant universel (React)
```jsx
export default function ReservationForm({ professionnel, config }) {
  return (
    <form>
      <h2>Réserver avec {professionnel.nom}</h2>
      {config.formFields.map(field => (
        <input key={field} placeholder={field} />
      ))}
      <button type="submit">Réserver</button>
    </form>
  );
}
```

## 🐳 Dockerisation

- Dockerfile.backend et frontend créent deux images Node.js
- docker-compose gère le backend, frontend, base PostgreSQL et nginx
- accès local via coach.local et api.local

## ✅ À faire
- [ ] Ajouter Sequelize et les premières migrations
- [ ] Créer les endpoints REST de base (auth, réservation, paiement)
- [ ] Dockeriser le frontend
- [ ] Déployer sur Railway ou Render