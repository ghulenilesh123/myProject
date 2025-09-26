import { Directive } from "./directive/directive";
import { DetaBinding } from "./deta-binding/deta-binding";
import { ServicWithFakeData } from "./servic-with-fake-data/servic-with-fake-data"; 
import { ServicWithJsonsrv } from "./servic-with-jsonsrv/servic-with-jsonsrv"; 
import { ServicWithStaticData } from "./servic-with-static-data/servic-with-static-data"; 
import { Routes } from "@angular/router"
export const basic:  Routes = [
      {path:'directice',component:Directive},
      {path:'data_binding',component:DetaBinding},
      {path:'srv-with-dammy',component:ServicWithFakeData},
      {path:'srv-with-json',component:ServicWithJsonsrv},
      {path:'srv-with-static',component:ServicWithStaticData},

]



