import React, { useEffect } from 'react'
import withReducer from 'app/store/withReducer'
import { useDispatch, useSelector } from 'react-redux';
import * as Actions from '../../../school/store/actions';
import reducer from '../../../school/store/reducers'
import Paper from '@material-ui/core/Paper';
import { Typography, Grid, Select } from '@material-ui/core'
import { SelectBox } from 'devextreme-react/select-box';


function FairsSearch() {

    const dispatch = useDispatch();
    const fairs = useSelector(({ school }) => school.fairs.data);
    const curriculums = useSelector(({ school }) => school.fairs.curriculums);
    console.log(fairs);
    useEffect(() => {
        dispatch(Actions.getFairsSch());
    }, [dispatch])

    // const today = new Date();
    // const pastFairs = fairs.filter((fair) => Date.parse(today) > Date.parse(fair.end_date))

    useEffect(() => {
        dispatch(Actions.getCurriculums());
    }, [dispatch])

    console.log(curriculums)
    const curriculumData = ["All"];
    if (curriculums.length != 0) {
        console.log("curry_mapping")
        curriculums.map(curriculum => curriculumData.push(curriculum.label))
    }

    console.log(curriculumData)
    return (
        curriculums &&
        (
            <Paper className="w-full mt-24">
                <div className="p-16">
                    <Typography className="text-24">Fairs</Typography>
                    <Grid container spacing={3} className="m-40">
                        <Grid item xs={12} sm={4}>
                            <Typography className="text-16">Curriculum</Typography>
                            <SelectBox dataSource={curriculumData}
                                defaultValue={"All"}
                            // displayExpr="Name"
                            // searchEnabled={true}
                            // searchMode={this.state.searchModeOption}
                            // searchExpr={this.state.searchExprOption}
                            // searchTimeout={this.state.searchTimeoutOption}
                            // minSearchLength={this.state.minSearchLengthOption}
                            // showDataBeforeSearch={this.state.showDataBeforeSearchOption} 
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>

                        </Grid>
                        <Grid item xs={12} sm={4}>

                        </Grid>
                    </Grid>
                </div>
            </Paper>
        )
    )
}

export default withReducer('school', reducer)(FairsSearch);