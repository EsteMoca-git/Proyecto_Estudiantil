import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./components/header/header";
import { Form } from './pages/form/form';
import { Basico } from "./pages/basico/basico";
import { Intermedio } from './pages/intermedio/intermedio';
import { Footer } from "./components/footer/footer";



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Form, Basico, Intermedio, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Aprende_Ingles');
}
