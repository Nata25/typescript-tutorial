import colors from './colors';
import dice from './dice';

import './styles.css';

if (module.hot) {
  module.hot.accept();
} else {
  console.log('Module is not hot. Can\'t reload the module');
}

colors();
dice();