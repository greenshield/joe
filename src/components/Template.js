import React from 'react'
import { setTemp } from "../actions";
import { connect } from "react-redux";

function Template(props) {

  const [status, setLocalStatus] = React.useState(null)

  React.useEffect(() => {

  }, [])

  return (
    <React.Fragment>
    <div>template body</div>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => ({
	temp: state.temp,
});

const mapDispatchToProps = (dispatch) => ({
	setTemp: (temp) => dispatch(setTemp(temp)),
	changeTemp: (callback, temp) => {
		dispatch((dispatch) => {
			callback(dispatch(setTemp(temp)).temp, true);
		});
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(Template);
