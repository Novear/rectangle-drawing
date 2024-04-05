import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RectangleComponent } from './rectangle/rectangle.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [{ path: '/rectangle', component: RectangleComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
