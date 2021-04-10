import React,{useContext,useState,useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native ';
import AutoStack from './Authstack';

const Router=()=>{
    return(
<NavigationContainer>
    <AuthStack/>
</NavigationContainer>
    );   
};
export default Routes;
