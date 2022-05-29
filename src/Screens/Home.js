import { View, Dimensions, ScrollView, StyleSheet } from 'react-native';
import Text from '../Components/Text/Text';
import { colors } from '../Themes/Colors';
import Splash from './Splash';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
export const width = Dimensions.get('window').width;
export const height = Dimensions.get('window').height;


export default function Home({ navigation }) {


    return (
        <SafeAreaProvider>
            <SafeAreaView>
                <ScrollView style={styles.container}>
                    <View style={styles.topContainer}>
                        <View style={styles.dContainer}>
                            <Text preset='h1' style={styles.d}>
                                D
                            </Text>
                        </View>
                    </View>
                    <View>
                        <Splash navigation={navigation} />
                    </View>
                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>

    );
}

const styles = StyleSheet.create({
    container: {
        width: width,
        height: height,
        backgroundColor: colors.purple
    },
    topContainer: {
        height: height / 2,

    },
    dContainer: {
        color: colors.black,
        marginLeft: 50,
        backgroundColor: "#CDFFB6",
        width: 100,
        height: 100,
        marginTop: 100,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50

    },
    d: {
        fontSize: 50
    }

});