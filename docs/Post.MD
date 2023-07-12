## DOKUMENTASI API COMMITAN

### POST ROUTES

<table>
  <tr>
    <th colspan="5">Auth Routes</th>
  </tr>
  <tr>
    <th>Route</th>
    <th>HTTP</th>
    <th>Header(s)</th>
    <th>Body</th>
    <th>Response</th>
  </tr>
  <tr>
    <td>/post/create/:id_user</td>
    <td>POST</td>
    <td>none</td>
    <td>title,description,category</td>
    <td>message</td>
  </tr>
</table>

### JWT Payload example

```json
{
  "username": "@johnDoe",
  "roles": "user"
}
```
