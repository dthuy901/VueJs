import inbox from './components/spa/inbox'
import important from './components/spa/important'
import mail1 from './components/spa/mail1'
import mail2 from './components/spa/mail2'

const routes = [
  { 
    path: '/inbox', 
    component: inbox, 
    name: 'inbox',
    children: [
      {path: '/inbox/mail1', component: mail1, name: 'mail1'},
      {path: '/inbox/mail2', component: mail2, name: 'mail2'},
    ] },
  { path: '/important', component: important, name: 'important' }
]
//them export nay
export default routes