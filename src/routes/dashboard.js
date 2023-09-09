const router = require("express").Router();

function isAuthorized(req, res, next) {
    if (req.user) {
        next();
    } else {
        res.redirect("/google");
    }
}

router.get("/", isAuthorized, (req, res) => {
    res.render("dashboard", {
        user: req.user,
    });
});

router.get("/calc", isAuthorized, (req, res) => {
    res.render("load", { rota: 'calculadora' });
});

router.get("/calculadora", isAuthorized, (req, res) => {
    res.render("calculadora");
});

router.get("/joken", isAuthorized, (req, res) => {
    res.render("load", { rota: 'jokenpo' });
});

router.get("/jokenpo", isAuthorized, (req, res) => {
    res.render("jokenpo");
});

router.get("/slide", isAuthorized, (req, res) => {
    res.render("load", { rota: 'slider' });
});

router.get("/slider", isAuthorized, (req, res) => {
    res.render("slider");
});

router.get("/global", isAuthorized, (req, res) => {
    res.render("load", { rota: 'chat' });
});

router.get("/chat", isAuthorized, (req, res) => {
    res.render("chat", { user: req.user });
});

module.exports = router;
