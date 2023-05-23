import { Request, Response } from 'express';
import post from '../model/post';
import { validationResult } from 'express-validator';
import { v4 as uuidv4 } from 'uuid';

export const getIndex = async (req: Request, res: Response) => {
  const { start, limit } = req.params;
  const { category, username, title } = req.query;

  try {
    const data = await post
      .find({ category, username, title })
      .sort({ _id: -1 })
      .populate('users', 'credential.email username job')
      .skip(parseInt(start))
      .limit(parseInt(limit));

    res.status(200).json({ data });
  } catch (error) {
    res.status(404).json({ message: error });
  }
};
// export const getPostByCategories = async (req: Request, res: Response) => {
//   const { category, start, limit } = req.params;

//   try {
//     const data = await post
//       .find({ category })
//       .sort({ _id: -1 })
//       .populate('users', 'credential.email username job')
//       .skip(parseInt(start))
//       .limit(parseInt(limit));
//     return res.status(200).json({ data });
//   } catch (error) {
//     res.status(404).json({ message: error });
//   }
// };

// export const getPostByUsers = async (req: Request, res: Response) => {
//   const { username, start, limit } = req.params;

//   try {
//     const data = await post
//       .find({ username })
//       .sort({ _id: -1 })
//       .populate('users')
//       .skip(parseInt(start))
//       .limit(parseInt(limit));
//     res.status(200).json({ data });
//   } catch (error) {
//     res.status(404).json({ message: error });
//   }
// };

// export const getPostByTitle = async (req: Request, res: Response) => {
//   const { title } = req.params;
//   try {
//     const data = await post.find({ title }).sort({ _id: -1 }).limit(15);
//     res.status(200).json({ data });
//   } catch (error) {
//     res.status(200).json({ message: error });
//   }
// };

export const createPost = async (req: Request, res: Response) => {
  const resultValidator = validationResult(req);
  if (!resultValidator.isEmpty()) {
    return res.json({ error: resultValidator.array() });
  }
  const { user_id } = req.params;
  const data = new post({
    _id: uuidv4(),
    user_id,
    users: user_id,
    image: req.file?.path,
    ...req.body
  });

  try {
    await data.save();
    res.status(200).json({
      data,
      message: 'data berhasil di verifikasi'
    });
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

export const updatePost = async (req: Request, res: Response) => {
  const resultValidator = validationResult(req);
  if (!resultValidator.isEmpty()) {
    return res.json({ error: resultValidator.array() });
  }

  const { post_id } = req.params;

  try {
    await post.findByIdAndUpdate(post_id, {
      isEdited: true,
      ...req.body
    });
    res.status(200).json({
      message: 'berhasil mengubah data'
    });
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

export const deletePost = async (req: Request, res: Response) => {
  const resultValidator = validationResult(req);
  if (!resultValidator.isEmpty()) {
    return res.json({ error: resultValidator.array() });
  }

  const { post_id } = req.params;
  try {
    await post.findByIdAndDelete(post_id);
    res.status(200).json({
      message: 'berhasil menghapus data'
    });
  } catch (error) {
    res.status(404).json({ message: error });
  }
};
