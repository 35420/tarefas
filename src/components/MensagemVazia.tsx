import { StyleSheet, Text, View } from 'react-native';

type Props = {
  texto: string;
};

export function MensagemVazia({ texto }: Props) {
  return (
    <View style={styles.caixa}>
      <Text style={styles.titulo}>Nada por aqui</Text>
      <Text style={styles.texto}>{texto}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  caixa: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    marginTop: 16,
    padding: 24,
  },
  titulo: {
    color: '#24364b',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 8,
  },
  texto: {
    color: '#667085',
    fontSize: 15,
    textAlign: 'center',
  },
});
