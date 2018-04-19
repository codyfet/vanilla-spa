import { Component } from '../Core/Component.js';
import { Button } from '../Common/Button.js';
import { Input } from '../Common/Input.js';

const renderMarkup = (options) => 
`
    <form class='login-form'>
        <label>Форма логина</label>
        ${
            new Input({
                name: 'login', 
                value: options.password
            }).getMarkup()
        }
        ${
            new Input({
                name: 'password', 
                value: options.password
            }).getMarkup()
        }
        ${
            new Button({
                text: 'Отправить'
            }).getMarkup()
        }
        <a href='/#profile'>На страницу профиля</a>
    </form>
`

export class LoginPage extends Component {

    constructor(options) {
        super(options, renderMarkup(options || {}));
    }

}