import { Component, OnInit } from '@angular/core';
import { TriggersService } from  '../triggers.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor(private triggersService: TriggersService) {

  }
  nodes:any;

  ngOnInit(): void {
  }
  clickFunction() {
    alert("Click ME");
    // this.get();
    this.triggersService.test_get_api();
  }
  // get(): void {
  //   this.nodes = this.triggersService.test_get_api();
  //   alert(this.nodes);
  
  // }
  
}
