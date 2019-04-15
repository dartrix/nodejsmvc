const controller = {};

controller.index = (req, res) => {
    res.renderVue("index.vue")
}

module.exports = controller;