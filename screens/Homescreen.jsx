import { useNavigation } from '@react-navigation/native'
import { useEffect, useLayoutEffect, useState } from 'react'
import { View, Text, Image, TextInput, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AdjustmentsHorizontalIcon, ChevronDownIcon, UserIcon } from "react-native-heroicons/solid";
import { Svg, Path } from 'react-native-svg';
import Categories from '../Components/Categories';
import Featuredrow from '../Components/Featuredrow';
import sanityClient from '../sanity';

const Homescreen = () => {

    const navigation = useNavigation()
    const [featuredCategory, setFeaturedCategory] = useState([])


    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])

    useEffect(() => {
        sanityClient.fetch(`
        *[_type == "featured"]{
            ...,
            restaurant[] -> {
              ...,
              dishes[] ->
            }
          }`).then(data => {
            setFeaturedCategory(data)
            // console.log(data)
        }).catch(err => {
            console.log(err)
        })
    }, [])


    return (
        <>
            <SafeAreaView className="bg-white">
                {/* Header */}
                <View className="flex-row pb-3 items-center space-x-2 w-screen p-3 px-4">
                    <Image className="h-7 w-7 bg-gray-300 p-4 rounded-full" source={{ uri: 'https://links.papareact.com/wru' }} />
                    <View className="flex-1">
                        <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
                        <Text className="font-bold text-xl">
                            <Text>Current Location</Text>
                            <ChevronDownIcon size={20} color="#00CCBB" />
                        </Text>
                    </View>
                    <UserIcon size={35} color="#00CCBB" />
                </View>
                {/* Search */}
                <View className="flex flex-row space-x-2 pb-2 items-center w-screen px-4">
                    <View className="flex-row flex-1 space-x-2 bg-gray-100 p-2 rounded-md">
                        <Svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-500">
                            <Path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </Svg>

                        <TextInput placeholder='Restaurant and Cuisine' keyboardType='default' />
                    </View>
                    <AdjustmentsHorizontalIcon size={30} color="#00CCBB" />
                </View>
            </SafeAreaView>
            {/* Scroll View */}
            <ScrollView>
                {/* Categories */}
                <Categories />
                {/* Featured Rows */}

                {featuredCategory.map((item, index) => {
                    return <Featuredrow key={index} id={item._id} title={item.title} description={item.shortDescription} />
                })}
            </ScrollView>
        </>
    )
}

export default Homescreen
