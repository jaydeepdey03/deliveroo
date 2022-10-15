import { useNavigation } from '@react-navigation/native'
import { useMemo, useState } from 'react'
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import { XCircleIcon } from 'react-native-heroicons/solid'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromBasket, selectBasketItems, selectBasketTotal } from '../Redux/features/basketSlice'
import { selectRestaurant } from '../Redux/RestaurantSlice'
import { urlFor } from '../sanity'
import Currency from 'react-currency-formatter'

const Basketscreen = () => {
    const navigation = useNavigation()
    const restaurant = useSelector(selectRestaurant)
    const items = useSelector(selectBasketItems)
    const basketTotal = useSelector(selectBasketTotal)
    const [groupedItem, setGroupedItem] = useState([])
    const dispatch = useDispatch()

    useMemo(() => {
        const groupItem = items.reduce((prev, curr) => {
            if (!prev[curr.id]) {
                prev[curr.id] = [curr]
            } else {
                prev[curr.id].push(curr)
            }
            return prev
        }, {})
        setGroupedItem(groupItem)
    }, [items])

    // console.log(groupedItem)
    return (
        <SafeAreaView className="flex-1 bg-white">
            <View className="flex-1 bg-gray-100">
                <View className="p-5 border-b border-b-gray-100 bg-white shadow-xl">
                    <View>
                        <Text className="text-lg font-bold text-center">Basket</Text>
                        <Text className="text-center text-gray-400">{restaurant.title}</Text>
                    </View>
                    <TouchableOpacity onPress={navigation.goBack} className="rounded-full bg-gray-100 absolute top-3 right-5">
                        <XCircleIcon color={"#00CCBB"} height={50} width={50} />
                    </TouchableOpacity>
                </View>
                <View className="flex-row items-center space-x-4 px-4 py-4 bg-white my-5">
                    <Image className="h-7 w-9 bg-gray-300 p-4 rounded-full" source={{ uri: 'https://links.papareact.com/wru' }} />
                    <Text className="flex-1">Delivers in 5-10 mins</Text>
                    <TouchableOpacity>
                        <Text className="text-[#00CCBB]">Change</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView className="divide-y divide-gray-200">
                    {Object.entries(groupedItem).map(([key, items]) => {
                        return (
                            <View key={key} className="flex-row items-center space-x-3 bg-white py-2 px-5">
                                <Text className="text-[#1d968c]">{items.length} x</Text>
                                <Image source={{ uri: urlFor(items[0]?.image).url() }} className="h-12 w-12 rounded-full" />
                                <Text className="flex-1">{items[0]?.name}</Text>
                                <Text className="text-gray-600">
                                    <Currency quantity={items[0]?.price} currency={"INR"} />
                                </Text>
                                <TouchableOpacity onPress={() => dispatch(removeFromBasket({ id: key }))}>
                                    <Text className="text-[#00CCBB] text-xs">Remove</Text>
                                </TouchableOpacity>
                            </View>
                        )
                    })}
                </ScrollView>
                <View className="p-5 bg-white mt-5 space-y-4">
                    <View className="flex-row justify-between">
                        <Text className="text-gray-400">Subtotal</Text>
                        <Text><Currency quantity={basketTotal} currency={"INR"} /></Text>
                    </View>
                    <View className="flex-row justify-between">
                        <Text className="text-gray-400">Delivery Fee</Text>
                        <Text><Currency quantity={basketTotal==0 ? 0: 30} currency={"INR"} /></Text>
                    </View>
                    <View className="flex-row justify-between">
                        <Text className="text-gray-400">Order Total</Text>
                        <Text><Currency quantity={basketTotal == 0? 0: basketTotal+ 30} currency={"INR"} /></Text>
                    </View>
                    <TouchableOpacity onPress={()=>navigation.navigate('LoadingScreen')} className="rounded-lg bg-[#00CCBB] p-4">
                        <Text className="text-center text-white text-lg font-bold">Place Order</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Basketscreen
