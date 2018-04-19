import { Component } from '../Core/Component.js';

const renderMarkup = (data) => 
`
    <input type='text' value='${data.value || ''}' name='${data.name}' />
`

export class Input extends Component {

    constructor (options) {
        super(options, renderMarkup(options || {}));
    }

}