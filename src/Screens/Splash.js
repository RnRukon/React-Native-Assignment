import { View,StyleSheet, Pressable, ScrollView } from 'react-native';
import Text from '../Components/Text/Text';
import { colors } from '../Themes/Colors';
import { AntDesign } from '@expo/vector-icons';



export default function Splash({ navigation }) {


    return (
        <View style={styles.containers}>
            <View style={styles.container}>
                <View style={styles.HContainer}>
                    <View style={styles.Icon}>
                        <AntDesign name="shoppingcart" size={50} color="black" />
                        
                    </View>
                </View>
            </View>

            <View>
                <Text preset='h1' style={styles.contentTitle}>Non-Contact Deliveries</Text>
                <Text preset='h5' style={styles.content}>When placing an order, select the option “Contactless delivery” and the courier will leave your order at the door.
                </Text>
            </View>
            <ScrollView>
                <Pressable
                    onPress={() => {
                        navigation.navigate('Item')
                    }}
                    style={[styles.button, {
                      backgroundColor:'#0BCE83',
                      textAlign:'center'
                    }]}>
                    <Text preset='h4' style={{textAlign:'center',color:"white"}}>Onrder now</Text>
                </Pressable>
                <Pressable
                    style={[styles.button,{backgroundColor:colors.width}]}>
                    <Text preset='h4' style={{textAlign:'center',color:"black"}}>Pressable</Text>
                </Pressable>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    containers: {
        margin: 5,
        backgroundColor: colors.black,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
    },

    Icon: {
        backgroundColor: 'rgb(238, 242, 255)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        margin: 'auto',
        padding: 30,
        marginTop: 60
    },
    contentTitle: {
        textAlign: 'center'
    },
    content: {
        textAlign: 'center',
        padding: 50
    },
    button: {
        textTransform: 'uppercase',
        padding: 10,
        borderRadius: 10,
        margin: 20,
        textAlign: 'center',
        color: colors.width
    },
    HContainer:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row'
    }



});