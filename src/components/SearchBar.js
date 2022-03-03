import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit}) => {
    return (
        <View style={styles.backgroundStyle}>
            <Feather name="search" style={styles.iconStyle} color="black" />
            <TextInput 
                autoCorrect= {false}
                autoCapitalize='none'
                placeholder="Search" 
                style={styles.textInput}
                value={term}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    backgroundStyle: {
        flexDirection:"row",
        backgroundColor: '#d6d6d6',
        height: 50,
        borderRadius:10,
        marginHorizontal:15,
        marginTop:10,
        marginBottom:10
    },
    textInput: {
        flex:1,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 35,
        alignSelf:'center',
        marginHorizontal: 15
    }
})

export default SearchBar