import { Routes } from "@angular/router"
import { Compo1 } from "./compo-1/compo-1"
import { Compo2 } from "./compo-2/compo-2"
import { Compo3 } from "./compo-3/compo-3"
import { Compo4 } from "./compo-4/compo-4"
import { Compo5 } from "./compo-5/compo-5"
import { Compo6 } from "./compo-6/compo-6"

 export let section1 : Routes=[
{path:"compo_1",component:Compo1},
{path:"compo_2",component:Compo2},
{path:"compo_3",component:Compo3},
{path:"compo_4",component:Compo4},
{path:"compo_5",component:Compo5},
{path:"compo_6",component:Compo6},
]