import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

// Definir la interfaz para los productos
interface Product {
  id: number;
  name: string;
  category: 'Bebidas Alcohólicas' | 'Bebidas No Alcohólicas' | 'Snacks';
  price: number;
  description: string;
  isAvailable: boolean;
}

// Lista de productos de ejemplo
const products: Product[] = [
  {
    id: 1,
    name: 'Mojito',
    category: 'Bebidas Alcohólicas',
    price: 8.5,
    description: 'Ron, hierbabuena, azúcar, soda y limón.',
    isAvailable: true,
  },
  {
    id: 2,
    name: 'Coca-Cola',
    category: 'Bebidas No Alcohólicas',
    price: 3.0,
    description: 'Refresco de cola clásico.',
    isAvailable: true,
  },
  {
    id: 3,
    name: 'Nachos con Queso',
    category: 'Snacks',
    price: 6.5,
    description: 'Nachos crujientes con queso derretido y jalapeños.',
    isAvailable: true,
  },
  {
    id: 4,
    name: 'Gin Tonic',
    category: 'Bebidas Alcohólicas',
    price: 10.0,
    description: 'Ginebra, tónica y una rodaja de limón.',
    isAvailable: false,
  },
];

// Componente principal del catálogo
export const Catalog = () => {
  // Renderizar un producto individual
  const renderProduct = ({ item }: { item: Product }) => (
    <View style={styles.productCard}>
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productCategory}>{item.category}</Text>
      <Text style={styles.productDescription}>{item.description}</Text>
      <Text style={styles.productPrice}>Precio: ${item.price.toFixed(2)}</Text>
      <Text style={styles.productAvailability}>
        {item.isAvailable ? 'Disponible' : 'No disponible'}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Catálogo de Barra</Text>
      <FlatList
        data={products}
        keyExtractor={item => item.id.toString()}
        renderItem={renderProduct}
      />
    </View>
  );
};

// Estilos para el componente
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  productCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    elevation: 2,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  productCategory: {
    fontSize: 14,
    color: 'gray',
  },
  productDescription: {
    fontSize: 14,
    marginVertical: 4,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007BFF',
  },
  productAvailability: {
    fontSize: 14,
    color: 'green',
  },
});

