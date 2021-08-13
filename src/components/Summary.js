import React from 'react'
import axios from 'axios'
import Loading from './Loading'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core'
import { history } from "../index"
import FAQ from "./FAQ"
import { setUser, setTemp } from "../actions";
import { setStatus } from "../actions/status";
import { connect } from "react-redux";

function Summary(props) {

  const [showName, setShowName] = React.useState(null)
  const [title, setTitle] = React.useState('')

  React.useEffect(() => {

    if (!props.user) {
      return
    }

    setShowName(props.user.name)

    

    axios.post('/status', {
      name: props.user.name
    })
      .then(result => {
        setTitle(result.data.title)
      })


  }, [props.user])

  if (!props.user) {
    return null
  }

  if (!props.user.status) {
    return <Loading />
  }

console.log(props.user)

  return (
    <React.Fragment>
      Summary of {showName} is {props.user.status} and title is {title}

      <hr />

      {props.user.status === 'disabled' ? <div>This user is disabled<br />
        <Button onClick={() => {

          var new_user = Object.assign({}, props.user)
          new_user.status = 'active'

          props.setLocalUser(new_user)
          props.setCurrentUser(new_user)

        }}>Enable</Button>
      </div> : null}

      <hr />

<FAQ />

<hr />
status is {props.status}
<hr />

      <Button component={Link} to="/profile">Back to List</Button>

      

    </React.Fragment>
  );
}


const mapStateToProps = (state) => ({
	redux_user: state.user,
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

export default connect(mapStateToProps, mapDispatchToProps)(Summary);
