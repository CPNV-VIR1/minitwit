# minitwit

Ce projet permet de poster des messages en ligne.

# Getting Started

## Prerequisites

* MySql
* npm
* node 18.x
* Git

## Installation

1. Clone the repo
   ```
   git clone https://github.com/CPNV-RIA1/minitwit.git
   ```

2. Install NPM packages
   ```
   npm install
   ```
   Results
   ```
   up to date, audited 495 packages in 5s

   38 packages are looking for funding
   run `npm fund` for details

   found 0 vulnerabilities
   ```


3. Config .env file
   ```
   There is an exemple of .env file named .env.example in /apps/api and /apps/frontend
   ```

4. DataBase

   Créer votre base de données en local et configurer ajouter les accès dans le .env de l'api

## Run apps

1. API
   ```
   npm run dev -w apps/api
   ```
   Result
   ```
   > @cpnv/api@0.0.1 dev
   > nodemon server.js

   [nodemon] 2.0.20
   [nodemon] to restart at any time, enter `rs`
   [nodemon] watching path(s): *.*
   [nodemon] watching extensions: js,mjs,json
   [nodemon] starting `node server.js src/index.js`
   Server is running on port 8080
   ```

2. Frontend
   ```
   npm run dev -w apps/frontend
   ```
   Result
   ```
   VITE v4.1.4  ready in 197 ms

   ➜  Local:   http://localhost:5173/
   ➜  Network: use --host to expose
   ➜  press h to show help
   ```

# Run tests

## Backend
```
npm run test -w apps/api
```

## Frontend
```
npm run test -w apps/frontend
```

# Collaboration

## Git

Nous utilisons ```git flow``` et développons sur la branche ```develop```. Chaque fonctionnalité est faite sur une branche à part avec le préfixe adéquat. Ensuite une fois la fonctionnalité finie, un pull request est fait sur la branch develop est une autre personne la contrôle et l'accepte ou non.

# Stucture du code

Le code se divise en 2 parties, la partie backend dans apps/api et la partie frontend dans apps/frontend. On utilise les workspaces de npm pour séparer la partie frontend de la partie backend