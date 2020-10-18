import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { deleteDeveloper, fetchAllDevelopers, addDeveloper } from "../actions";
import DeveloperList from "../components/DeveloperList";

const mapStateToProps = (state) => ({
  developers: state.developers,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchAllDevelopers,
      addDeveloper,
      deleteDeveloper
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(DeveloperList);
