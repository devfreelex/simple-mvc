import Ignis from '../core/Ignis.class.js';

import DashboardComponent from './components/dashboard/dashboard.component.js'
import HeaderComponent from './components/header/header.component.js'
import SidebarComponent from './components/sidebar/sidebar.component.js'
import SummaryStoreComponent from './components/summary-store/summary.store.component.js'
import SummaryOrderComponent from './components/summary-order/summary.order.component.js'
import SummarySupportComponent from './components/summary-support/summary.support.component.js'
import SummaryBlogComponent from './components/summary-blog/summary.blog.component.js'
import ProdutoComponent from './components/produto/produto.component.js'

const App = new Ignis();

const dashboardModule = [
    { 
        path:'/details', 
        routeParams:'', 
        components:[
            HeaderComponent,
            SidebarComponent,
            DashboardComponent,
            SummaryOrderComponent,
            SummarySupportComponent,
            SummaryStoreComponent,
            SummaryBlogComponent
        ] 
    },
    {
        path:'/produtos',
        routeParams:'',
        components:[
            HeaderComponent,
            SidebarComponent,
            DashboardComponent,
            ProdutoComponent
        ]
    }
]

App.configModules([
    {path: '/dashboard', config: dashboardModule}
])

App.init()