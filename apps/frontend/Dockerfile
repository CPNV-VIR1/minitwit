# syntax=docker/dockerfile:1

FROM node:18-alpine as builder
ENV VITE_API_URL http://minitwit.cld.education:80/api/v1
WORKDIR /app
COPY . /app
RUN npm install
RUN npm run build

FROM nginx:stable-alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx","-g","daemon off;"]