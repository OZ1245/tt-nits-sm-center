# SM CENTER

Тестовое задание для [НИЦ "Системы управления"](https://sm-center.ru).

## Стек

Vue.js 2, Vuex, Vue Router, Axios, Sass/SCSS

## Инициализация проекта

```
npm install
```

### Компиляция для разработки

```
npm run serve
```

### Компиляция для продакшен

```
npm run build
```

### Линтер

```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# Тестовое задание

Необходимо с использованием Vue.js, Vuex, Vue Router, Axios, Sass/SCSS написать приложение в котором вывести список и переход по записи из списка.

## Требования:

1. На главном экране вывести таблицу. В таблице должна быть реализована пагинация, выбор количества отображаемых элементов (10, 25, 50) и переход по записи из таблицы где вывести информацию о самой записи. Таблицу реализовать в виде компонента. Составляющие таблицы, например такие как пагинация тоже можно реализовать как отдельные компоненты.

2. В качестве API можно использовать: [https://randomuser.me/](https://randomuser.me/).

3. Запросы вынести в отдельный API слой. Запросы должны выполняться с помощью Axios.

4. Для хранения состояния приложения использовать Vuex.

5. Для маршрутизации использовать Vue Router.

6. Верстка может быть произвольная, для верстки использовать Sass/SCSS препроцессор. Дизайн оцениваться не будет.

# Исполнение

## Используемые пакеты и библиотеки

- [**Axios**](https://axios-http.com) - HTTP-клиент для браузера и node.js на основе Promise.
- [**Vue CLI**](https://cli.vuejs.org/) - Стандартный инструментарий для разработки на Vue.js, включающий:
 - [**Vue.js**](https://ru.vuejs.org) - Прогрессивный
 JavaScript-фреймворк.
 - [**Vue Router**](https://v3.router.vuejs.org/) - Официальный маршрутизатор для Vue.js.
 - [**Vuex**](https://v3.vuex.vuejs.org/) - Паттерн управления состоянием + библиотека для приложений на Vue.js.
- [**vue-easy-lightbox**](https://onycat.com/vue-easy-lightbox/) - Компонент лайтбокса изображений для Vue.js с увеличением, перетаскиванием, вращением и переключателем.
- [**vue-moment**](https://github.com/brockpetrie/vue-moment) - [Moment.js](https://momentjs.com/) фильтры для проекта на Vue.js.
- [**vuex-persistedstate**](https://github.com/robinvdvleuten/vuex-persistedstate) - Плагин Vuex, позволяющий сохранять состояние приложения между перезагрузками.
- [**Font Awesome**](https://fontawesome.com/v4/) - Иконочный шрифт и инструментарий CSS.
- [**Random User Generator**](https://randomuser.me) - Бесплатный API с открытым исходным кодом для генерации случайных пользовательских данных.
