/**
 * Класс Компонент, который наследуют все пользовательские компоненты.
 * 
 * Конструктор принимает на вход:
 * @param options Объект с опциями/данными компонета.
 * @param markup Разметка компонента.
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
