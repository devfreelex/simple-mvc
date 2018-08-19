
const orderTemplate = (orders) => { 
    return /*html*/`    
    <div class="container gutter">
        <div class="box-title">
            <i class="fa fa-home"></i> ${orders.section.title}
        </div>
        <div class="grid grid-size-4">
            
            ${orders.summary.map(order => {
                return /*html*/`
                <div class="resume">
                    <div class="title">
                        <i class="fa fa-send-o"></i> ${order.title}
                    </div>
                    <div class="description">${order.description}</div>
                    <a href="" class="link">
                        <i class="fa fa-plus"></i> Detalhes
                    </a>
                </div> 
                `
            }).join('')}   

        </div>
    </div>`;
}

export default orderTemplate