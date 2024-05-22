export const routes = {
  dashboard: {
    pageName: 'Dashboard',
    path: '/dashboard',
    url: () => '/dashboard',
  },
  addTransactions: {
    pageName: 'Add transactions',
    path: '/add-transactions',
    url: () => '/add-transactions',
  },
  planTransactions: {
    pageName: 'Plan transactions',
    path: '/plan-transactions',
    url: () => '/plan-transactions',
  },
  categories: {
    pageName: 'Categories',
    path: '/categories',
    url: () => '/categories',
  },
  currentAssets: {
    pageName: 'Current assets',
    path: '/current-assets',
    url: () => '/current-assets',
  },
  addNewLink: {
    pageName: 'Add new link',
    path: '/add-new-link',
    url: () => '/add-new-link',
  },
} as const;
