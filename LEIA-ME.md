# Adriano Paulo Barbearia — 2FA e Google Agenda

## Correção

O backend `ap-sync-calendar` foi mantido com JWT e 2FA obrigatórios.
Esta atualização faz o botão Sincronizar agenda inspecionar o nível da sessão local (`aal1`/`aal2`). Se necessário, apresenta o diálogo do autenticador já cadastrado em vez de criar outro fator; depois de uma verificação `aal2` bem-sucedida, a sincronização solicitada é retomada. A requisição utiliza o token atualizado da sessão.

Também reforça a confirmação de `aal2` antes de abrir o painel administrativo, preserva o papel administrativo no restauro da sessão, e dá uma orientação mais clara caso o backend ainda recuse o token.

## Publicação

Substitua SOMENTE os arquivos `index.html`, `config.js` e `sw.js` na raiz do repositório `lucaalves018-ux/Adriano-Paulo-Barbearia`.
A atualização mantém as melhorias de layout, o CAPTCHA e as integrações do pacote anterior.

Após a publicação, abra o site atualizado, saia e faça login com e-mail/senha. Informe os 6 dígitos do autenticador solicitado **no site da barbearia**. Depois use Sincronizar agenda.

## Segurança

Nunca compartilhe senhas, token, chave privada do Google, QR code de autenticação ou `service_role`.
A barbearia e a L&A compartilham o projeto Supabase, mas sessões em origens GitHub Pages diferentes não são automaticamente compartilhadas no navegador. Confirmar MFA em uma origem não necessariamente confirma a sessão da outra.
O código foi verificado quanto à sintaxe JavaScript, mas a sincronização real deve ser testada com a sessão do usuário e as credenciais Google configuradas.
