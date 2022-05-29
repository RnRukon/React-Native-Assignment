import * as React from 'react';
import { View, Pressable, StyleSheet } from 'react-native';
import Text from '../Components/Text/Text';
import { colors } from '../Themes/Colors';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function Boston() {
    return (
        <View style={styles.container}>
            <Text preset='h2'>Boston Lettuce</Text>
            <View style={{ display: 'flex', flexDirection: 'row', marginBottom: 20, alignItems: 'center' }}>
                <Text preset='h2' style={{ marginRight: 10, color: "#06BE77" }}>1.10</Text>
                <Text preset='h4' style={{ color: "#06BE77" }}>€ / piece</Text>
            </View>
            <Text preset='h5'>~ 150 gr / piece</Text>
            <Text style={{ marginTop: 20 }} preset='h4'>Spain</Text>
            <Text preset='h5' style={styles.textContent}>Lettuce is an annual plant of the daisy family, Asteraceae. It is most often grown as a leaf vegetable, but sometimes for its stem and seeds. Lettuce is most often used for salads, although it is also seen in other kinds of food, such as soups, sandwiches and wraps; it can also be grilled.</Text>
            <View>
            </View>
            <View style={styles.buttonContainer}>
                <Pressable style={styles.likeButton}>
                    <AntDesign name="hearto" size={24} color="black" />
                </Pressable>
                <Pressable style={styles.addButton}>
                    <FontAwesome
                        style={{ marginRight: 10, color: 'white' }}
                        name="cart-arrow-down"
                        size={24}
                        color="black" />
                    <Text preset='h4' style={{ color: "white" }}>

                        Add to Cart

                    </Text>

                </Pressable>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: "white",
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        marginTop: -60,

    },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',


    },
    textContent: {
        lineHeight: 30,
        textAlign: 'justify',
        marginTop: 20

    },
    likeButton: {
        backgroundColor: 'rgb(238, 242, 255)',
        padding: 10,
        borderRadius: 10,
        margin: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 65,
        borderWidth: 1,
        borderColor: colors.lightGrey
    }
    ,
    addButton: {
        backgroundColor: '#0BCE83',
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        padding: 10,
        borderRadius: 10,
        margin: 20,
        textAlign: 'center',
        color: colors.width,
        width: 200
    }
})