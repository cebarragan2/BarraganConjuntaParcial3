import {Router} from 'express';
import {categoríaController} from '../controllers/categoriaControlers';


class CategoriaRouter {
    public router: Router=Router();

    constructor(){
        this.config();

    }
    
    config(): void {
        this.router.get('/', categoríaController.getAll);
        this.router.get('/:id', categoríaController.getOne);
        this.router.post('/', categoríaController.create);
        this.router.put('/:id', categoríaController.update);
        this.router.delete('/:id', categoríaController.delete);
    }
}

const categoriaRouter= new CategoriaRouter();
export default categoriaRouter.router;
