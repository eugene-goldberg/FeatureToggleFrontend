import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Issue} from '../models/issue';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';

@Injectable()
export class DataService {
  // This will point to a stand-alone Spring Boot REST endpoint
 private readonly API_URL = 'http://localhost:8090/example/v1/hotels/';

  dataChange: BehaviorSubject<Issue[]> = new BehaviorSubject<Issue[]>([]);
  // Almaceno temporalmente los datos del dialogo
  dialogData: any;

  // constructor (private httpClient: HttpClient, private _http: Http) {}

  constructor (private _http: Http) {}

  get data(): Issue[] {
    return this.dataChange.value;
  }

  getDialogData() {
    return this.dialogData;
  }

  /** CRUD METHODS */
  getAllIssues(): any {
    // this.httpClient.get<Issue[]>(this.API_URL).subscribe(data => {
    //     this.dataChange.next(data);
    //   },
    //   (error: HttpErrorResponse) => {
    //   console.log (error.name + ' ' + error.message);
    //   });
  }

  getTest() {
    return this._http.get('http://localhost:8090/example/v1/hotels')
       .map((res: Response) => res.json());
}

  // solo para demo, el API usado no admite modificaciones salvo que seamos desarrolldores de angular,
  // por lo que los metodos no hacen nada
  addIssue (issue: Issue): void {
    this.dialogData = issue;
  }

  updateIssue (issue: Issue): void {
    this.dialogData = issue;
  }

  deleteIssue (id: number): void {
    console.log(id);
  }
}



/* EJEMPLOS de metodos CRUD reales, atencion, los tipos no corresponden con los utilizados más arriba:

    // Create de [C]rud: ADD, POST METHOD
    addItem(kanbanItem: KanbanItem): void {
    this.httpClient.post(this.API_URL, kanbanItem).subscribe(data => {
      this.dialogData = kanbanItem;
      this.toasterService.showToaster('Añadido con éxito', 3000);
      },
      (err: HttpErrorResponse) => {
      this.toasterService.showToaster('Ha ocurrido un error. Los detalles: ' + err.name + ' ' + err.message, 8000);
    });
   }

    // Update de cr[U]d UPDATE, PUT METHOD
    updateItem(kanbanItem: KanbanItem): void {
      this.httpClient.put(this.API_URL + kanbanItem.id, kanbanItem).subscribe(data => {
        this.dialogData = kanbanItem;
        this.toasterService.showToaster('Modificado con éxito', 3000);
      },
      (err: HttpErrorResponse) => {
        this.toasterService.showToaster('Ha ocurrido un error. Los detalles: ' + err.name + ' ' + err.message, 8000);
      }
    );
  }

  // Delete de cru[D] DELETE METHOD
  deleteItem(id: number): void {
    this.httpClient.delete(this.API_URL + id).subscribe(data => {
      console.log(data['']);
        this.toasterService.showToaster('Eliminado con éxito', 3000);
      },
      (err: HttpErrorResponse) => {
        this.toasterService.showToaster('Ha ocurrido un error. Los detalles: ' + err.name + ' ' + err.message, 8000);
      }
    );
  }
*/