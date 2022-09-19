import mongoose from "mongoose";

export interface UserTokenPayload {
  username: string;
  _id: UserDocument["_id"];
}

export enum Roles {
  admin = "admin",
  user = "user",
}
export interface UserInput {
  username: string;
  password: string;
  role: Roles;
}

export interface UserDocument extends UserInput, mongoose.Document {
  createdAt: Date;
  updatedAt: Date;
  comparePassword(input: string): Promise<boolean>;
  createJWT(): string;
}

type FileUploadPath = "MERN-SOCIAL/Profile-photos" | "MERN-SOCIAL/posts-photos";

type Upload = (
  path: string,
  { use_filename, folder }: { use_filename: boolean; folder: FileUploadPath }
) => { secure_url: string };
export interface Cloudinary {
  uploader: {
    upload: Upload;
  };
}
