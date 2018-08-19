import ItemList from '../components/ItemList';
import { connect } from 'react-redux';
import { fetchItemList } from '../actions/post';

const mapStateToProps = state => {
  const { post } = state;
  const { isFetching, items } = post || {
    isFetching: false,
    items: [],
    error: {}
  };
  return {
    post
  };
};

export default connect(
  mapStateToProps,
  { fetchItemList }
)(ItemList);
