# Beyondplay coding challenge

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Features
 - Display a table with details of developers
 - Ability to create a new User
 - Ability to Edit existing User
 - Generate a Random list for the intervention with a designated speaker
 - Generate an alphabetised list of speakers with a designated speaker
 - Pagination  for the table component
 
 ## Stacks used
 * Language: Typescript
 * Frontend development Library: ReactJS 18
 * State container: Redux, Redux Toolkit
 * CSS: Tailwind CSS
 * HTTP Client: Axios
 * Backend development Library: Node.js
 * ORM: Prisma
 * Database: Postgres
 * Web application framework: Express JS
 
 ## Prerequisites
 
 |Prerequisite                               |Link                                                                   |
|-------------------------------------------|-----------------------------------------------------------------------|
|Git                                        |[🔗](https://git-scm.com/downloads)                                   |
|Node 16                                    |[🔗](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)                                          |
| Yarn                                      |[🔗](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable)|
| MongoDB*                                   |[🔗](https://www.postgresql.org/download/)               |
| Docker*                                   |[🔗](https://www.docker.com/)                                         |

 *You can have postgres either installed in your system or running in docker
 
 ## Setup
 
### Frontend

Install dependencies:

Clone this github repository: https://github.com/sandhyasrini/Beyondplay-coding-challenge
```
cd Beyondplay-coding-challenge
npm install
```
or
```
yarn install
```
Run the frontend:
```
npm run start
```
or
```
yarn start
```
### Backend

Install dependencies:

Clone the git repository:
https://github.com/sandhyasrini/Beyondplay-intervention-randomizer-api
```
cd Beyondplay-intervention-randomizer-api
npm install
```
or
```
yarn install
```
Run the backend
```
npm run serve
 ```
 or
```
yarn serve
```

### Database

* If you have docker setup in your machine, you can follow the below steps to setup DB for the Application

Go to the API Project folder cloned in your local system

Build docker Image for Postgres:

```
docker build -t my-postgres-db ./ --no-cache
```

Check if image built:

```
docker images
```

eg:
```
$ docker images -a
REPOSITORY       TAG       IMAGE ID       CREATED        SIZE
my-postgres-db   latest    38036a25ec7b   13 hours ago   379MB

```

Run the image as a container:

```
docker run -d --name my-postgresdb-container -p 5432:5432 -e POSTGRES_PASSWORD={password} my-postgres-db
```
Make sure the beyond_play.sql file is present in the folder before running the container. This file creates the DB required for the application.

* If you have Postgres installed in your local system, create a Database called 
beyond_play and run the beyond_play.sql in postgres to create the DB and inject data.

In the .env file, add your Database URL:

```
DATABASE_URL="postgres://{username}:{password}@localhost:5432/beyond_play"
```
If you're running in docker, the default username would be postgres unless specified otherwise



## Todos/Future Scope:

There were some things that will be implemented in the future, which cannot be done now due to time constraint.

* Unit Testing
* E2E testing using Cypress
* Authentication/Authorisation
* Ability to search and find individual user


