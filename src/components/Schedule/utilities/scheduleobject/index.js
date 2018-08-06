/* eslint-disable */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';

  let textStyle = {
      color: 'white',
      margin: 5,
  }

  let textStyleInfo = {
      'margin-left': 20,
  }

  let textStyleTitle = {
     'margin-left' : 20,
    width: 150,
    'background-color': 'var(--blue-primary)',
    'border-radius' : 5,
    'text-align' : 'center',
}

  let modalHeaderStyle = {
      backgroundColor: "#ff1493",
      'text-align': 'center',
      'border-radius' : 5,
      color: 'white',
      'box-shadow' : '5px 5px #000000',
  }
  
  let modalTextStyle = {
      color: 'white',
  }

  let boxStyle = {
      backgroundColor: "#ff1493",
      width: 200,
      margin : 20,
      display: 'inline-block',
      'border-radius' : 5,  
     'box-shadow' : '5px 5px #000000',
  }
  
  function getModalStyle() {
    const top = 50 ;
    const left = 50 ;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
      'background-color': 'var(--blue-primary)'
    };
  }
  
  const styles = theme => ({
    paper: {
      position: 'absolute',
      width: theme.spacing.unit * 50,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing.unit * 4,
    },
  });
  

class ScheduleObject extends Component { 
   
    constructor(props) { 
        super(props);

        this.state = {
            open: false
        }
         
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
    

     
   
    }

    handleOpen ()  {
        this.setState({ open: true });
      };

    handleClose () {
        this.setState({ open: false });
      };

  
    render(){ 
         
        
        
        const { classes } = this.props;

        return(
            <div style = {boxStyle}>
              <h2 style = {textStyleTitle} onClick = {this.test}> {this.props.title}</h2> 
              <p style = {textStyleInfo}> {this.props.time} </p>
        <Button style = {textStyle}onClick={this.handleOpen}>More Info</Button>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div style={getModalStyle()} className={classes.paper}>
            <h2 style = {modalHeaderStyle} variant="subheading" id="simple-modal-description">
              {this.props.title}
            </h2>
            <h4 style= {modalTextStyle}>{this.props.time} </h4>
            <p style= {modalTextStyle}> {this.props.description} </p>
            
          </div>
        </Modal>
            </div>
        )
    }
} 
ScheduleObject.propTypes = {
    classes: PropTypes.object.isRequired,
  };
export default withStyles(styles)(ScheduleObject);