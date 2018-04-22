import { Router } from './Core/Router.js';
import { Component } from './Core/Component.js';
import { LoginPage } from './Business/LoginPage.js';
import { ProfilePage } from './Business/ProfilePage.js';

import './Styles/styles.css';

/**
 * Создаём экземпляр роутера.
 */
const router = new Router(
    {        
        login: new LoginPage(),
        profile: new ProfilePage(),
        default: new LoginPage()
    },
    document.getElementById('main')
);
