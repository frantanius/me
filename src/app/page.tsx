import { FadeIn } from '@/components/atoms/fade-in';
import { GridPattern } from '@/components/atoms/grid-pattern';
import { AnimatedName } from '@/components/molecules/animated-name';
import Terminal from '@/components/ui/terminal/terminal';

export default function Home() {
  return (
    <section className="flex flex-wrap items-center justify-between p-5">
      <div className="w-full md:w-1/2 p-5 pt-0">
        <FadeIn>
          <div className="md:space-y-10 space-y-8 relative z-10">
            <header>
              <p className="text-muted-foreground text-lg font-extralight">
                Hi all. I am
              </p>
              <AnimatedName />
              <h2 className="text-muted-foreground md:text-2xl sm:text-xl text-base">
                <span className="animate-pulse">&gt; </span>
                Front-end developer
              </h2>
              <div className="absolute w-full h-1/2 bg-muted-foreground/10 blur-2xl top-0 left-0 -z-10 rounded-full animate-pulse" />
            </header>
          </div>
        </FadeIn>
      </div>
      <div className="w-full md:w-1/2 p-5">
        <Terminal />
        <GridPattern
          className="absolute inset-x-0 -top-14 -z-10 h-full w-full dark:fill-secondary/20 fill-neutral-100 dark:stroke-secondary/30 stroke-neutral-700/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-96}
          interactive
        />
      </div>
    </section>
  );
}
