const productTemplate = (products) => /*html*/`
<div class="container gutter">
    <div class="box-title">
        <i class="fa fa-circle-o"></i> Produtos cadastrados
    </div>
    <div class="grid grid-size-4">
        ${
            products.map(product => {
                return /*html*/`

                <div class="product">
            <div class="box-img">
                <img src="./src/assets/images/default-2.jpg">
                <div class="title">${product.title}</div>
                <div class="data-group">
                    <ul class="tags">
                        <li class="tag-item">tag 1</li>
                        <li class="tag-item">tag 2</li>
                        <li class="tag-item">tag 3</li>
                    </ul>
                    <ul class="categories">
                        <li class="category-item">category 1</li>
                        <li class="category-item">category 2</li>
                        <li class="category-item">category 3</li>
                    </ul>
                </div>
                <div class="price">
                    <div class="price-item">
                        de
                        <span class="price-origin">R$ 157,80</span>
                    </div>
                    <div class="price-item">
                        por
                        <span class="price-finaly">R$ 157,80</span>
                    </div>
                </div>
            </div>
            <div class="description">${product.description}</div>
            <a href="#/" class="link">
                <i class="fa fa-plus"></i> Detalhes
            </a>
        </div>
                
                `
            }).join('')
        }
    </div>
</div>
`;

export default productTemplate;