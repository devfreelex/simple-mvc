import Ignis from '../core/Ignis.class.js';


import HeaderComponent from './components/header/header.component.js';
import SidebarComponent from './components/sidebar/sidebar.component.js';
import SummaryOrderComponent from './components/summary-order/summary.order.component.js';
import SummarySupportCompnent from './components/summary-support/summary-support.component.js';
import ProductComponent from './components/produto/product.component.js';


const App = new Ignis();

const dashboardModule = [
    { 
        path:'/details', 
        routeParams:'', 
        components:[
            HeaderComponent,
            SidebarComponent,
            SummaryOrderComponent,
            SummarySupportCompnent
        ] 
    },
    {
        path:'/produtos',
        routeParams:'',
        components:[
            HeaderComponent,
            SidebarComponent,
            ProductComponent
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