import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'landing',
    loadChildren: () =>
      import('./landing/landing.module').then((m) => m.LandingPageModule),
  },
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full',
  },

  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'signup',
    loadChildren: () =>
      import('./signup/signup.module').then((m) => m.SignupPageModule),
  },
  {
    path: 'resert-password',
    loadChildren: () =>
      import('./resert-password/resert-password.module').then(
        (m) => m.ResertPasswordPageModule
      ),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'add-immob',
    loadChildren: () =>
      import('./add-immob/add-immob.module').then((m) => m.AddImmobPageModule),
  },
  {
    path: 'details-immob',
    loadChildren: () =>
      import('./details-immob/details-immob.module').then(
        (m) => m.DetailsImmobPageModule
      ),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./profile/profile.module').then((m) => m.ProfilePageModule),
  },
  {
    path: 'update-immob',
    loadChildren: () =>
      import('./update-immob/update-immob.module').then(
        (m) => m.UpdateImmobPageModule
      ),
  },
  {
    path: 'add-anonce',
    loadChildren: () =>
      import('./crud-with-node/add-anonce/add-anonce.module').then(
        (m) => m.AddAnoncePageModule
      ),
  },

  {
    path: 'update-anonce',
    loadChildren: () =>
      import('./crud-with-node/update-anonce/update-anonce.module').then(
        (m) => m.UpdateAnoncePageModule
      ),
  },

  {
    path: 'delete-anonce',
    loadChildren: () =>
      import('./crud-with-node/delete-anonce/delete-anonce.module').then(
        (m) => m.DeleteAnoncePageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
