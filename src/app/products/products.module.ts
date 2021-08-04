import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ProductListModule } from './product-list/product-list.module';
import { ProductsComponent } from './products.component';
import { ProductsService } from './products.service';

@NgModule({
  declarations: [ProductsComponent],
  imports: [HttpClientModule, ProductListModule],
  providers: [ProductsService],
})
export class ProductsModule {}
