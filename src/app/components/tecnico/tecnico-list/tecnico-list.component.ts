import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Tecnico } from 'src/app/models/tecnico';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-tecnico-list',
  templateUrl: './tecnico-list.component.html',
  styleUrls: ['./tecnico-list.component.css']
})

export class TecnicoListComponent implements OnInit, AfterViewInit {

  ELEMENT_DATA: Array<Tecnico> = [
    { id: 1, nome: 'Bruno', cpf: '050550505050', email: 'teste@gmail.com', senha: '1q2w3e4r', perfis: ['0'], dataCriacao: '31/08/2024' }
  ]

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'acoes'];
  dataSource = new MatTableDataSource<Tecnico>(this.ELEMENT_DATA);

  constructor(private authService: AuthService) { }

  rua: string = ''

  ngOnInit(): void {
    this.authService.getCep().subscribe(reponse => {
      this.rua = reponse["logradouro"]

    }, () => {
      console.log("Erro aqui")
    })
  }


  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


}
