import { Component } from '../Core/Component.js';

const renderMarkup = (options) => 
`
    <input 
        type='text' 
        value='${options.value || ''}' 
        ${options.name ? 'name=' + options.name : ''} 
        ${options.placeholder ? 'placeholder=' + options.placeholder : ''}
    />
`

/**
 * Компонент поле для ввода (инпут).
 */
export class Input extends Component {

    constructor (options = {}) {
        super(options, renderMarkup(options));
    }

}