## Description

`The app is a representation of constant graph data.
Each node is a status represent by number
Each arch is set of rules that define if on this transition he will move to the following state
The set of rules on each arch defined as : [Action,Rule,Type]
Type can be : S- SINGLE / B- BULK
Action can be S- : SEND / R- RETURN
Rule can be : A - ADMIN /P- PARTNER/U- USER /C- COURIER`

## Installation

```bash
npm install
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

## Example

After running the server locally, you can `getNextState` and `getPathForBulk` by:

Next state:
`http://localhost:3000/transition/1,2/S,A,S`

Get Path Bulk
`http://localhost:3000/transition/bulk/1,2,3,4,5/R,A,S`
