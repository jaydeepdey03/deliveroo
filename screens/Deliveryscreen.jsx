import { useNavigation } from '@react-navigation/native'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { XMarkIcon } from 'react-native-heroicons/solid'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as Progress from 'react-native-progress';
import { useSelector } from 'react-redux';
import MapView from 'react-native-maps';
import { selectRestaurant } from '../Redux/RestaurantSlice';

const Deliveryscreen = () => {
    const navigation = useNavigation()

    const restaurant = useSelector(selectRestaurant)
    return (
        <View className="bg-[#00CCBB] flex-1">
            <SafeAreaView className="z-50">
                <View className="flex-row justify-between items-center p-5">
                    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                        <XMarkIcon color={"white"} size={30} />
                    </TouchableOpacity>
                    <Text className="font-light text-white text-lg">Order Help</Text>
                </View>
                <View className="bg-white mx-5 my-2 rounded-md z-50 p-6 shadow-md">
                    <View className="flex-row justify-between">
                        <View className="">
                            <Text className="text-lg text-gray-400">Estimated Arrival</Text>
                            <Text className="text-4xl font-bold">45-50 Mins</Text>
                        </View>
                        <Image source={{ uri: "http://links.papareact.com/fls" }} className="w-20 h-20" />
                    </View>
                    <Progress.Bar size={30} color="#00CCBB" indeterminate={true} />

                    <Text className="mt-3 text-gray-500">
                        Your Order at {restaurant.title} is being Prepared
                    </Text>
                </View>
            </SafeAreaView>

            <MapView
            initialRegion={{
                latitude: 22.622893,
                longitude: 88.441683,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,
            }}
            className="flex-1 -mt-10 z-0"
            mapType='mutedStandard'
            >
                <MapView.Marker
                coordinate={{
                    latitude: 22.622893,
                    longitude: 88.441683,

                }}
                title={restaurant.title}
                description={restaurant.shortDescription}
                identifier="origin"
                pinColor="#E44141"
                />
            </MapView>

            <SafeAreaView className="bg-white flex-row items-center space-x-5 h-28 pb-8">
                <Image source={{uri: 'https://links.papareact.com/wru'}} className="h-12 w-12 bg-gray-300 rounded-full ml-5 p-4" />
                <View className="flex-1">
                    <Text className="text-lg">Jaydeep Dey</Text>
                    <Text className="text-gray-400">Your Rider</Text>
                </View>

                <Text className="text-[#00CCBB] text-lg mr-5 font-bold">Call</Text>
            </SafeAreaView>
        </View>
    )
}

export default Deliveryscreen
