import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss'],
})
export class ReservationComponent implements OnInit {
  numberOfSeats;
  seats = [];

  constructor() {}

  ngOnInit(): void {
    for (let i = 1; i <= 80; i++) {
      this.seats.push(i);
    }
  }

  handleChange(event) {
    this.numberOfSeats = event.target.value;
  }
}
