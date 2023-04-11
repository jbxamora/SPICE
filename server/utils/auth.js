const jwt = require('jsonwebtoken');   //verifies JWTs 

const secret = 'mysecretssshhhhhhh'; //used to sign and verify JWTs
const expiration = '2h';

module.exports = {
  authMiddleware: function ({ req }) {
    let token = req.body.token || req.query.token || req.headers.authorization;
//check presence of JWT in req.body.token, req.query.token, or req.headers.authorization 
    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    if (!token) {
      return req;
    }

    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log('Invalid token');
    }

    return req;
  },
  // receives an object wtih user's email, username, and id and generates a JWT
  signToken: function ({ email, username, _id }) {
    const payload = { email, username, _id };//context object
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
