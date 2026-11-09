import { useId, useState, type FormEvent, type ReactNode } from 'react';
import { useSearchParams } from 'react-router';
import { AlertCircle, CheckCircle2, Loader2, Send } from 'lucide-react';
import { activeServices } from '../../data/services';
import { contactOptions } from '../../data/site';
import { profile } from '../../data/profile';
import { formspreeId, hasEmail } from '../../lib/content';
import { cn, mailto } from '../../lib/utils';
import { Button } from '../ui/Button';

type Fields = {
  name: string;
  email: string;
  service: string;
  description: string;
  budget: string;
  timeline: string;
};

type Errors = Partial<Record<keyof Fields, string>>;
type Status = 'idle' | 'submitting' | 'success' | 'error';

const OTHER = 'Something else';
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(values: Fields): Errors {
  const errors: Errors = {};
  if (values.name.trim().length < 2) errors.name = 'Please enter your name.';
  if (!EMAIL_RE.test(values.email.trim())) errors.email = 'Please enter a valid email address.';
  if (!values.service) errors.service = 'Please choose the service you need.';
  if (values.description.trim().length < 20)
    errors.description = 'Please share a little more detail (at least 20 characters).';
  return errors;
}

/**
 * Contact form for static hosting:
 *  - with a Formspree ID → submits directly (no backend needed);
 *  - otherwise, with an email set → opens the visitor's email app, pre-filled;
 *  - with neither → renders nothing (no dead submit buttons).
 */
export function ContactForm() {
  const [params] = useSearchParams();
  const preselected = activeServices.find((s) => s.id === params.get('service'))?.title ?? '';
  const mode: 'formspree' | 'mailto' | null = formspreeId ? 'formspree' : hasEmail ? 'mailto' : null;

  const [values, setValues] = useState<Fields>({
    name: '',
    email: '',
    service: preselected,
    description: '',
    budget: '',
    timeline: '',
  });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>('idle');
  const [gotcha, setGotcha] = useState('');

  if (!mode) return null;

  const update = (key: keyof Fields) => (value: string) => {
    setValues((v) => ({ ...v, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      const first = Object.keys(found)[0];
      document.getElementById(`field-${first}`)?.focus();
      return;
    }
    if (gotcha) return; // bot

    if (mode === 'mailto') {
      const details = [
        `Name: ${values.name.trim()}`,
        `Email: ${values.email.trim()}`,
        `Service: ${values.service}`,
        values.budget ? `Budget: ${values.budget}` : '',
        values.timeline ? `Timeline: ${values.timeline}` : '',
      ].filter(Boolean);
      const body = [values.description.trim(), '', '—', ...details].join('\n');
      window.location.href = mailto(profile.email, `Project enquiry: ${values.service}`, body);
      return;
    }

    setStatus('submitting');
    try {
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...values, _subject: `Project enquiry: ${values.service}`, _replyto: values.email }),
      });
      if (!response.ok) throw new Error(`Request failed (${response.status})`);
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div role="status" className="card flex flex-col items-center px-6 py-16 text-center">
        <div className="grid size-14 place-items-center rounded-full bg-success/10 text-success">
          <CheckCircle2 className="size-7" aria-hidden="true" />
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Thanks, {values.name.split(' ')[0]}!</h2>
        <p className="mt-2 max-w-sm text-fg-muted">
          Your message is on its way. I'll get back to you at <span className="font-medium text-fg">{values.email}</span>.
        </p>
      </div>
    );
  }

  const submitting = status === 'submitting';

  return (
    <form noValidate onSubmit={onSubmit} className="card relative p-6 sm:p-8" aria-describedby="form-note">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="name" label="Full name" error={errors.name} required>
          {(props) => (
            <input {...props} type="text" autoComplete="name" value={values.name} onChange={(e) => update('name')(e.target.value)} />
          )}
        </Field>
        <Field id="email" label="Email address" error={errors.email} required>
          {(props) => (
            <input
              {...props}
              type="email"
              autoComplete="email"
              inputMode="email"
              value={values.email}
              onChange={(e) => update('email')(e.target.value)}
            />
          )}
        </Field>

        <Field id="service" label="Service required" error={errors.service} required className="sm:col-span-2">
          {(props) => (
            <select {...props} value={values.service} onChange={(e) => update('service')(e.target.value)}>
              <option value="" disabled>
                Select a service…
              </option>
              {activeServices.map((s) => (
                <option key={s.id} value={s.title}>
                  {s.title}
                </option>
              ))}
              <option value={OTHER}>{OTHER}</option>
            </select>
          )}
        </Field>

        <Field id="description" label="Project description" error={errors.description} required className="sm:col-span-2">
          {(props) => (
            <textarea
              {...props}
              rows={5}
              placeholder="What are you building, and how can I help?"
              value={values.description}
              onChange={(e) => update('description')(e.target.value)}
            />
          )}
        </Field>

        <Field id="budget" label="Estimated budget" optional>
          {(props) => (
            <select {...props} value={values.budget} onChange={(e) => update('budget')(e.target.value)}>
              <option value="">Prefer not to say</option>
              {contactOptions.budgets.map((b) => (
                <option key={b}>{b}</option>
              ))}
            </select>
          )}
        </Field>
        <Field id="timeline" label="Expected timeline" optional>
          {(props) => (
            <select {...props} value={values.timeline} onChange={(e) => update('timeline')(e.target.value)}>
              <option value="">Prefer not to say</option>
              {contactOptions.timelines.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
          )}
        </Field>

        {/* Honeypot: hidden from people, tempting for bots */}
        <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
          <label>
            Leave this field empty
            <input type="text" tabIndex={-1} autoComplete="off" value={gotcha} onChange={(e) => setGotcha(e.target.value)} />
          </label>
        </div>
      </div>

      {status === 'error' && (
        <p role="alert" className="mt-6 flex items-start gap-2 rounded-xl border border-danger/30 bg-danger/5 p-4 text-sm text-danger">
          <AlertCircle className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
          <span>
            Sorry — your message couldn't be sent. Please try again
            {hasEmail ? (
              <>
                {' '}or email me directly at{' '}
                <a className="font-semibold underline" href={`mailto:${profile.email}`}>
                  {profile.email}
                </a>
              </>
            ) : null}
            .
          </span>
        </p>
      )}

      <div className="mt-7 flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p id="form-note" className="text-sm text-fg-subtle">
          {mode === 'mailto'
            ? 'This opens your email app with your message ready to send.'
            : 'Fields marked * are required.'}
        </p>
        <Button type="submit" size="lg" disabled={submitting} aria-busy={submitting}>
          {submitting ? (
            <>
              <Loader2 className="size-4 animate-spin" aria-hidden="true" /> Sending…
            </>
          ) : (
            <>
              {mode === 'mailto' ? 'Continue in Email' : 'Send Message'} <Send className="size-4" aria-hidden="true" />
            </>
          )}
        </Button>
      </div>
    </form>
  );
}

const controlClass =
  'block w-full rounded-xl border bg-surface-2 px-4 py-3 text-[0.9375rem] text-fg placeholder:text-fg-subtle transition-[border-color,box-shadow] outline-none focus:border-accent focus:ring-4 focus:ring-accent-soft';

function Field({
  id,
  label,
  error,
  required,
  optional,
  className,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  required?: boolean;
  optional?: boolean;
  className?: string;
  children: (props: {
    id: string;
    name: string;
    className: string;
    'aria-invalid'?: boolean;
    'aria-describedby'?: string;
    required?: boolean;
  }) => ReactNode;
}) {
  const errorId = useId();
  const fieldId = `field-${id}`;
  return (
    <div className={className}>
      <label htmlFor={fieldId} className="mb-2 block text-sm font-medium text-fg">
        {label}
        {required && (
          <span className="text-accent" aria-hidden="true">
            {' '}*
          </span>
        )}
        {optional && <span className="font-normal text-fg-subtle"> (optional)</span>}
      </label>
      {children({
        id: fieldId,
        name: id,
        className: cn(controlClass, error ? 'border-danger' : 'border-border'),
        'aria-invalid': error ? true : undefined,
        'aria-describedby': error ? errorId : undefined,
        required,
      })}
      {error && (
        <p id={errorId} className="mt-1.5 text-sm text-danger">
          {error}
        </p>
      )}
    </div>
  );
}
