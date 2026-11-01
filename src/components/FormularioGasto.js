import React, { useState } from 'react';
import { Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import Card from './Card';
import SelectorCategorias from './SelectorCategorias';
import { CATEGORIAS } from '../constants/categorias';

// El formulario maneja sus propios campos y avisa al padre con onAgregar
export default function FormularioGasto({ onAgregar }) {
  const [descripcion, setDescripcion] = useState('');
  const [monto, setMonto] = useState('');
  const [categoria, setCategoria] = useState(CATEGORIAS[0]);

  const manejarAgregar = () => {
    const montoNumero = parseFloat(monto.replace(',', '.'));

    if (descripcion.trim() === '') {
      Alert.alert('Falta la descripción', 'Ingresá una descripción del gasto.');
      return;
    }
    if (isNaN(montoNumero) || montoNumero <= 0) {
      Alert.alert('Monto inválido', 'Ingresá un monto mayor a cero.');
      return;
    }

    onAgregar({
      descripcion: descripcion.trim(),
      monto: montoNumero,
      categoria: categoria,
    });

    setDescripcion('');
    setMonto('');
  };

  return (
    <Card>
      <Text style={styles.seccion}>Agregar gasto</Text>

      <TextInput
        style={styles.input}
        placeholder="Descripción (ej: Supermercado)"
        value={descripcion}
        onChangeText={setDescripcion}
      />
      <TextInput
        style={styles.input}
        placeholder="Monto (ej: 15000)"
        keyboardType="numeric"
        value={monto}
        onChangeText={setMonto}
      />

      <Text style={styles.label}>Categoría</Text>
      <SelectorCategorias
        opciones={CATEGORIAS}
        seleccionada={categoria}
        onSeleccionar={setCategoria}
      />

      <Button title="Agregar gasto" color="#3b3f45" onPress={manejarAgregar} />
    </Card>
  );
}

const styles = StyleSheet.create({
  seccion: { fontSize: 18, fontWeight: '600', marginBottom: 10 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#fafafa',
  },
  label: { fontWeight: '600', marginBottom: 6 },
});