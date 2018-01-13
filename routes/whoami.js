const express = require('express');

whoamiRouter = express.Router();
whoamiRouter.get('/', (req, res, next) => {
    const ip = _getIp(req),
          language = _getLanguage(req),
          software = _getSoftware(req);
          
    res.send({
        ip: ip,
        language: language,
        sofware: software,
    })
});

const _getIp = req => {
    return req.header('x-forwarder-for') || req.connection.remoteAddress;
}

const _getLanguage = req => {
    return req.headers["accept-language"].split(',')[0];
}

const _getSoftware = req => {
    return req.headers['user-agent'].split(') ')[0].split(' (')[1];
}

module.exports = whoamiRouter;