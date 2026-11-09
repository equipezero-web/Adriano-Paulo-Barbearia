# Atualização CAPTCHA — Adriano Paulo Barbearia (09/11/2026)

O login com e-mail, login interno da equipe, cadastro de clientes e recuperação de senha passam a usar o token do CAPTCHA configurado no Supabase Auth. O CAPTCHA permanece ativado: não desative a proteção do projeto compartilhado com a L&A.

## Publicação

1. O provedor utilizado pelo site L&A é Cloudflare Turnstile, e a Site Key pública do mesmo projeto já foi incluída no `config.js`. Confirme apenas que o projeto continua configurado para Turnstile.
2. No painel do Cloudflare Turnstile, localize o widget correspondente à Site Key pública `0x4AAAAAAFVfC4-0L4pXMgnJ` (a mesma usada no repositório público da L&A). Acrescente `lucaalves018-ux.github.io` aos hostnames permitidos, caso ainda não esteja autorizado, preservando todos os hostnames existentes da L&A. NÃO substitua a Secret Key configurada no Supabase.
3. O `config.js` já contém a Site Key pública existente. **Não** configure Secret Key no frontend. Se o Supabase Auth utilizar outro provedor ou a Site Key tiver sido trocada após a publicação da L&A, atualize somente as configurações públicas para corresponder ao provedor atual.
4. Publique na raiz do repositório: `index.html`, `config.js`, `sw.js`.
5. Limpe o cache / atualize com Ctrl+Shift+R e teste: login ADM Geral por e-mail, login da equipe por usuário, cadastro do cliente, recuperação de senha. O segundo fator TOTP permanece obrigatório para a equipe.

## Backend

Função `ap-staff-login` precisa receber `captchaToken` da página e repassá-lo a `auth.signInWithPassword(..., { options: { captchaToken }})`. Confira a confirmação de implantação no chat.

## Segurança

- **Não coloque** senhas de ADM, Recepção, SUPABASE_SERVICE_ROLE_KEY ou Secret Key do CAPTCHA no GitHub.
- Site Key e Supabase Publishable Key são chaves públicas apropriadas para o navegador.
- O mesmo projeto Supabase atende a L&A. Não desative globalmente CAPTCHA nem mude o Secret Key do projeto sem verificar o efeito na L&A.
- Widget, login e cadastro somente funcionam com uma Site Key válida para o domínio publicado; certifique-se de que `lucaalves018-ux.github.io` está entre os hostnames permitidos no mesmo widget da L&A.
