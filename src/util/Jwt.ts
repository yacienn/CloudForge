import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import type { User, JwtPayload } from "../models/User.js";

dotenv.config();

const secret = process.env.JWT_SECRET as string;

export const generateToken = (user: User): string => {
  const payload: JwtPayload = {
    id: user.id,        // ✅ Both are strings now
    userName: user.userName,
    storageUsed: user.storageUsed,
    storageLimit: user.storageLimit,
  };

  return jwt.sign(payload, secret, {
    expiresIn: "30d",
  });
};
