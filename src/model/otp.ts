import { Schema, model } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
import { IOtp } from '../utils/interface';

const OtpSchema = new Schema<IOtp>(
  {
    _id: { type: String, default: uuidv4 },
    email: { type: String },
    otp_number: { type: Number }
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  }
);

export default model<IOtp>('otp', OtpSchema);
