const sidebarTemplate = () => `

<div class="sidebar">
        <div class="grid grid-size-1">
            <div class="user">
                <div class="user-skin">
                    <img src="./src/assets/images/user.png" alt="">
                </div>
                <div class="user-name"> Rodrigo Rocha</div>
                <a href="#/" class="user-link">
                    <i class="fa fa-pencil"></i> Editar Perfil
                </a>
            </div>
        </div>
        <div class="grid grid-size-1">
            <ul class="sidebar-list">
                <li class="item">
                    <a href="#/dashboard/details" class="link">
                        <i class="fa fa-circle"></i>Início</a>
                </li>
                <li class="item">
                    <a href="#/dashboard/produtos" class="link  active">
                        <i class="fa fa-circle"></i>Produtos</a>
                </li>
                <li class="item">
                    <a href="" class="link">
                        <i class="fa fa-circle"></i>Categorias</a>
                </li>
                <li class="item">
                    <a href="" class="link">
                        <i class="fa fa-circle"></i>Perfil</a>
                </li>
            </ul>
        </div>
    </div>

`;

export default sidebarTemplate