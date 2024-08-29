import path from 'node:path';

/** */
export const getProjectRootDir = (): string => {
  const mode = import.meta.env.MODE;

  return mode === 'production' ? path.join(import.meta.dirname, '../') : path.join(import.meta.dirname, '../../');
};

const __srcFolder = path.join(getProjectRootDir(), '/src');

/** */
export const getRelativeUrlByFilePath = (filepath: string): string => {
  return filepath.replace(__srcFolder, '');
};
