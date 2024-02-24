import { Suspense } from 'react';
import { allAbouts } from 'contentlayer/generated';
import { SiTypescript, SiLinkedin } from 'react-icons/si';
import { MdEmail, MdPhone } from 'react-icons/md';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/atoms/accordion';
import { AsideLink } from '@/components/atoms/aside-link';
import { FadeInStagger, FadeIn } from '@/components/atoms/fade-in';

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

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="grid grid-cols-12 overflow-hidden h-full">
      <aside className="md:col-span-3 lg:col-span-2 border-r border-lines md:block hidden overflow-y-auto">
        <Accordion type="multiple" defaultValue={['about', 'contacts']}>
          <AccordionItem value={'about'}>
            <AccordionTrigger
              className="border-b border-lines px-5 py-2.5 text-left"
              data-umami-event="accordion-about"
            >
              Personal-info
            </AccordionTrigger>
            <AccordionContent className="mt-5 space-y-1">
              <FadeInStagger faster>
                {allAbouts.map(({ title }) => (
                  <FadeIn key={title}>
                    <Suspense fallback={<>Loading...</>}>
                      <AsideLink
                        href={title}
                        key={title}
                        startWith="/about"
                        title={title}
                      >
                        <SiTypescript className="w-4 h-4 shrink-0" />
                        {title}
                      </AsideLink>
                    </Suspense>
                  </FadeIn>
                ))}
              </FadeInStagger>
            </AccordionContent>
          </AccordionItem>

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
                  {contactsData.map((item) => (
                    <li
                      key={item.title}
                      className="text-muted-foreground hover:text-foreground hover:bg-primary/10 w-full transition-colors"
                    >
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
