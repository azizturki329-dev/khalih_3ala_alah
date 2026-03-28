L'Atelier Botanique - Projet de Gestion de Versions (DS1)

1/Description du Projet
L'Atelier Botanique est une boutique en ligne spécialisée dans les produits cosmétiques naturels et biologiques. Ce projet a été conçu pour mettre en pratique les flux de travail collaboratifs avec Git et GitHub, en mettant l'accent sur la gestion des branches, la résolution de conflits et la revue de code entre pairs.

2/Membres du Groupe

Houssem Ben Othmane

Aziz Turki 

Nour Bedoui

Zayneb Bouali

Hamdi atia

3/Étapes d’Installation
Pour cloner et exécuter ce projet localement :

Ouvrez votre terminal ou VS Code.

Clonez le dépôt :

Bash
git clone https://github.com/azizturki329-dev/khalih_3ala_alah.git
Accédez au répertoire du projet :

Bash
cd khalih_3ala_alah

4/Commandes Git Utilisées
Nous avons suivi le workflow Git Flow pour assurer une collaboration fluide :

git checkout -b feature-nom : Création d'une branche isolée pour chaque fonctionnalité.

git add . & git commit -m "message" : Indexation et enregistrement des modifications.

git push origin feature-nom : Publication de la branche sur GitHub pour révision.

git pull origin develop : Synchronisation locale avec la branche de développement.

git merge : Fusion des branches après validation.

5/Détails des Conflits et Résolutions
Dans le cadre de notre collaboration sur L'Atelier Botanique, nous avons été confrontés à plusieurs types de conflits que nous avons résolus en équipe :

Conflit de Structure (Header & Navigation)
Cause : Modification simultanée du fichier index.html. Pendant que Nour intégrait le logo dans le header sur sa branche, Aziz restructurait la barre de navigation sur la branche develop.

Problème : Git a détecté deux versions différentes pour la même zone du code (le haut de page).

Résolution : Nous avons effectué une fusion manuelle via l'éditeur de code (VS Code) pour conserver les deux modifications et garantir une interface complète (Logo + Navigation).

Conflit de Synchronisation (Historique & Timeline)
Cause : Tentative de push avant d'avoir effectué un pull des dernières modifications distantes. L'historique local était en décalage avec celui du dépôt GitHub.

Problème : Rejet de la mise à jour par GitHub pour protéger l'intégrité du projet.

Résolution : En tant que Project Manager, j'ai procédé à un alignement de l'historique (via un force-push contrôlé) pour stabiliser la branche main avec la version finale validée.

Conflit de Fusion et Nettoyage (Fichiers de Test)
Cause : Existence de fichiers temporaires (ex: test.html) créés par Aziz pour des essais techniques, tandis que Nour travaillait sur une version épurée du projet.

Problème : Incertitude de Git lors du merge sur la nécessité de conserver ou de supprimer ces fichiers orphelins.

Résolution : Nous avons opté pour un nettoyage complet du dépôt afin de présenter un code propre. Les fichiers tests ont été supprimés manuellement et la résolution a été enregistrée dans un commit de fusion dédié.

Conflit de Design (Revue de Code)
Cause : Lors de la Pull Request, Zayneb a relevé un défaut d'affichage (padding) sur les écrans mobiles dans le code de Nour.

Problème : Blocage de la fusion pour garantir la qualité "Luxe & Aesthetic" du site.

Résolution : Un échange collaboratif a eu lieu sur GitHub. Nour a corrigé son CSS selon les recommandations de la revue de code avant de procéder à l'intégration final