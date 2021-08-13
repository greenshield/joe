import React from 'react'
import Button from '@material-ui/core/Button'
import Summary from './Summary'
import axios from 'axios'
import { history } from "../index"
import { Link } from "react-router-dom"
import { withStyles } from '@material-ui/core/styles'

const styles = theme => {
  return {
    myUser: {
      backgroundColor: 'red',
      fontSize: 40
    },
    profile: {
      backgroundColor: 'blue'
    }
  }
}

function Profile(props) {

  const [name, setName] = React.useState(null)
  const [status,setStatus] = React.useState(null)
  const [users, setUsers] = React.useState([])
  const [localUser,setLocalUser] = React.useState(null)

  React.useEffect(() => {




    if (props.match.params.userID) {


      if (localUser && localUser.name === props.match.params.userID) {
        return
      }

      axios.post('/user', {
        userID: props.match.params.userID
      })
        .then(result => {          
          setLocalUser(result.data.user)
          props.setCurrentUser(result.data.user)
        })

    } else {
      if (!props.match.params.userID) {

        props.setCurrentUser(null)

        axios.post('/users', {

        })
          .then(result => {
            setUsers(result.data.users)
          })
      }
    }

  }, [props.match.params])

  var user_list = users.map((v, i) => {
    return <Button key={i} variant="outlined" color="primary" component={Link} to={"/profile/" + v.name} onClick={() => {

      //setName(v.name)
      //setUser(v)

      ///history.push('/profile/'+v.name)


    }}>View {v.name}</Button>
  })

  return (
    <React.Fragment>
      {user_list}
      <br />

      {localUser ? <div>Viewing: {name}</div> : null}

      <hr />

<div className={props.classes.myUser}>some text</div>

      <Summary user={localUser} setLocalUser={setLocalUser} setCurrentUser={props.setCurrentUser} />


    <Button variant="contained" color="primary" style={{
      backgroundColor: 'green'
    }} onClick={()=>{
      props.setCurrentUser(localUser)
    }}>Save Changes</Button>

    </React.Fragment>
  );
}

export default withStyles(styles)(Profile);
