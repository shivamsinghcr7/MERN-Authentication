import jwt from "jsonwebtoken";

const generateToken = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  // saving token in cookie
  res.cookie("jwtShivam", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development",
    sameSite: "strict",
    maxAge: 30 * 24 * 60 * 60 * 1000,
  });
};
export default generateToken;

//secure: process.env.NODE_ENV !== 'development'  (if not development then 'false')
// -> checks the environment if it is development, its will look for `http`  (unsecured access)
// if environment is 'production' if will set as true and look for 'https' (secured requests)
// maxAge: 30 * 24 * 60 * 60 * 1000 ==> 30 days  as maxAge takes `seconds` as input
// hence days * total hours * total minutes * total seconds * total milli seconds
