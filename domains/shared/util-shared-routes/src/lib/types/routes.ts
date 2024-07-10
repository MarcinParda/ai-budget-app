import { Breadcrumb } from './breadcrumb';

export interface RouteData {
  pageName: string;
  path: string;
  url: () => string;
  breadcrumbs: Breadcrumb[];
}
