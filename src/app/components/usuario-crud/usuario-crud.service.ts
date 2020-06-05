import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Usuario } from './usuario-crud.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioCrudService {

  baseUrl =  'http://localhost:3000';

  getConfig() {
    return this.http.get(this.baseUrl);
  }
  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessege(msg: string): void{
    this.snackBar.open(msg, 'X', {
       duration: 3000,
       horizontalPosition: "right",
       verticalPosition: "top"
    })
  }

  create(usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>(this.baseUrl, usuario)
  }
}
