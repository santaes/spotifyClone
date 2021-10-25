import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        position:'absolute',
        bottom:49,
        backgroundColor:'#131313',
        width:'100%',
        height:70,
    },
    rightContainer:{
        justifyContent:'space-between',
        flexDirection:'row',
        flex:1,
        

    },
    title:{
        color:'white',
        fontSize:16,
        marginTop:5,
        
        

    },
    image:{
        width:50,
        height:50,
        borderRadius:8,
        margin:10,
    },
    artist:{
        color:'#A1A1A1',
        fontSize:14,
        marginBottom:5,
        
        
    },
    iconContainer:{
        flexDirection:'row',
        alignItems:'center',
        width:100,
        justifyContent: 'space-around',
        right:5,
        

    },
    nameContainer:{
        justifyContent:'center', 
        width: 200,
        

    },
    progress:{
        height:2,
        top: 1,
        backgroundColor:'#5679ab',
        
    },
    row:{
        flexDirection:'row',
    },
    
})

export default styles;