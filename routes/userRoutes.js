const router = require('express').Router();

router.use((req, res, next) => {
    console.log(req.url)
    console.log(req.subdomains)
    if (!req.subdomains.length || req.subdomains.slice(-1)[0] === 'www') 
        return next();

    const subdomain = req.subdomains.join('.');

    req.url = `/subdomains/${subdomain}${req.url}`;
    console.log(req.url);
    
    return next();
});

router.get('/subdomains/:user_id', (req, res) => {
    console.log(req.subdomains)
    return res.status(200).send({ success: true, message: `Hello ${req.params.user_id}`});
})

module.exports = router;