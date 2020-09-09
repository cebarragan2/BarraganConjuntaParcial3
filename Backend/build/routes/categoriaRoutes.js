"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const categoriaControlers_1 = require("../controllers/categoriaControlers");
class CategoriaRouter {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', categoriaControlers_1.categoríaController.getAll);
        this.router.get('/:id', categoriaControlers_1.categoríaController.getOne);
        this.router.post('/', categoriaControlers_1.categoríaController.create);
        this.router.put('/:id', categoriaControlers_1.categoríaController.update);
        this.router.delete('/:id', categoriaControlers_1.categoríaController.delete);
    }
}
const categoriaRouter = new CategoriaRouter();
exports.default = categoriaRouter.router;
