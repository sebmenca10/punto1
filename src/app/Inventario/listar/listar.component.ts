import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Inventario } from 'src/app/Modelo/Inventario';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  inventarios:Inventario[] | undefined;
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit() {
    this.service.getInventarios()
      .subscribe(data=>{
        this.inventarios=data;
      })
  }

}
