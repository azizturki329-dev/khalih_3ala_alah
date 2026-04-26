FROM nginx:alpine
COPY app/ /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
# On reste sur PHP 8.2 Alpine pour la légèreté
FROM php:8.2-fpm-alpine

# Installation des bibliothèques pour le traitement d'images (important pour tes produits botaniques)
RUN apk add --no-cache \
    libpng-dev \
    libjpeg-turbo-dev \
    freetype-dev \
    zip \
    unzip

# Configuration et installation de l'extension GD pour redimensionner tes photos de cosmétiques
RUN docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install pdo_mysql gd

# Installation de Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

WORKDIR /var/www

# Copie du projet
COPY . .

# Installation des dépendances
RUN composer install --optimize-autoloader --no-dev

# Permissions cruciales pour le dossier storage (là où sont tes images de produits)
RUN chown -R www-data:www-data /var/www/storage /var/www/bootstrap/cache

EXPOSE 9000
CMD ["php-fpm"]