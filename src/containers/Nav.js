import { connect } from 'react-redux';
import Nav from '../components/Nav';

const mapStateToProps = state => ({
        articles: state.articles
    });
export default connect(mapStateToProps)(Nav);