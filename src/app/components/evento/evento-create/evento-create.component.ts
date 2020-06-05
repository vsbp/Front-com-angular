import { Component, OnInit } from '@angular/core';
import { EventoService } from '../evento.service';
import { Router } from '@angular/router';
import { Evento } from '../evento.model';

@Component({
  selector: 'app-evento-create',
  templateUrl: './evento-create.component.html',
  styleUrls: ['./evento-create.component.css']
})
export class EventoCreateComponent implements OnInit {

  evento: Evento = {
 
    nomeSolicitante: '',
    descricao: '',
    data: '',
    preco: null,
    limitePessoas: null,
    enderecoEvento: '',
    quantidadeIngresso: null
  }


  constructor(private eventoService: EventoService, private router: Router ) { }

  ngOnInit(): void { }




  createEvento(): void{
    this.eventoService.create(this.evento).subscribe(() => {
       this.eventoService.showMessege('Evento criado com sucesso!')
       this.router.navigate(['/evento'])
    }) 
  }
    
    

   

  cancelarEvento(): void{
    this.router.navigate(['/evento'])
  }
  

}
