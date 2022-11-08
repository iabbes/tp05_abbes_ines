import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Client } from '../../objets/client';

@Component({
  selector: 'app-composant-recap-data',
  templateUrl: './composant-recap-data.component.html',
  styleUrls: ['./composant-recap-data.component.css']
})
export class ComposantRecapDataComponent implements OnInit {

  constructor() { }

  @Input() client !: Client;
  @Output() desaffiche: EventEmitter<boolean> = new EventEmitter<boolean>();
   
  clientOK !: boolean;

  ngOnInit(): void {
  
  }

  desafficher(){
    this.desaffiche.emit();
  } 

}
