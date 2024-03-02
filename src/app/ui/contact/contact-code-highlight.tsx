'use client';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { dateNowFormatted } from '@/app/lib/date-format';
import useStore from '@/app/contact/store';

export default function ContactCodeHighlight() {
  const { name, email, message } = useStore((state) => state.formData);
  return (
    <SyntaxHighlighter
      customStyle={{ height: '100%' }}
      showLineNumbers
      wrapLines
      wrapLongLines
      language="javascript"
      style={a11yDark}
    >{`
  const button = document.querySelector('#sendBtn');

  const message = {
    name : "${name}" ,
    email : "${email}" ,
    message : "${message}" ,
    date: "${dateNowFormatted}"
  }

  button.addEventListener('click'), () => {
    form.send (message);
  })
  `}
    </SyntaxHighlighter>
  );
}
