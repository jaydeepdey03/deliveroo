import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView, Image } from 'react-native'
import Categorycard from './Categorycard'
import sanityClient from '../sanity'
import { urlFor } from '../sanity'

const Categories = () => {
    const [category, setCategory] = useState([])

    useEffect(() => {
        sanityClient.fetch(
            `*[_type=="category"]`
        ).then((data) => {
            setCategory(data)
            // console.log(data)
        }).catch(err => console.log(err))
    }, [])
    return (<View >
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}>
            {category.map((item) => {
                return <Categorycard key={item._id} imgUrl={urlFor(item.image).url()} title={item.title} />
            })}
            {/* <Categorycard imgUrl="https://links.papareact.com/gn7" title="Dummy Text" /> */}

        </ScrollView>
    </View>
    )
}

export default Categories
