import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  verNieto(nieto) {
    if (nieto === 'nieto1') {
      this.router.navigate(['/vista-principal/vista-persona/persona/hijo/nieto1']);
    } else if (nieto === 'nieto2') {
      this.router.navigate(['/vista-principal/vista-persona/persona/hijo/nieto2']);
    }
  }
}
