import React from 'react'
import { Pressable, View, Text, StyleSheet } from 'react-native'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'

const ExpenseItem = ({description, amount, date}) => {
    return (
        <Pressable>
            <View>
                <Text>{description}</Text>
                <Text>{date}</Text>
            </View>
            <View>
                <Text>{amount}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({

})

export default ExpenseItem
