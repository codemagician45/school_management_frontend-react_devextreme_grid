import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Input } from '@material-ui/core';
import { TextFieldFormsy, CheckboxFormsy, RadioGroupFormsy, SelectFormsy, FuseChipSelectFormsy } from '@fuse/core/formsy';
import { Button, Tab, Tabs, TextField, InputAdornment, Icon, Typography } from '@material-ui/core';
import Formsy from 'formsy-react';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { useDispatch } from 'react-redux';

const useStyle = makeStyles(theme => ({
    common: {
        // maxWidth: '80rem',
        paddingTop: '16px',
        paddingBottom: '16px',
        paddingLeft: '36px',
        paddingRight: '36px',
        width: '100%'
    },
    imgDiv: {
        maxWidth: '30rem',
        padding: '16px',
    },
    bottomDiv: {
        width: '80%'
    },
    addRemove: {
        width: '20%',
        margin: 'auto',
        marginLeft: '20px'
    }

}));

function UniversityProfileEdit() {

    const classes = useStyle();

    const dispatch = useDispatch();


    return (

        <Card className="w-full overflow-hidden">
            <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                    <div className={classes.imgDiv}>
                        <img className={classes.img} src="assets/images/logos/headmaster.svg" alt="user" />
                    </div>
                </Grid>
                <Grid item xs={12} sm={8}>
                    <div className={classes.common}>
                        <Grid item xs={12}>
                            <Formsy>
                                <TextFieldFormsy
                                    className="mt-8 mb-8"
                                    type="text"
                                    name="uni_name"
                                    id="uni_name"
                                    label="University Name"
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
                        <Grid container spacing={1}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    className="mt-8 mb-8 mr-16"
                                    label="Phone Number"
                                    autoFocus
                                    type="number"
                                    id="uni_phone"
                                    name="uni_phone"
                                    variant="outlined"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    className="mt-8 mb-8"
                                    label="Email"
                                    type="email"
                                    id="uni_email"
                                    name="uni_email"
                                    variant="outlined"
                                    fullWidth
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={1}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    className="mt-8 mb-8 mr-16"
                                    label="Website"
                                    autoFocus
                                    type="text"
                                    id="uni_website"
                                    name="uni_website"
                                    variant="outlined"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    className="mt-8 mb-8"
                                    label="Google Map Link"
                                    type="text"
                                    id="uni_map"
                                    name="uni_map"
                                    variant="outlined"
                                    fullWidth
                                />
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
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
                    </div>
                </Grid>
            </Grid>

            <div className="pr-24 pl-24 flex">
                <div className={classes.bottomDiv}>
                    <Grid container spacing={1}>
                        <Grid item xs={6} sm={2}>
                            <TextField
                                className="mt-8 mb-8 mr-12"
                                label="Compus"
                                type="text"
                                id="compus"
                                name="compus"
                                variant="outlined"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={6} sm={2}>
                            <TextField
                                className="mt-8 mb-8 mr-12"
                                label="Country"
                                type="text"
                                id="country"
                                name="country"
                                variant="outlined"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={6} sm={2}>
                            <TextField
                                className="mt-8 mb-8 mr-12"
                                label="City"
                                type="text"
                                id="city"
                                name="city"
                                variant="outlined"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={6} sm={2}>
                            <TextField
                                className="mt-8 mb-8 mr-12"
                                label="Address"
                                type="text"
                                id="address"
                                name="address"
                                variant="outlined"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={6} sm={2}>
                            <TextField
                                className="mt-8 mb-8 mr-12"
                                label="User Name"
                                type="text"
                                id="user_name"
                                name="user_name"
                                variant="outlined"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={6} sm={2}>
                            <TextField
                                className="mt-8 mb-8 mr-12"
                                label="Email"
                                type="text"
                                id="user_email"
                                name="user_email"
                                variant="outlined"
                                fullWidth
                            />
                        </Grid>
                    </Grid>
                </div>
                <div className={classes.addRemove}>
                    <Fab size="small" color="secondary" aria-label="add" className={classes.margin}>
                        <AddIcon />
                    </Fab>
                    <Fab size="small" color="primary" aria-label="add" className={classes.margin}>
                        <RemoveIcon />
                    </Fab>
                </div>

            </div>

            <div className="p-16 float-right">
                <Button variant="contained" color="secondary" >
                    Submit
                </Button>
                <Button variant="contained" color="primary" >
                    Cancel
                </Button>
            </div>
        </Card >
    )
}

export default UniversityProfileEdit;