import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Colors from './styles/Colors';
import styles  from './Style';


export default class App extends Component {
    render() {
        return  <SafeAreaView>
                    <ScrollView>
                        <View style={styles.header}>
                            <Text style={styles.headerText}>AnsWords</Text>
                        </View>
                    </ScrollView>
                </SafeAreaView>
    }
}
