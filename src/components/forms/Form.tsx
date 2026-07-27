import { Controller, useForm, type SubmitHandler } from "react-hook-form"
import { Button } from "../ui/Button"
import { DatePicker } from "../ui/DatePicker"
import { Input } from "../ui/Input"
import { Select } from "../ui/Select"
import { TextArea } from "../ui/TextArea"
import type { EventFormType } from "@/types/FormTypes"
import { yupResolver } from "@hookform/resolvers/yup"
import { EventFormSchema } from "@/lib/FormValidationRules"
import { eventTypes } from "@/store/events"
import { useState } from "react"
import { Modal } from "../ui/Modal"

export const Form = () => {
  const {
    register,
    control,
    watch,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<EventFormType>({
    resolver: yupResolver(EventFormSchema),
    defaultValues: {
      name: "",
      surname: "",
      email: "",
      title: "",
      description: "",
      price: 0,
      start: "",
      end: "",
      type: "",
      city: "",
      postalCode: "",
      address: "",
      link: "",
      message: "",
    },
  })

  const eventType = watch("type");
  const [modal, setModal] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)

  const sendEvent: SubmitHandler<EventFormType> = async (data) => {
    setLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log(data);
      setModal(true);
      reset();
    } catch (error) {
      console.error("Nie udało się dodać wydarzenia:", error);
    } finally {
      setLoading(false)
    }
  }

  return <>
    <form className="space-y-6" onSubmit={handleSubmit(sendEvent)}>
      <div className="space-y-6 mb-12 pb-12 border-b border-gray-200">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <Input
            label="Imię prowadzącego"
            placeholder="Jason"
            {...register('name')}
            error={errors.name?.message}
          />

          <Input
            label="Nazwisko"
            placeholder="Statham"
            {...register('surname')}
            error={errors.surname?.message}
          />
        </div>

        <Input
          label="Email"
          placeholder="jason@gmail.com"
          {...register('email')}
          error={errors.email?.message}
        />
      </div>

      <Input
        label="Nazwa wydarzenia"
        placeholder="Niesamowita nazwa wydarzenia"
        {...register('title')}
        error={errors.title?.message}
      />

      <Input
        label="Opis wydarzenia"
        placeholder="Niesamowity opis wydarzenia"
        {...register('description')}
        error={errors.description?.message}
      />

      <Input
        inputMode="numeric"
        label="Cena wydarzenia ( w złotych )"
        placeholder="300"
        error={errors.price?.message}
        {...register("price", {
          valueAsNumber: true,
          onChange: (e) => {
            const value = e.target.value;

            if (value.length > 1 && value.startsWith("0")) {
              e.target.value = "0";
              return;
            }

            e.target.value = value.replace(/\D/g, "");
          },
        })}
      />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Controller
          name="start"
          control={control}
          render={({ field }) => (
            <DatePicker
              name="startEvent"
              label="Początek"
              placeholder="0000-00-00"
              value={field.value}
              onChange={field.onChange}
              error={errors.start?.message}
            />
          )}
        />

        <Controller
          name="end"
          control={control}
          render={({ field }) => (
            <DatePicker
              name="endEvent"
              label="Koniec"
              placeholder="0000-00-00"
              value={field.value}
              onChange={field.onChange}
              error={errors.end?.message}
            />
          )}
        />
      </div>

      <Select
        label="Typ wydarzenia"
        options={eventTypes}
        error={errors.type?.message}
        {...register("type")}
      />

      {(eventType === 'offline' || eventType === 'hybrid') &&
        <div className="grid grid-cols-1 gap-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <Input
              label="Miasto"
              placeholder="Kraków"
              error={errors.city?.message}
              {...register("city")}
            />
            <Input
              label="Kod pocztowy"
              placeholder="32-001"
              error={errors.postalCode?.message}
              {...register("postalCode", {
                onChange: (e) => {
                  let value = e.target.value.replace(/\D/g, "");

                  value = value.slice(0, 5);

                  if (value.length > 2) {
                    value = `${value.slice(0, 2)}-${value.slice(2)}`;
                  }

                  e.target.value = value;
                },
              })}
            />
          </div>
          <Input
            label="Adres"
            placeholder="Sukkienice"
            error={errors.address?.message}
            {...register("address")}
          />
        </div>
      }

      {(eventType === 'online' || eventType === 'hybrid') &&
        <Input
          label="Link wydarzenia"
          placeholder="htts//google.com"
          error={errors.link?.message}
          {...register("link")}
        />
      }

      <TextArea
        label="Wyslij wiadomosc"
        placeholder="Text..."
        {...register("message")}
      />

      <div className="pt-3">
        <Button loading={loading} type="submit">
          Send Message
        </Button>
      </div>
    </form>

    <Modal
      isOpen={modal}
      setIsOpen={setModal}
    >
      <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Wydarzenie zostało dodane</h2>
      <p className="text-center my-6 text-lg leading-8 text-gray-600">Dziękujemy za dodanie wydarzenia. Twoje wydarzenie zostało pomyślnie utworzone.</p>
      <Button className="max-w-40 m-auto" type="button" onClick={() => setModal(false)}>
        Powrot
      </Button>
    </Modal>
  </>
}