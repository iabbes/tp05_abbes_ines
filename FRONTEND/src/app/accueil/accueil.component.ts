import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });
  isConnected = false

  constructor(private loginService: LoginService,private router:Router) { 
    
  }

  ngOnInit(): void {
  }
  onSubmit() {
    this.loginService.login(this.loginForm.value.username, this.loginForm.value.password).subscribe(
      (data) => {
        this.isConnected = true;
        this.router.navigateByUrl('avion/listPlane');
      }
    );
  }
}
