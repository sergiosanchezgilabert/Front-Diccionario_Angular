import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { Injectable } from '@angular/core'
import { catchError } from "rxjs/operators";
import Swal from "sweetalert2";

@Injectable({ providedIn: 'root' })
export class InterceptorService implements HttpInterceptor {
    constructor() { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            catchError(this.manejarError)
        )
    }

    manejarError(error: HttpErrorResponse) {

        if (error.status === 406 && error.url==='http://localhost:8080/ingles/') {
            Swal.fire({
                title: '<strong>Is neccesary to insert the Spanish word!</strong>',
                icon: 'info',
                html:
                    'You can insert, ' +
                    '<a href="//localhost:4200/espanol"><b>here</b></a> ',
                showCloseButton: true,
                showCancelButton: true,
                focusConfirm: false,
                confirmButtonText:
                    '<i class="fa fa-thumbs-up"></i> Fantastic!',
                confirmButtonAriaLabel: 'Thumbs up, great!',
                cancelButtonText:
                    '<i class="fa fa-thumbs-down"> Cancel</i>'
            })
        }

        console.log('Ocurrio un error')
        console.warn(error)
       // return throwError(error) ESTO MANDA AL SUBSCRIBE QUE COGE EL ERROR Y ALLI LO GESTIONAS PARA EVITAR QUE HAGA COSAS  RARAS
        return throwError(error)
    }
}