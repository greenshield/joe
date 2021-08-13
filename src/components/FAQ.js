import React from "react";
import { setUser, setStatus, setTemp } from "../../actions";
import { connect } from "react-redux";

function FAQ(props) {
	return (
		<React.Fragment>
			<div>FAQ here</div>
		</React.Fragment>
	);
}

const mapStateToProps = (state) => ({
	user: state.auth,
	temp: state.temp,
	status: state.status,
});

const mapDispatchToProps = (dispatch) => ({
	setUser: (user) => dispatch(setUser(user)),
	setTemp: (temp) => dispatch(setTemp(temp)),
	setStatus: (status) => dispatch(setStatus(status)),
	changeTemp: (callback, temp) => {
		dispatch((dispatch) => {
			callback(dispatch(setTemp(temp)).temp, true);
		});
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(FAQ);
