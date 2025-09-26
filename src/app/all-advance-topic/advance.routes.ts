import { Promises } from "./promises/promises";
import { Observable } from "./observable/observable/observable";
import { RxjsUnicast } from "./observable/rxjs-unicast/rxjs-unicast"; 
import { TxjsMulticast } from "./observable/txjs-multicast/txjs-multicast";
import { Routes } from "@angular/router";

export const advance :Routes=[
    {path:"promise",component:Promises},
    {path:"observable",component:Observable},
    {path:"rxjs-unicast",component:RxjsUnicast},
    {path:"rxjs-multicast",component:TxjsMulticast},
]

