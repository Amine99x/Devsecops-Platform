FROM node:18-alpine
WORKDIR /app
COPY index.js .
RUN npm init -y && npm install express && chown -R 1000:1000 /app
USER 1000:1000
EXPOSE 3010
CMD ["node", "index.js"]
