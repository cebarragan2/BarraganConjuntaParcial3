import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { Subcategoria } from '../models/subcategoria';
import { Detalle } from '../models/detalle';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  subcategorias: any = [];
  subcategoria: Subcategoria;
  categorias:any=[];
  detalleSubs:any=[];
  cod_categoria:string
  action: string;


  constructor(private service: ServiceService) {
    this.action = 'Agregar';
  }

  ngOnInit() {
    this.getCategorias();

    this.subcategoria = new Subcategoria();
  }

  getCategorias() {
    this.service.getSubcategorias()
      .subscribe(
        res => {
          this.categorias = res;
        },
        err => console.error(err)
      );
  }
  getSubcategorias() {
    this.service.getSubcategoria(this.cod_categoria)
      .subscribe(
        res => {
          this.subcategorias = res;
        },
        err => console.error(err)
      );
  }

  listarcategoria(){
  delete this.subcategorias;
  this.getSubcategorias()
  }

  update(subcategoria: Subcategoria) {
    this.subcategoria = subcategoria;
    this.action = 'Modificar';
  }


  delete(id: string) {
    console.log(id);
    this.service.deleteSubcategoria(id)
      .subscribe(
        res => {
          console.log(res);
            this.getSubcategorias()
          this.ngOnInit();
        },
        err => console.error(err)
      );
     }

  cancel() {
    this.action = 'Agregar';
    delete this.subcategoria;
    this.ngOnInit();
    delete this.detalleSubs;

  }

  detalle(id: string){
    this.service.getSubcategoriaDetalle(id)
      .subscribe(
        res => {
          this.detalleSubs=res;
          this.ngOnInit();
        },
        err => console.error(err)
      );

  }


  saveSubcategoria() {
  
    console.log(this.subcategoria);
    if (this.action == 'Agregar') {
      this.service.createSubcategoria(this.subcategoria)
        .subscribe(
          res => {
            this.subcategoria.COD_CATEGORIA=this.cod_categoria;
            this.getSubcategorias()
            this.ngOnInit();

          },
          err => console.error(err)
        )

    } else {
      this.service.updateSubcategoria(this.subcategoria.COD_CATEGORIA, this.subcategoria)
        .subscribe(
          res => {
            this.action = 'Agregar';
            delete this.subcategoria;
            this.ngOnInit();
          },
          err => console.error(err)
        )
    }

  }


}
