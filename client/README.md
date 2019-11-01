# Project Name

## Set Up Local Development

If you have not already, please install:

- [asdf](https://github.com/asdf-vm/asdf)
- [Yarn](https://yarnpkg.com/en/docs/install)

1. Run the following commands
   ```
   $ git clone https://YOUR_ACCENTURE_EID_HERE@source.digital.accenture.com/scm/int/graphql-starter-kit.git your-app-name
   $ cd your-app-name
   $ asdf install
   $ cp .env.sample .env
   $ yarn install
   $ yarn start
   ```
2. Visit [locahost:8080](http://localhost:8080) to see
   your appplication.

This application uses Yarn. **Do not use `npm install` commands**. Instead use the
equivalent [Yarn commands](https://yarnpkg.com/en/docs/usage).

### Testing

This applications uses [Jest](https://facebook.github.io/jest/) for testing. To run the test suite, simply run:

```
$ yarn test
```

Also, [React testing library](https://testing-library.com/docs/react-testing-library/intro) has been installed.

### Linting and Code Formatting

- Shows linting errors via [ESLint](https://eslint.org/) using the [eslint-config-react-app](https://github.com/facebookincubator/create-react-app/tree/master/packages/eslint-config-react-app) configuration.

Manually run the linter with:

```
$ yarn lint
```

- Consistently formats code when it's commited using [Prettier](https://prettier.io/)

### Code Generation

[Hygen](https://github.com/jondot/hygen) is used to generate components quickly and consistently

```
$ yarn generate
```

or also

```
$ yarn g
```

### CSS

- [CSS Modules](https://github.com/css-modules/css-modules) for styling.
- Vendor prefixes are automatically added via [postcss-preset-env](https://preset-env.cssdb.org).

### Routing

- [React Router](https://reacttraining.com/react-router/web/guides/philosophy)
