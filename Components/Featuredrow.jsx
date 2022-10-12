import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { ArrowRightIcon } from 'react-native-heroicons/solid'
import Restaurantcard from './Restaurantcard'

const Featuredrow = ({title, description, featuredCategory}) => {
    return (
        <View>
            <View className="mt-4 flex-row items-center justify-between px-4">
                <Text className="font-bold text-lg">{title}</Text>
                <ArrowRightIcon color="#00CCBB" />
            </View>

            <Text className="text-xs text-gray-500 px-4">{description}</Text>

            <ScrollView horizontal contentContainerStyle={{padding: 15}} showsHorizontalScrollIndicator={false} className="pt-4">
                <Restaurantcard
                    id="1"
                    imgUrl="https://links.papareact.com/gn7"
                    title="Yo Sushi!"
                    rating="4.5"
                    genre="Japanese"
                    address="123 Main St"
                    short_description="Dummy Text"
                    dishes={[]}
                    long={20}
                    lat={20}

                />
            </ScrollView>
        </View>
    )
}

export default Featuredrow
