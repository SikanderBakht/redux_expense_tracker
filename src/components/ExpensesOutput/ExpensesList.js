import React from 'react'
import { Text, FlatList, StyleSheet } from 'react-native'
import ExpenseItem from './ExpenseItem'


const renderExpenseItem = (itemData) => {
    return <ExpenseItem {...itemData.item}/>
}

const ExpensesList = ({ expenses }) => {
    return (
        <FlatList
            keyExtractor={(item) => item.id}
            data={expenses}
            renderItem={renderExpenseItem} />
    )
}

const styles = StyleSheet.create({

})

export default ExpensesList