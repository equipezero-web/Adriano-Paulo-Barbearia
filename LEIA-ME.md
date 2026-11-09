# Adriano Paulo Barbearia — pacote de correção (09/11/2026)

## Incluído

- `index.html`: mantém o CAPTCHA Turnstile já preparado, melhora as mensagens de erro do Google Agenda e acrescenta interações discretas, cantos arredondados, acessibilidade e efeitos suaves.
- `config.js`: continua apontando para o projeto Supabase compartilhado da equipezero-web, com somente a chave pública. **Não inserir chaves secretas aqui.**
- `sw.js`: atualiza a versão do cache PWA para que o celular receba os arquivos novos.

## Backend já alterado

A função Edge Function `ap-sync-calendar` foi publicada como v3 no Supabase projeto `fqisewatypluagngmgka`, com CORS atualizado para as origens GitHub Pages conhecidas. Continua exigindo JWT válido, acesso ADM e 2FA. Não precisa enviar este código ao GitHub.

## Como publicar

1. No GitHub `lucaalves018-ux/Adriano-Paulo-Barbearia`, substitua `index.html`, `config.js` e `sw.js` pelos arquivos com os mesmos nomes. Mantenha os demais arquivos e imagens.
2. Aguarde a publicação do GitHub Pages, abra o site e recarregue sem cache (Ctrl+Shift+R).
3. Entre no painel ADM com a conta existente. Conclua a autenticação em dois fatores.
4. Clique em **Sincronizar agenda** e leia a mensagem que aparecer.

## Se aparecer "Configure o Google Agenda antes de sincronizar"

No projeto Supabase compartilhado (Edge Functions > Secrets), precisam existir **ambos**: `AP_GOOGLE_CALENDAR_ID` e `AP_GOOGLE_SERVICE_ACCOUNT_JSON`. A conta de serviço Google precisa ter acesso ao calendário, e a Google Calendar API precisa estar habilitada no projeto Google Cloud. Configure os valores apenas como secrets do servidor; **não cole a chave privada no GitHub nem nesta conversa**.

## Notas

- As tabelas `ap_*` da barbearia não foram alteradas. A L&A não foi modificada.
- O banco da barbearia estava com **0 agendamentos** na última consulta; depois de configurar tudo, "0 sincronizados" é um resultado esperado até haver reservas.
- A mudança de código foi testada sintaticamente, mas login Google real e CORS do navegador precisam ser testados com sua sessão.
