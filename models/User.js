const { Schema, model, Types } = require('mongoose');

// Schema to create new user
const userSchema = new Schema(
  {
    user_id: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
      unique: true,
    },
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      unique: true,
      required: true,
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/]
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Thought",
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

userSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

const User = model('User', userSchema);

module.exports = User;