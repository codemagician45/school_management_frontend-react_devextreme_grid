import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Input } from '@material-ui/core';
// import { TextFieldFormsy, CheckboxFormsy, RadioGroupFormsy, SelectFormsy, FuseChipSelectFormsy } from '@fuse/core/formsy';
import { Button, TextField, Icon } from '@material-ui/core';
// import Formsy from 'formsy-react';
import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { useDispatch, useSelector } from 'react-redux';
import withReducer from 'app/store/withReducer';
import * as Actions from '../../../store/actions';
import reducer from '../../../store/reducers';
// import { useForm } from '@fuse/hooks';
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
    upload: {
        marginLeft: '25%'
    },
    img: {
        minWidth: '120px',
        marginTop: '60px',
        marginLeft: '15%'
    }
}));

function UniversityProfileEdit() {

    const classes = useStyle();
    const myUniPro = useSelector(({ university }) => university.universities);
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
    const [img, setImage] = useState(null);

    const dispatch = useDispatch();

    const myUniId = {
        id: localStorage.getItem('uni_id')
    }
    const custom = [];
    useEffect(() => {
        dispatch(Actions.getUniProfile(myUniId));
    }, [dispatch]);


    useEffect(() => {
        if (myUniId && myUniPro.data) {

            setID(myUniPro.data[0] && myUniPro.data[0].id);
            setName(myUniPro.data[0] && myUniPro.data[0].name);
            setPhone(myUniPro.data[0] && myUniPro.data[0].phone);
            setEmail(myUniPro.data[0] && myUniPro.data[0].email);
            setWebsite(myUniPro.data[0] && myUniPro.data[0].website);
            setMapLink(myUniPro.data[0] && myUniPro.data[0].map_link);
            setCompus(myUniPro.data[0] && myUniPro.data[0].compus && myUniPro.data[0].compus.split(","));
            setCountry(myUniPro.data[0] && myUniPro.data[0].country && myUniPro.data[0].country.split(","));
            setCity(myUniPro.data[0] && myUniPro.data[0].city && myUniPro.data[0].city.split(","));
            setAddress(myUniPro.data[0] && myUniPro.data[0].country && myUniPro.data[0].country.split(","));
            setUserName(myUniPro.data[0] && myUniPro.data[0].users && myUniPro.data[0].users.split(","));
            setUserEmail(myUniPro.data[0] && myUniPro.data[0].emails && myUniPro.data[0].emails.split(","));
            setImage(myUniPro.data[0] && myUniPro.data[0].logo);
        }

    }, [myUniPro.data])
    console.log(myUniPro);
    useEffect(() => {
        if (userName) {

            userName.forEach(function (e, i) {
                custom.push({
                    compus: compus && compus[i] ? compus[i] : '',
                    country: country && country[i] ? country[i] : '',
                    city: city && city[i] ? city[i] : '',
                    address: address && address[i] ? address[i] : '',
                    users: e,
                    emails: userEmail && userEmail[i] ? userEmail[i] : ''
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
        setCustomData(customData.filter((data, i) => i != e))
    }

    const compusArr = [];
    const countryArr = [];
    const cityArr = [];
    const addressArr = [];
    const userNameArr = [];
    const userEmailArr = [];

    const onSubmit = () => {
        console.log("submit event", customData)
        customData.map(data => compusArr.push(data.compus));
        customData.map(data => countryArr.push(data.country));
        customData.map(data => cityArr.push(data.city));
        customData.map(data => addressArr.push(data.address));
        customData.map(data => userNameArr.push(data.users));
        customData.map(data => userEmailArr.push(data.emails));

        const updateData = {
            id: localStorage.getItem('uni_id'),
            name: name,
            phone: phone,
            email: email,
            website: website,
            map_link: map_link,
            compus: compusArr,
            country: countryArr,
            address: addressArr,
            users: userNameArr,
            emails: userEmailArr,
            logo: img && img
        }
        dispatch(Actions.updateUniProfile(updateData));

    }
    console.log("custom", customData)

    const handleUploadChange = (e) => {
        const file = e.target.files[0];
        console.log(file)
        if (!file) {
            return;
        }
        const reader = new FileReader();
        reader.readAsBinaryString(file);

        reader.onload = () => {
            // setImage(

            //     {
            //         'id': FuseUtils.generateGUID(),
            //         'url': `data:${file.type};base64,${btoa(reader.result)}`,
            //         'type': 'image'
            //     }

            // );
            setImage(
                `data:${file.type};base64,${btoa(reader.result)}`
            )
        };

        reader.onerror = function () {
            console.log("error on load image");
        };
    }
    console.log("uni", img)
    if (id)
        return (
            id && (
                <Card className="w-full overflow-hidden">
                    {/* <Paper className="w-full mt-24"> */}
                    <Grid container spacing={1}>
                        <Grid item xs={12} sm={2}>
                            <div className={classes.img}>
                                <div className={classes.upload}>
                                    <input
                                        accept="image/*"
                                        className="hidden"
                                        id="button-file"
                                        type="file"
                                        onChange={handleUploadChange}
                                    />
                                    <label
                                        htmlFor="button-file"
                                        className="cursor-pointer"
                                    >
                                        <Button variant="contained" component="span">
                                            <Icon fontSize="large" color="action">cloud_upload</Icon>
                                        </Button>
                                    </label>
                                </div>
                                {img &&
                                    <div className="mt-16">
                                        <img src={img} alt="img" />
                                    </div>
                                }
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
                                        value={name || ''}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </Grid>
                                <Grid container spacing={1}>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            className="mt-8 mb-8 mr-16"
                                            label="Phone Number"
                                            value={phone || ''}
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
                                            label="Website"
                                            autoFocus
                                            type="text"
                                            id="uni_website"
                                            name="uni_website"
                                            value={website || ''}
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
                                            value={map_link || ''}
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

                    <Grid container spacing={1}>
                        <Grid item xs={10} sm={10}>

                            <UniversityProfileEditBottom
                                customData={customData}
                                addCustom={addCustom}
                                removeCustom={removeCustom}
                                compusArr={compusArr}
                                setCustomData={(data) => setCustomData(data)}
                            />

                        </Grid>
                        <Grid item={2} sm={2}>
                            <Fab size="small" color="secondary" aria-label="add" className="mt-16">
                                <AddIcon onClick={addCustom} />
                            </Fab>

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

        )
    else
        return (
            <Card className="w-full overflow-hidden"></Card>
        )
}

export default withReducer('university', reducer)(UniversityProfileEdit);