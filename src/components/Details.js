import React from 'react'
import Button from '@material-ui/core/Button'

class Details extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            profileName: props.profileName
        };
    }

    componentDidMount() {
        console.log('I am loaded')
    }

    componentDidUpdate(prevProps) {
        
    }

    render() {

        console.log('render')

        return (
            <React.Fragment>

                <div>
                    {this.state.profileName}
                </div>
                <div>
                    <Button variant="contained" onClick={() => {
                        this.setState({ profileName: this.props.profileName })
                    }}>Change State</Button>
                </div>

            </React.Fragment>
        );
    }
}

export default Details