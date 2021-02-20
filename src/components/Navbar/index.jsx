import { connect } from 'react-redux';
import { getUsername } from '../../redux/modules/username';

import Navbar from './Navbar';

const mapStateToProps = (state) => ({
  username: getUsername(state)
});

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
