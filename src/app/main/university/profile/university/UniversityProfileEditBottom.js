import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
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
    if (customData.length != 0)
        console.log("customData", customData)

    const [compus, setCompus] = useState('');
    console.log(compus)
    // const setCompus = (e, i) => {
    //     // customData[i].compus = e.target.value
    //     console.log(customData[i]);
    //     console.log(e.target.value);
    // }
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
                                    value={data.compus}
                                    onChange={(e, i) => setCompus(e.targe.value)}
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
                                    value={data.country}
                                // key={"country" + i}
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
                                    value={data.city}
                                // key={"city" + i}
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
                                    value={data.address}
                                // key={"address" + i}
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
                                    value={data.users}
                                // key={"user_name" + i}
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
                                    value={data.emails}
                                // key={"user_email" + i}
                                />
                            </Grid>
                        </Grid>
                    </div>
                    <div className={classes.addRemove}>
                        {/* <Fab size="small" color="secondary" aria-label="add" className={classes.margin}
                            // key={"add" + i} 
                            >
                                <AddIcon onClick={() => props.addCustom()} />
                            </Fab> */}
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
    // else
    //     return (

    //         <div className="pr-24 pl-24 flex">
    //             <div className={classes.bottomDiv}>
    //                 <Grid container spacing={1}>
    //                     <Grid item xs={6} sm={2}>
    //                         <TextField
    //                             className="mt-8 mb-8 mr-12"
    //                             label="Compus"
    //                             type="text"
    //                             // id="compus"
    //                             name="compus"
    //                             variant="outlined"
    //                             fullWidth
    //                         // key={"compus" + i}
    //                         />
    //                     </Grid>
    //                     <Grid item xs={6} sm={2}>
    //                         <TextField
    //                             className="mt-8 mb-8 mr-12"
    //                             label="Country"
    //                             type="text"
    //                             // id="country"
    //                             name="country"
    //                             variant="outlined"
    //                             fullWidth
    //                         />
    //                     </Grid>
    //                     <Grid item xs={6} sm={2}>
    //                         <TextField
    //                             className="mt-8 mb-8 mr-12"
    //                             label="City"
    //                             type="text"
    //                             // id="city"
    //                             name="city"
    //                             variant="outlined"
    //                             fullWidth
    //                         />
    //                     </Grid>
    //                     <Grid item xs={6} sm={2}>
    //                         <TextField
    //                             className="mt-8 mb-8 mr-12"
    //                             label="Address"
    //                             type="text"
    //                             // id="address"
    //                             name="address"
    //                             variant="outlined"
    //                             fullWidth
    //                         />
    //                     </Grid>
    //                     <Grid item xs={6} sm={2}>
    //                         <TextField
    //                             className="mt-8 mb-8 mr-12"
    //                             label="User Name"
    //                             type="text"
    //                             // id="user_name"
    //                             name="user_name"
    //                             variant="outlined"
    //                             fullWidth
    //                         />
    //                     </Grid>
    //                     <Grid item xs={6} sm={2}>
    //                         <TextField
    //                             className="mt-8 mb-8 mr-12"
    //                             label="Email"
    //                             type="text"
    //                             // id="user_email"
    //                             name="user_email"
    //                             variant="outlined"
    //                             fullWidth
    //                         />
    //                     </Grid>
    //                 </Grid>
    //             </div>
    //             <div className={classes.addRemove}>
    //                 <Fab size="small" color="secondary" aria-label="add" className={classes.margin}
    //                 >
    //                     <AddIcon onClick={() => props.addCustom()} />
    //                 </Fab>
    //                 <Fab size="small" color="primary" aria-label="add" className={classes.margin}
    //                 >
    //                     <RemoveIcon
    //                         onClick={() => props.removeCustom()}
    //                     />
    //                 </Fab>
    //             </div>
    //         </div>
    //     )

}
