import mongoose from 'mongoose';
const { model, Schema } = mongoose;

const ConditionSchema = new Schema({
  code: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
},
{
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const ConditionModel = model('Condition', ConditionSchema);

export {
  ConditionSchema,
  ConditionModel
};
