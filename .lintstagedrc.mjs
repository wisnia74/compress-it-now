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
    const toLint = await filesToLint(files);

    return toLint.length ? [`next lint --max-warnings 0 --fix ${toLint}`] : [SUCCESS];
  },
  '*.{json,css,scss,yml,yaml}': async (files) => {
    const toLint = await filesToLint(files);

    return toLint.length ? [`prettier --write ${await filesToLint(toLint)}`] : [SUCCESS];
  }
};
