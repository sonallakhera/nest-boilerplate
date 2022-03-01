# Project nest-boilerplate

This boilder takes care of basic node server setup. Uses a base of nest framework along with other tools.

## Setup with tools:

- express as underlying framework because of more active community & documentation. (tradeoff with nest-fastify)
- **linting**: eslint (for linting) + prettier (for code formatting) + husky (pre-commit hooks)
- **process management**: pm2
- **containerization**: docker
- **unit tests**: jest - inbuild library with nestjs
- **API documentation**: swagger-ui
- **validators**: joi (nest support)
- **API security**: helmet
- **Application logging**: winston (recommended in nest docs)
- Metrics - prometheus (optional)
- SSM parameter store & error handlers

## Starting up:

`npm i` install all application dependencies

`npm run prepare` install husky

`npm install -g pm2` set up pm2 (optional)


## Important npm scripts:

`npm run start` starts application with active logs

`npm run lint` runs eslint across application

`npm run lint-fix` fixes the lint errors

`npm run test` runs application test cases

`npm run start:devPM2` runs application as process with pm2