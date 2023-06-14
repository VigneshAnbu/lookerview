#FROM nginx:alpine
## Use root user to copy dist folder and modify user access to specific folder
#USER root
#RUN apk add --no-cache  gettext
## Copy application and custom NGINX configuration
#COPY ./dist /usr/share/nginx/html/ui/app1/
#COPY /nginx-custom.conf /etc/nginx/conf.d/default.conf
## Setup unprivileged user 1001
#RUN chown -R 1001 /usr/share/nginx/html/ui/app1/
## Use user 1001
#USER 1001
## Expose a port that is higher than 1024 due to unprivileged access
#EXPOSE 8080
#CMD ["nginx", "-g", "daemon off;"]



# Stage 1
FROM node:latest as node
WORKDIR /app
COPY . .

RUN npm install
RUN npm run build --prod

# Stage 2

FROM nginx:alpine
COPY --from=node /app/dist/phrlocker-view /usr/share/nginx/html

