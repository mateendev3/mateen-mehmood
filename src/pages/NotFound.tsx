import { ArrowLeft } from 'lucide-react';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { notFoundMeta } from '../lib/seo';
import { Backdrop } from '../components/ui/PageHeader';
import { Button } from '../components/ui/Button';

export default function NotFound() {
  useDocumentMeta(notFoundMeta);
  return (
    <section className="relative isolate grid min-h-[80vh] place-items-center overflow-hidden px-5 pt-28 pb-16 text-center">
      <Backdrop />
      <div>
        <p className="text-gradient font-display text-8xl font-extrabold tracking-tighter sm:text-9xl">404</p>
        <h1 className="mt-4 text-3xl font-bold sm:text-4xl">This page doesn't exist.</h1>
        <p className="mx-auto mt-4 max-w-md text-lg text-fg-muted">
          The link may be broken or the page may have moved. Let's get you back on track.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Button to="/">
            <ArrowLeft className="size-4" aria-hidden="true" /> Back to home
          </Button>
          <Button to="/contact" variant="secondary">
            Contact me
          </Button>
        </div>
      </div>
    </section>
  );
}
