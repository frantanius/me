import ContactForm from '@/app/ui/contact/contact-form';
// import ContactCodeHighlight from '@/app/ui/contact/contact-code-highlight';
import { FadeIn } from '@/app/ui/fade-in';

export default function ContactPage() {
  return (
    <FadeIn>
      <section className="grid grid-cols-12 overflow-hidden h-full">
        {/* <section className="md:col-span-6 lg:col-span-6 col-span-12 border-r border-lines py-5 px-20"> */}
        <section className="md:col-span-6 lg:col-span-6 col-span-12 py-5 px-20">
          <ContactForm />
        </section>
        {/* <aside className="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-6 p-5">
          <ContactCodeHighlight />
        </aside> */}
      </section>
    </FadeIn>
  );
}
