import { Request, Response } from 'express';
import { errors } from '../../utils/service/error';
import path from 'path';
import fs from 'fs';

const imagesDirectory = path.join(
  __dirname,
  '..',
  '..',
  '..',
  'api',
  'v1',
  'images'
);

export const getImageProfile = (req: Request, res: Response): void => {
  const imageName = req.params.image_name;

  if (!imageName) {
    errors(res, 400, 'Filename query parameter is required');
    return;
  }

  // Check all supported image file extensions (you can add more if needed)
  const supportedExtensions = ['.jpg', '.jpeg', '.png'];

  let imagePath: string | undefined;

  // Iterate through supported extensions and find the first match
  for (const extension of supportedExtensions) {
    const potentialImagePath = path.join(
      imagesDirectory,
      `${imageName}${extension}`
    );

    if (fs.existsSync(potentialImagePath)) {
      imagePath = potentialImagePath;
      break;
    }
  }

  if (!imagePath) {
    errors(res, 404, 'Image Not Found');
    return;
  }

  res.sendFile(imagePath, (err) => {
    if (err) {
      errors(res, 500, 'Internal Server Error');
      return;
    }
  });
};
