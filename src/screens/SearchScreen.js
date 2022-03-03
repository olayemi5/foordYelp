import React, { useState } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useResult from "../hooks/useResult";
import ResultList from "../components/ResultList";

const SearchScreen = () => {

    const [term, setSearchTerm] = useState('');
    const [searchApi, results, errorMessage] = useResult();

    const filterResultByPrice = (price) =>{
        return results.filter(result => {
            return result.price === price
        })
    }

    return (
        <>
            <SearchBar 
                term={term} 
                onTermChange={setSearchTerm} 
                onTermSubmit={() => searchApi(term)}
            />
            { errorMessage ? <Text>{errorMessage}</Text> : null }
            <ScrollView>
                <ResultList results={filterResultByPrice('$')} title="Cost Effective"/>
                <ResultList results={filterResultByPrice('$$')} title="Bit Pricer"/>
                <ResultList results={filterResultByPrice('$$$')} title="Big Spender"/>
                <ResultList results={filterResultByPrice('$$$$')} title="Large Spender"/>
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#fff',
    }
})

export default SearchScreen