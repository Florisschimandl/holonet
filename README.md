# Holonet

## Considerations

This project started out with both snowpack and Vue 3 (as an experiment).
Both are still lacking all kinds of support, I ran into the following problems: 
- snowpack Vue/typescript template has no test runner and lacks good integration for typescript.
- snowpack suggest to use @web/test-runner, it's unclear if it support Vue3 and I have no experience with it
- snowpack used to support jest, but I couldnt get it to work properly with typescript etc.

Because of the above problems the project switched to Vue 3 cli during development.
This unfortunately lead to minimal unit tests.

## Components

All components where kept simple and compact, pure minimal HTML/CSS, to speed up the short development process (4 days).

Note:
- Because of time issues the search component is currently a dummy component.

## Demo domain

The Holonet assesment runs on: https://www.holonet.nl 

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```
Note: 
- There are two test for the sole purpose of testing jest is working.

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
