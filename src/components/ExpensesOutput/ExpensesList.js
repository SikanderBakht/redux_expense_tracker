import React from 'react'
import { Text, FlatList, StyleSheet } from 'react-native'

const ExpensesList = ({ expenses }) => {
    return (
        <FlatList
            keyExtractor={(item) => item.id}
            data={expenses}
            renderItem={({ item }) => {
                return <Text>{item.description}</Text>
            }} />
    )
}

const styles = StyleSheet.create({

})

export default ExpensesList