const { expressjwt: jwt } = require('express-jwt');

function getTokenFromHeader(req) {
    const auth = req.headers.authorization;
    if (auth && auth.split(' ')[0] === 'Bearer') {
        return auth.split(' ')[1];
    }
    return null;
}

module.exports = {
    required: jwt({
        secret: 'secret',
        algorithms: ['HS256'],
        userProperty: 'payload',
        getToken: getTokenFromHeader
    }),
    optional: jwt({
        secret: 'secret',
        algorithms: ['HS256'],
        userProperty: 'payload',
        credentialsRequired: false,
        getToken: getTokenFromHeader
    })
}