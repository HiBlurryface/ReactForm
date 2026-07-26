import { Button } from "../ui/Button"
import { DatePicker } from "../ui/DatePicker"
import { Input } from "../ui/Input"
import { Select } from "../ui/Select"
import { TextArea } from "../ui/TextArea"

export const Form = () => {
  return <form className="space-y-6">
    <Input
      name="title"
      label="Nazwa wydarzenia"
      placeholder="Niesamowita nazwa wydarzenia"
    />

    <Input
      name="description"
      label="Opis wydarzenia"
      placeholder="Niesamowity opis wydarzenia"
    />

    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
      <DatePicker
        name="startEvent"
        label="Początek"
        placeholder="0000-00-00"
      />

      <DatePicker
        name="startEvent"
        label="Koniec"
        placeholder="0000-00-00"
      />
    </div>

    <Select />

    {/* <div className="grid grid-cols-1 gap-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Input
          name="city"
          label="Miasto"
          placeholder="Kraków"
        />
        <Input
          name="postalCode"
          label="Kod pocztowy"
          placeholder="32-001"
        />
      </div>
      <Input
        name="address"
        label="Adres"
        placeholder="Sukkienice"
      />
    </div> */}

    {/* <Input
      name="link"
      label="Link wydarzenia"
      placeholder="htts//google.com"
    /> */}

    {/* <div className="grid grid-cols-1 gap-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Input
          name="city"
          label="Miasto"
          placeholder="Kraków"
        />
        <Input
          name="postalCode"
          label="Kod pocztowy"
          placeholder="32-001"
        />
      </div>
      <Input
        name="address"
        label="Adres"
        placeholder="Sukkienice"
      />
      <Input
        name="link"
        label="Link wydarzenia"
        placeholder="htts//google.com"
      />
    </div> */}

    <TextArea />

    <div className="pt-3">
      <Button />
    </div>
  </form>
}