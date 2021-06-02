import { Component, OnInit } from '@angular/core';
import { HttpClientService, Employee, Categoria } from '../service/httpclient.service';

@Component({
  selector: 'app-employee',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent implements OnInit {

  categorias: Categoria[];
    
   
  constructor(
    private httpClientService:HttpClientService
  ) { }

  ngOnInit() {
     this.httpClientService.getEmployees().subscribe(
      response =>this.handleSuccessfulResponse(response),
     );
  }

handleSuccessfulResponse(response)
{
    this.categorias=response;
}

deleteEmployee(categoria: Categoria): void {
   this.httpClientService.deletePessoa(categoria)
     .subscribe( data => {
      this.categorias = this.categorias.filter(u => u !== categoria);
   })
};


}