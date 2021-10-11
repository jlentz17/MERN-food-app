import mongoose from "mongoose";

const postSchema = {
  creator: String,
  title: String,
  recipe: String,
  ingredients: [String],
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
};

const PostRecipe = mongoose.model("PostRecipe", postSchema);

export default PostRecipe;
