import React from 'react'
import { View, Text, ScrollView, Image } from 'react-native'
import Categorycard from './Categorycard'

const Categories = () => {
    return (<View >
    {/* <Image className="p-4 rounded-full"   style={{width: 100, height: 100}}
 source={{ uri: "https://images.prismic.io/dbhq-deliveroo-riders-website/ed825791-0ba4-452c-b2cb-b5381067aad3_RW_hk_kit_importance.png?auto=compress,format&rect=0,0,1753,1816&w=1400&h=1450" }} /> */}
        
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}>
            <Categorycard imgUrl="https://links.papareact.com/gn7" title="Dummy Text" />
            <Categorycard imgUrl="https://links.papareact.com/gn7" title="Dummy Text" />
            <Categorycard imgUrl="https://links.papareact.com/gn7" title="Dummy Text" />
            <Categorycard imgUrl="https://links.papareact.com/gn7" title="Dummy Text" />
            <Categorycard imgUrl="https://links.papareact.com/gn7" title="Dummy Text" />
            <Categorycard imgUrl="https://links.papareact.com/gn7" title="Dummy Text" />
            <Categorycard imgUrl="https://links.papareact.com/gn7" title="Dummy Text" />
            <Categorycard imgUrl="https://links.papareact.com/gn7" title="Dummy Text" />
            <Categorycard imgUrl="https://links.papareact.com/gn7" title="Dummy Text" />
        </ScrollView>
    </View>
    )
}

export default Categories
