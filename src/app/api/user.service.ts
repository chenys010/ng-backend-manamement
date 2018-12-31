import { Injectable } from "@angular/core";
import { Observable, of, throwError } from "rxjs";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
  HttpParams
} from "@angular/common/http";
import { catchError, tap, map, take } from "rxjs/operators";

import { ILoginRequest, ILoginResponse } from "../user/store/models/user";
import {
  IGetPayMethodListRequest,
  IGetPayTypeListRequest,
  IAddPayMethodRequest,
  IUpdatePayMethodRequest,
  IDeletePayMethodRequest,
  IGetPayMethodByIdRequest,
  ISortPayMethodRequest
} from "../user/store/models/pay-method";

const httpOptions: any = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};
const baseUrl = "http://10.0.0.212:8080/";

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(private _http: HttpClient) {}

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error("An error occurred:", error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    return throwError("Something bad happened; please try again later.");
  }

  login(req: ILoginRequest): Observable<any> {
    const url = `${baseUrl}/backend/adminLogin`;
    return this._http
      .post(url, req, httpOptions)
      .pipe(catchError(this.handleError));
  }
}
