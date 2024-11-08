import { ESLint } from 'eslint';

const SUCCESS = 'echo 0';

/** @see https://github.com/okonet/lint-staged#eslint--7-1 */
const filesToLint = async (files) => {
  const eslint = new ESLint();
  const isIgnored = await Promise.all(files.map((x) => eslint.isPathIgnored(x)));

  return files.filter((_, i) => !isIgnored[i]).join(' ');
};

export default {
  '*.{ts,tsx,js,jsx}': async (files) => {
    const filepaths = await filesToLint(files);

    if (!filepaths.length) {
      return [SUCCESS];
    }

    return [`next lint --max-warnings 0 --fix ${filepaths}`];
  },
  '*.{json,css,scss,yml,yaml}': async (files) => {
    const filepaths = await filesToLint(files);

    if (!filepaths.length) {
      return [SUCCESS];
    }

    return [`prettier --write ${filepaths}`];
  }
};
