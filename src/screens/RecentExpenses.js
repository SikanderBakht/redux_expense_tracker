import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput'

const RecentExpenses = () => {
    return (
        <ExpensesOutput expensesPeriod='Last 7 days'/>
    )
}

const styles = StyleSheet.create({
    
})

export default RecentExpenses