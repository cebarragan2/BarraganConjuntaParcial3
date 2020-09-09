import { Request, Response } from 'express';
import pool from '../database';
class CategoríaController {


    public async getAll(req: Request, res: Response): Promise<void> {
        const categoria = await pool.query('SELECT * FROM categoria');
        res.json(categoria);
    }
    
    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const categoria = await pool.query('SELECT * FROM subcategoria INNER JOIN categoria ON categoria.COD_CATEGORIA=subcategoria.COD_CATEGORIA WHERE categoria.COD_CATEGORIA=?', [id]);
        if (categoria.length > 0) {
            return res.json(categoria);
        }
        res.status(404).json({ text: "categoriao no registrado" });
    }
    public async create(req: Request, res: Response): Promise<any> {
        console.log(req.body);
        const result = await pool.query('INSERT INTO subcategoria set ?', [req.body]);
        res.json(result);
    }
    
    public async update(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const categoria = req.body;
        const result =await pool.query('UPDATE subcategoria set ? WHERE codigo = ?', [categoria, id]);
        res.json(result);
    }

    public async delete(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const result =await pool.query('DELETE FROM subcategoria WHERE COD_SUB_CATEGORIA = ?', [id]);
        res.json(result);
    }
}

export const categoríaController = new CategoríaController;