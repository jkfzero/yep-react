import React from 'react';
import type DatePickerProps from './type';
import Popup from '../popup';
import DatePicker from './DatePicker';
import PickerPopup from '../picker/PickerPopup';

class PopupDatePicker extends React.Component<DatePickerProps, any> {
  static defaultProps = {
    mode: 'datetime',
    prefixCls: 'Yep-picker',
    pickerPrefixCls: 'Yep-picker-col',
    minuteStep: 1,
    use12Hours: false,
    pickerValueProp: 'date',
    pickerValueChangeProp: 'onDateChange',
    title: '',
  };
  setScrollValue = (v: any) => {
    this.scrollValue = v;
  };

  onOk = v => {
    const {onChange, onOk} = this.props;
    if (onChange) {
      onChange(v);
    }
    if (onOk) {
      onOk(v);
    }
  };

  render() {
    const {
      show,
      onCancel,
      minuteStep,
      locale,
      minDate,
      maxDate,
      mode,
      pickerPrefixCls,
      prefixCls,
      value,
      use12Hours,
      onValueChange,
    } = this.props;
    return (
      <PickerPopup show={show} onCancel={onCancel} onOk={this.onOk}>
        <DatePicker
          minuteStep={minuteStep}
          locale={locale}
          minDate={minDate}
          maxDate={maxDate}
          mode={mode}
          pickerPrefixCls={pickerPrefixCls}
          prefixCls={prefixCls}
          defaultDate={value || new Date()}
          use12Hours={use12Hours}
          onValueChange={onValueChange}
          onScrollChange={this.setScrollValue}
        />
      </PickerPopup>
    );
  }
}

export default PopupDatePicker;
