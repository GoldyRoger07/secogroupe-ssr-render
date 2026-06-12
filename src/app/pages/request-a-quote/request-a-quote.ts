import { Component, OnInit } from '@angular/core';
import { Navbar } from "../../components/navbar/navbar";
import { Footer } from "../../components/footer/footer";
import { Container } from "../../components/container/container";
import { SelectModule } from 'primeng/select';
import { CheckboxModule } from 'primeng/checkbox';

interface City {
    name: string;
    code: string;
}

@Component({
  selector: 'request-a-quote',
  imports: [Navbar, Footer, Container, SelectModule, CheckboxModule],
  templateUrl: './request-a-quote.html',
  styleUrl: './request-a-quote.css',
})
export default class RequestAQuote implements OnInit{
  cities!: City[];
  pizza: string[] = [];
    selectedCity: City | undefined;

    ngOnInit() {
        this.cities = [
            { name: 'Hospitality Support', code: 'NY' },
            { name: 'Janitorial & Cleaning', code: 'RM' },
            { name: 'Building Maintenance', code: 'LDN' },
            { name: 'Staffing Solutions', code: 'IST' },
            { name: 'Concierge & Security Experts', code: 'PRS' }
        ];
    }
}
