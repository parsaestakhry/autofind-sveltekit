import { writable } from 'svelte/store';

export const email = writable<string>('');
export const password = writable<string>('');
export const passwordConfirm = writable<string>('');
export const firstName = writable<string>('');
export const lastName = writable<string>();
export const isLoggedIn = writable<boolean>(false);
