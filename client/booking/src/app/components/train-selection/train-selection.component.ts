import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-train-selection',
  templateUrl: './train-selection.component.html',
  styleUrls: ['./train-selection.component.scss']
})
export class TrainSelectionComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  goToDetails() {
    this.router.navigate(['/pdetails']);
  }
}
