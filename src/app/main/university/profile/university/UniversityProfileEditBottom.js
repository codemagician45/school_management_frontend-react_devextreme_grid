import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
// import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { TextField } from '@material-ui/core';

const useStyle = makeStyles(theme => ({

    bottomDiv: {
        width: '80%'
    },
    addRemove: {
        width: '20%',
        margin: 'auto',
        marginLeft: '20px'
    }

}));

export default function UniversityProfileEditBottom(props) {

    const classes = useStyle();
    const { customData } = props;
    // if (customData.length != 0)
    //     console.log("customData", customData)

    // const [compus, setCompus] = useState('');
    // console.log(compus)


    return (
        customData.map(
            (data, i) => (
                <div className="pr-24 pl-24 flex" key={i}>
                    <div className={classes.bottomDiv}>
                        <Grid container spacing={1}>
                            <Grid item xs={6} sm={2}>
                                <TextField
                                    className="mt-8 mb-8 mr-12"
                                    label="Compus"
                                    type="text"
                                    // id="compus"
                                    name="compus"
                                    variant="outlined"
                                    fullWidth
                                    defaultValue={data.compus}
                                    onChange={(e) => {
                                        // props.compusArr.push(e.target.value)
                                        var _tempData = customData;
                                        _tempData[i].compus = e.target.value;
                                        props.setCustomData(_tempData);
                                    }}
                                />
                            </Grid>
                            <Grid item xs={6} sm={2}>
                                <TextField
                                    className="mt-8 mb-8 mr-12"
                                    label="Country"
                                    type="text"
                                    // id="country"
                                    name="country"
                                    variant="outlined"
                                    fullWidth
                                    defaultValue={data.country}
                                    // key={"country" + i}
                                    onChange={(e) => {
                                        // props.compusArr.push(e.target.value)
                                        var _tempData = customData;
                                        _tempData[i].country = e.target.value;
                                        props.setCustomData(_tempData);
                                    }}
                                />
                            </Grid>
                            <Grid item xs={6} sm={2}>
                                <TextField
                                    className="mt-8 mb-8 mr-12"
                                    label="City"
                                    type="text"
                                    // id="city"
                                    name="city"
                                    variant="outlined"
                                    fullWidth
                                    defaultValue={data.city}
                                    // key={"city" + i}
                                    onChange={(e) => {
                                        // props.compusArr.push(e.target.value)
                                        var _tempData = customData;
                                        _tempData[i].city = e.target.value;
                                        props.setCustomData(_tempData);
                                    }}
                                />
                            </Grid>
                            <Grid item xs={6} sm={2}>
                                <TextField
                                    className="mt-8 mb-8 mr-12"
                                    label="Address"
                                    type="text"
                                    // id="address"
                                    name="address"
                                    variant="outlined"
                                    fullWidth
                                    defaultValue={data.address}
                                    // key={"address" + i}
                                    onChange={(e) => {
                                        // props.compusArr.push(e.target.value)
                                        var _tempData = customData;
                                        _tempData[i].address = e.target.value;
                                        props.setCustomData(_tempData);
                                    }}
                                />
                            </Grid>
                            <Grid item xs={6} sm={2}>
                                <TextField
                                    className="mt-8 mb-8 mr-12"
                                    label="User Name"
                                    type="text"
                                    // id="user_name"
                                    name="user_name"
                                    variant="outlined"
                                    fullWidth
                                    defaultValue={data.users}
                                    // key={"user_name" + i}
                                    onChange={(e) => {
                                        // props.compusArr.push(e.target.value)
                                        var _tempData = customData;
                                        _tempData[i].users = e.target.value;
                                        props.setCustomData(_tempData);
                                    }}
                                />
                            </Grid>
                            <Grid item xs={6} sm={2}>
                                <TextField
                                    className="mt-8 mb-8 mr-12"
                                    label="Email"
                                    type="text"
                                    // id="user_email"
                                    name="user_email"
                                    variant="outlined"
                                    fullWidth
                                    defaultValue={data.emails}
                                    // key={"user_email" + i}
                                    onChange={(e) => {
                                        // props.compusArr.push(e.target.value)
                                        var _tempData = customData;
                                        _tempData[i].emails = e.target.value;
                                        props.setCustomData(_tempData);
                                    }}
                                />
                            </Grid>
                        </Grid>
                    </div>
                    <div className={classes.addRemove}>

                        <Fab size="small" color="primary" aria-label="add" className={classes.margin}
                        //  key={"remove" + i}
                        >
                            <RemoveIcon
                                onClick={() => props.removeCustom(i)}
                            />
                        </Fab>
                    </div>
                </div>
            )
        )
    )

}
