import Ignis from '../core/Ignis.class.js';


import SummaryOrderComponent from './components/summary-order/summary.order.component.js'


const App = new Ignis();

const dashboardModule = [
    { 
        path:'/details', 
        routeParams:'', 
        components:[
            SummaryOrderComponent
        ] 
    },
    {
        path:'/produtos',
        routeParams:'',
        components:[
        ]
    }
]

App.configModules([
    {path: '/dashboard', config: dashboardModule}
])

App.init()