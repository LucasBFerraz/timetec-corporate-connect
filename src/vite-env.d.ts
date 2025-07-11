/// <reference types="vite/client" />

interface Window {
  grecaptcha: {
    execute: (siteKey: string, options: {action: string}) => Promise<string>;
    ready: (callback: () => void) => void;
  };
}

interface ImportMetaEnv {
  readonly VITE_RECAPTCHA_SITE_KEY: string;
  readonly VITE_API_BASE_URL: string;
  readonly VITE_WA_NUMBER: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
