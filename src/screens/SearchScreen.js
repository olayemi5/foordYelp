import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";

const SearchScreen = () => {

    const [term, setSearchTerm] = useState('');

    return (
        <View style={styles.body}>
            <SearchBar 
                term={term} 
                onTermChange={newTerm => setSearchTerm(newTerm)} 
                onTermSubmit={ () => console.log('submitted') }
            />
            <Text>{term}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#fff',
        flex: 1
    }
})

export default SearchScreen