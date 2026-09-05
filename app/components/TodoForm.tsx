'use client';
import React, { useState } from 'react';
import { Button } from './ui/button';

type TodoFormProps = {
    onAddTodo: (title: string) => void;
}

export default function TodoForm({ onAddTodo }: TodoFormProps) {
    // Local state utk controlled input form
    const [title, setTitle] =useState('');
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

        //Validasi sederhana: jgn izinkan input kosong/hnya spasi
        const trimmedTitle = title.trim();
        if (!trimmedTitle) return;

        //kirim data ke komponen induk
        onAddTodo(trimmedTitle);

        //reset input form
        setTitle('');
    };

    return (
        <div className="mb-6 bg-white p-4 rounded-xl border border-gray-70">
            <form onSubmit={handleSubmit}  className="flex gap-2" >
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Tambahkan tugas baru..."
                    className="flex-1 bg-white"
                     variantSize="md"
                    />
                    <Button
                    type="submit"
                    disabled={!title.trim()}
                    variant="default"
                    size="md"
                >
                    Tambah
                </Button>
            </form>
        </div>
    );
}