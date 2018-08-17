import Ignis from '../core/Ignis.class.js';


import HeaderComponent from './components/header/header.component.js';
import SidebarComponent from './components/sidebar/sidebar.component.js';
import SummaryOrderComponent from './components/summary-order/summary.order.component.js';


const App = new Ignis();

const dashboardModule = [
    { 
        path:'/details', 
        routeParams:'', 
        components:[
            HeaderComponent,
            SidebarComponent,
            SummaryOrderComponent
        ] 
    },
    {
        path:'/produtos',
        routeParams:'',
        components:[
            HeaderComponent,
            SidebarComponent
        ]
    }
]

App.configModules([
    {path: '/dashboard', config: dashboardModule}
])

App.configRouter({
    element: '.content'
})

App.init()