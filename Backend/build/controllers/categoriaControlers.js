"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoríaController = void 0;
const database_1 = __importDefault(require("../database"));
class CategoríaController {
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const categoria = yield database_1.default.query('SELECT * FROM categoria');
            res.json(categoria);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const categoria = yield database_1.default.query('SELECT * FROM subcategoria INNER JOIN categoria ON categoria.COD_CATEGORIA=subcategoria.COD_CATEGORIA WHERE categoria.COD_CATEGORIA=?', [id]);
            if (categoria.length > 0) {
                return res.json(categoria);
            }
            res.status(404).json({ text: "categoriao no registrado" });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            const result = yield database_1.default.query('INSERT INTO subcategoria set ?', [req.body]);
            res.json(result);
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const categoria = req.body;
            const result = yield database_1.default.query('UPDATE categoriao set ? WHERE codigo = ?', [categoria, id]);
            res.json(result);
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const result = yield database_1.default.query('DELETE FROM subcategoria WHERE codigo = ?', [id]);
            res.json(result);
        });
    }
}
exports.categoríaController = new CategoríaController;
