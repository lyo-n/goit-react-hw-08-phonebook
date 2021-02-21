import { lazy } from 'react';

export default [
  {
    path: '/login',
    label: 'Login',
    exact: true,
    component: lazy(() => import('./components/login/login')),
    private: false,
    restricted: true,
  },
  {
    path: '/register',
    label: 'Register',
    exact: true,
    component: lazy(() => import('./components/registration/register')),
    private: false,
    restricted: true,
  },
  {
    path: '/contacts',
    label: 'Contacts',
    exact: true,
    component: lazy(() => import('./components/contactRender/contactRender')),
    private: true,
    restricted: false,
  },
];