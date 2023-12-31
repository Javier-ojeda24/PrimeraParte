import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../theme/appTheme';

export const CalculadoraScrenn = () => {
  return (
    <View style={styles.calculadoraContainer}>
      <Text style={styles.resultadoPequeño}>1,500.00</Text>
      <Text style={styles.resultado}>1,500.00</Text>
      <View>
        {/* Boton */}
        <View style={styles.boton}>
          <Text style={styles.botonTexto}>1</Text>
        </View>
      </View>
    </View>
  );
};
