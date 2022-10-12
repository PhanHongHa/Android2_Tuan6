import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const ItemStudent = ({ item }) => {
    return (
        <View style={styles.container}>
            <View
                style={{
                    height: 50,
                    borderWidth: 2,
                    width: '20%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'white',
                }}
            >
                <Text style={{ color: 'white' }}>{item.id}</Text>
            </View>
            <Text style={{ height: 50, borderWidth: 2, width: '60%', padding: 15, color: 'white' }}>{item.name}</Text>
            <TouchableOpacity
                style={{ height: 50, borderWidth: 2, width: '20%', justifyContent: 'center', alignItems: 'center' }}
            >
                <Text style={{color: 'white'}}>Remove</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderWidth: 3,
    },
});

export default ItemStudent;
