import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import User from 'App/Models/User'

export default class AuthController {
  public async login({ request, auth }: HttpContextContract){
    try {
      const email = request.input('email');
      const password = request.input('password');

      const token = await auth.use('api').attempt(email, password, {
        expiresIn: '1day'
      });

      return token.toJSON()
    } catch (err){
      console.log(err);
    }
  }

  public async register({ request }: HttpContextContract){
    try {
      const { name, email, password } = request.only(['name', 'email', 'password']);

      const createUser = await User.create({
        name,
        email,
        password,
      })

      return createUser
    } catch(err){
      console.log(err);
    }
  }

  public async index(){
    try {
      const user = await User.all();

      return user;
    } catch(err){
      console.log(err);
    }
  }
}
