import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { deleteDeveloper, fetchAllDevelopers, addDeveloper, editDeveloper } from "../actions";
import DeveloperList from "../components/DeveloperList";
import AddDeveloper from "../components/AddDeveloper";

const mapStateToProps = (state) => ({
  developers: state.developers,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchAllDevelopers,
      deleteDeveloper,
      addDeveloper,
      editDeveloper
    },
    dispatch
  );

export default {
  DeveloperList: connect(mapStateToProps, mapDispatchToProps)(DeveloperList),
  AddDeveloper: connect(mapStateToProps, mapDispatchToProps)(AddDeveloper)
}
