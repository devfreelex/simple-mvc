const supportTemplate = (model) => /*html*/`


<div class="container gutter-no-top">
    <div class="box-title">
        <i class="fa fa-cube"></i> ${model.title}
    </div>
    <div class="grid grid-size-3">
        ${model.tickets.map(ticket => {
            return /*html*/`
            <div class="resume theme-blue">
                <div class="title">
                    <i class="fa fa-check"></i> ${ticket.title}
                </div>
                <div class="description">
                    <i class="fa fa-check"></i>
                    ${ticket.description}
                </div>
                <a href="" class="link">
                    <i class="fa fa-plus"></i> Detalhes
                </a>
            </div>
            `;
        }).join('')}

        
    </div>
</div>

`

export default supportTemplate