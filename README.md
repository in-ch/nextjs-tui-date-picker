# nextjs-tui-date-picker

`nextjs-tui-date-picker` allows you to pick a date using a pop-up calendar in `Next.js`.

## Document

- [Installation](#installation)
- [How to use](#how-to-use)
- [Demos](#demos)
- [Properties](#properties)
- [Example code](#example-code)
- [Contribute](#contribute)

## Installation

This library use `nextjs-tui-date-picker`, so you need to install it.

```bash
npm install --save nextjs-tui-date-picker
```

or

```bash
yarn add nextjs-tui-date-picker
```

## How to use

<br/>

- TuiDatePicker

```tsx
'use client';

import { TuiDatePicker } from 'nextjs-tui-date-picker';

<TuiDatePicker
    handleChange={handleChange}
    date={new Date('2023-01-01')}
    inputWidth={140}
    fontSize={16}
/>
```

- TuiDateRangePicker

```tsx
'use client';

import {
  TuiDateRangePicker,
} from 'nextjs-tui-date-picker';

<TuiDateRangePicker
    handleChange={handleChange}
    options={options}
    inputWidth={80}
    containerWidth={200}
    startpickerDate={new Date('2023-01-02')}
    endpickerDate={new Date('2023-01-30')}
/>
```


- If you wanna change format or [language](#properties)

```tsx
const options: DateRangePickerOption = {
  language: 'en',
  format: 'MM-dd YYYY',
};

return (
  <>
    <TuiDateRangePicker
      handleChange={handleChange}
      options={options}
    />
  </>
);
```

## Demos

- nextjs-tui-date-picker.

![nextjs-tui-date-picker](https://github.com/in-ch/nextjs-tui-date-picker/assets/49556566/ee7125ea-452c-4903-802a-36d1372a6c9c)

![nextjs-date-inline-picker](https://github.com/in-ch/nextjs-tui-date-picker/assets/49556566/65c532b6-3678-4b0f-9053-04c3fb82045e)

![nextjs-date-year-picker](https://github.com/in-ch/nextjs-tui-date-picker/assets/49556566/5010fb07-1627-4126-aff7-6148556acfdf)

![nextjs-date-month-picker](https://github.com/in-ch/nextjs-tui-date-picker/assets/49556566/0cc7ac9b-040c-4b9f-9076-edc072882d3c)

![nextjs-date-time-picker](https://github.com/in-ch/nextjs-tui-date-picker/assets/49556566/ffcdfc01-b718-46d0-851e-0f03ddbbc436)

![nextjs-date-time-tab-picker](https://github.com/in-ch/nextjs-tui-date-picker/assets/49556566/74e9f423-f374-494c-ae39-3377c274694b)

- nextjs-tui-range-picker.

![nextjs-tui-range-picker](https://github.com/in-ch/nextjs-tui-date-picker/assets/49556566/fa488a25-4695-43f8-8eba-bd4599b42b0a)

## Properties

Below are `nextjs-tui-date-picker` specific properties.

<!-- handleChange, date, inputWidth, containerWidth -->

| Prop            | required                | Type                  | Description                                                                   |
| --------------- | ----------------------- | --------------------- | ----------------------------------------------------------------------------- |
| handleChange    | true                    | (e) => void           | Functions to run when value changes                                           |
| options         | false (but recommended) | DateRangePickerOption | [More detail](#options)                                                       |
| date            | false                   | Date                  | Initial date ( not using nextjs-tui-range-picker)                             |
| startpickerDate | false                   | Date                  | Initial Start date in range-picker (only using in nextjs-tui-range-picker)    |
| endpickerDate   | false                   | Date                  | Initial date End Date in range-picker (only using in nextjs-tui-range-picker) |
| inputWidth      | false                   | number                | Input width                                                                   |
| containerWidth  | false                   | number                | Overall component width                                                       |

Below are `options` properties of `nextjs-tui-date-picker`.

### options

| Prop             | required | Type               | Description                                                                                                                  |
| ---------------- | -------- | ------------------ | ---------------------------------------------------------------------------------------------------------------------------- |
| date             | x        | Date               | Initial date. Set by a Date instance or a number(timestamp). (default: no initial date).                                     |
| language         | x        | string = 'en'      | DatePicker type. Determine whether to choose a date, month, or year.                                                         |
| timePicker       | x        | [ object boolean ] | TimePicker options. Refer to the TimePicker instance's options. To create the TimePicker without customization, set to true. |
| calendar         | x        | [ object ]         | Calendar options. Refer to the Calendar instance's options.                                                                  |
| input            | x        | [ object ]         | element : HTMLElement, formant : string = 'yyyy-mm--dd'                                                                      |
| selectableRanges | x        | Array.<Array.>     | Ranges of selectable date. Set by Date instances or numbers(timestamp).                                                      |
| openers          | x        | Array = []         | List of the openers to open the DatePicker (example - icon, button, etc.)                                                    |
| showAlways       | x        | boolean = true     | Show the DatePicker always                                                                                                   |
| autoClose        | x        | boolean = true     | Close the DatePicker after clicking the date.                                                                                |
| usageStatistics  | x        | boolean = true     | Send a hostname to Google Analytics (default: true)                                                                          |
| weekStartDay     | x        | string = 'Sun'     | Start of the week. 'Sun', 'Mon', ..., 'Sat'(default: 'Sun'(start on Sunday))                                                 |

## Example code

You can see the example code and demo.

Clone the repository

```bash
git clone https://github.com/in-ch/nextjs-tui-date-picker.git
```

Install libraries

```bash
cd example/example_nextjs_app_dir
```

or

```bash
cd example/example_nextjs_page_dir
```

and

```bash
npm install
```

## Contribute

You can follow below to contribute `nextjs-tui-date-picker`

Clone the repository.

```bash
git clone https://github.com/in-ch/nextjs-tui-date-picker.git
```
