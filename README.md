
### Projet : Plateforme de vente de produits agricoles en ligne (inspiré de NutritechAgro)

**Description**

Cette application web permet aux producteurs agricoles de présenter et de vendre leurs produits en ligne. Elle offre une solution complète de commerce électronique, facilitant les transactions entre producteurs et consommateurs. 

**Technologies utilisées**

* **Front-end:** React.js pour une interface utilisateur dynamique et réactive.
* **Back-end:** Django (et Django REST Framework) pour la gestion des données, les API.
* **Base de données:** PostgreSQL pour stocker les informations sur les produits, les utilisateurs et les commandes.
* **Autres:** Docker, Docker Compose, Makefile

**Design:**

Vous pouvez consulter le design complet de l'application sur Figma : https://www.figma.com/design/dgyvyW82JoqlGKb3cMw2dD/Agro-Project?node-id=0-1&t=Y6eETUyiEXnY1nXY-1

**Installation et démarrage**

1. **Prérequis:**
   * Docker et Docker Compose installés sur votre machine.
   * Un compte GitHub (pour cloner le référentiel).
2. **Cloner le référentiel:**
   ```bash
   git clone https://github.com/mskerba/Nutritech-Agro-Fullstack-Project.git
   cd Nutritech-Agro-Fullstack-Project
   ```
3. **Configurer la base de données:**
   * Créer une base de données PostgreSQL et configurer les informations de connexion dans le fichier `docker-compose.yml`.
4. **Démarrer l'application:**
   ```bash
   make 
   ```
   Cette commande va construire les images Docker, démarrer les conteneurs et les connecter entre eux.

**Utilisation**

* **Accès à l'application:** Une fois l'application démarrée, vous pouvez accéder à l'interface web à l'adresse indiquée dans les logs de Docker Compose (généralement http://localhost:3000).
* **Shell interactif:** Pour accéder à un shell interactif dans le conteneur du backend, utilisez la commande `make shell`.
* **Logs:** Pour afficher les logs des conteneurs, utilisez la commande `make logs`.

**Structure du projet**

* **frontend/:** Contient le code source de l'application React.js.
* **backend/:** Contient le code source de l'application Django.
* **docker-compose.yml:** Définit les services Docker et leurs configurations.
* **Makefile:** Contient les commandes pour gérer l'environnement de développement.

**Fonctionnalités principales**

* **Inscription**
* **Gestion de catalogue**
* **Panier d'achat**
* **Gestion des commandes**
* **Système de feedbacks**

**Remerciements**

Ce projet a été réalisé grâce à l'utilisation des technologies suivantes : React, Django, PostgreSQL, Docker, Docker Compose.

**Avertissement**

Ce projet est fourni à titre d'exemple et peut nécessiter des adaptations pour répondre à vos besoins spécifiques.

### Améliorations apportées :

* **Clarté et concision:** Le README est plus concis et facile à comprendre.
* **Structure améliorée:** Les sections sont mieux organisées et hiérarchisées.
* **Instructions détaillées:** Les instructions d'installation et d'utilisation sont plus précises.
* **Flexibilité:** Le fichier `docker-compose.yml` est personnalisable pour s'adapter à différents environnements.
* **Couverture des fonctionnalités:** Le README décrit les principales fonctionnalités de l'application.


