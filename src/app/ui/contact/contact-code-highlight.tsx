"use client";

import SyntaxHighlighter from "react-syntax-highlighter";
import { dateNowFormatted } from "@/app/lib/date-format";
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import useStore from "@/app/contact/store";

export default function ContactCodeHighlight() {
  const { name, email, message } = useStore((state) => state.formData);
  return (
    <pre>
      {`
        const button = document.querySelector ( '#sendBtn' );

        const message = {
          name : "${name}" ,
          email : "${email}" ,
          message : "${message}" ,
          date: "${dateNowFormatted}"
        }

        button.addEventListener ( 'click' ), () => {
          form.send ( message );
        })
      `}
    </pre>
  )
}
