import * as Mermaid from 'mermaid';

declare global {
  interface Window {
    params: any;
  }
}

Mermaid.initialize(window.params.mermaid);
