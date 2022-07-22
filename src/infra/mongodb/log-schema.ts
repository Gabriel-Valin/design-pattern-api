import { Schema, model } from 'mongoose'

type Log = {
    stack: string
    generatedAt: Date
}
  
const logSchema = new Schema<Log>({
    stack: { type: String, required: true },
    generatedAt: { type: Date, default: Date.now }
});
  
export const LogModel = model<Log>('Log', logSchema);