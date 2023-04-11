// subcribe model
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const subscribeSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    }
});

const subscribe = mongoose.model('subscribe', subscribeSchema);
export default subscribe;