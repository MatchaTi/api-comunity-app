# Post Docs

---

### `Create`

#### Routes

```http
POST /post/create
```

| Fieldname | Type   | Description |
| :-------- | :----- | :---------- |
| `None`    | `None` | `None`      |

#### body

`Header : Bearer Token`

| FieldName      | Required | Type           | length     |
| :------------- | :------- | :------------- | :--------- |
| title          | `true`   | `string`       | `max:80`   |
| category       | `true`   | `string`       | `max:30`   |
| description    | `false`  | `string`       | `max:4000` |
| image          | `false`  | `jpg/png/jpeg` | `none`     |
| syntax         | `false`  | `string`       | `max:4000` |
| pathFile       | `false`  | `string`       | `max:128`  |
| linkSourceCode | `false`  | `string`       | `max:128`  |
| linkLiveDemo   | `false`  | `string`       | `max:128`  |

#### Response

`STATUS CODE 201`

```json
{
  "message": "data berhasil diposting"
}
```

`STATUS CODE 400-500`

```json
{
  "error": "error.message"
}
```

---

### `Update`

#### Routes

```http
POST /post/update/:post_id
```

| Fieldname | Type            | Description               | Required |
| :-------- | :-------------- | :------------------------ | :------- |
| `post_id` | `url parameter` | `Reference From Post _id` | `true`   |

#### body

`Header : Bearer Token`

| FieldName      | Required | Type           | length     |
| :------------- | :------- | :------------- | :--------- |
| title          | `true`   | `string`       | `max:80`   |
| category       | `true`   | `string`       | `max:30`   |
| description    | `false`  | `string`       | `max:4000` |
| image          | `false`  | `jpg/png/jpeg` | `none`     |
| syntax         | `false`  | `string`       | `max:4000` |
| pathFile       | `false`  | `string`       | `max:128`  |
| linkSourceCode | `false`  | `string`       | `max:128`  |
| linkLiveDemo   | `false`  | `string`       | `max:128`  |

#### Response

`STATUS CODE 201`

```json
{
  "message": "data berhasil diposting"
}
```

`STATUS CODE 400-500`

```json
{
  "error": "error.message"
}
```

---
