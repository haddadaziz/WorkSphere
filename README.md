# 🏢 WorkSphere 2D - Gestion d'Espace de Travail

> **Projet Étudiant** | Workshop Développement Web Front-End

**WorkSphere 2D** est une application web interactive permettant de gérer visuellement l'attribution des bureaux dans un open-space. Ce projet a été réalisé dans le but de maîtriser la manipulation du DOM, le CSS Grid et la logique JavaScript moderne (ES6+).
## 🎓 Contexte du Projet
Ce projet a été développé dans le cadre d'un atelier pratique étudiant. L'objectif principal était de créer une interface "Drag & Drop" fonctionnelle sans utiliser de frameworks lourds (comme React ou Vue), afin de comprendre les mécanismes fondamentaux du navigateur.

## ✨ Fonctionnalités

* **📍 Visualisation 2D :** Représentation fidèle des différentes salles (Open Space, Bureaux fermés, Salle de réunion) via CSS Grid.
* **🛡️ Gestion des Conflits :**
    * Empêche de placer un employé sur un bureau déjà occupé.
    * (Optionnel) Vérification de la capacité maximale par salle.
* **💾 Sauvegarde Locale :** Les données sont conservées via le `localStorage` du navigateur (les placements restent après rafraîchissement).
* **👤 Détails Employés :** Affichage des informations (Rôle, Nom) au clic ou au survol.

## 🛠 Technologies Utilisées

Ce projet est réalisé en **Vanilla JS** (Pur JavaScript) pour une performance maximale et une visée pédagogique.

* **HTML5** : Structure sémantique.
* **CSS3 & Tailwind CSS** : Mise en page (Grid/Flexbox) et stylisation rapide.
* **JavaScript (ES6+)** : Logique de l'application, manipulation du DOM et gestion des événements.

## 🚀 Installation et Utilisation

Aucune installation complexe (npm/yarn) n'est nécessaire car il s'agit d'un site statique.

1.  **Cloner le projet :**
    ```bash
    git clone [https://github.com/TON_NOM_UTILISATEUR/worksphere-2d.git](https://github.com/TON_NOM_UTILISATEUR/worksphere-2d.git)
    ```
2.  **Lancer le projet :**
    * Ouvrez simplement le fichier `index.html` dans votre navigateur.
    * **Recommandé :** Utilisez l'extension "Live Server" de VS Code pour une meilleure expérience.

## 🧠 Ce que j'ai appris

La réalisation de WorkSphere m'a permis de consolider les notions suivantes :
* **CSS Grid Area :** Création de layouts complexes représentant un plan d'architecture.
* **DOM Manipulation :** Création, suppression et modification dynamique d'éléments HTML.
* **Logique Algorithmique :** Gestion des tableaux d'objets (filtrer, trouver, vérifier les doublons).

## 🔮 Améliorations Futures

Si je devais continuer ce projet, voici les prochaines étapes :
* [ ] Connecter l'application à une vraie base de données (Firebase ou SQL).
* [ ] Ajouter un système d'authentification (Admin vs Visiteur).
* [ ] Générer des statistiques d'occupation des salles.

---

**Auteur :** [Aziz] [Haddad]
*Étudiant en développement web à YouCode*
