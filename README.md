# Todo List MongoDB

## Description

**Todo List MongoDB** est une application web Full Stack permettant de gérer une liste de tâches.

Ce projet a été réalisé afin de mettre en pratique l'utilisation d'une base de données **NoSQL avec MongoDB**, la communication avec une API REST développée avec **Node.js / Express**, ainsi que la création d'une interface utilisateur moderne avec **React et Tailwind CSS**.

L'application permet à un utilisateur de créer, consulter, modifier, supprimer et organiser ses tâches.

---

# Fonctionnalités

## Gestion des tâches (CRUD)

- ✅ Ajouter une nouvelle tâche
- 📋 Afficher toutes les tâches
- ✏️ Modifier une tâche existante
- 🗑️ Supprimer une tâche
- ☑️ Marquer une tâche comme terminée

## Recherche et statistiques

  - Recherche dynamique des tâches
  - Affichage des statistiques :
  - Nombre total de tâches
  - Nombre de tâches terminées
  - Nombre de tâches restantes

## Interface utilisateur

-  Design moderne avec Tailwind CSS
-  Interface responsive adaptée aux mobiles, tablettes et ordinateurs

---

# Technologies utilisées

## Frontend

- React.js
- Vite
- JavaScript (JSX)
- Tailwind CSS
- Axios

## Backend

- Node.js
- Express.js
- Mongoose

## Base de données

- MongoDB
- MongoDB Compass

## Outils

- Git / GitHub
- Postman
- Visual Studio Code

---

# Architecture du projet

L'application suit une architecture séparant le frontend et le backend.


## Architecture technique

Utilisateur
|
↓
React + Vite (Frontend)
|
↓
Axios (requêtes HTTP)
|
↓
API REST Express.js
|
↓
Mongoose (ODM)
|
↓
MongoDB (Base NoSQL)


Le frontend React communique avec le backend via des requêtes HTTP afin de réaliser les opérations CRUD sur les tâches.

---


