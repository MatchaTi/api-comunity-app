import request from 'supertest';
import app from '../../app';

describe('register controller', () => {
  test('POST /auth/Register', async () => {
    await request(app)
      .post('/api/v1/auth/register')
      .send({
        fullname: 'testing',
        email: 'm.difa2783@gmail.com',
        password: '123testing'
      })
      .expect(200)
      .expect('Content-Type', /json/)
      .expect((res) => {
        res.body.message =
          'Akun Sudah Teregistrasi, Harap Untuk MemVerfikasi Akun Anda';
      });
  }, 30000);
});
