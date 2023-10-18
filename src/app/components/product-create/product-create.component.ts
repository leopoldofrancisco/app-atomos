import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent {

  product: Product = {    
    id: 0,
    name: '',
    price: null
  };

  constructor(private productService: ProductService,
    private router: Router) { }
  
  createProduct(): void{
    this.productService.create(this.product).subscribe(() => {
      //this.productService.showMessage('Produto criado!')
      this.router.navigate(['/product/list'])
    })
   
  }

  cancel(): void {
    this.router.navigate(['/product/list'])
  }
}
