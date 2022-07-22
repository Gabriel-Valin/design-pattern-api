import { Schema, model } from 'mongoose'

type User = {
    name: string
    email: string
    password: string
    createdAt: Date
}
  
const userSchema = new Schema<User>({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});
  
export const UserModel = model<User>('User', userSchema);