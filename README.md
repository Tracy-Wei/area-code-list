## Install

```
npm install area-code-list
```

```
yarn add area-code-list
```

## Usage

```
import countries from "area-code-list";
```

### Get name of the country

```js
name = countries.getCountryByName("阿富汗");
```

### Get code of the country

```js
code = countries.getCountryByCode("+93");
```

### Get list of all country names

```js
names = countries.getCountries();
```

---

### Get name of the ShortName

```js
name = countries.getCountriesByShortName("AF");
```

### Get code of the En

```js
code = countries.getEnToCountry("Afghanistan");
```

### Get list of all GroupEn

```js
names = countries.getGroupEnToCountry("A");
```

### Get list of all GroupCn

```js
names = countries.getGroupCnToCountry("A");
```

### Inspired by 灵感来自

- @datasets/country-list
