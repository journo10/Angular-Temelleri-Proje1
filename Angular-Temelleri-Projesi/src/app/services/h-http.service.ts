import { HttpClient,} from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HHttpService {
connectionApi=environment.api.nestjs.role + '/role'; //api environment kısmında unutma.

  constructor(private http:HttpClient) { }

  getAllRoles(){
    return this.http.get<any>(this.connectionApi);
  }

  addRole(role:any){
    return this.http.post<any>(this.connectionApi,role);
  }

  editRole(role:any){
    return this.http.put<any>(this.connectionApi+ `/${role.id}` ,role)
  }

  deleteRole(role:any){
    return this.http.delete<any>(this.connectionApi + `/${role.id}`,role)
  }


}
