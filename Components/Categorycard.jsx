import { View, Text, TouchableOpacity, Image } from 'react-native'


const Categorycard = ({ imgUrl, title }) => {
    return (
        <TouchableOpacity className="relative mr-2">
            <Image className="h-20 w-20 rounded" source={{ uri: imgUrl }} />
            <Text className="absolute bottom-1 left-1 text-white font-bold">{title}</Text>
        </TouchableOpacity>
    )
}

export default Categorycard
