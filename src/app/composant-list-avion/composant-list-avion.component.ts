import { Component, OnInit } from '@angular/core';
import { Observable, Subject, map, filter } from 'rxjs';
import { Plane } from '../models/plane.model';
import { PlaneService } from '../services/plane.service';


@Component({
  selector: 'app-composant-list-avion',
  templateUrl: './composant-list-avion.component.html',
  styleUrls: ['./composant-list-avion.component.css']
})
export class ComposantListAvionComponent implements OnInit {
  searchText: any;
  plane$ !: Observable<Plane[]>;
  planeFilter$ !: Observable<Plane[]>;
  private destroy$!: Subject<boolean>;

  constructor(private planeService: PlaneService) { }

  ngOnInit(): void {
    this.plane$ = this.planeService.getAllPlanes();
    this.planeFilter$ = this.plane$
    this.destroy$ = new Subject<boolean>();
  }

  filter(name) {
    this.plane$= this.planeFilter$.pipe(
      map(projects =>projects.filter(proj => proj.airplane.includes(name))
      )
    );
  }


  

  ngOnDestroy(): void {
    this.destroy$.next(true);
  }

}
