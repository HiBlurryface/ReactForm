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
  })

  const eventType = watch("type");

  const sendEvent: SubmitHandler<EventFormType> = (data) => {
    console.log(data)
  }

  return <form className="space-y-6" onSubmit={handleSubmit(sendEvent)}>
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

    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
      <Controller
        name="start"
        control={control}
        render={({ field }) => (
          <DatePicker
            name="startEvent"
            label="Koniec"
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
      <Button type="submit">
        Send Message
      </Button>
    </div>
  </form>
}