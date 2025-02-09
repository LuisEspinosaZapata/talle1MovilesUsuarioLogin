import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#fff',
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
      },
      input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 10,
        marginBottom: 10,
      },
      linkText: {
        marginTop: 10,
        color: '#007BFF',
        textAlign: 'center',
      },
      passwordContainer: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 5,
        marginBottom: 10,
        paddingHorizontal: 10,
      },
      passwordInput: {
        flex: 1,
        height: 40,
      },
      toggleText: {
        color: "#007BFF",
        fontWeight: "bold",
        marginLeft: 10,
      }


})
