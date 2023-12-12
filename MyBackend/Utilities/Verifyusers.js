import jwt from 'jsonwebtoken';
import { CreateError } from '../Utilities/Errors.js';

//VERIFY USER
export const verifyUser = (req, res, next)=>{
    verifyToken(req, res, next, () =>{
            if(req.user.id === req.params.id || req.user.isAdmin){
            next();
        }else{
            return next(CreateError(403, "you are not authorized user"));
        }
    });
};
// VERIFY TOKEN
export const verifyToken = (req, res, next) => {
    if (req.cookies.access_token != null) {
      jwt.verify(
        req.cookies.access_token,
        process.env.JWT_SECRET_KEY,
        (error, User) => {
          if (error) {
            res.send({ error, message: "you are not authenticated" });
          }
          next();
        }
      );
    } else {
      res.status(401).send({ message: "Invalid token" });
    }
  };

//ADMIM
  export const verifyAdmin = (req, res, next) => {
    verifyToken(req, res, next, () => {
      if (req.user.isAdmin) {
        next();
      } else {
        return next(CreateError(403, "You are not authorized! Admin"));
      }
    });
  };