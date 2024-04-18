# Список товаров

### Требования

Необходимо создать страницу, используя предоставленное API, которая отображает список товаров. Для каждого товара должен отображаться его id, название, цена и бренд.

- Выводить по 50 товаров на страницу с возможностью постраничного перехода (пагинация) в обе стороны.
- Возможность фильтровать выдачу используя предоставленное апи по названию, цене и бренду.
- Если API возвращает дубли по id, то следует их считать одним товаром и выводить только первый, даже если другие поля различаются.
- Если API возвращает ошибку, следует вывести идентификатор ошибки в консоль, если он есть, и повторить запрос.

API: [https://api.valantis.store:41000/](https://api.valantis.store:41000/)

### Технологии

React 18.2 | Redux 9 | React Router 6 | antd 5

### Ограничения

- Метод filter не принимает параметры limit и offset, в связи с чем реализация пагинации возможна только для всего списка продуктов (метод get_ids)

### Установка и запуск

1. Убедитесь, что у вас установлены Node.js и npm.
2. Клонируйте репозиторий проекта и перейдите в корневой каталог проекта:

```bash
git clone https://github.com/hifly3082/val-product-list.git
cd product-list
```

3. Установите зависимости с помощью следующей команды:

```bash
npm install
```

### Использование

Для запуска приложения используйте следующую команду:

```bash
npm start
```

Для отображения списка товаров перейдите на страницу "Каталог"
