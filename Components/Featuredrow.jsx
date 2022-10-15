import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { ArrowRightIcon } from 'react-native-heroicons/solid'
import sanityClient from '../sanity'
import Restaurantcard from './Restaurantcard'

const Featuredrow = ({ id, title, description }) => {

    const [restaurant, setRestaurant] = useState([])

    useEffect(() => {
        sanityClient.fetch(`
        *[_type == "featured" && _id == $id]{
            ...,
            restaurant[] -> {
              ...,
              dishes[] ->,
              type-> {
                name
              }
            }
          }[0]
        `, { id }).then(data => {
            setRestaurant(data?.restaurant)
            // console.log(data)
        })
    }, [])

    return (
        <View>
            <View className="mt-4 flex-row items-center justify-between px-4">
                <Text className="font-bold text-lg">{title}</Text>
                <ArrowRightIcon color="#00CCBB" />
            </View>

            <Text className="text-xs text-gray-500 px-4">{description}</Text>

            <ScrollView horizontal contentContainerStyle={{ padding: 15 }} showsHorizontalScrollIndicator={false} className="pt-4">
                {restaurant.map((item, i) => {
                    return (
                        <Restaurantcard
                            key={i}
                            id={item._id}
                            imgUrl={item.image}
                            title={item.name}
                            rating={item.rating}
                            genre={item.type?.name}
                            address={item.address}
                            short_description={item.shortDescription}
                            dishes={item.dishes}
                            long={item.long}
                            lat={item.lat}

                        />
                    )
                })}

            </ScrollView>
        </View>
    )
}

export default Featuredrow
