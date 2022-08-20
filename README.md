# app

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

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


排序
//路由独享守卫
beforeEnter: (to, from, next) =>{}
//全局守卫:前置守卫（在路由跳转之间进行判断）
router.beforeEach(async (to, from, next) => {})