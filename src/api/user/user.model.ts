import mongoose from 'mongoose';
const { model, Schema } = mongoose;

const UserSchema = new Schema({
  name: {
    first :{
      type: String,
      required: true
    },
    last: {
      type: String,
      required: true
    }
  }
},
{
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const UserModel = model('User', UserSchema);

export {
  UserSchema,
  UserModel
};
