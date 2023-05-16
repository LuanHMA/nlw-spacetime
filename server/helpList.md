# How to install and config typescript in Node JS:

## Install typescript as dev dependency:

1. npm install typescript -D

## Instal typescript types for node:

2. npm install @types/node -D

## Create the tsconfig file:

3. npx tsc --init
   3.1 In tscofing change target to "ES2020"

## Install JS to TS converter and Start server with TS:

4. npm install tsx -D
   4.1 npx tsx src/server.ts
   4.2 In package.json create a "dev" script and write "tsx watch src/server.ts" inside.
   4.3 Execute "npm run dev" to start server.

# How to install Prisma + SQLite:

## Install Prisma as dev dependency

1.npm install prisma -D

## Init prisma passing the database (SQLite) that will be used

2.npx prisma init --datasource-provider SQLite

## Save and post the changes

3.npx prisma migrate dev

## View the tables

4.npx prisma studio

# How to use Prisma:

1. npm install @prisma/client
   1.2 Create a instance the database:
   `const prisma = new PrismaClient();`
