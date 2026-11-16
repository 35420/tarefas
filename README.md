# Minhas Tarefas

## Descrição
Aplicativo móvel para organizar tarefas do dia a dia. Permite cadastrar uma tarefa, marcar ou desmarcar sua conclusão e consultar seus detalhes.

## Aluno
- **Nome:** Arthur Henrique Costa Silva
- **RGM:** 43665705

## Telas
- **Início:** exibe as tarefas cadastradas, permite alternar o status de conclusão e abrir os detalhes. Quando não há tarefas, mostra uma mensagem para adicionar a primeira.
- **Nova tarefa:** recebe o título da tarefa e salva após validar que não está vazio.
- **Detalhes:** mostra o título e o status da tarefa selecionada.

## Fonte de dados
Dados locais mantidos em memória no estado do app (`App.tsx`). Não há integração com API. As tarefas são perdidas ao encerrar ou reiniciar o aplicativo.

## Onde estão os requisitos
- **Componentes:** `src/components/Botao.tsx`, `src/components/MensagemVazia.tsx` e `src/components/TarefaItem.tsx`.
- **Props com callback:** `Botao` recebe `aoPressionar`; `TarefaItem` recebe `aoAbrir` e `aoMarcar`; `InicioScreen` recebe `aoMarcarTarefa`; `NovaTarefaScreen` recebe `aoSalvar`.
- **useState:** `App.tsx` mantém a lista de tarefas; `src/screens/NovaTarefaScreen.tsx` mantém o título digitado e a mensagem de validação.
- **useEffect:** `src/screens/InicioScreen.tsx` atualiza o título da tela com a quantidade de tarefas.
- **Navegação com parâmetros:** `InicioScreen` envia a tarefa selecionada para `Detalhes` como `{ tarefa }`; os parâmetros e rotas estão tipados em `src/navigation/types.ts`.

## Vídeo de demonstração
Vídeo disponível em (Demo.mp4).

## Como executar
Requer Node.js e npm instalados.

```bash
npm install
npx expo start
```
