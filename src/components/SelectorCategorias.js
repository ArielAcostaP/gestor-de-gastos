import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// Fila de "chips" para elegir una opción
export default function SelectorCategorias({ opciones, seleccionada, onSeleccionar }) {
  return (
    <View style={styles.chips}>
      {opciones.map((op) => (
        <TouchableOpacity
          key={op}
          style={[styles.chip, seleccionada === op && styles.chipActivo]}
          onPress={() => onSeleccionar(op)}
        >
          <Text style={seleccionada === op ? styles.textoActivo : styles.texto}>
            {op}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  chips: { flexDirection: 'row', flexWrap: 'wrap', marginBottom: 10 },
  chip: {
    borderWidth: 1,
    borderColor: '#3b3f45',
    borderRadius: 16,
    paddingVertical: 5,
    paddingHorizontal: 12,
    marginRight: 6,
    marginBottom: 6,
  },
  chipActivo: { backgroundColor: '#3b3f45' },
  texto: { color: '#3b3f45' },
  textoActivo: { color: '#fff' },
});