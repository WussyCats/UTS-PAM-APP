import { StyleSheet } from "react-native"

export default StyleSheet.create({

    box:{
        backgroundColor: '#fff',
        borderRadius: 15,
        padding: 30,
        width: '90%',
        position: 'absolute',
        top: '5%',
        left: '5%',
        shadowColor: '#000',
        elevation: 5,
        height: '84%',
    },
    box2:{
        marginTop: 12,
    },
    box3:{
        paddingLeft: 90,
        marginTop: 10,
    },
    formSingle:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 5,
        marginTop: 5,
    },
    text:{
        fontSize: 16,
        fontWeight: 'bold'
    },
    Icon:{
        padding: 10,
    },
    Input:{
        fontSize:11,
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0,
        backgroundColor: '#fff',
        color: '#424242',
    },
    button:{
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ed7c31',
        borderRadius: 5,
    },
    textButton:{
        fontWeight: 'bold',
        fontSize: 15,
        padding: 10,
        color: '#fff',
    },
    text2: {
        fontSize: 30,
        color: "#082f82",
        textAlign: 'center',
        fontWeight: 'bold',
        bottom: 10,
    },
    shadow: {
        shadowColor: '##1c2029',
        shadowOffset: {
        height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
    },
})