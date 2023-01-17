import {throwError} from "rxjs";

export const handleError = (error: any)=> {
  return throwError(() => new Error('Something bad happened; please try again later.'));
}