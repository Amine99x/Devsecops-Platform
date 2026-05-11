# ==================== BUILD STAGE ====================
FROM node:20-alpine AS builder
WORKDIR /app
COPY index.js .
RUN npm init -y && npm install express axios && chown -R 1000:1000 /app

# ==================== RUNTIME STAGE ====================
FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app .
USER 1000:1000
EXPOSE 3002
CMD ["node", "index.js"]
