import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native'
import * as Animatable from 'react-native-animatable';
import { SafeAreaView } from 'react-native-safe-area-context';

const Loadingscreen = () => {
    const navigation = useNavigation()

    useEffect(()=> {
        setTimeout(()=> {
            navigation.navigate('Delivery')
        }, 3000)
    }, [])
    return (
        <SafeAreaView className="bg-[#00CCBB] flex-1 justify-center items-center">
            <Animatable.Text
                animation="slideInUp"
                iterationCount={1}
                className="text-lg my-10 text-white font-bold text-center"
            >
                Waiting for Restaurant to place the order!
            </Animatable.Text>

            <ActivityIndicator size="large" color="white" />
        </SafeAreaView>
    )
}

export default Loadingscreen
