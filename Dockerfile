FROM node:22-alpine

WORKDIR /app

# Install dependencies first to leverage Docker layer caching
COPY package.json package-lock.json ./
RUN npm ci

# Copy source
COPY . .

EXPOSE 3001

CMD ["npm", "start"]
