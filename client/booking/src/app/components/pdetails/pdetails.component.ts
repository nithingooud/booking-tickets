import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-pdetails',
  templateUrl: './pdetails.component.html',
  styleUrls: ['./pdetails.component.scss']
})
export class PdetailsComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {

  }

  onSubmit(value: any) {
    if (value <= 7) {
      this.route.navigate(['booking-status']);
    }
  }

}
