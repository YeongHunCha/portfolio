import { Component, OnInit, Renderer } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public navIsFixed = false;

  constructor(
    private renderer: Renderer
    ) {
      this.renderer.listenGlobal('window', 'scroll', e => {
        // console.log(e);
        if (e.path) { // 크롬 window scroll
          if (e.path[1].scrollY / e.path[1].innerHeight * 100 > 25) {
            this.navIsFixed = true;
          } else {
            this.navIsFixed = false;
          }
        } else if (e.view) { // ie11, edge, firefox window scroll
          if (e.view.pageYOffset / e.view.innerHeight * 100 > 25) {
            this.navIsFixed = true;
          } else {
            this.navIsFixed = false;
          }
        }
      });
    }
  ngOnInit() {
  }

}
