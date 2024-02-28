"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/app/ui/accordion';
import { FadeInStagger, FadeIn } from '@/app/ui/fade-in';
import { SiLinkedin } from 'react-icons/si';
import { MdEmail, MdPhone } from 'react-icons/md';

const contactsData = [
  {
    link: 'https://www.linkedin.com/in/frantanius',
    icon: <SiLinkedin className="w-4 h-4 shrink-0" />,
    title: 'Linkedin',
  },
  {
    link: 'mailto:frantaniussinulingga@gmail.com',
    icon: <MdEmail className="w-4 h-4 shrink-0" />,
    title: 'Email',
  },
  {
    link: 'tel:+6282120403650',
    icon: <MdPhone className="w-4 h-4 shrink-0" />,
    title: 'Phone number',
  },
];

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="grid grid-cols-12 overflow-hidden h-full">
      <aside className="md:col-span-3 lg:col-span-2 border-r border-lines md:block hidden overflow-y-auto">
        <Accordion type="single" collapsible defaultValue={'contacts'}>
          <AccordionItem value={'contacts'}>
            <AccordionTrigger
              className="border-b border-lines px-5 py-2.5 text-left"
              data-umami-event="accordion-contacts"
            >
              Contacts
            </AccordionTrigger>
            <AccordionContent className="mt-5 space-y-1">
              <FadeInStagger faster>
                <ul className="list-none p-0 m-0">
                  {contactsData.map((item: any) => (
                    <FadeIn key={item.title}>
                      <li className="text-muted-foreground hover:text-foreground hover:bg-primary/10 w-full transition-colors">
                        <a
                          href={item.link}
                          className="text-current flex items-center gap-x-2.5 px-5 py-1"
                          {...(item.title === 'Linkedin'
                            ? { target: '_blank', rel: 'noopener noreferrer' }
                            : {})}
                        >
                          {item.icon} {item.title}
                        </a>
                      </li>
                    </FadeIn>
                  ))}
                </ul>
              </FadeInStagger>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </aside>
      <section className="md:col-span-9 lg:col-span-10 col-span-12 overflow-y-auto relative h-[84dvh] md:h-auto">
        {children}
      </section>
    </section>
  );
}
