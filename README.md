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

> Next.js <= 12

```tsx
import dynamic from 'next/dynamic';

const DynamicTuiDatePicker = dynamic(
  () =>
    import('nextjs-tui-date-picker').then(
      (module) => module.TuiDateInlinePicker
    ),
  {
    ssr: false,
  }
);
```

<br />

> in 'App Dir'

```tsx
'use client';

import { TuiDatePicker } from 'nextjs-tui-date-picker';

<TuiDatePicker handleChange={() => console.log('Hello world!')} />;
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
      handleChange={() => console.log('Hello world!')}
      options={options}
    />
  </>
);
```

## Demos

- nextjs-tui-date-picker.

![nextjs-tui-date-picker](demos/nextjs-tui-date-picker.mov)

- nextjs-tui-range-picker.

![nextjs-tui-range-picker](demos/nextjs-tui-range-picker.mov)

- nextjs-date-inline-picker.

![nextjs-date-inline-picker](demos/nextjs-date-inline-picker.mov)

- nextjs-date-year-picker.

![nextjs-date-year-picker](demos/nextjs-date-year-picker.mov)

- nextjs-date-month-picker.

![nextjs-date-month-picker](demos/nextjs-date-month-picker.mov)

- nextjs-date-time-picker.

![nextjs-date-time-picker](demos/nextjs-date-time-picker.mov)

- nextjs-date-time-tab-picker.

![nextjs-date-time-tab-picker](demos/nextjs-date-time-tab-picker.mov)

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
