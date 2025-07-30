import { StyleSheet, Text, View } from "react-native";
import Colors from "../../screen/constants/colors";

function GuessLogItem({ roundNumber, guess }) {
  return (
    <View style={style.listItem}>
      <Text style={style.itemText}>#{roundNumber}</Text>
      <Text style={style.itemText}>Opponents Guess: {guess}</Text>
    </View>
  );
}

export default GuessLogItem;

const style = StyleSheet.create({
  listItem: {
    borderColor: Colors.primary800,
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    backgroundColor: Colors.accent500,
    flexDirection: "row",
    justifyContent: 'space-between',
    width: "100%",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  itemText: {
    fontFamily: "open-sans"
  }
});
