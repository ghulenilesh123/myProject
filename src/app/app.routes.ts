import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Signup } from './pages/signup/signup';
import { Home } from './home/home';
import { Promises } from './all-advance-topic/promises/promises';

export const routes: Routes = [
   
  
  { path: 'home', component:Home },
  { path: 'signup', component: Signup },
  { path: 'login', component: Login },
  
  {path:"lazyLoading",loadChildren:()=>
    import('../app/lazyLoading/section_1.routes')
    .then((mod)=>mod.section1)
  },
  
  {path:"basic",loadChildren:()=>
    import('../app/all-basic-topic/basic.routes')
    .then((mod)=>mod.basic)
  },

  {path:"form",loadChildren:()=>
    import('../app/all-form/form.routes')
    .then((mod)=>mod.form)
  },

  {path:"advance",loadChildren:()=>
    import('../app/all-advance-topic/advance.routes')
    .then((mod)=>mod.advance)
  },

  {path:"section2",loadChildren:()=>
    import("./home/test.route")
    .then((mod)=>mod.section2)
  },

  // worning msg  dont write here
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
];
