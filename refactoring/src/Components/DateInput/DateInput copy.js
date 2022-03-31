import React, { Component } from "react";
import DatePicker from "react-datepicker";
import ko from "date-fns/locale/ko";
import "react-datepicker/dist/react-datepicker.css";
import "./DateInput.scss";

class DateInput extends Component {
  render() {
    return (
      <form className="inputDeliveryDate">
        <DatePicker
          id="datePicker"
          locale={ko}
          name="day1"
          selected={this.props.startDate}
          closeOnScroll={true}
          minDate={new Date()}
          popperModifiers={{ preventOverflow: { enabled: true } }}
          onChange={(date, event) => {
            this.props.changeDate(date, event);
          }}
          placeholderText="수령일을 선택해주세요."
          dateFormat="eeee, yyyy-MM-dd"
        />
      </form>
    );
  }
}
export default DateInput;
