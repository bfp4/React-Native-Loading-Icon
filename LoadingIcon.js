import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import * as Animatable from 'react-native-animatable';

import constansts from "../constansts"

export default function Loading(props){
    const flipAnim = {
        0: {
            transform: [{rotate: "0deg"}]
        },
        0.25: {
            transform: [{rotate: "180deg"}]
        },
        0.5: {
            transform: [{rotate: "180deg"}]
        },
        0.75: {
            transform: [{rotate: "360deg"}]
        },
        1: {
            transform: [{rotate: "360deg"}]
        }
    }

    const fillAnim = {
        0: {
            height: "0%"
        },
        0.25: {
            height: "0%"
        },
        0.5: {
            height: "100%"
        },
        0.75: {
           height: "100%"
        },
        1: {
            height: "0%"
        }
    }
    
    return (
        <View style={styles.loadingCon}>
            <Animatable.View 
                style={styles.loader} 
                animation={flipAnim}
                duration={2000}
                iterationCount="infinite"
                easing="linear"
            >
                <Animatable.View
                    style={styles.loaderInner}
                    animation={fillAnim}
                    duration={2000}
                    iterationCount="infinite"
                    easing="linear"
                >
                </Animatable.View>
            </Animatable.View>
        </View>
    )
}

const styles = StyleSheet.create({
    loadingCon: {
        height: "75%",
        justifyContent: "center",
        alignItems: "center"
    },
    loader: {
        width: 40,
        height: 40,
        borderWidth: 5,
        borderColor: constansts.colors.blues,
        borderRadius: 4
    },
    loaderInner: {
        width: "100%",
        backgroundColor: constansts.colors.blues,
    }
})