import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { styles } from '../styles/StyleBegin';

interface Props extends NativeStackScreenProps<any, any> {}

export const RegisterScreen = ({ navigation }: Props) => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [secureText, setSecureText] = useState(true); // Controla la visibilidad de la contraseña

  const togglePasswordVisibility = () => {
    setSecureText(!secureText); // Cambia entre mostrar y ocultar la contraseña
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro</Text>
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Usuario"
        value={username}
        onChangeText={setUsername}
      />
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Contraseña"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={secureText} // Usa el estado para alternar visibilidad
        />
        <TouchableOpacity onPress={togglePasswordVisibility}>
          <Text style={styles.toggleText}>
            {secureText ? 'Mostrar' : 'Ocultar'} {/* Texto dinámico */}
          </Text>
        </TouchableOpacity>
      </View>
      <Button title="Registrarse" onPress={() => navigation.navigate('Login')} />
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.linkText}>¿Ya tienes una cuenta? Inicia sesión ahora</Text>
      </TouchableOpacity>
    </View>
  );
};
