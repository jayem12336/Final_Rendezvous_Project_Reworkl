import React, { useEffect } from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import theme from '../utils/theme';

import { createTheme, ThemeProvider } from '@mui/material';

import { useDispatch, useSelector } from "react-redux";

import { auth } from '../utils/firebase';

import { setUser } from '../redux/actions/userAction';

// nonuserhomepage
import Login from '../pages/nonuserpages/Login';
import Register from '../pages/nonuserpages/Register';
import Home from '../pages/nonuserpages/Home';

//userhomepage
import DashboardUser from '../pages/userpages/dashboarduser/DashboarduUser';
import DashboardProfile from '../pages/userpages/dashboardprofile/DashboardProfile';
import DashboardClass from '../pages/userpages/dashboardclassfolder/DashboardClass';
import DashboardCalendar from '../pages/userpages/dashboardcalendar/DashboardCalendar';
import DashboardFile from '../pages/userpages/dashboardfile/DashboardFile';
import DashboardAbout from '../pages/userpages/dashboardabout/DashboardAbout';

//main classroom
import ClassAnnouncement from '../pages/userpages/mainclassroom/classlinks/classannouncement/ClassAnnouncement';
import ClassActivity from '../pages/userpages/mainclassroom/classlinks/classactivity/ClassActivity';
import ClassCreateActivity from '../pages/userpages/mainclassroom/classlinks/classactivity/ClassCreateActivity';
import ClassAssignActivity from '../pages/userpages/mainclassroom/classlinks/classactivity/ClassAssignAcitivity';
import ClassJoinMeet from '../pages/userpages/mainclassroom/classlinks/classjoinmeet/ClassJoinMeet';
import ClassPeople from '../pages/userpages/mainclassroom/classlinks/classpeople/ClassPeople';
import ClassQuizExam from '../pages/userpages/mainclassroom/classlinks/classquizexam/ClassQuizExam';
import ClassCreateQuizExam from '../pages/userpages/mainclassroom/classlinks/classquizexam/ClassCreateQuizExam';
import ClassAssignQuizExam from '../pages/userpages/mainclassroom/classlinks/classquizexam/ClassAssignQuizExam';
import ClassSetting from '../pages/userpages/mainclassroom/classlinks/classsetting/ClassSetting';

export default function RouterComponent() {

    const dispatch = useDispatch();

    const { user } = useSelector((state) => state);

    useEffect(() => {
        auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                dispatch(setUser(authUser));
            } else {
                dispatch(setUser(null));
            }
        })
    }, [dispatch])

    console.log(user);

    const THEME = createTheme(theme);

    return (
        <ThemeProvider theme={THEME}>
            <Router>
                <Switch>
                    {/* noneuser */}
                    <Route component={Home} path="/" exact />
                    <Route component={Login} path="/login" exact />
                    <Route component={Register} path="/register" exact />

                    {/* userhomepage */}
                    <Route component={DashboardUser} path="/dashboarduser" exact />
                    <Route component={DashboardProfile} path="/dashboardprofile" exact />
                    <Route component={DashboardClass} path="/dashboardclass" exact />
                    <Route component={DashboardCalendar} path="/dashboardcalendar" exact />
                    <Route component={DashboardFile} path="/dashboardfile" exact />
                    <Route component={DashboardAbout} path="/dashboardabout" exact />

                    {/* mainclassroom */}
                    <Route component={ClassAnnouncement} path="/classannouncement/:id" exact />
                    <Route component={ClassActivity} path="/classactivity/:id" exact />
                    <Route component={ClassAssignActivity} path="/classassignactivity/:id" exact />
                    <Route component={ClassCreateActivity} path="/classcreateactivity/:id" exact />
                    <Route component={ClassJoinMeet} path="/classjoinmeet/:id" exact />
                    <Route component={ClassPeople} path="/classpeople/:id" exact />
                    <Route component={ClassQuizExam} path="/classquizexam/:id" exact />
                    <Route component={ClassAssignQuizExam} path="/classassignquizexam/:id" exact />
                    <Route component={ClassCreateQuizExam} path="/classcreatequizexam/:id" exact />
                    <Route component={ClassSetting} path="/classsetting/:id" exact />
                </Switch>
            </Router>
        </ThemeProvider>

    )
}