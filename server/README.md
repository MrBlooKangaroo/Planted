# Graphql Starter Kit

## Setting Up A New project

If you have not already, please install the following:

- [Yarn](https://yarnpkg.com/lang/en/docs/install/)
- [asdf](https://github.com/asdf-vm/asdf)
- [adsf-nodejs](https://github.com/asdf-vm/asdf-nodejs)

You'll also need a postgres database running locally, which can be installed via [homebrew](https://gist.github.com/ibraheem4/ce5ccd3e4d7a65589ce84f2a3b7c23a3) or the [postgres.app](https://postgresapp.com/).

1. Clone this repository  
   git clone https://YOUR_ACCENTURE_EID_HERE@source.digital.accenture.com/scm/int/graphql-starter-kit.git your-app-name  
   cd your-app-name

2. Set up the local database and project

   ```
   $ cp .sample.env .env
   $ asdf install
   $ yarn install
   $ yarn db:setup
   ```

3. Start the server:

   ```
   $ yarn start
   ```

4. Load up `localhost:1337` to access the graphql playground

- Test out the existing example mutations/queries to ensure everything is functioning properly.

### Database Commands

| Command            | Explanation                          |
| ------------------ | ------------------------------------ |
| `yarn db:create`   | Create the database                  |
| `yarn db:drop`     | Drop the database                    |
| `yarn db:migrate`  | Run pending migrations               |
| `yarn db:rollback` | Revert most recent migration         |
| `yarn db:seed`     | Run seeders                          |
| `yarn db:setup`    | Runs create and migrate              |
| `yarn db:reset`    | Runs drop, create, and migrate       |

_NOTE_: Except for the `yarn db:setup` and `yarn db:reset` commands. You will need to prepend `NODE_ENV=test` to your commands in order to perform the command on the test database. Some of these commands can be run for both environments in one shot if you append `:all` to the end, such as `yarn db:create:all`.

#### Generating new models

```
$ yarn sequelize model:generate --name model-name --attributes stringFieldName:string,dateFieldName:date,foreignKeyFieldName:uuid
```

This will create both a model and a migration file, where the migration will follow the naming convention of `create-model-name`.

#### Generating new migrations

```
$ yarn sequelize migration:generate --name migration-name
```

#### Running Tests:

```
$ yarn test
```

There are several test utility functions within the `utils/test` directory that are worth becoming familiar with. Most of these are unlikely to need additions, but `clean-up-db.js` has a `tableNames` constant that will need to be added to whenever a new model is created. This allows the clean up between tests to properly remove associations.
