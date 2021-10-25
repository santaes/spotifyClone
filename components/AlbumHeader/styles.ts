import { StyleSheet } from "react-native";
import { withSafeAreaInsets } from "react-native-safe-area-context";

const styles = StyleSheet.create ({
    container:{
        alignItems:'center',
        padding:20,
    },
    image:{
        width:200,
        height:200,
        margin: 10,
        borderRadius: 10,

    },
    name:{
        color:'white',
        fontSize: 30,
        fontWeight: 'bold',

    },
    creatorContainer:{
        flexDirection: 'row',
        margin: 10,


    },
    button:{
        backgroundColor: '#1CD05D',
        height: 60,
        width: 175,
        borderRadius: 50,
        justifyContent:'center',
        alignItems: 'center',


    },
    buttonText:{
        color:'white',
        fontSize: 20,
        fontWeight: 'bold',

    },
    creator:{
        color:'#A1A1A1',
        margin: 5,
        fontSize: 18,

    },
    likes:{
        color:'#A1A1A1',
        margin: 5,
        fontSize: 18,
    },
});

export default styles;