import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable, Injector, NgZone } from '@angular/core'
import { Router } from '@angular/router'

@Injectable()
export class GlobalErrorHandlerService implements ErrorHandler {

    tipoError: number

    constructor(private injector: Injector, private zone: NgZone, private router: Router) { }

    handleError(error: any) {

        const router = this.injector.get(Router);
        console.log(`Rquest URL: ${router.url}`);

        if (error instanceof HttpErrorResponse) {
            console.log('Backend returned status code: ', error.status);
            console.log('Response body: ', error.message);
            this.tipoError = error.status
        } else {
            console.log('An error occurred: ', error.status);
        }

        this.zone.run(() => {
            this.router.navigate(['/error']);
        });
    }
}