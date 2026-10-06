import { Component } from '@angular/core';
import { Container } from '../../components/container/container';
import { MultiStepForm } from '../../components/multi-step-form/multi-step-form';

@Component({
  selector: 'app-signup',
  imports: [Container, MultiStepForm],
  templateUrl: './signup.html',
  styleUrl: './signup.css',
})
export default class Signup {

}
