import { Component } from '@angular/core';
import { ServicesService } from './services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'inventario-Client';
  url:string = "products";
  constructor(private service: ServicesService){

  }
  createProduct(data:any){
    this.service.post(this.url, data);
  };

  getProduct(){
    this.service.get(this.url);
  };

  updateProduct(){
    let data={
      product:{
        name:"uva",
        stock: 2,
        price:3.45
      },
      category:{
        id:1
      }
    }
    this.service.update(this.url, data);
    
  }
  
  deleteProduct(){
    this.service.delete(this.url).subscribe(
      response=>{
        console.log("exitosamente eliminado");
      },error=>{
        console.log("eliminado fallido");
      });
  };

}
