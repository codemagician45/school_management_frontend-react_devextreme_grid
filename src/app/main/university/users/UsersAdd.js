import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Input } from '@material-ui/core';
import { TextFieldFormsy, } from '@fuse/core/formsy';
import { Button, Tab, Tabs, TextField, InputAdornment, Icon, Typography } from '@material-ui/core';
import Formsy from 'formsy-react';
import Grid from '@material-ui/core/Grid';

const useStyle = makeStyles({

    common: {
        paddingTop: '16px',
        paddingBottom: '16px',
        paddingLeft: '36px',
        paddingRight: '36px',
        width: '100%'
    },
    imgDiv: {
        maxWidth: '30rem',
        padding: '16px',
        margin: '2em'
    },

    button: {
        marginBottom: '24px',
        marginRight: '36px',
        float: 'right'
    },
    subHeader: {
        fontSize: '24px',
        padding: '16px',
        paddingBottom: '0px'
    }
});

function UsersAdd() {

    const classes = useStyle();

    return (

        <Card className="w-full overflow-hidden">
            <Typography className={classes.subHeader}>Add User</Typography>
            <Grid container spacing={1}>
                <Grid item xs={12} sm={2}>
                    <img className="max-w-none w-auto h-full pl-16" src="assets/images/logos/headmaster.svg" alt="user" />
                </Grid>
                <Grid item xs={12} sm={10}>
                    <div className={classes.common}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={12}>
                                <Formsy>
                                    <TextFieldFormsy
                                        className="mt-8 mb-8"
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
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    className="mt-8 mb-8 mr-16"
                                    label="Mobile Number"
                                    autoFocus
                                    type="number"
                                    id="mobile"
                                    name="mobile"
                                    variant="outlined"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    className="mt-8 mb-8"
                                    label="Email"
                                    type="email"
                                    id="email"
                                    name="email"
                                    variant="outlined"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    className="mt-8 mb-8"
                                    label="Phone Number"
                                    type="text"
                                    id="phone"
                                    name="phone"
                                    variant="outlined"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    className="mt-8 mb-8"
                                    label="Ext"
                                    type="text"
                                    id="ext"
                                    name="ext"
                                    variant="outlined"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <TextField
                                    className="mt-8 mb-8"
                                    label="Title"
                                    type="text"
                                    id="title"
                                    name="title"
                                    variant="outlined"
                                    fullWidth
                                />
                            </Grid>

                        </Grid>
                    </div>
                </Grid>
            </Grid>

            <div className={classes.button} >
                <Button variant="contained" color="secondary" >
                    Add Record
                </Button>
            </div>
        </Card>
    )
}

export default UsersAdd;