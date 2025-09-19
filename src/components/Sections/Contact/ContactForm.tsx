import { useForm, ValidationError } from '@formspree/react';
import { FC, memo, useCallback, useMemo, useState } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: FC = memo(() => {
  const defaultData = useMemo(
    () => ({
      name: '',
      email: '',
      message: '',
    }),
    [],
  );

  const [data, setData] = useState<FormData>(defaultData);
  const [state, handleSubmit] = useForm('xpwjvqdl');

  const onChange = useCallback(
    <T extends HTMLInputElement | HTMLTextAreaElement>(event: React.ChangeEvent<T>): void => {
      const { name, value } = event.target;

      const fieldData: Partial<FormData> = { [name]: value };

      setData({ ...data, ...fieldData });
    },
    [data],
  );

  if (state.succeeded) {
    return <p className="prose leading-6 text-neutral-300">Thanks you!</p>;
  }

  // const handleSendMessage = useCallback(
  //   async (event: React.FormEvent<HTMLFormElement>) => {
  //     event.preventDefault();
  //     /**
  //      * This is a good starting point to wire up your form submission logic
  //      * */
  //     console.log('Data to send: ', data);
  //   },
  //   [data],
  // );

  const inputClasses =
    'bg-neutral-700 border-0 focus:border-0 focus:outline-none focus:ring-1 focus:ring-orange-600 rounded-md placeholder:text-neutral-400 placeholder:text-sm text-neutral-200 text-sm';

  return (
    <form className="grid min-h-[320px] grid-cols-1 gap-y-4" method="POST" onSubmit={handleSubmit}>
      <input
        className={inputClasses}
        id="name"
        name="name"
        onChange={onChange}
        placeholder="Name"
        required
        type="text"
      />
      <input
        autoComplete="email"
        className={inputClasses}
        id="email"
        name="email"
        onChange={onChange}
        placeholder="Email"
        required
        type="email"
      />
      <ValidationError errors={state.errors} field="email" prefix="Email" />
      <textarea
        className={inputClasses}
        id="message"
        maxLength={250}
        name="message"
        onChange={onChange}
        placeholder="Message"
        required
        rows={6}
      />
      <ValidationError errors={state.errors} field="message" prefix="Message" />
      <button
        aria-label="Submit contact form"
        className="w-max rounded-full border-2 border-orange-600 bg-stone-900 px-4 py-2 text-sm font-medium text-white shadow-md outline-none hover:bg-stone-800 focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 focus:ring-offset-stone-800"
        disabled={state.submitting}
        type="submit">
        Send Message
      </button>
    </form>
  );
});

ContactForm.displayName = 'ContactForm';
export default ContactForm;
