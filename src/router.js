export class Router {

    constructor (routes) {
        this.routes = routes;
        this.hashChanged();
        window.onhashchange = this.hashChanged;
    }

    hashChanged = (event) => {
        if (window.location.hash.length > 0) {
            const routeName = window.location.hash.substr(1);
            this.navigate(routeName);
        } else if (this.routes['login']) {
            this.navigate('login');
        }
    }

    navigate = (routeName) => {
        document.getElementById('main').innerHTML = this.routes[routeName].getMarkup();
    }

}