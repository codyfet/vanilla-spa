import { Component } from '../Core/Component.js';
import { Button } from '../Common/Button.js';
import { Input } from '../Common/Input.js';

const renderMarkup = (options) =>
`
    <div class='login-form-wrapper'>
        <div class='login-form'>
            ${
                new Input({
                    name: 'username', 
                    placeholder: "username",
                    value: options.username
                }).getMarkup()
            }
            ${
                new Input({
                    name: 'password', 
                    placeholder: "password",
                    value: options.password
                }).getMarkup()
            }
            ${
                new Button({
                    text: 'Login',
                    id: 'login'
                }).getMarkup()
            }
        </div>
    </div>
`

/**
 * Страница ввода логина.
 */
export class LoginPage extends Component {

    constructor(options = {}) {
        super(options, renderMarkup(options));

        // Пример добавления обработчика события нажатие на кнопку "Login".
        this.element.querySelector('#login').addEventListener('click', this.handleLoginButtonClick)
    }

    handleLoginButtonClick = () => {
        window.location.hash = '#profile';
    }

}