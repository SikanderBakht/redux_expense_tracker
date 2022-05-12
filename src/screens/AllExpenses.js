import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';

const AllExpenses = () => {
    return (
        <ExpensesOutput expensesPeriod='Total'/>
    )
}

const styles = StyleSheet.create({

})

export default AllExpenses