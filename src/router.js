/**
 * Класс Роутер. Реализует логику навигации в приложении.
 */
export class Router {

    constructor (routes, rootElement) {
        this.routes = routes;
        this.rootElement = rootElement;
        this.hashChanged();
        window.onhashchange = this.hashChanged;
    }

    /**
     * Обработчик события изменения значения в адресной строке.
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