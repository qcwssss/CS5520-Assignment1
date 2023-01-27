import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("screen");

const rebeccapurple = "rebeccapurple";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    padding: 10,
    width: "100%",
  },
  header: {
    marginTop: 20,
    fontSize: 20,
    color: rebeccapurple,
    borderColor: rebeccapurple,
    alignSelf: "center",
    borderWidth: 1.5,
    padding: 8,
  },
  inputContainer: {
    margin: 10,
  },
  input: {
    borderColor: "rebeccapurple",
    borderBottomWidth: 2,
    width: width / 1.5,
    padding: 10,
  },
  card: {
    marginTop: 20,
    backgroundColor: "white",
    width: "70%",
    padding: 20,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
  inputContainer: {
    marginTop: 5,
    flexDirection: "column",
    alignItems: "flex-start",
  },
  inputLabel: {
    width: "100%",
    color: rebeccapurple,
    marginVertical: 10,
  },
  inputField: {
    width: "100%",
    padding: 5,
    marginBottom: 10,
    borderBottomWidth: 1.5,
    borderColor: "purple",
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    justifyContent: "space-around",
  },
  button: {
    padding: 5,
  },
  buttonText: {
    fontSize: 15,
  },
  error: {
    color: "grey",
  },
});

export { styles };
