import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class Categoria {
  constructor(
    public codigo: number,
    public nome: string
  ) { }
}

export class Employee {
  constructor(
    public empId: string,
    public name: string,
    public designation: string,
    public salary: string,
  ) { }
}

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  
  private readonly url = environment.api;
  constructor(
    private httpClient: HttpClient
  ) {
  }



  getEmployees() {
    /*
    let username = 'javainuse';
    let password = 'password';
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    */
    console.log(sessionStorage.getItem('token'));



    var headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': sessionStorage.getItem('token')
    });

    return this.httpClient.get<Categoria[]>(this.url + '/pessoas', { headers });
  }

  public deletePessoa(employee) {
    let username = 'javainuse'
    let password = 'password'

    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.httpClient.delete<Employee>("http://localhost:8080/employees" + "/" + employee.empId, { headers });
  }

  public createPessoa(employee) {
    let username = 'javainuse'
    let password = 'password'

    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.httpClient.post<Employee>("http://localhost:8080/employees", employee, { headers });
  }
}