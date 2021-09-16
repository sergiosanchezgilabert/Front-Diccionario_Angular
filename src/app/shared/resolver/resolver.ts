import { Injectable } from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot, Resolve, Router } from "@angular/router";
import { EMPTY, Observable, of } from "rxjs";
import { catchError, delay } from "rxjs/operators";
import { EspanolService } from "src/app/crm/espanol/infrastructure/service/espanol-service";
import Swal from "sweetalert2";

@Injectable({
    providedIn: 'root' //no tengo que incluirlo en app module
})

export class AplicacionResolver implements Resolve<Observable<any>> {

    constructor() {}
    resolve(route: ActivatedRouteSnapshot) {

        const myObservable = of(1, 2, 3);

        return myObservable.pipe(
            delay(3000),
            catchError((error: any) => {
 
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Los datos no han podido ser cargados!',
                  })                
                return EMPTY;
            })
        )
        
    }

}