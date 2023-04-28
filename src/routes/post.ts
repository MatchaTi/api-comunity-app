import multer, { FileFilterCallback } from 'multer';
import { Request, Response, Router } from 'express';

type DestinationCallback = (error: Error | null, destination: string) => void;
type FileNameCallback = (error: Error | null, filename: string) => void;

const upload = multer({ dest: 'images/' });

const router = Router();

router.post('/upload', upload.array('files'), (req: Request, res: Response) => {
  console.log(req.body);
  console.log(req.files);
  res.json({ message: 'Successfully uploaded files' });
});

export default router;
