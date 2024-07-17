'use client';

import { FormEvent, useEffect, useRef, useState } from 'react';
import db from '@/firebase/index';
import { collection, getDocs, addDoc } from 'firebase/firestore';

export default function Test() {
  const [data, setData] = useState<{ value: string; id: string }[]>();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const value = inputRef.current?.value;
    if (!value) return;

    addDoc(collection(db, 'items'), {
      value,
    }).then((res) => console.log(res));
  };

  const fetchItems = () => {
    getDocs(collection(db, 'items')).then((res) => {
      const items = res.docs.map(
        (doc) =>
          ({ ...doc.data(), id: doc.id } as { value: string; id: string })
      );
      setData(items);
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          maxLength={20}
          ref={inputRef}
          placeholder='Add a new item'
        />
        <button type='submit'>Add Item</button>
      </form>
      <ul>
        {data?.map((item) => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
      <button type='button' onClick={fetchItems}>
        Show Item
      </button>
    </>
  );
}
