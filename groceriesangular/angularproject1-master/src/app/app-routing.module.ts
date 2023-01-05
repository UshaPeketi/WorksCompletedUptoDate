import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomsComponent } from './rooms/rooms.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'rooms',component:RoomsComponent},
  {path:'signup',component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[
  RoomsComponent,SignupComponent
]