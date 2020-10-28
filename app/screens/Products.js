import React from 'react';
import {Text, View, StyleSheet, ScrollView, Button} from 'react-native';
import { Table, TableWrapper, Col, Row, Rows } from "react-native-table-component";
import ScreenName from '../components/ScreenName';
import ScreenTwo from './ScreenTwo';

export default class ProductsScreen extends React.Component{

    static navigationOptions = {
        // need to add navigation options
    };

    constructor(props){
        super(props);
        this.state = {
            loading:true,
            tableRowHead:['Name', 'Description','Price'],
            tableData:[]
        };
    }

    componentDidMount(){
        this.fetchWorkOrder();
    }

    fetchWorkOrder(){
        fetch("http://192.168.8.100:3000/products")
        .then(response => response.json())
        .then((responseJson)=>{
            this.setState({
                loading:false,
                tableData: responseJson
            })
        })
        .catch() //catching errors if there are any
    }

    fillTableDataArray(){
        const state = this.state;
        var nameTableData = [];
        var descTableData = [];
        var priceTableData = [];
        var dataArray = [];

        state.tableData.forEach(function(item){
            nameTableData.push(item.name);
            descTableData.push(item.description);
            priceTableData.push(item.price);
        })        
        dataArray.push(nameTableData);
        dataArray.push(descTableData);
        dataArray.push(priceTableData);

        return dataArray;

    }

    render(){
        const state = this.state;
        var dataArray = this.fillTableDataArray()
        
        return (
            <View style={styles.container}>
                <ScreenName name={'Products Table: '}/>
                <Button title = 'Next' color='#1abc9c' onPress={() => this.props.navigation.navigate('ScreenTwo')}></Button>
                <ScrollView horizontal={true} style={styles.dataWrapper}>
                    <Table style={styles.wrapper} borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
                        <Col data={state.tableRowHead} heightArr={[90,90,90]} style={styles.title} textStyle={styles.text}/>
                        <Rows data={dataArray} style={styles.row} textStyle={styles.text}/> 
                    </Table>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: { backgroundColor: '#f1f8ff' },
    wrapper: { marginTop: 25, height: 270, flexDirection: 'row' },
    dataWrapper: { marginTop: -1 },
    title: { width: 120, flex: 1, backgroundColor: '#f6f8fa' },
    row: {  height: 90, width: 700},
    text: { textAlign: 'center' }
  });