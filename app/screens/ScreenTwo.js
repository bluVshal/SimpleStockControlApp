import React from 'react';
import {View, StyleSheet} from 'react-native';

import ScreenName from '../components/ScreenName'

export default class ScreenTwo extends React.Component{

    static navigationOptions = {

    };

    render(){
        return (
            <View style={styles.container}>
                <ScreenName name={'Product View >> '}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});