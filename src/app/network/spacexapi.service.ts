import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { IMission } from "../models/mission"
import { IRocket } from "../models/rocket"


@Injectable({
  providedIn: 'root'
})
export class SpacexapiService {
  private missionUrl = "https://api.spacexdata.com/v3/launches"
  
  public getMissions(): Observable<IMission[]> {
    return this.http.get<IMission[]>(this.missionUrl)
      .pipe(
        tap(_ => console.log(_)),
        catchError(this.handleError<IMission[]>('getMissions', []))
      );
  }
  // public getRocket(mish): Observable<IRocket[]> {
  //   return this.http.get<IRocket[]>(this.getMishInfoUrls(mish)[1])
  //     .pipe(
  //       tap(_ => console.log('fetched IRocket')),
  //       catchError(this.handleError<IRocket[]>('getRocket', []))
  //     );
  // }
  
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };



  }

  constructor(private http: HttpClient) { }
}
