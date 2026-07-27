import type { EventFormSchema } from '@/lib/FormValidationRules';
import * as yup from 'yup';

export type EventFormType = yup.InferType<typeof EventFormSchema>;