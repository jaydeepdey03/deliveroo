import { useState } from 'react'
import Currency from 'react-currency-formatter';
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid';
import { urlFor } from '../sanity';
import { useDispatch, useSelector } from 'react-redux';
import { addToBasket, removeFromBasket, selectBasketItems, selectBasketItemsWithId } from '../Redux/features/basketSlice';

const Dishrow = ({ id, name, description, price, image }) => {
    const [isPressed, setIsPressed] = useState(false)
    // selector
    const items = useSelector(state => selectBasketItemsWithId(state, id))

    //dispatch
    const dispatch = useDispatch()


    const addItemToBasket = () => {
        dispatch(addToBasket({ id, name, description, price, image }))
    }
    const removeItemsFromBasket = () => {
        if(!items>0) return
        dispatch(removeFromBasket({ id }))
    }

    // console.log(items)
    return (
        <>
            <TouchableOpacity onPress={() => setIsPressed(!isPressed)} className={`bg-white border p-4 border-gray-200 ${isPressed && 'border-b-0'}`}>
                <View className="flex-row items-center">
                    <View className="flex-1 pr-2">
                        <Text className="text-lg mb-1">{name}</Text>
                        <Text className="text-gray-400">{description}</Text>
                        <Text className="text-gray-400 mt-2"><Currency quantity={price} currency="INR" /></Text>
                    </View>
                    <View>
                        <Image source={{ uri: urlFor(image).url() }} className="h-20 w-20 bg-gray-300 p-4 rounded" />
                    </View>
                </View>
            </TouchableOpacity>
            {isPressed && (
                <View className="">
                    <View className="flex-row items-center space-x-2 pb-3 bg-white pl-2">
                        {/* <Text className="text-xl ml-2 text-gray-700">Add to Basket</Text> */}
                        <TouchableOpacity disabled={!items.length} onPress={removeItemsFromBasket}>
                            <MinusCircleIcon size={40} color={items.length > 0 ? "#00CCBB" : "gray"} />
                        </TouchableOpacity>
                        <Text className="text-xl text-gray-700">{items.length}</Text>
                        <TouchableOpacity onPress={addItemToBasket}>
                            <PlusCircleIcon size={40} color="#00CCBB" />
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        </>
    )
}

export default Dishrow
