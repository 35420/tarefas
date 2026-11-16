import { Pressable, StyleSheet, Text } from 'react-native';

type Props = {
  texto: string;
  aoPressionar: () => void;
};

export function Botao({ texto, aoPressionar }: Props) {
  return (
    <Pressable
      accessibilityRole="button"
      onPress={aoPressionar}
      style={({ pressed }) => [styles.botao, pressed && styles.pressionado]}
    >
      <Text style={styles.texto}>{texto}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  botao: {
    alignItems: 'center',
    backgroundColor: '#315f91',
    borderRadius: 10,
    justifyContent: 'center',
    minHeight: 48,
    paddingHorizontal: 18,
  },
  pressionado: {
    opacity: 0.8,
  },
  texto: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});
