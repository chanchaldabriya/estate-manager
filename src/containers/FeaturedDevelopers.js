import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { deleteDeveloper, fetchAllDevelopers } from "../actions";
import DeveloperList from "../components/DeveloperList";

const mapStateToProps = (state) => ({
  developers: state.developers,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchAllDevelopers,
      deleteDeveloper,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(DeveloperList);
