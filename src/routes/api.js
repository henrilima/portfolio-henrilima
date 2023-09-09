const router = require("express").Router();
const planets = require("./../API/planets.json");

router.get("/", (req, res) => {
    res.render("api");
});

router.get("/planets", (req, res) => {
    res.json(planets);
});

router.use((req, res, next) => {
    console.log(req.path)
    if (!req.path.startsWith('/static/')) {
        res.redirect("/api");
    } else {
        next();
    }
});

module.exports = router;
