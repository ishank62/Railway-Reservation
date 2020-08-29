import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
let GPD_API_URL = `${environment.API_URL}/api`;

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  constructor(private http: HttpClient) {}

  public getSeats() {
    return this.http.get('reservation/reserved-seats').pipe();
  }

  public reserveSeats(reqBody) {
    return this.http.post('reservation//reserve-seats', reqBody).pipe();
  }
  //   passengerId: {
  //     type: mongoose.Schema.Types.ObjectId,
  //     required: true
  // },
  // seatNumber: {
  //     type: Number,
  //     required: true
  // }

  public deleteAllReservations() {
    return this.http.delete('reservation/delete-all-reservations').pipe();
  }
}
