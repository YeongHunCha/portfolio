import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent implements OnInit {

  constructor(private router: Router) { }

    ngOnInit() {
      this.router.events.subscribe(() => {
        window.scrollTo(0, 0);
      });
    }

}
