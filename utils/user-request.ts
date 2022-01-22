import { NextFunction } from "express";
import User from "../src/model/user";
import { UserRequest } from "./types/user";

export const findUserByCondition = async (
  filter: string,
  valueFilter: any,
  next: NextFunction
) => {
  try {
    const user = await User.findOne({ [filter]: valueFilter });
    return user;
  } catch (err) {
    next(err);
  }
};

export const getUserByMultipleCondition = async <T extends UserRequest>(
  condition: T,
  next: NextFunction
) => {
  try {
    const user = await User.findOne({ ...condition });
    return user;
  } catch (err) {
    next(err);
  }
};
