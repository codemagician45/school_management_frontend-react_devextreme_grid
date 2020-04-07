import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Input } from '@material-ui/core';
import { TextFieldFormsy, CheckboxFormsy, RadioGroupFormsy, SelectFormsy, FuseChipSelectFormsy } from '@fuse/core/formsy';
import { Button, Tab, Tabs, TextField, InputAdornment, Icon, Typography } from '@material-ui/core';
import Formsy from 'formsy-react';

const useStyle = makeStyles({

    common: {
        maxWidth: '80rem',
        width: '60%',
        padding: '16px'
    },
    imgDiv: {
        maxWidth: '30rem',
        padding: '16px',
        margin: '2em'
    },
    img: {
        width: '100%'
    },
    button: {
        display: 'flex',
        flexDirection: 'column-reverse',
        padding: '16px',
        marginBottom: '24px'
    },
    subHeader: {
        fontSize: '24px',
        padding: '16px'
    }

});

function UsersAdd() {

    const classes = useStyle();

    return (

        <Card className="w-full overflow-hidden">
            <Typography className={classes.subHeader}>Add User</Typography>
            <div className="flex">
                <div className={classes.imgDiv}>
                    <img className={classes.img} src="assets/images/logos/headmaster.svg" alt="user" />
                </div>

                <div className={classes.common}>
                    <Formsy>
                        <TextFieldFormsy
                            className="mt-8 mb-16"
                            type="text"
                            name="name"
                            id="name"
                            label="Contact Name"
                            validations={{
                                minLength: 4
                            }}
                            validationErrors={{
                                minLength: 'Min character length is 4'
                            }}
                            required
                            variant="outlined"
                            fullWidth
                        />
                    </Formsy>

                    <div className="flex">
                        <TextField
                            className="mt-8 mb-16 mr-16"
                            label="Mobile Number"
                            autoFocus
                            type="number"
                            id="mobile"
                            name="mobile"
                            variant="outlined"
                            fullWidth
                        />

                        <TextField
                            className="mt-8 mb-16"
                            label="Email"
                            type="email"
                            id="email"
                            name="email"
                            variant="outlined"
                            fullWidth
                        />
                    </div>
                    <div className="flex">
                        <TextField
                            className="mt-8 mb-16 mr-16"
                            label="Phone Number"
                            autoFocus
                            type="number"
                            id="phone"
                            name="phone"
                            variant="outlined"
                            fullWidth
                        />

                        <TextField
                            className="mt-8 mb-16"
                            label="Ext"
                            type="text"
                            id="ext"
                            name="ext"
                            variant="outlined"
                            fullWidth
                        />
                    </div>
                    <TextField
                        className="mt-8 mb-16"
                        label="Title"
                        type="text"
                        id="title"
                        name="title"
                        variant="outlined"
                        fullWidth
                    />
                </div>
                <div className={classes.button} >
                    <Button variant="contained" color="secondary" >
                        Add Record
                    </Button>
                </div>
            </div>
        </Card>
    )
}

export default UsersAdd;