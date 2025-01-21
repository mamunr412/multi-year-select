// global.d.ts
export {};

declare global {
  interface Window {
    tailwind?: {
      config?: {
        theme?: {
          extend?: {
            colors?: {
              customBlue?: string;
            };
          };
        };
      };
    };
  }
}
