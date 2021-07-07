FROM node:14 as builds
WORKDIR '/app'
COPY ./package.json ./
RUN npm install --only=prod
COPY ./ ./
RUN npm run build

FROM nginxinc/nginx-unprivileged
EXPOSE 8080
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builds /app/dist/app /usr/share/nginx/html