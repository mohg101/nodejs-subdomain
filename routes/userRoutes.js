const { getUserDetails } = require('../controllers/userController');

const router = require('express').Router();

router.use((req, res, next) => {
    console.log(req.url)
    console.log(req.subdomains)
    if (!req.subdomains.length || req.subdomains.slice(-1)[0] === 'www') 
        return next();

    const subdomain = req.subdomains.join('.');

    req.url = `/subdomains/${subdomain}${req.url}`;

    return next();
});

router.get('/subdomains/:user_id', getUserDetails);

module.exports = router;