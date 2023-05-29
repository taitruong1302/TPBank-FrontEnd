import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Operator } from '../model/Operator';

@Injectable({
  providedIn: 'root'
})
export class ManagerServiceService {
  url = "http://localhost:9090/tpbank/manager"
  listOperatorUrl = "listAllOperator"
  createOperatorUrl = "create-operator"
  editOperatorUrl = "edit-operator"
  loginUrl = "login"
  deleteUrl = "delete-operator"
  constructor(private http: HttpClient) { }

  getAllOperator(): Observable<Array<Operator>> {
    return this.http.get<Array<Operator>>(`${this.url}/${this.listOperatorUrl}`)
  }

  saveOperator(operPhone: string, operAddress: string, email: string, operName: string, operatorStatus: string, userName: string, userPass: string, departmentId: number): Observable<string> {
    return this.http.post(`${this.url}/${this.createOperatorUrl}`, {
      "operPhone": operPhone,
      "operAddress": operAddress,
      "email": email,
      "operName": operName,
      "operatorStatus": operatorStatus,
      "user": {
        "userName": userName,
        "userPass": userPass
      },
      "department": {
        "departmentId": departmentId
      }
    }, { responseType: 'text' })
  }

  editOperator(operPhone: string, operAddress: string, email: string, operName: string, operatorStatus: string, userName: string, userPass: string, departmentId: number): Observable<string> {
    return this.http.post(`${this.url}/${this.editOperatorUrl}`, {
      "operPhone": operPhone,
      "operAddress": operAddress,
      "email": email,
      "operName": operName,
      "operatorStatus": operatorStatus,
      "user": {
        "userName": userName,
        "userPass": userPass
      },
      "department": {
        "departmentId": departmentId
      }
    }, { responseType: 'text' })
  }

  login(username: string, password: string): Observable<string> {
    return this.http.post(`${this.url}/${this.loginUrl}`, {
      "userName": username,
      "userPass": password
    }, { responseType: 'text' })
  }

  deleteOperator(username: string): Observable<string> {
    return this.http.delete(`${this.url}/${this.deleteUrl}/${username}`, { responseType: 'text' })
  }
}
