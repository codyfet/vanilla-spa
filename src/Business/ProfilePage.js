import { Component } from '../Core/Component.js';
import { Button } from '../Common/Button.js';
import { Input } from '../Common/Input.js';

const renderMarkup = (options) => 
`
    <div>Это страница моего профиля</div>
    <a href='/#login'>На страницу логина</a>
`

export class ProfilePage extends Component {

    constructor(options) {
        super(options, renderMarkup(options || {}));
    }

}