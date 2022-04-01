import DatePicker from "react-datepicker";
import ko from "date-fns/locale/ko";
import "react-datepicker/dist/react-datepicker.css";
import "./DateInput.scss";

export interface DateInputProps {
  startDate: Date;
  changeDate: (date: Date | null) => void;
}

export function DateInput({
  startDate,
  changeDate,
}: DateInputProps): JSX.Element {
  return (
    <form className="inputDeliveryDate">
      <DatePicker
        id="datePicker"
        locale={ko}
        name="day1"
        selected={startDate}
        closeOnScroll={true}
        minDate={new Date()}
        // popperModifiers={{ preventOverflow: { enabled: true } }}
        onChange={date => {
          changeDate(date);
        }}
        placeholderText="수령일을 선택해주세요."
        dateFormat="eeee, yyyy-MM-dd"
      />
    </form>
  );
}

// class DateInput extends Component {
//   render() {
//     return (
//       <form className="inputDeliveryDate">
//         <DatePicker
//           id="datePicker"
//           locale={ko}
//           name="day1"
//           selected={this.props.startDate}
//           closeOnScroll={true}
//           minDate={new Date()}
//           popperModifiers={{ preventOverflow: { enabled: true } }}
//           onChange={(date, event) => {
//             this.props.changeDate(date, event);
//           }}
//           placeholderText="수령일을 선택해주세요."
//           dateFormat="eeee, yyyy-MM-dd"
//         />
//       </form>
//     );
//   }
// }
// export default DateInput;
