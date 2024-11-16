// src/navigation/routes.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreens';
import Welcome from '../../components/LoginComponents/Welcome'
import CreateBussinessAccountScreen from '../../components/LoginComponents/CreateBussinesAccountScreen'
import CreateUserAccountScreen from '../../components/LoginComponents/CreateUserAccountScreen'
import ChoseAccount from '../../components/LoginComponents/ChoseAccount'
import LoadingScreen from '../../components/LoginComponents/LoadingScreen'
import LoginScreen from '../../components/LoginComponents/LoginScreen'
import LoginScreenBussiness from '../../components/LoginComponents/LoginScreenBussiness'
import forgotPass from '../../components/LoginComponents/forgotPass'

import AppliedJobsScreen from '../../components/UserAppComponents/AppliedJobsScreen'
import EditProfile from '../../components/UserAppComponents/EditProfile'
import FilterScreen from '../../components/UserAppComponents/FilterScreen'
import Footer from '../../components/UserAppComponents/Footer'
import JobDetails from '../../components/UserAppComponents/JobDetails'
import Menu from '../../components/UserAppComponents/Menu'
import Profile from '../../components/UserAppComponents/Profile'
import RecentJobsScreen from '../../components/UserAppComponents/RecentJobsScreen'
import SearchScreen from '../../components/UserAppComponents/SearchScreen'
import noResult from '../../components/UserAppComponents/noResult'

import AboutUs from '../../components/CompanyComponents/AboutUs'
import AddJob from '../../components/CompanyComponents/AddJob'
import CompanyPage from '../../components/CompanyComponents/CompanyPage'
import JobsSection from '../../components/CompanyComponents/JobsSection'


const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">

        {/* Login routes */}
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="CreateBussinessAccountScreen" component={CreateBussinessAccountScreen} />
        <Stack.Screen name="CreateUserAccountScreen" component={CreateUserAccountScreen} />
        <Stack.Screen name="ChoseAccount" component={ChoseAccount} />
        <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="forgotPass" component={forgotPass} />
        <Stack.Screen name="LoginScreenBussiness" component={LoginScreenBussiness} />

        {/* User routes */}

        <Stack.Screen name="noResult" component={noResult} />
        <Stack.Screen name="SearchScreen" component={SearchScreen} />
        <Stack.Screen name="RecentJobsScreen" component={RecentJobsScreen} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="JobDetails" component={JobDetails} />
        <Stack.Screen name="Footer" component={Footer} />
        <Stack.Screen name="FilterScreen" component={FilterScreen} />
        <Stack.Screen name="AppliedJobsScreen" component={AppliedJobsScreen} />
        <Stack.Screen name="EditProfile" component={EditProfile} />

      {/* Company routes */}

      <Stack.Screen name="AboutUs" component={AboutUs} />
      <Stack.Screen name="AddJob" component={AddJob} />
      <Stack.Screen name="CompanyPage" component={CompanyPage} />
      <Stack.Screen name="JobsSection" component={JobsSection} />


      
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;