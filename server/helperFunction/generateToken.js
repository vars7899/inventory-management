import jwt from "jsonwebtoken"

const generateToken = (id) => {
  const newToken = jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
  return newToken;
};

export {generateToken};