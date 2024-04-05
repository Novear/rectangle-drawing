import { Component, OnInit, Injector } from '@angular/core';
import { ApiService } from '../services/api.service';
import { RectangleModel } from '../models/model.rectangle'; // Assuming RectangleModel is defined

@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.css'],
})
export class RectangleComponent implements OnInit {
  apiService: ApiService;
  rectangleWidth!: number;
  rectangleHeight!: number;
  startX: number = 0;
  startY: number = 0;
  resizing: boolean = false;

  constructor(private injector: Injector) {
    this.apiService = this.injector.get(ApiService);
  }

  ngOnInit(): void {
    this.apiService.getInitialDimensions().subscribe((dimensions) => {
      this.rectangleWidth = dimensions.width;
      this.rectangleHeight = dimensions.height;
    });
  }

  startResize(event: MouseEvent) {
    this.resizing = true;
    this.startX = event.clientX;
    this.startY = event.clientY;
  }

  resize(event: MouseEvent) {
    if (this.resizing) {
      this.rectangleWidth += event.clientX - this.startX;
      this.rectangleHeight += event.clientY - this.startY;
      this.startX = event.clientX;
      this.startY = event.clientY;
    }
  }

  endResize(event: MouseEvent) {
    this.resizing = false;
    this.apiService
      .updateDimensions({
        width: this.rectangleWidth,
        height: this.rectangleHeight,
      })
      .subscribe();
  }

  calculatePerimeter() {
    return 2 * (this.rectangleWidth + this.rectangleHeight);
  }
}
