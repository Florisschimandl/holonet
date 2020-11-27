# Holonet

## Considerations

This project started out with both snowpack and Vue 3 (as an experiment).
Both are still lacking all kinds of support, i ran into the folowing problems: 
- snowpack vue/typescript template has no test runner and lacks good integration for typescript
- snowpack suggest to use @web/test-runner, its unclear if it support vue3 and i have no experience with it
- snowpack used to support jest, but i couldt get it to work properly with ts etc

Because of the above problems the project switched to Vue 3 cli during development.

## Components

All components where kept simple and compact, pure minimal HTML/CSS, to speed up the short development proces (4 days).

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

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
