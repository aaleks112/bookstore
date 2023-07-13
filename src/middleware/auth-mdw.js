const SERVER_SECRET = "eSTA_eS%CLAveÑsEcreta_S3456**";

const passport = require("passport");   // libreria que ayuda a la auth
const passportJwt = require("passport-jwt"); // libreria q' nos permite sacar la Strategy de JWT
const JWTStrategy = passportJwt.Strategy; 
const ExtractJWT = passportJwt.ExtractJwt;  // el request que llegue sacar el token 

passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),   //fx para sacar token
      secretOrKey: SERVER_SECRET,
    },
    (jwtPayload, done) => {
      const user = jwtPayload;
      return done(null, user);
    }
  )
);

const jwtValidMDW = passport.authenticate("jwt", { session: false });

const userIsAdminMDW = (req, res, next) => {
  return passport.authenticate("jwt", { session: false }, (err, user, info) => {
    if (err) {
      console.err(err);
      return next(err);
    }

    if (user.role === "Admin") {
      req.user = user;
      return next();
    }

    res.status(401).json({ error: "User not Admin" });
  })(req, res, next);
};

module.exports = { jwtValidMDW, userIsAdminMDW, SERVER_SECRET };
