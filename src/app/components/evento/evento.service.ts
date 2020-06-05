import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Evento } from './evento.model';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class EventoService {


  constructor(private snackBar: MatSnackBar, private http: HttpClient) {
   }
   showMessege(msg: string): void{
     this.snackBar.open(msg, 'X', {
        duration: 3000,
        horizontalPosition: "right",
        verticalPosition: "top"
     })
   }

   

  create(evento: Evento): Observable<Evento>{
    const url = `${environment.eventosApiUrl}/eventos`;
    return this.http.post<Evento>(url, evento);
  }

  read(): Observable<Evento[]>{
    const url = `${environment.eventosApiUrl}/eventos`;
    return this.http.get<Evento[]>(url)
  }

  update(evento: Evento): Observable<Evento>{
    const url = `${environment.eventosApiUrl}/eventos`;
    return this.http.put<Evento>(url, evento);
  }

  




}
