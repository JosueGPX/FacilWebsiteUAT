FROM nginx

COPY ./public_html /usr/share/nginx/html/

EXPOSE 80