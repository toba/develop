export interface StyleConfig {
   plugins: string | string[];
   rules: { [key: string]: null | number | boolean };
   ruleName?: string;
}
