import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent {
  product!: Product; 

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute) { }

    ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get('id');
      this.productService.readById(id!).subscribe(product => {this.product = product});
    }
  
    deleteProduct(): void {
      this.productService.delete(this.product.id).subscribe(() => {
        //this.productService.showMessage('Produto excluído com sucesso!');
        this.router.navigate(["/product/list"]);
      })
    }
  
    cancel(): void{
      this.router.navigate(['/product/list']);
    }

}
