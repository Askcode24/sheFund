/// <reference types="vite/client" />

declare interface ImportMetaEnv {
  readonly VITE_API_BASE_URL: string;
  readonly VITE_API_TOKEN: string;
  // add more env variables as needed
}

declare interface ImportMeta {
  readonly env: ImportMetaEnv;
}
