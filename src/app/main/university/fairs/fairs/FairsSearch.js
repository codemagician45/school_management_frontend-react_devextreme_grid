import React, { useEffect, useState } from 'react'
import withReducer from 'app/store/withReducer'
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import * as Actions from '../../../store/actions';
import reducer from '../../../store/reducers'
import Paper from '@material-ui/core/Paper';
import { Typography, Grid, Select } from '@material-ui/core'
import { SelectBox, RangeSlider, DateBox, Button } from 'devextreme-react';
import DataGrid, {
    Column,
    Paging,
    SearchPanel
} from 'devextreme-react/data-grid';
const useStyle = makeStyles(theme => ({
    item: {
        width: '80%',
        margin: 'auto'
    },
    searchBtn: {
        margin: 'auto'
    }
}));

function FairsSearch() {

    const classses = useStyle();
    const dispatch = useDispatch();
    const fairs = useSelector(({ school }) => school.fairs.data);
    const curriculums = useSelector(({ school }) => school.fairs.curriculums);
    const schools = useSelector(({ school }) => school.fairs.schools);

    const [selectedCur, setCur] = useState("All");
    const [tuitionRange, setTuitionRange] = useState({ start: 0, end: 1000 });
    const [stuNumRange, setStuNumRange] = useState({ start: 0, end: 1000 });
    const [from, setFrom] = useState(0);
    const [to, setTo] = useState(100000000000000);
    const [fairSearchRes, setFairSearchRes] = useState([])

    const curriculumData = ["All"];

    useEffect(() => {
        dispatch(Actions.getFairsSch());
    }, [dispatch])

    useEffect(() => {
        dispatch(Actions.getCurriculums());
    }, [dispatch])

    useEffect(() => {
        dispatch(Actions.getSchools());
    }, [dispatch])


    if (curriculums.length != 0) {
        curriculums.map(curriculum => curriculumData.push(curriculum.label))
    };

    const rangeChangeT = (e) => {
        setTuitionRange({
            start: e.start,
            end: e.end
        })
    };
    const rangeChangeS = (e) => {
        setStuNumRange({
            start: e.start,
            end: e.end
        })
    };

    const today = new Date();

    const FilterFairs = () => {

        if (selectedCur != "All") {

            const cur = curriculums.filter(c => c.label && c.label == selectedCur);

            const curFilters = schools.filter((school) => school.curriculum_id == cur[0].id)

            const tuiFilters = curFilters.filter((school) => school.fees_grade11 + school.fees_grade12 > tuitionRange.start && school.fees_grade11 + school.fees_grade12 < tuitionRange.end)
            const stuFilters = tuiFilters.filter((school) => school.number_grade11 + school.number_grade12 > stuNumRange.start && school.number_grade11 + school.number_grade12 < stuNumRange.end)

            const iniFairs = [];
            stuFilters.map(result => iniFairs.push(result.id));

            const fairsBeforeDate = fairs.filter(fair => iniFairs.indexOf(fair.school_id) > -1)

            const fromFairs = fairsBeforeDate.filter(fair => from < Date.parse(fair.start_date));
            const endFairs = fromFairs.filter(fair => to > Date.parse(fair.end_date))
            // console.log("not all here", endFairs)
            setFairSearchRes(endFairs)

        }

        else {

            const curFilters = schools
            const tuiFilters = curFilters.filter((school) => school.fees_grade11 + school.fees_grade12 > tuitionRange.start && school.fees_grade11 + school.fees_grade12 < tuitionRange.end)
            const stuFilters = tuiFilters.filter((school) => school.number_grade11 + school.number_grade12 > stuNumRange.start && school.number_grade11 + school.number_grade12 < stuNumRange.end)

            const iniFairs = [];
            stuFilters.map(result => iniFairs.push(result.id));

            const fairsBeforeDate = fairs.filter(fair => iniFairs.indexOf(fair.school_id) > -1)

            const fromFairs = fairsBeforeDate.filter(fair => from < Date.parse(fair.start_date));
            const endFairs = fromFairs.filter(fair => to > Date.parse(fair.end_date))

            setFairSearchRes(endFairs)


        }

        console.log("finalRes", fairSearchRes)
    }
    // console.log(schools)
    // console.log(selectedCur);
    // console.log(tuitionRange);
    // console.log(stuNumRange);
    // console.log(from);
    // console.log(to)

    return (
        curriculums &&
        (
            <Paper className="w-full mt-24">
                <div className="p-16">
                    <Typography className="text-24">Fairs</Typography>
                    <Grid container spacing={6} className={classses.item} >
                        <Grid item xs={12} sm={4}>
                            <Typography className="text-16">Curriculum</Typography>
                            <SelectBox dataSource={curriculumData}
                                defaultValue={"All"}
                                // value={currId}
                                onValueChanged={(e) => setCur(e.value)}
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
                            <Typography className="text-16">Tuition Fees:</Typography>
                            <RangeSlider min={0} max={1000} defaultValue={[0, 1000]} tooltip={{
                                enabled: true,
                                // format,
                                showMode: 'always',
                                position: 'bottom'
                            }}
                                onValueChanged={(e) => rangeChangeT(e)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Typography className="text-16">Student's Number:</Typography>
                            <RangeSlider min={0} max={1000} defaultValue={[0, 1000]} tooltip={{
                                enabled: true,
                                // format,
                                showMode: 'always',
                                position: 'bottom'
                            }}
                                onValueChanged={(e) => rangeChangeS(e)}
                            />
                        </Grid>
                    </Grid>

                    <Grid container spacing={6} className={classses.item} >
                        <Grid item xs={12} sm={4}>
                            <Typography className="text-16">From</Typography>
                            <DateBox
                                type="datetime"
                                onValueChanged={(e) => setFrom(Date.parse(e.value))}
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Typography className="text-16">To</Typography>
                            <DateBox
                                type="datetime"
                                onValueChanged={(e) => setTo(Date.parse(e.value))}
                            />
                        </Grid>
                        <Grid item xs={12} sm={4} className={classses.searchBtn}>
                            <Button
                                width={120}
                                text="Search"
                                type="success"
                                stylingMode="contained"
                                className="float-right"
                                onClick={FilterFairs}
                            />
                        </Grid>


                    </Grid>

                    <DataGrid
                        dataSource={fairSearchRes}
                        // keyExpr="id"
                        showBorders={true}
                        columnAutoWidth={true}
                        className="mt-30"
                    >
                        <Paging enabled={true} />
                        <SearchPanel visible={true} width={240} placeholder="Search..." />
                        <Column dataField="start_date" caption="Start Date" dataType="datetime" />
                        <Column dataField="end_date" caption="End Date" dataType="datetime" />
                        <Column dataField="students_grade12_number" caption="Number of grade 12 students" />
                        <Column dataField="students_grade11_number" caption="Number of grade 11 students" />
                        <Column dataField="universities_max" caption="Universities Max Number" />
                    </DataGrid>
                </div>
            </Paper>
        )
    )
}

export default withReducer('school', reducer)(FairsSearch);