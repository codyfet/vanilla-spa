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

    /**
     * Перерисовывает представление компонента.
     */
    redraw = (markup) => {
        this.markup = markup;
    }

}
