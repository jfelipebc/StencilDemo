/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */

import '@stencil/core';

declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {}

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;
    componentOnReady(done: (ele?: this) => void): void;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}
}


declare global {
  interface HTMLStCardElement extends HTMLStencilElement {
    'city': string;
    'name': string;
    'photo': string;
  }
  var HTMLStCardElement: {
    prototype: HTMLStCardElement;
    new (): HTMLStCardElement;
  };
  interface HTMLElementTagNameMap {
    'st-card': HTMLStCardElement;
  }
  interface ElementTagNameMap {
    'st-card': HTMLStCardElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'st-card': JSXElements.StCardAttributes;
    }
  }
  namespace JSXElements {
    export interface StCardAttributes extends HTMLAttributes {
      'city'?: string;
      'name'?: string;
      'photo'?: string;
    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }
