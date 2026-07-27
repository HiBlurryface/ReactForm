import * as yup from 'yup';

export const EventFormSchema = yup
  .object({
    title: yup
      .string()
      .required('Nazwa jest obowiązkowa'),
    description: yup
      .string()
      .required('Opis jest obowiązkowy'),
    start: yup
      .string()
      .required('Data początku jest obowiązkowa'),
    end: yup
      .string()
      .required('Data zakończenia jest obowiązkowa')
      .test(
        'end-after-start',
        'Data zakończenia musi być późniejsza niż data rozpoczęcia',
        function (value) {
          const { start } = this.parent;

          if (!value || !start) {
            return true;
          }

          return new Date(value) >= new Date(start);
        }
      ),
    type: yup
      .string()
      .required("Wybierz typ wydarzenia"),
    city: yup
      .string().when("type", {
        is: (type: string) => type === "offline" || type === "hybrid",
        then: (schema) => schema.required("Miasto jest obowiązkowe"),
        otherwise: (schema) => schema.strip(),
      }),

    postalCode: yup
      .string().when("type", {
        is: (type: string) => type === "offline" || type === "hybrid",
        then: (schema) =>
          schema
            .required("Kod pocztowy jest obowiązkowy")
            .matches(/^\d{2}-\d{3}$/, "Format: 00-000"),
        otherwise: (schema) => schema.strip(),
      }),

    address: yup
      .string().when("type", {
        is: (type: string) => type === "offline" || type === "hybrid",
        then: (schema) => schema.required("Adres jest obowiązkowy"),
        otherwise: (schema) => schema.strip(),
      }),

    link: yup.string().when("type", {
      is: (type: string) => type === "online" || type === "hybrid",
      then: (schema) =>
        schema
          .required("Link jest obowiązkowy")
          .url("Podaj poprawny adres URL"),
      otherwise: (schema) => schema.strip(),
    }),
    message: yup
      .string()
  })