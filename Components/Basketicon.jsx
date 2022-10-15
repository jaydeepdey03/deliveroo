import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text } from 'react-native'
import { useSelector } from 'react-redux'
import { selectBasketItems, selectBasketTotal } from '../Redux/features/basketSlice'

const Basketicon = () => {
    const basketTotal = useSelector(selectBasketTotal)
    const navigate = useNavigation()
    const items = useSelector(selectBasketItems)

    return (
        <View>
            <Text>BasketIcon</Text>
        </View>
    )
}

export default Basketicon
