import React from 'react';

const Menu = () => {
    return (
        <header className="mdl-layout__header">
        <div className="mdl-layout__header-row">
            <span className="mdl-layout-title">Todo List</span>
            <div className="mdl-layout-spacer"></div>
            <nav className="mdl-navigation mdl-layout--large-screen-only">
            <a className="mdl-navigation__link" href="#/todos">Minhas Tarefas</a>
            <a className="mdl-navigation__link" href="#/about">Sobre</a>
            </nav>
        </div>
        </header>
    );
};

export default Menu;