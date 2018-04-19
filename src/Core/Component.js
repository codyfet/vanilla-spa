import { loadView } from '../utils.js';

/**
 * Класс Компонент, который наследуют все пользовательские компоненты.
 */
export class Component {

    constructor (options, markup) {
        this.options = options || {};
        this.markup = markup;
    }

    getOptions = () => {
        return this.options;
    } 

    getMarkup = () => {
        return this.markup;
    }

    redraw = (markup) => {
        this.markup = markup;
    }

}
