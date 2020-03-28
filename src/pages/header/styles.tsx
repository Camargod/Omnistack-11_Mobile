import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';
export default StyleSheet.create(
{
    header:
    {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center"
    },
    headerText:
    {
        fontSize: 15,
        color: '#737380'
    },
    headerTextBold:
    {
        fontWeight: "bold"
    }
});