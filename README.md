# Reedsy Front-end Engineer Challenge

## 1. About you
You can find the answers in [here](./GENERAL_ANSWERS.md)

## 2. General
You can find the answers in [here](./GENERAL_ANSWERS.md)

## 3. Styling

I have started this page in a Vue project. In fact all 3 pages are on the same repo connected to each other.
I have worked with media queries in the past, but wanted to try grid system. There's a lot to learn about it, but seems to produce decent results.

## 4. SPA

Please follow project setup and configure the application as explained below.
After running `yarn start`, the main page should open in the browser automatically. The router will then redirect you to `http://localhost:3000/main` page which is the answer for [Styling](#styling) section.

The Book listing can either be accessed directly via `http://localhost:3000/books` or by clicking on the *Just added* link in the top navigation bar of `/main` page.

The `/books` listing page requires the API server running and also configured before running the application.

After successfully opening the books listing page, you should be able to click on each book title to see single book view page like `http://localhost:3000/books/ulysses`.

I have added some Back buttons in every page for easy navigation.


## Project setup
```
yarn install
```

### ❗ Configure application ⚙️
Update the `VUE_APP_API_URL` variable in `.env` file with the appropriate API URL.

### Compiles and hot-reloads for development
```
yarn run start
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Run your end-to-end tests
```
yarn run test:e2e
```

### Run your unit tests
```
yarn run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
