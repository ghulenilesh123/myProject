import { TemplateBinding } from "@angular/compiler";
import { ReactiveForm } from "./reactive-form/reactive-form";
import { Routes } from "@angular/router";
import { TempalateDrivenForm } from "./tempalate-driven-form/tempalate-driven-form";
import { ReactiveValidations } from "./reactive-validations/reactive-validations";
import { TempleteDValidations } from "./templete-d-validations/templete-d-validations";

export const form :Routes=[
    {path:"template",component:TempalateDrivenForm},
    {path:"reactive",component:ReactiveForm},
    {path:"R_validations",component:ReactiveValidations},
    {path:"T_validations",component:TempleteDValidations}
]