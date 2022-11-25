import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Avion } from '../../../../FRONTEND/src/objets/avion';
import { PlaneService } from '../services/plane.service';

@Component({
  selector: 'app-detail-avion',
  templateUrl: './detail-avion.component.html',
  styleUrls: ['./detail-avion.component.css']
})
export class DetailAvionComponent implements OnInit {

  constructor(private planeService : PlaneService, private route : ActivatedRoute) { }

  avion !: Avion;

  ngOnInit(): void {
    this.planeService.getAllPlanes().subscribe((planes) => {
      console.log(planes);
      this.avion = planes.find((plane) => plane.id == this.route.snapshot.params['id']);
    });
  }


}
