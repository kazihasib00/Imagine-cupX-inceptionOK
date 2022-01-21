/* eslint-disable react/no-array-index-key */
import React, {
  lazy,
  Suspense,
  Fragment
} from 'react';
import {
  Switch,
  Redirect,
  Route
} from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import LoadingScreen from './components/LoadingScreen';
import AuthGuard from './components/AuthGuard';
import GuestGuard from './components/GuestGuard';

const routesConfig = [
  {
    exact: true,
    path: '/',
    component: () => <Redirect to="/login" />
  },
  {
    exact: true,
    path: '/404',
    component: lazy(() => import('./views/pages/Error404View'))
  },
  {
    exact: true,
    guard: GuestGuard,
    path: '/login',
    component: lazy(() => import('./views/auth/LoginView'))
  },
  {
    exact: true,
    path: '/login-unprotected',
    component: lazy(() => import('./views/auth/LoginView'))
  },
  {
    exact: true,
    guard: GuestGuard,
    path: '/register',
    component: lazy(() => import('./../src/views/auth/RegisterView'))
  },
  {
    exact: true,
    path: '/register-unprotected',
    component: lazy(() => import('./../src/views/auth/RegisterView'))
  },
  {
    path: '/app',
    guard: AuthGuard,
    layout: DashboardLayout,
    routes: [
      {
        exact: true,
        path: '/app',
        component: () => <Redirect to="/app/reports/dashboard" />
      },
      {
        exact: true,
        path: '/app/account',
        component: lazy(() => import('./views/pages/AccountView'))
      },
      {
        exact: true,
        path: '/app/reports/dashboard',
        component: lazy(() => import('./views/reports/DashboardView'))
      },
      {
        exact: true,
        path: '/app/reports',
        component: () => <Redirect to="/app/reports/dashboard" />
      },
      {
        exact: true,
        path: '/app/management/users',
        component: lazy(() => import('./views/management/UserListView'))
      },
      {
        exact: true,
        path: '/app/management/users/:id',
        component: lazy(() => import('./views/management/UserDetailsView'))
      },
      {
        exact: true,
        path: '/app/management/users/:id/edit',
        component: lazy(() => import('./views/management/UserEditView'))
      },
      {
        exact:true,
        path:'/app/management/agents',
        component:lazy(()=>import('./views/management/AgentListView'))
      },
      {
        component: () => <Redirect to="/404" />
      }
    ]
  },
];

const renderRoutes = (routes) => (routes ? (
  <Suspense fallback={<LoadingScreen />}>
    <Switch>
      {routes.map((route, i) => {
        const Guard = route.guard || Fragment;
        const Layout = route.layout || Fragment;
        const Component = route.component;

        return (
          <Route
            key={i}
            path={route.path}
            exact={route.exact}
            render={(props) => (
              <Guard>
                <Layout>
                  {route.routes
                    ? renderRoutes(route.routes)
                    : <Component {...props} />}
                </Layout>
              </Guard>
            )}
          />
        );
      })}
    </Switch>
  </Suspense>
) : null);

function Routes() {
  return renderRoutes(routesConfig);
}

export default Routes;
