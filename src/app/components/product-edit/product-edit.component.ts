import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent {

  product!: Product; 

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get('id');
      this.productService.readById(id!).subscribe(product => {this.product = product});
    }

    updateProduct(): void{
      this.productService.update(this.product).subscribe(() => {
        //this.productService.showMessage('Produto actualizado com sucesso!');
        this.router.navigate(["/product/list"]);      
      });
    }

    cancel(): void{
      this.router.navigate(['/product/list']);
    }

}
