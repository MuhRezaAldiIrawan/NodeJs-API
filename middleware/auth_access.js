const auth = require('basic-auth');

const basicAuthMiddleware = (req, res, next) => {
    const credentials = auth(req);

    if (!credentials || !checkCredentials(credentials.name, credentials.pass)) {
        res.setHeader('WWW-Authenticate', 'Basic realm="example"');
        return res.status(401).json({ message: 'Akses ditolaks' });
    }

    next();
};

function checkCredentials(username, password) {
    const validUsername = 'admin';
    const validPassword = 'password123'; 

    return username === validUsername && password === validPassword;
}

module.exports = basicAuthMiddleware;