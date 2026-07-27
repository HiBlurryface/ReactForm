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

export const Form = () => {
  const {
    register,
    control,
    watch,
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

  const sendEvent: SubmitHandler<EventFormType> = (data) => {
    console.log(data)
  }

  return <form className="space-y-6" onSubmit={handleSubmit(sendEvent)}>
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
              setValueAs: (value) => {
                let formatted = value.replace(/\D/g, "");

                formatted = formatted.slice(0, 5);

                if (formatted.length > 2) {
                  formatted = `${formatted.slice(0, 2)}-${formatted.slice(2)}`;
                }

                return formatted;
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
      <Button type="submit">
        Send Message
      </Button>
    </div>
  </form>
}