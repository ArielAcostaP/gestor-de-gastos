import React, { useState } from 'react';
import { Text, TextInput, StyleSheet } from 'react-native';
import Card from './Card';
import SelectorCategorias from './SelectorCategorias';
import ItemGasto from './ItemGasto';
import { CATEGORIAS } from '../constants/categorias';
import { formatearMonto } from '../utils/formato';

export default function ListaGastos({ gastos, onEliminar }) {
  // Filtro y búsqueda son cosa de la lista, por eso viven acá
  const [filtro, setFiltro] = useState('Todas');
  const [busqueda, setBusqueda] = useState('');

  const gastosVisibles = gastos.filter(
    (g) =>
      (filtro === 'Todas' || g.categoria === filtro) &&
      g.descripcion.toLowerCase().includes(busqueda.trim().toLowerCase())
  );

  const totalVisible = gastosVisibles.reduce((acc, g) => acc + g.monto, 0);

  return (
    <Card>
      <Text style={styles.seccion}>Mis gastos</Text>

      <TextInput
        style={styles.input}
        placeholder="Buscar por descripción"
        value={busqueda}
        onChangeText={setBusqueda}
      />

      <SelectorCategorias
        opciones={['Todas', ...CATEGORIAS]}
        seleccionada={filtro}
        onSeleccionar={setFiltro}
      />

      {filtro !== 'Todas' && (
        <Text style={styles.subtotal}>
          Total de {filtro}: {formatearMonto(totalVisible)}
        </Text>
      )}

      {gastosVisibles.length === 0 ? (
        <Text style={styles.vacio}>No hay gastos para mostrar.</Text>
      ) : (
        gastosVisibles.map((g) => (
          <ItemGasto key={g.id} gasto={g} onEliminar={onEliminar} />
        ))
      )}
    </Card>
  );
}

const styles = StyleSheet.create({
  seccion: { fontSize: 18, fontWeight: '600', marginBottom: 10 },
  input: {
    borderWidth: 1,
    borderColor: '#3b3f45',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#fafafa',
  },
  subtotal: { fontWeight: '600', marginBottom: 8 },
  vacio: { color: '#3b3f45', fontStyle: 'italic', marginTop: 6 },
});