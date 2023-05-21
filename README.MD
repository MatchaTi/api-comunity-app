## DOKUMENTASI API COMMITAN

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
    <td>/auth/register</td>
    <td>POST</td>
    <td>none</td>
    <td>fullname, email, password</td>
    <td>message</td>
  </tr>
  <tr>
    <td>/auth/login</td>
    <td>POST</td>
    <td>none</td>
    <td>email, password</td>
    <td>message, token</td>
  </tr>
  <tr>
    <td>/auth/send-otp</td>
    <td>POST</td>
    <td>none</td>
    <td>email</td>
    <td>message</td>
  </tr>
  <tr>
    <td>/auth/otp-verify</td>
    <td>POST</td>
    <td>none</td>
    <td>email,otp_number</td>
    <td>message, token</td>
  </tr>
    <tr>
    <td>/auth/send-forgot-password</td>
    <td>POST</td>
    <td>none</td>
    <td>email</td>
    <td>message</td>
  </tr>
  <tr>
    <td>/auth/forgot-password</td>
    <td>PUT</td>
    <td>none</td>
    <td>_id,new_password</td>
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
