import React from 'react'
import axios from 'axios'
import Loading from './Loading'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core'
import { history } from "../index"

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

      <Button component={Link} to="/profile">Back to List</Button>

    </React.Fragment>
  );
}

export default Summary;
