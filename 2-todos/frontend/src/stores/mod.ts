import { signal } from '@preact/signals';
import type { Task } from '../types/mod';

export const isOpenNavbar = signal(false);

export const tasks = signal<Task[]>([]);
