## Descrição
Este aplicativo permite adicionar tarefas, marcar quando foram concluídas e consultar os detalhes de cada uma. 
As tarefas ficam salvas enquanto o app está aberto; ao fechá-lo, a lista é apagada.
## Telas
- **Início:** mostra a lista de tarefas e permite marcar ou desmarcar uma tarefa.
- **Nova tarefa:** permite digitar e salvar uma tarefa.
- **Detalhes:** mostra o nome e o status da tarefa selecionada.

## Fonte de dados
Dados locais mantidos no estado do aplicativo. Não é usada uma API.

## Onde estão os requisitos
- Componentes: `src/components/Botao.tsx`, `src/components/TarefaItem.tsx` e `src/components/MensagemVazia.tsx`.
- Props e funções de retorno (callbacks): `src/components/TarefaItem.tsx` e `src/components/Botao.tsx`.
- `useState`: `App.tsx` e `src/screens/NovaTarefaScreen.tsx`.
- `useEffect`: `src/screens/InicioScreen.tsx`, para atualizar o título com a quantidade de tarefas.
- Navegação e parâmetros: `App.tsx`, `src/screens/InicioScreen.tsx` e `src/screens/DetalhesScreen.tsx`.

## Vídeo de demonstração
Adicionar o vídeo de até 30 segundos em `demo/demo.mp4` ou colocar aqui um link acessível.

