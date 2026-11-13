import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

interface MenuItem {
  label: string;
  description: string;
  route: string;
  icon: string;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('kronos');
  protected readonly menuItems: MenuItem[] = [
    {
      label: 'Usuarios',
      description: 'Gestiona los usuarios del sistema',
      route: '/usuarios',
      icon: 'users'
    },
    {
      label: 'Programas',
      description: 'Administra la oferta académica',
      route: '/programas',
      icon: 'book'
    },
    {
      label: 'Fichas',
      description: 'Consulta y organiza tus fichas',
      route: '/fichas',
      icon: 'clipboard'
    },
    {
      label: 'Disponibilidad',
      description: 'Revisa espacios y horarios',
      route: '/disponibilidad',
      icon: 'calendar'
    },
    {
      label: 'Programación',
      description: 'Planifica la operación académica',
      route: '/programacion',
      icon: 'clock'
    },
    {
      label: 'Reportes',
      description: 'Visualiza información y resultados',
      route: '/reportes',
      icon: 'chart'
    },
    {
      label: 'Complementarias',
      description: 'Accede a herramientas adicionales',
      route: '/complementarias',
      icon: 'grid'
    }
  ];
}
