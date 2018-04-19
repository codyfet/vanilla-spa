/**
 * Класс Роутер. Реализует логику навигации в приложении.
 */
export class Router {

    constructor (routes) {
        this.routes = routes;
        this.hashChanged();
        window.onhashchange = this.hashChanged;
    }

    /**
     * Обработчик события изменения значения в адресной строке.
     */
    hashChanged = (event) => {
        if (window.location.hash.length > 0) {
            const routeName = window.location.hash.substr(1);
            this.navigate(routeName);
        } else if (this.routes['login']) {
            this.navigate('login');
        }
    }

    /**
     * Осуществляет переход на другой роут.
     */
    navigate = (routeName) => {
        document.getElementById('main').innerHTML = this.routes[routeName].getMarkup();
    }

}