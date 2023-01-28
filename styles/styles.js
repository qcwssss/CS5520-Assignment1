import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("screen");

const rebeccapurple = "rebeccapurple";

const container = {
  flex: 1,
  alignItems: "center",
  backgroundColor: "#F5FCFF",
  padding: 10,
  width: "100%",
};

const card = {
  marginTop: 20,
  backgroundColor: "white",
  width: "80%",
  padding: 20,
  borderRadius: 5,
  shadowColor: "#000",
  shadowOpacity: 0.2,
  shadowRadius: 5,
  shadowOffset: {
    width: 0,
    height: 3,
  },
  elevation: 2,
};

const styles = StyleSheet.create({
  container: {
    ...container,
  },
  centeredContainer: {
    ...container,
    justifyContent: "center",
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
    ...card,
  },
  finsihCard: {
    ...card,
    marginTop: 80,
    width: "90%",
  },
  confirmCard: {
    alignSelf: "center",
  },
  inputContainer: {
    marginTop: 5,
    flexDirection: "column",
    alignItems: "flex-start",
  },
  text: {
    width: "100%",
    color: rebeccapurple,
    fontSize: 18,
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
