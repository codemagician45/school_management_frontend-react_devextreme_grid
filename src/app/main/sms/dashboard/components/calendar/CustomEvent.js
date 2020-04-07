import React, { Component } from 'react';
import { Popover, OverlayTrigger } from 'react-bootstrap';
import Typography from '@material-ui/core/Typography';

class CustomEvent extends Component {
  render() {
    return (
      <div>
        <OverlayTrigger
          placement="top"
          trigger="click"
          overlay={
            <Popover>
              <Popover.Title><Typography className="text-24">{this.props.event.title}</Typography></Popover.Title>
              <Popover.Content>
                <Typography className="text-12">Description: {this.props.event.tooltip}</Typography>
                <Typography className="text-12" color="textSecondary">Location: {this.props.event.location}</Typography>
              </Popover.Content>
            </Popover>
          }
        >
          <Typography className="text-13">{this.props.event.title}</Typography>
        </OverlayTrigger>
      </div>
    );
  }
}

export default CustomEvent;
