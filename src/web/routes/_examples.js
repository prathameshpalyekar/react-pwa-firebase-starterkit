import ThemingComponent from '../../modules/_examples/theming/UI/index';
import { TEMPLATE_TYPES } from '../template/index';

const themingRoute = {
  Component: ThemingComponent,
  path: '/examples/theming',
  title: 'Theming',
  templateType: TEMPLATE_TYPES.PURE,
};

export default [
  themingRoute,
];