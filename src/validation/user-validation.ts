import { body } from "express-validator";
import { REGEX_PASSWORD } from "../../constants/define";
import User from "../model/user";
const validateRegister = [
  body("username")
    .not()
    .isEmpty()
    .withMessage("username is emptied!")
    .custom(async (username: string, { req }) => {
      const user = await User.findOne({ username: username });
      if (user) {
        return Promise.reject("User is existed");
      }
      const phoneIsExisted = await User.findOne({phone: req.body.phone});
      if(phoneIsExisted) {
        return Promise.reject('Phone is existed, please use other mobile phone number');
      }
      return true;
    }),

  body("email").custom(async (email: string, { req }) => {
    if (!email) {
      return true;
    }
    const user = await User.findOne({ email: email });
    if (user) {
      return Promise.reject("email is used, please use other email");
    }
    return true;
  }),
  body("password")
    .not()
    .isEmpty()
    .withMessage("password is emptied")
    .custom(async (password: string, { req }) => {
      const passwordIsValid = password.match(REGEX_PASSWORD);
      if (!passwordIsValid) {
        return Promise.reject(
          "Password must have at least 6 characters contains 1 number, 1 lower character"
        );
      }
      return true;
    })
];

const validateLogin = [
  body("username")
    .not()
    .isEmpty()
    .withMessage("Username is emptied!")
    .custom(async (username: string, { req }) => {
      const user = await User.findOne({username: username});
      if (!user) {
        return Promise.reject('user is not existed');
      };
      return true;
    }),
];
export { validateRegister, validateLogin };
