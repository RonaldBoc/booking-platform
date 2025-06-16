/**
 * Modèle Sequelize pour l'entité User.
 * Représente un utilisateur de la plateforme (client ou professionnel).
 */

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    // Le mot de passe sera stocké hashé
  },
  role: {
    type: DataTypes.ENUM('client', 'professionnel', 'admin'),
    allowNull: false,
    defaultValue: 'client',
  },
  nom: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  telephone: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  type_professionnel: {
    type: DataTypes.STRING,
    allowNull: true, // null si simple client
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: 'users',
  timestamps: false, // On gère created_at manuellement, sinon mettre timestamps: true
});

module.exports = User;