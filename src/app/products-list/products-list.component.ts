import { Component, Input } from '@angular/core';
// import data from '../../assets/products-list.json';
import { ProductsService } from '../products.service';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css',
})
export class ProductsListComponent {
  // products: any = data;
  products: any;

  constructor(private productsService: ProductsService) {}
  ngOnInit() {
    this.productsService.getProducts().subscribe(
      (res) => (this.products = res),
      (err) => console.log(err)
    );
  }
}
