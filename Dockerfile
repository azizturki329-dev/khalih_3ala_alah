# Utilisation d'une version stable et légère d'Nginx
FROM nginx:alpine

# Optimisation : Suppression des fichiers par défaut d'Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copie des fichiers statiques (HTML, CSS, JS)
# On suppose que les fichiers sont à la racine ou dans un dossier 'app'
COPY . /usr/share/nginx/html/

# Copie d'une configuration Nginx optimisée (optionnel mais recommandé)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Nginx écoute sur le port 80 à l'intérieur du conteneur
EXPOSE 80

# Lancement d'Nginx en mode premier plan
CMD ["nginx", "-g", "daemon off;"]