
const orderTemplate = (orders) => { 
    return `    
    <div class="container gutter">
    <div class="box-title">
        <i class="fa fa-home"></i> ${orders.section.title}
    </div>
    <div class="grid grid-size-4">

    ${orders.summary.map( order => `        
        <div class="resume ${order.theme}">
            <div class="title">
                <i class="fa fa-send-o"></i> ${order.title}
            </div>
            <div class="description">${order.description}</div>
            <a href="" class="link">
                <i class="fa fa-plus"></i> Detalhes
            </a>
        </div>        
        
    `)}    

    </div>
</div>`;
}

export default orderTemplate