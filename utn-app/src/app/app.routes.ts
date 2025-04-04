import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./page/home/home.component";
import { CharatersComponent } from "./page/charaters/charaters.component"; 
import { ContactComponent } from "./page/contact/contact.component";




export const routes: Routes =[
    {path: "",component:HomeComponent},
    {path:"characters",component:CharatersComponent},
    {path:"contact",component:ContactComponent},
];