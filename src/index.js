import { Router } from './router.js';
import { Component } from './Core/Component.js';
import { LoginPage } from './Business/LoginPage.js';
import { ProfilePage } from './Business/ProfilePage.js';

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
