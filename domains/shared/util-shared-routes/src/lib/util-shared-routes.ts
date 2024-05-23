interface Breadcrumb {
  label: string;
  url: string;
}

interface RouteData {
  pageName: string;
  path: string;
  url: () => string;
  breadcrumbs: Breadcrumb[];
}

type Route =
  | 'dashboard'
  | 'addTransactions'
  | 'planTransactions'
  | 'categories'
  | 'currentAssets'
  | 'addNewLink';

export const routes: Record<Route, RouteData> = {
  dashboard: {
    pageName: 'Dashboard',
    path: '/dashboard',
    url: () => '/dashboard',
    breadcrumbs: [{ label: 'Dashboard', url: '/dashboard' }],
  },
  addTransactions: {
    pageName: 'Add transactions',
    path: '/add-transactions',
    url: () => '/add-transactions',
    breadcrumbs: [{ label: 'Add transactions', url: '/add-transactions' }],
  },
  planTransactions: {
    pageName: 'Plan transactions',
    path: '/plan-transactions',
    url: () => '/plan-transactions',
    breadcrumbs: [{ label: 'Plan transactions', url: '/plan-transactions' }],
  },
  categories: {
    pageName: 'Categories',
    path: '/categories',
    url: () => '/categories',
    breadcrumbs: [{ label: 'Categories', url: '/categories' }],
  },
  currentAssets: {
    pageName: 'Current assets',
    path: '/current-assets',
    url: () => '/current-assets',
    breadcrumbs: [{ label: 'Current assets', url: '/current-assets' }],
  },
  addNewLink: {
    pageName: 'Add new link',
    path: '/add-new-link',
    url: () => '/add-new-link',
    breadcrumbs: [{ label: 'Add new link', url: '/add-new-link' }],
  },
};
