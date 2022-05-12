import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

const ManageExpense = () => {
    return (
        <View>
            <Text>
                ManageExpense
                <Ionicons name="hourglass" size={size} color={color} />
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    
})

export default ManageExpense