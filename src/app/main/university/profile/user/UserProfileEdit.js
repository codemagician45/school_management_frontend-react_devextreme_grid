import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Input } from '@material-ui/core';
import { TextFieldFormsy, CheckboxFormsy, RadioGroupFormsy, SelectFormsy, FuseChipSelectFormsy } from '@fuse/core/formsy';
import { Button, TextField, Select, MenuItem, InputLabel, FormControl } from '@material-ui/core';
import Formsy from 'formsy-react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { useDispatch, useSelector } from 'react-redux';
import withReducer from 'app/store/withReducer';
import * as Actions from '../../store/actions';
import reducer from '../../store/reducers';
import { useForm } from '@fuse/hooks';
import _ from '@lodash';


const useStyle = makeStyles(theme => ({
    common: {
        // maxWidth: '80rem',
        paddingTop: '16px',
        paddingBottom: '16px',
        paddingLeft: '36px',
        paddingRight: '36px',
        width: '100%'
    },
    formControl: {
        // margin: theme.spacing(1),
        minWidth: 150,
    },
}));

function UserProfileEdit() {

    const classes = useStyle();
    const myUserPro = useSelector(({ university }) => university.users);
    const universities = useSelector(({ university }) => university.users.universities);
    const [id, setID] = useState(null);
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [ext, setExt] = useState('');
    const [title, setTitle] = useState('');
    const [select, setSelect] = useState('');

    const dispatch = useDispatch();

    const myUserId = localStorage.getItem('user_id')

    useEffect(() => {
        dispatch(Actions.getUserProfile(myUserId));
    }, [dispatch]);

    useEffect(() => {
        dispatch(Actions.getUniversities());
    }, [dispatch]);

    // console.log(myUserPro)
    // console.log("universities", universities)
    useEffect(() => {
        if (myUserPro.data) {

            setID(myUserPro.data[0] && myUserPro.data[0].id);
            setName(myUserPro.data[0] && myUserPro.data[0].name);
            setPhone(myUserPro.data[0] && myUserPro.data[0].phone);
            setEmail(myUserPro.data[0] && myUserPro.data[0].email);
            setMobile(myUserPro.data[0] && myUserPro.data[0].mobile);
            setExt(myUserPro.data[0] && myUserPro.data[0].ext);
            setTitle(myUserPro.data[0] && myUserPro.data[0].title);
        }

    }, [myUserPro.data])

    let selectList = myUserPro.universities && myUserPro.universities.map((uni) =>
        <MenuItem key={uni.name} value={uni.id}>{uni.name}</MenuItem>
    )

    console.log(select);

    const onSubmit = () => {
        // const updateData = {
        //     id: localStorage.getItem('uni_id'),
        //     name: name,
        //     phone: phone,
        //     email: email,
        //     website: website,
        //     map_link: map_link,
        // }
        // dispatch(Actions.updateUniProfile(updateData));
        const userEditData = {
            id: localStorage.getItem('user_id'),
            name: name,
            university_id: select,
            mobile: mobile,
            email: email,
            phone: phone,
            ext: ext,
            title: title
        }
        dispatch(Actions.updateUser(userEditData));
    }

    return (
        id && (
            <Card className="w-full overflow-hidden">
                {/* <Paper className="w-full mt-24"> */}
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={2}>
                        <div className={classes.imgDiv}>
                            <img className="max-w-none w-auto h-full pl-16" src="assets/images/logos/headmaster.svg" alt="user" />
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={10}>
                        <div className={classes.common}>
                            <Grid item xs={12}>
                                <TextField
                                    className="mt-8 mb-8"
                                    type="text"
                                    name="name"
                                    id="name"
                                    label="Contact Name"
                                    variant="outlined"
                                    fullWidth
                                    value={name || ''}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </Grid>
                            <Grid container spacing={1}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        className="mt-8 mb-8 mr-16"
                                        label="Mobile Number"
                                        value={mobile || ''}
                                        onChange={(e) => setMobile(e.target.value)}
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
                                        id="uni_email"
                                        name="uni_email"
                                        value={email || ''}
                                        onChange={(e) => setEmail(e.target.value)}
                                        variant="outlined"
                                        fullWidth
                                    />
                                </Grid>
                            </Grid>
                            <Grid container spacing={1}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        className="mt-8 mb-8 mr-16"
                                        label="Phone"
                                        autoFocus
                                        type="text"
                                        id="user_phone"
                                        name="user_phone"
                                        value={phone || ''}
                                        onChange={(e) => setPhone(e.target.value)}
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
                                        value={ext || ''}
                                        onChange={(e) => setExt(e.target.value)}
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
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            </Grid>
                            <Grid container spacing={3}>

                                {/* <Grid item xs={12} sm={6}>
                                    <Select
                                        className={classes.formControl}
                                        id="type"
                                        variant="outlined"
                                    // open={open}
                                    // onClose={handleClose}
                                    // onOpen={handleOpen}
                                    // value={age}
                                    // onChange={handleChange}
                                    >
                                        <MenuItem value={"university"}>University</MenuItem>
                                    </Select>
                                </Grid> */}

                                <Grid item xs={12} sm={6}>
                                    <FormControl className={classes.formControl}>
                                        <InputLabel id="universities" className="pl-16">University</InputLabel>
                                        <Select
                                            labelId="universities"
                                            id="type"
                                            variant="outlined"
                                            onChange={(e) => setSelect(e.target.value)}
                                            value={select}
                                        >
                                            {selectList}
                                        </Select>
                                    </FormControl>
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>
                </Grid>
                <div className="p-16 float-right">
                    <Button variant="contained" color="secondary" onClick={onSubmit} className="mr-16" >
                        Submit
                </Button>
                    <Button variant="contained" color="primary" >
                        Cancel
                </Button>
                </div>
            </Card >
        )

        // {/* </Paper> */}
    )
}

export default withReducer('university', reducer)(UserProfileEdit);