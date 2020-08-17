import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import Colors from './styles/Colors';

const styles = StyleSheet.create({
    scrollView: {
      backgroundColor: Colors.lighter,
    },
    header: {
        backgroundColor: '#00FF47',
    },
    headerText: {
        fontSize: 22,
        fontWeight: "bold",
        justifyContent: 'center',
        textAlign: "center",
        marginTop: 10,
        marginBottom: 10
    },
    body: {
      backgroundColor: Colors.white,
    },

});

export default styles;