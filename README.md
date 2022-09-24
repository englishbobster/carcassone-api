* Carcassonne API

This is an attempt to learn NextJs, TypeScript, and React.

** Using Prisma with Postgres

Prisma is ORM and the migration manager.
Running locally Prisma requires a user that can create a shadow DB to keep track and generate db migrations.

```
ALTER USER username CREATEDB;
```

To initialize the initial schema defined in `schema.prisma` file run:
```
npx prisma migrate dev
```
