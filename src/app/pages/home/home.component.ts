import { Component, OnInit} from '@angular/core';
import { ProductModel } from 'src/app/models/product.model';
import { ProductApiService } from 'src/app/services/product-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _productApi : ProductApiService) { }

  productData : ProductModel[] = [];
  ngOnInit(): void {
    this.getProduct();
  } 
 
  getProduct(){
    this._productApi.getProduct().subscribe(
      res=>{
        this.productData = res;
    })
  }

  add2Cart(item : ProductModel){
    console.log(item);
  }
}
