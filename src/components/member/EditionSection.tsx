import { Input } from "../../controls/Input"

export interface InputFileds {
    type: string, 
    placeholder: string,
    value: string, 
    name: string,
}

export interface EditSectionProps {
inputFields: InputFileds[],
handleChange:(name: string, e: React.ChangeEvent<HTMLInputElement>) => void
}

export const EditionSection = ( {inputFields, handleChange}: EditSectionProps) => 
{
    return (
        <>      
        {inputFields.map((field, index) => (
            <Input
              key={index}
              type={field.type}
              placeHolder={field.placeholder}
              value={field.value}
              handleChange={e => handleChange(field.name, e)}
            />
          ))}
          </>
    )
}