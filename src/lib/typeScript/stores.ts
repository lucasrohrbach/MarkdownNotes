import { writable, type Writable } from 'svelte/store';
import type {Note}  from './types';

export let Notes: Writable<Note[]> = writable([]);