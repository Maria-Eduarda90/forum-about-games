import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Comment from 'App/Models/Comment';

export default class CommentsController {
    public async create({ request, auth }: HttpContextContract) {
        try {
            const data = request.all()
            const user_id = auth.user?.id

            const createComment = await Comment.create({
              ...data,
              user_id,
            })

            return createComment;
        } catch(err){
            console.log(err);
        }
    }

    public async index(){
        try {
            const comment = await Comment.query().preload('user');

            return comment;
        } catch(err){
            console.log(err);
        }
    }
}
