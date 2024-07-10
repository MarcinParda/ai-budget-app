import { RouteData } from './types/routes';

type CockpitRoute = 'projects' | 'login';

export const cockpitRoutes: Record<CockpitRoute, RouteData> = {
  projects: {
    pageName: 'Projects',
    path: '/projects',
    url: () => '/',
    breadcrumbs: [{ label: 'Projects', url: '/projects' }],
  },
  login: {
    pageName: 'Login',
    path: '/login',
    url: () => '/login',
    breadcrumbs: [{ label: 'Login', url: '/login' }],
  },
};
