import React, { useState } from 'react';
import {
    Text,
    StyleSheet,
    View,
    Image,
    ImageBackground,
    TouchableOpacity,
    TouchableHighlight
} from 'react-native';
import { sum2Number, subtract } from '../utilies/Calculation'
import { image, icon } from '../constants'



//Component = function
function mainView(props) {

    const styles = StyleSheet.create({
        button: {
            backgroundColor: '#0083FF', // Màu neon hồng xanh
            borderRadius: 10, // Độ cong bo góc
            padding: 15,
            alignItems: 'center',
            justifyContent: 'center',
            shadowColor: '#00FFC1', // Màu neon hồng xanh tạo hiệu ứng 3D
            shadowOffset: {
                width: 0,
                height: 4,
            },
            margin: 10,
            shadowOpacity: 0.5,
            shadowRadius: 5,
            elevation: 4, // Tạo hiệu ứng 3D trên Android
        },
        buttonText: {
            color: 'white',
            fontSize: 20,
            fontWeight: 'bold',
        },
    });

    const [isPressed, setIsPressed] = useState(false);

    const handlePressIn = () => {
        setIsPressed(true);
    };

    const handlePressOut = () => {
        setIsPressed(false);
    };
    const handlePress = () => {
        setIsPressed(!isPressed);
    };

    return <View style={{ flex: 100 }} >
        <ImageBackground source={image.background}
            resizeMode='cover'
            style={{
                flex: 100,
            }}>
            <View style={{
                flex: 20,
            }}>
                <View
                    style={{
                        flexDirection: 'row',
                        height: 50,
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        padding: 10
                    }}
                >
                    <Image source={icon.fire} />
                    <Text style={{
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: 20,
                        paddingLeft: 10
                    }}>FREE FIRE</Text>
                    <View style={{
                        flex: 1,
                        justifyContent: 'flex-end',
                        alignItems: 'flex-end'
                    }}>
                        <Image source={icon.question} />
                    </View>
                </View>
            </View>

            <View style={{
                flex: 20,
                alignItems: 'center'
            }}>
                <Text style={{
                    color: 'white',
                    fontWeight: 'bold',
                    marginBottom: 10,
                }}>Welcom to</Text>
                <Text style={{
                    color: 'white',
                    fontWeight: 'bold',
                    marginBottom: 10,
                    fontSize: 30
                }}>FREE FIRE</Text>
                <Text style={{
                    color: 'white',
                    fontWeight: 'bold',
                }}>Please select your account type!</Text>
            </View>
            <View style={{
                flex: 40,
            }}>
                <View
                    style={{
                        flex: 1,
                        backgroundColor: 'white',
                        opacity: 0.4,
                        borderRadius: 20,
                        margin: 10,
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                    }}
                />
                <TouchableHighlight
                    style={{
                        borderColor: 'white',
                        borderWidth: 1,
                        height: 40,
                        borderRadius: 5,
                        marginHorizontal: 20,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginVertical: 35,
                        backgroundColor: isPressed ? 'white' : null
                    }}

                    onHideUnderlay={handlePressIn}
                    onShowUnderlay={handlePressOut}
                    underlayColor="transparent"
                    onPress={handlePress}
                >
                    <Text style={{
                        color: '#0083FF',
                        fontWeight: 'bold',

                    }}>Influencer</Text>
                </TouchableHighlight>
                <TouchableOpacity
                    style={{
                        borderColor: 'white',
                        borderWidth: 1,
                        height: 40,
                        borderRadius: 5,
                        marginHorizontal: 20,
                        marginVertical: 35

                    }}>

                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        borderColor: 'white',
                        borderWidth: 1,
                        height: 40,
                        borderRadius: 5,
                        marginHorizontal: 20,
                        marginVertical: 35

                    }}>

                </TouchableOpacity>
            </View>
            <View style={{
                flex: 20,


            }}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Next</Text>
                </TouchableOpacity>
                <Text
                    style={{
                        color: 'white',
                        fontWeight: 'bold',
                        marginBottom: 10,
                        alignSelf: 'center'
                    }}>Don't know what account type to use?</Text>

            </View>
        </ImageBackground></View>

}


export default mainView