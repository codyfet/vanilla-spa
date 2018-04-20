/**
 * Класс Роутер. Реализует логику навигации в приложении.
 * 
 * Конструктор принимает на вход:
 * @param routes Массив объектов вида {<имя_роута>: <экземпляр класса Component, описывающий страницу>}.
 * @param rootElement Корневой HTML элемент.
 */
export class Router {

    constructor (routes, rootElement) {
        this.routes = routes;
        this.rootElement = rootElement;
        this.hashChanged();
        window.onhashchange = this.hashChanged;
    }

    /**
     * Обработчик события изменения значения хэша в адресной строке.
     */
    hashChanged = () => {     
        const routeName = window.location.hash.length > 0
            ? window.location.hash.substr(1) 
            : 'default';    
        this.navigate(routeName);
    }

    /**
     * Осуществляет переход на другой роут.
     */
    navigate = (routeName) => {
        this.rootElement.innerHTML = this.routes[routeName].getMarkup();
    }

}