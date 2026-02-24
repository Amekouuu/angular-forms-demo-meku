import { Routes } from '@angular/router';
import { TemplateDemo } from './pages/template-demo/template-demo';
import { ReactiveDemo } from './pages/reactive-demo/reactive-demo';

export const routes: Routes = [
  { path: '', redirectTo: 'template-demo', pathMatch: 'full' },
  { path: 'template-demo', component: TemplateDemo },
  { path: 'reactive-demo', component: ReactiveDemo },
  { path: '**', redirectTo: 'template-demo' },
];
