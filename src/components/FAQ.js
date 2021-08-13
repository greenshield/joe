import React from "react";
import { setUser, setTemp } from "../actions";
import { setStatus } from "../actions/status";
import { connect } from "react-redux";
import { Button } from '@material-ui/core'

function FAQ(props) {
	return (
		<React.Fragment>
			<div>FAQ here {props.status}</div>
			<Button onClick={()=>{

				props.setStatus('active')

			}}>Change Status</Button>
		</React.Fragment>
	);
}

const mapStateToProps = (state) => ({
	user: state.user,
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
