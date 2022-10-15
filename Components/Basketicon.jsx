import { useNavigation } from '@react-navigation/native'
import { View, Text, TouchableOpacity } from 'react-native'
import { useSelector } from 'react-redux'
import { selectBasketItems, selectBasketTotal } from '../Redux/features/basketSlice'
import Currency from 'react-currency-formatter'

const Basketicon = () => {
    const basketTotal = useSelector(selectBasketTotal)
    const navigation = useNavigation()
    const items = useSelector(selectBasketItems)
    
    if(items.length == 0)return null

    return (
        <View className="absolute bottom-10 w-full z-50 ">
            <TouchableOpacity onPress={()=>navigation.navigate('BasketScreen')} className="bg-[#00CCBB] mx-5 p-4 rounded-lg flex-row items-center space-x-1">
                <Text className="text-white font-extrabold text-lg rounded-md bg-[#01A296] py-1 px-2">{items.length}</Text>
                <Text className="flex-1 text-white font-extrabold text-lg text-center">View Basket</Text>
                <Text className="text-lg text-white font-extrabold"><Currency quantity={basketTotal} currency={"INR"} /></Text>
            </TouchableOpacity>
        </View>
    )
}

export default Basketicon
