import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'heroes' },
    {
      path: 'heroes',
      loadChildren: () =>
        import('../heroes/heroes.module').then(m => m.HeroesModule)
    },
    {
      path: 'villains',
      loadChildren: () =>
        import('../villains/villains.module').then(m => m.VillainsModule)
    }
];