import ProductComponent from '../../modules/product/UI/index';
import ProductContainer from '../../containers/home';

export default {
  Component: ProductComponent,
  Container: ProductContainer,
  path: '/product',
  title: 'Product',
  exact: true,
};