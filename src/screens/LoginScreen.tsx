import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { styles } from "../styles/StyleBegin";

interface Props extends NativeStackScreenProps<any, any> {}

// Datos temporales de usuarios
const tempUsers = [
  { email: "luis@telalca.com", password: "123456" },
  { email: "fernando@telalca.com", password: "123456" },
];

export const LoginScreen = ({ navigation }: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secureText, setSecureText] = useState(true);

  // Alterna la visibilidad de la contraseña
  const togglePasswordVisibility = () => {
    setSecureText(!secureText);
  };

  // Función de validación del correo y contraseña
  const validateInputs = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert("Error", "Por favor, ingresa un correo válido.");
      return false;
    }

    if (password.length < 6) {
      Alert.alert("Error", "La contraseña debe tener al menos 6 caracteres.");
      return false;
    }

    return true;
  };

  // Verifica si el usuario y contraseña coinciden con los datos temporales
  const checkCredentials = () => {
    const user = tempUsers.find(
      (u) => u.email === email && u.password === password
    );
    return user !== undefined; // Devuelve true si las credenciales coinciden
  };

  const handleLogin = () => {
    if (validateInputs()) {
      if (checkCredentials()) {
        console.log("Inicio de sesión exitoso:", { email, password });
        Alert.alert("Éxito", "Inicio de sesión exitoso.");
        navigation.navigate("Productos"); // Navegar a Productos si las credenciales son válidas
      } else {
        console.log("Credenciales incorrectas:", { email, password });
        Alert.alert("Error", "Correo o contraseña incorrectos.");
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar Sesión</Text>
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Contraseña"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={secureText}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TouchableOpacity onPress={togglePasswordVisibility}>
          <Text style={styles.toggleText}>
            {secureText ? "Mostrar" : "Ocultar"}
          </Text>
        </TouchableOpacity>
      </View>
      <Button title="Iniciar Sesión" onPress={handleLogin} />
      <TouchableOpacity onPress={() => navigation.navigate("Registro")}>
        <Text style={styles.linkText}>¿No tienes una cuenta? Regístrate ahora</Text>
      </TouchableOpacity>
    </View>
  );
};
