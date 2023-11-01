
declare module '@editorjs/editorjs' {
    class Editor {
      constructor(config?: any);
      save(): Promise<any>;
      destroy(): void;
      // Add any other methods or properties you use
    }
    export = Editor;  // Note the use of "export =" syntax here
  }