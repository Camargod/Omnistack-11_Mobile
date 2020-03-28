import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';
export default StyleSheet.create(
{
    container:
    {
        flex:1,
        paddingHorizontal:24,
        paddingTop: Constants.statusBarHeight + 20,
    },
    incident:
    {
        marginTop: 10,
        padding:24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16
    },
    incidentProperty:
    {
        fontSize: 14,
        color:'#41414d',
        fontWeight:'bold'
    },
    incidentValue:
    {
        marginTop:8,
        fontSize:15,
        marginBottom:24,
        color:'#737380'
    },
    actionWpp:
    {
        flexDirection:'row',
        paddingVertical: 5,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor:'#4AC959',
        borderRadius:6,
        marginBottom: 4
    },
    actionTextWpp:
    {
        marginLeft:2,
        color:'white',
        fontWeight:"bold"
    },
    actionEmail:
    {
        flexDirection:'row',
        paddingVertical: 5,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor:'#E02041',
        borderRadius:6,
    },
    actionTextEmail:
    {
        marginLeft:2,
        color:'white',
        fontWeight:"bold"
    },
    heroTitle:
    {
        fontWeight:'bold',
        fontSize:20,
        color:'#13131a',
        lineHeight:20
    },
    heroDescription:
    {
        fontSize:15,
        color:'#737380',
        marginTop:16
    },
    contactBox:
    {
        padding:24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16
    },
    actions:
    {
        marginTop:2
    }
});