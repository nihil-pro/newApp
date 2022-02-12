import { observer } from "mobx-react-lite";
import React from "react";
import store from "../store/store";
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export const Component = observer(() => {
    const { data, increase } = store

    if (!data) return null

    return (
        <View style={styles.container}>
            <Text>{data}</Text>
            
            <View>
            <TouchableOpacity onPress={increase}>
                <Text>Click</Text>
            </TouchableOpacity>
            </View>
            
        </View>
    )
})

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });