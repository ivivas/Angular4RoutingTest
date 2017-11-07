import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vista-principal',
  templateUrl: './vista-principal.component.html',
  styleUrls: ['./vista-principal.component.css']
})
export class VistaPrincipalComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  selectFeature(selectedFeature) {
    if (selectedFeature === 'persona') {
      this.router.navigate(['/vista-principal/vista-persona/persona']);
    } else if (selectedFeature === 'pais') {
      this.router.navigate(['/vista-principal/vista-pais/pais']);
    }
  }

}
