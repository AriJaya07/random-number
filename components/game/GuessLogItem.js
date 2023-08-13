import { StyleSheet, Text, View } from "react-native"
import Colors from "../../constants/colors"

function GuessLogItem({roundNumber, guess}) {
    return (
        <View style={styles.listItem}>
            <Text style={styles.itemText}>#{roundNumber}</Text>
            <Text>Opponent's Guess: {guess}</Text>
        </View>
    )
}

export default GuessLogItem

const styles = StyleSheet.create({
    listItem: {
        borderColor: Colors.primary800,
        borderWidth: 1,
        borderRadius: 40,
        padding: 12,
        marginVertical: 8,
        backgroundColor: Colors.accent500,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        elevation: 4, // shadow android
        shadowColor: 'black', // shadow IOS
        shadowOffset: {width: 0, height: 0},  // shadow IOS
        shadowOpacity: 0.25,  // shadow IOS
        shadowRadius: 3,  // shadow IOS
    },
    itemText: {
        fontFamily: 'open-sans'
    }
})