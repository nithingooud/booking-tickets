import { Component, OnInit ,NgModule} from '@angular/core';
import { Router } from '@angular/router'; 
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-initial-setup',
  templateUrl: './initial-setup.component.html',
  styleUrls: ['./initial-setup.component.scss']
})

export class InitialSetupComponent implements OnInit {
  
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  
  goToContact(){
      this.router.navigate(['/pdetails']);
  }
  
}
