import ThemingComponent from '../../modules/_examples/theming/UI/index';
import AnotherGridComponent from '../../modules/_examples/anotherGrid/UI/index';
import AttachedContentComponent from '../../modules/_examples/attachedContent/UI/index';
import BootstrapComponent from '../../modules/_examples/bootstrapMigration/UI/index';
import FixedMenuComponent from '../../modules/_examples/fixedMenu/UI/index';
import GridComponent from '../../modules/_examples/grid/UI/index';
import HomePageComponent from '../../modules/_examples/homePage/UI/index';
import LoginComponent from '../../modules/_examples/loginForm/UI/index';
import ResponsiveComponent from '../../modules/_examples/responsive/UI/index';
import StickyComponent from '../../modules/_examples/sticky/UI/index';
import { TEMPLATE_TYPES } from '../template/index';

const themingRoute = {
  Component: ThemingComponent,
  path: '/examples/theming',
  title: 'Theming',
  templateType: TEMPLATE_TYPES.PURE,
};

const anotherComponentRoute = {
  Component: AnotherGridComponent,
  path: '/examples/another-grid',
  title: 'Another Grid',
  templateType: TEMPLATE_TYPES.PURE,
};

const attachedContentRoute = {
  Component: AttachedContentComponent,
  path: '/examples/attached-content',
  title: 'Attached Content',
  templateType: TEMPLATE_TYPES.PURE,
};

const bootstrapRoute = {
  Component: BootstrapComponent,
  path: '/examples/bootstrap',
  title: 'Bootstrap',
  templateType: TEMPLATE_TYPES.PURE,
};

const fixedMenuRoute = {
  Component: FixedMenuComponent,
  path: '/examples/fixed-menu',
  title: 'Fixed Menu',
  templateType: TEMPLATE_TYPES.PURE,
};

const gridRoute = {
  Component: GridComponent,
  path: '/examples/grid',
  title: 'Grid',
  templateType: TEMPLATE_TYPES.PURE,
};

const homePageRoute = {
  Component: HomePageComponent,
  path: '/examples/home-page',
  title: 'Home page example',
  templateType: TEMPLATE_TYPES.PURE,
};

const loginPageRoute = {
  Component: LoginComponent,
  path: '/examples/login-page',
  title: 'Login Page',
  templateType: TEMPLATE_TYPES.PURE,
};

const responsiveRoute = {
  Component: ResponsiveComponent,
  path: '/examples/responsive',
  title: 'Responsive',
  templateType: TEMPLATE_TYPES.PURE,
};

const stickyRoute = {
  Component: StickyComponent,
  path: '/examples/sticky',
  title: 'Sticky',
  templateType: TEMPLATE_TYPES.PURE,
};

export default [
  themingRoute,
  anotherComponentRoute,
  attachedContentRoute,
  bootstrapRoute,
  fixedMenuRoute,
  gridRoute,
  homePageRoute,
  loginPageRoute,
  responsiveRoute,
  stickyRoute,
];