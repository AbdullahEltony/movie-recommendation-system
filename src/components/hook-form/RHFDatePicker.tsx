import { Controller, useFormContext } from "react-hook-form";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

interface RHFDatePickerProps {
  label: string;
  name: string;

}

const RHFDatePicker: React.FC<RHFDatePickerProps> = ({ label, name }) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <div className="text-sm w-full flex flex-col gap-3">
          <label className="text-white text-sm">{label}</label>
          <DatePicker
            selected={field.value} // Ensure it's using the controlled value
            onChange={(date) => field.onChange(date)} // Update the form state correctly
            className="w-full bg-transparent outline-none text-sm p-4 border border-gray-800 font-light rounded-lg"
          />
        </div>
      )}
    />
  );
};

export default RHFDatePicker;
