// CONFIGURAÇÃO PÚBLICA DO SITE. Nunca adicione secrets ou senhas aqui.
window.APP_CONFIG = {
  supabaseUrl: 'https://fqisewatypluagngmgka.supabase.co',
  supabasePublishableKey: 'sb_publishable_Etts25r3XRBdDHuUYuUajg_YjXTn_wb',
  previewMode: false,
  // Use o mesmo provedor e a Site Key do CAPTCHA JÁ CONFIGURADO no Supabase Auth.
  // A Site Key é pública. O Secret Key permanece SOMENTE no provedor / Supabase.
  captchaProvider: 'turnstile', // ou 'hcaptcha' se assim estiver configurado no Supabase
  captchaSiteKey: '0x4AAAAAAFVfC4-0L4pXMgnJ'
};
