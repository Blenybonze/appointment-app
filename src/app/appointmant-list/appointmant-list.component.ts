import { Component, OnInit } from '@angular/core';
import { Appointment } from '../models/appointment';

@Component({
  selector: 'app-appointmant-list',
  templateUrl: './appointmant-list.component.html',
  styleUrls: ['./appointmant-list.component.css']
})
export class AppointmantListComponent implements OnInit {

  newAppointmentTitle: string = '';
  newAppointmentDate: Date = new Date;

  appointments: Appointment[] = [];

  ngOnInit() {
    this.getAppointment();
  }

  getAppointment() {
    let savedAppointments = localStorage.getItem("appointments");

    this.appointments = savedAppointments ? JSON.parse(savedAppointments) : [];
  }

  addAppointment() {
    if (this.newAppointmentTitle.trim().length && this.newAppointmentDate) {
      let newAppointment: Appointment = {
        id: Date.now(),
        title: this.newAppointmentTitle,
        date: this.newAppointmentDate
      }

      this.appointments.push(newAppointment);


      this.newAppointmentTitle = '';
      this.newAppointmentDate = new Date;

      localStorage.setItem("appointments", JSON.stringify(this.appointments));
    }
  }

  deleteAppointment(index: number) {
    this.appointments.splice(index, 1);

    localStorage.setItem("appointments", JSON.stringify(this.appointments))
  }
}
