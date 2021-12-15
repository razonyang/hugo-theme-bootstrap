import Mermaid from 'mermaid';

declare global {
  interface Window {
    mermaidOptions: any;
  }
}

Mermaid.initialize(window.mermaidOptions);
