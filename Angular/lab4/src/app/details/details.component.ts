import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styles: [
  ]
})
export class DetailsComponent implements OnInit{
  ID:number;
  constructor(private route: ActivatedRoute) {

  }

  ngOnInit () {
    this.route.paramMap
    .subscribe(params => {
      this.ID = +params.get('id');
    })
  }
}
