import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { DetalhesScreen } from './src/screens/DetalhesScreen';
import { InicioScreen } from './src/screens/InicioScreen';
import { NovaTarefaScreen } from './src/screens/NovaTarefaScreen';
import { RootStackParamList, Tarefa } from './src/navigation/types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);

  const adicionarTarefa = (titulo: string) => {
    setTarefas((listaAtual) => [
      ...listaAtual,
      {
        id: Date.now().toString(),
        titulo,
        concluida: false,
      },
    ]);
  };

  const alternarTarefa = (id: string) => {
    setTarefas((listaAtual) =>
      listaAtual.map((tarefa) =>
        tarefa.id === id ? { ...tarefa, concluida: !tarefa.concluida } : tarefa,
      ),
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#ffffff' },
          headerTintColor: '#24364b',
          headerTitleStyle: { fontWeight: '700' },
          contentStyle: { backgroundColor: '#f4f6f8' },
        }}
      >
        <Stack.Screen name="Inicio" options={{ title: 'Minhas tarefas' }}>
          {(props) => (
            <InicioScreen
              {...props}
              tarefas={tarefas}
              aoMarcarTarefa={alternarTarefa}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="NovaTarefa" options={{ title: 'Nova tarefa' }}>
          {(props) => (
            <NovaTarefaScreen {...props} aoSalvar={adicionarTarefa} />
          )}
        </Stack.Screen>
        <Stack.Screen
          name="Detalhes"
          component={DetalhesScreen}
          options={{ title: 'Detalhes da tarefa' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
