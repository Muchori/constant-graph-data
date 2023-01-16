## Description

The app is a representation of constant graph data.
Each node is a status represent by number
Each arch is set of rules that define if on this transition he will move to the following state
The set of rules on each arch defined as : [Action,Rule,Type]
Type can be : S- SINGLE / B- BULK
Action can be S- : SEND / R- RETURN
Rule can be : A - ADMIN /P- PARTNER/U- USER /C- COURIER

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
