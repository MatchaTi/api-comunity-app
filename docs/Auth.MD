# Authorization Docs

---

### `Register`

#### Routes

```http
POST /auth/register
```

| Parameter | Type   | Description |
| :-------- | :----- | :---------- |
| `None`    | `None` | `None`      |

#### body

`Header : None`

| FieldName | Required | Type      | length          |
| :-------- | :------- | :-------- | :-------------- |
| email     | `true`   | `isEmail` | `None`          |
| password  | `true`   | `string`  | `min:6, max:20` |
| fullname  | `true`   | `string`  | `min:4, max:28` |

#### Response

`STATUS CODE 200`

```json
{
  "message": "Akun Sudah Berhasil Teregistrasi, Harap Untuk Memverfikasi Akun Anda"
}
```

`STATUS CODE 400-500`

```json
{
  "error": "error.message"
}
```

---

### `Send OTP Code`

#### Routes

```http
POST /auth/send-otp
```

| Parameter | Type   | Description |
| :-------- | :----- | :---------- |
| `None`    | `None` | `None`      |

#### body

`Header : None`

| FieldName | Required | Type      | length |
| :-------- | :------- | :-------- | :----- |
| email     | `true`   | `isEmail` | `None` |

#### Response

`STATUS CODE 200`

```json
{
  "message": "Harap Untuk Cek Email Anda Untuk Token Verifikasi"
}
```

`STATUS CODE 400-500`

```json
{
  "error": "error.message"
}
```

---

### `Verify OTP Code`

#### Routes

```http
POST /auth/otp-verify
```

| Parameter | Type   | Description |
| :-------- | :----- | :---------- |
| `None`    | `None` | `None`      |

#### body

`Header : None`

| FieldName  | Required | Type      | length         |
| :--------- | :------- | :-------- | :------------- |
| email      | `true`   | `isEmail` | `None`         |
| otp_number | `true`   | `number`  | `min:6, max:6` |

#### Response

`STATUS CODE 200`

```json
{
  "message": "berhasil menverifikasi akun",
  "token": "token"
}
```

`STATUS CODE 400-500`

```json
{
  "error": "error.message"
}
```

---

### `Login`

#### Routes

```http
POST /auth/login
```

| Parameter | Type   | Description |
| :-------- | :----- | :---------- |
| `None`    | `None` | `None`      |

#### body

`Header : None`

| FieldName | Required | Type      | length          |
| :-------- | :------- | :-------- | :-------------- |
| email     | `true`   | `isEmail` | `None`          |
| password  | `true`   | `string`  | `min:6, max:20` |

#### Response

`STATUS CODE 200`

```json
{
  "message": "berhasil login",
  "token": "token"
}
```

`STATUS CODE 400-500`

```json
{
  "error": "error.message"
}
```

---

### `Send Forgot Password`

#### Routes

```http
POST /auth/send-forgot-password
```

| Parameter | Type   | Description |
| :-------- | :----- | :---------- |
| `None`    | `None` | `None`      |

#### body

`Header : None`

| FieldName | Required | Type      | length |
| :-------- | :------- | :-------- | :----- |
| email     | `true`   | `isEmail` | `None` |

#### Response

`STATUS CODE 200`

```json
{
  "message": "harap cek email untuk mengganti password"
}
```

`STATUS CODE 400-500`

```json
{
  "error": "error.message"
}
```

---

### `Update Password`

#### Routes

```http
PATCH /auth/update-password
```

| Parameter | Type   | Description |
| :-------- | :----- | :---------- |
| `None`    | `None` | `None`      |

#### body

`Header : Bearer Token`

| FieldName    | Required | Type     | length          |
| :----------- | :------- | :------- | :-------------- |
| new_password | `true`   | `string` | `min:6, max:20` |

#### Response

`STATUS CODE 200`

```json
{
  "message": "berhasil mengubah password"
}
```

`STATUS CODE 400-500`

```json
{
  "error": "error.message"
}
```

### `Status Code`

| Status Code | Description             |
| :---------- | :---------------------- |
| 200         | `Ok`                    |
| 201         | `Created`               |
| 400         | `Bad Request`           |
| 401         | `UnAuthorization`       |
| 404         | `Not Found`             |
| 500         | `Internal Server Error` |

### `Token Payload Example`

```json
{
  "_id": "abcd-5678-jklm-1238",
  "username": "@johnDoe",
  "roles": "user"
}
```
