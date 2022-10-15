import { useNavigation, useRoute } from '@react-navigation/native'
import { useEffect, useLayoutEffect } from 'react'
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import { ArrowLeftIcon, ChevronRightIcon, QuestionMarkCircleIcon, StarIcon } from 'react-native-heroicons/solid'
import { useDispatch } from 'react-redux'
import Basketicon from '../Components/Basketicon'
import Dishrow from '../Components/Dishrow'
import { setRestaurant } from '../Redux/RestaurantSlice'
import { urlFor } from '../sanity'

const Restaurantscreen = () => {
    const navigation = useNavigation()
    const dispatch = useDispatch();
    const { params: {
        id, imgUrl, title, rating, genre, address, short_description, dishes, long, lat
    } } = useRoute()

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])

    useEffect(()=> {
        dispatch(setRestaurant({id, imgUrl, title, rating, genre, address, short_description, dishes, long, lat}))
    }, [dispatch])

    return (
        <>
            <Basketicon />
            <ScrollView>
                <View className="relative">
                    <Image source={{ uri: urlFor(imgUrl).url() }} className="w-full h-56 bg-gray-300 p-4" />
                    <TouchableOpacity onPress={navigation.goBack} className="absolute top-14 left-5 bg-gray-100 rounded-full p-2">
                        <ArrowLeftIcon size={20} color={"#00CCBB"} />
                    </TouchableOpacity>
                </View>
                <View className="bg-white">
                    <View className="p-4 pt-4">
                        <Text className="text-2xl font-bold">{title}</Text>
                        <View className="flex-row space-x-2 my-1">
                            <View className="flex-row items-center space-x-1">
                                <StarIcon color="green" opacity={0.5} size={22} />
                                <Text className="text-xs text-gray-500">
                                    <Text className="text-green-500">{rating}</Text>{genre}
                                </Text>
                            </View>
                        </View>
                        <Text className="text-gray-500">{short_description}</Text>
                    </View>

                    <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-300">
                        <QuestionMarkCircleIcon size={22} color={"#00CCBB"} opacity={0.6} />
                        <Text className="pl-2 flex-1 text-md font-bold">
                            Have a food allergy?
                        </Text>
                        <ChevronRightIcon color={"#00CCBB"} />
                    </TouchableOpacity>
                </View>

                <View>
                    <Text className="px-4 pt-6 mb-3 font-bold text-xl text-gray-700">Menu</Text>
                </View>
                {/* Dish Row */}
                {dishes.map(dish => {
                    return (
                        <Dishrow
                            key={dish._id}
                            id={dish._id}
                            name={dish.name}
                            description={dish.shortDescription}
                            price={dish.price}
                            image={dish.image}
                        />
                    )
                })}

            </ScrollView>
        </>
    )
}

export default Restaurantscreen
