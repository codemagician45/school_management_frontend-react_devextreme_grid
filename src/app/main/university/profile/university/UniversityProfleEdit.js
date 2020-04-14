import React, { useCallback, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Input } from '@material-ui/core';
import { TextFieldFormsy, CheckboxFormsy, RadioGroupFormsy, SelectFormsy, FuseChipSelectFormsy } from '@fuse/core/formsy';
import { Button, Tab, Tabs, TextField, InputAdornment, Icon, Typography } from '@material-ui/core';
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
import UniversityProfileEditBottom from './UniversityProfileEditBottom';


const useStyle = makeStyles(theme => ({
    common: {
        // maxWidth: '80rem',
        paddingTop: '16px',
        paddingBottom: '16px',
        paddingLeft: '36px',
        paddingRight: '36px',
        width: '100%'
    },
}));

function UniversityProfileEdit() {

    const classes = useStyle();
    const myUniPro = useSelector(({ university }) => university.uniprofile);
    const [id, setID] = useState(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [website, setWebsite] = useState('');
    const [map_link, setMapLink] = useState('');
    const [title, setTitle] = useState('');
    const [compus, setCompus] = useState([]);
    const [country, setCountry] = useState([]);
    const [city, setCity] = useState([]);
    const [address, setAddress] = useState([]);
    const [userName, setUserName] = useState([]);
    const [userEmail, setUserEmail] = useState([]);
    const [customData, setCustomData] = useState([]);


    const dispatch = useDispatch();

    const userData = {
        id: 2
    }
    const custom = [];
    useEffect(() => {
        dispatch(Actions.getUniProfile(userData));
    }, [dispatch]);


    useEffect(() => {
        if (myUniPro.data) {
            setID(myUniPro.data[0].id);
            setName(myUniPro.data[0].name);
            setPhone(myUniPro.data[0].phone);
            setEmail(myUniPro.data[0].email);
            setWebsite(myUniPro.data[0].website);
            setMapLink(myUniPro.data[0].map_link);
            setCompus(myUniPro.data[0].compus.split(","));
            setCountry(myUniPro.data[0].country.split(","));
            setCity(myUniPro.data[0].city.split(","));
            setAddress(myUniPro.data[0].country.split(","));
            setUserName(myUniPro.data[0].users.split(","));
            setUserEmail(myUniPro.data[0].emails.split(","));


        }

    }, [myUniPro.data])

    useEffect(() => {
        if (userName) {

            userName.forEach(function (e, i) {
                custom.push({
                    compus: compus[i] ? custom[i] : '',
                    country: country[i] ? country[i] : '',
                    city: city[i] ? city[i] : '',
                    address: address[i] ? address[i] : '',
                    users: e,
                    emails: userEmail[i] ? userEmail[i] : ''
                })
            });

            setCustomData(custom);
        }
    }, [userName])


    const newCustom = {
        compus: '',
        country: '',
        city: '',
        address: '',
        users: '',
        emails: ''
    }

    const addCustom = () => {
        setCustomData([...customData, newCustom])
    }
    const removeCustom = (e) => {
        console.log(e);
        setCustomData(customData.filter((data, i) => i != e))
    }

    const onSubmit = () => {
        const updateData = {
            name: name,
            phone: phone,
            email: email,
            website: website,
            map_link: map_link,
        }
        // const updateData = "aaa";
        dispatch(Actions.updateUniProfile(updateData));

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
                                    label="University Name"
                                    variant="outlined"
                                    fullWidth
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </Grid>
                            <Grid container spacing={1}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        className="mt-8 mb-8 mr-16"
                                        label="Phone Number"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
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
                                        value={email}
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
                                        label="Website"
                                        autoFocus
                                        type="text"
                                        id="uni_website"
                                        name="uni_website"
                                        value={website}
                                        onChange={(e) => setWebsite(e.target.value)}
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
                                        value={map_link}
                                        onChange={(e) => setMapLink(e.target.value)}
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
                                // onChange={(e) => setTitle(e.target.value)}
                                />
                            </Grid>
                        </div>
                    </Grid>
                </Grid>

                {/* <Fab size="small" color="secondary" aria-label="add" className={classes.margin}>
                    <AddIcon onClick={() => addCustom()} />
                </Fab> */}
                <UniversityProfileEditBottom
                    // compus={compus}
                    // country={country}
                    // city={city}
                    // address={address}
                    // userName={userName}
                    // userEmail={userEmail}
                    customData={customData}
                    addCustom={addCustom}
                    removeCustom={removeCustom}
                />
                <div className="p-16 float-right">
                    <Button variant="contained" color="secondary" onClick={onSubmit} >
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

export default withReducer('university', reducer)(UniversityProfileEdit);