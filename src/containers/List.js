import { connect } from 'react-redux';
import List from '../components/List';

const mapStateToProps = state => ({
        articles: state.articles
    });
export default connect(mapStateToProps)(List);