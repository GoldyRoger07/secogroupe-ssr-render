import { Component } from '@angular/core';
import { Navbar } from '../../components/navbar/navbar';
import { Footer } from '../../components/footer/footer';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [Navbar, Footer, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export default class Contact {

}
