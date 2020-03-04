import { connect } from "react-redux";
import { getRandomId, fetchShow } from "../actions/actions";

const DataGetter = ({ fetchShow }) => {
  fetchShow(getRandomId());
  return null;
};

const mapDispatchToProps = dispatch => {
  return {
    fetchShow: id => dispatch(fetchShow(id))
  };
};

export default connect(null, mapDispatchToProps)(DataGetter);
