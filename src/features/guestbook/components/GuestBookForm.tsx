'use client';

import { useRef } from 'react';
import { useFormStatus, useFormState } from 'react-dom';
import { signIn, signOut, useSession } from 'next-auth/react';

import { postGuestbook } from '../apis/postGuestbook';

type FormState = {
  success: boolean;
  error?: string;
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button type='submit' className='btn' disabled={pending}>
      {pending ? 'Registering...' : 'Register'}
    </button>
  );
}

export default function GuestBookForm() {
  const { data: sessionData, status } = useSession();
  const formRef = useRef<HTMLFormElement>(null);
  const isAuthenticated = status === 'authenticated';

  const handleSubmit = async (prevState: FormState, formData: FormData) => {
    try {
      if (!formRef.current) return { success: false };

      if (
        !sessionData ||
        !sessionData.provider ||
        !sessionData.userId ||
        !sessionData.user?.name
      )
        return { success: false, error: 'Not authenticated' };

      const content = formData.get('content');
      if (!content) return { success: false, error: 'Content is required' };

      const guestbookData = {
        provider: sessionData.provider,
        userId: sessionData.userId,
        content: content as string,
        name: sessionData.user.name,
        image: sessionData.user.image ?? '',
        email: sessionData.user.email ?? '',
      };

      await postGuestbook(guestbookData);

      formRef.current.reset();

      return { success: true };
    } catch (error) {
      return { success: false, error: 'Failed to submit guestbook' };
    }
  };

  const [state, formAction] = useFormState(handleSubmit, { success: false });

  return (
    <section>
      <div>
        <div className='flex items-center'>
          <p className='font-bold'>
            {sessionData?.user?.name || sessionData?.user?.email || 'Anonymous'}
          </p>
          {isAuthenticated ? (
            <button className='btn btn-xs ml-4' onClick={() => signOut()}>
              Sign out
            </button>
          ) : (
            <button
              className='btn btn-xs ml-4'
              onClick={() => signIn('github')}
            >
              Sign in with GitHub
            </button>
          )}
        </div>
        <form action={formAction} ref={formRef}>
          <textarea
            name='content'
            className='textarea textarea-bordered resize-none w-full h-40 mt-4'
            placeholder='Please leave a message here.'
            maxLength={100}
            disabled={!isAuthenticated}
          />

          <div className='flex justify-between mt-2'>
            <p className='text-red-500 font-semibold text-right text-sm'>
              {state.error}
            </p>
            <SubmitButton />
          </div>
        </form>
      </div>
    </section>
  );
}
