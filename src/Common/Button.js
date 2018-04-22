import { Component } from '../Core/Component.js';

const renderMarkup = (options) => 
`
    <button ${options.id ? 'id=' + options.id : ''}>${options.text || ''}</button>
`

/**
 * Компонент Кнопка.
 */
export class Button extends Component {

    constructor (options = {}) {
        super(options, renderMarkup(options));
    }

}