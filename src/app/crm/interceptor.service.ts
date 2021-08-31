import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { Injectable } from '@angular/core'
import { GlobalErrorHandlerService } from "../shared/error/service/global-error-handler-service";
import { catchError } from "rxjs/operators";

@Injectable({ providedIn: 'root' })
export class InterceptorService implements HttpInterceptor {
    constructor() { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            catchError(this.manejarError)
        )
    }

    manejarError(error: HttpErrorResponse) {
        console.log('Ocurrio un error')
        console.warn(error)
        return throwError('Error personalizado')
    }
}