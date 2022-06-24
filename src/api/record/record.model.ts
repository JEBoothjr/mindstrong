import mongoose from 'mongoose';
const { model, Schema } = mongoose;

const RecordSchema = new Schema({
  conditions: [{
    type: Schema.Types.ObjectId,
    ref: 'Condition'
  }],
  description: {
    type: String,
    required: true
  },
  review: {
    reviewed_by: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    review_date: {
      type: Date
    }
  }
},
{
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const RecordModel = model('Record', RecordSchema);

export {
  RecordSchema,
  RecordModel
};
