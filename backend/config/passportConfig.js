import { JwtStrateegy } from "passport-jwt";
import { ExtractJwt } from "passport-jwt";

//Strategy options
const options = {
   jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
   secretOrKey: process.env.SECRET,
   algorighms: ["RS256"]
}

const strategy = new JwtStrateegy(options, (payload, done) => {
   
});

export default (passport) => {
   passport.use()
}