import { FC } from 'react';
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { synthwave84 } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const githubUrlCodeString = `// my github:
const githubUrl = "https://github.com/kamilzielinskidev"`;

export const GithubUrlCode: FC = () => (
  <SyntaxHighlighter
    language="typescript"
    wrapLongLines
    style={synthwave84}
    customStyle={{ backgroundImage: "none", padding: 0 }}
  >
    {githubUrlCodeString}
  </SyntaxHighlighter>
);
