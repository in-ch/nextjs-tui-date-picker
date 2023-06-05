# nextjs-tui-date-picker

`nextjs-tui-date-picker` allows you to pick a date using a pop-up calendar in `Next.js`.

## Document

- [Installation](#installation)
- [How to use](#how-to-use)
- [Demos](#demos )
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
    import('nextjs-tui-date-picker').then((module) => module.TuiDateInlinePicker),
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

 <TuiDatePicker handleChange={() => console.log('Hello world!')} />
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

| Prop                           | required | Type                                                                                                                  | Description                                                                                                                                |
| ------------------------------ | -------- | --------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| date | X        | Date                                                                                                                | Initial date. Set by a Date instance or a number(timestamp). (default: no initial date).                        |
| language                  | X        | string = 'en'                                                                                                               | DatePicker type. Determine whether to choose a date, month, or year. |
| timePicker                 | X        | [ object boolean ]                                                                                                               |TimePicker options. Refer to the TimePicker instance's options. To create the TimePicker without customization, set to true.                                                                                          |
| calendar           | X        | [ object ]                                                                                                                |Calendar options. Refer to the Calendar instance's options.                                                                                               |
| input         | X        | [ object ]                                                                                                                | - element : HTMLElement <br /> - formant : string = 'yyyy-mm--dd'                                                                             |
| selectableRanges                       | X        | Array.<Array.<Datenumber>> = 1900/1/1~2999/12/31                                                                                                           | Ranges of selectable date. Set by Date instances or numbers(timestamp).| disabled                       | X        | boolean                                                                                                               | disable opening the modal                                                                                                                  |
| openers                | X        | Array<HTMLElement> = []                                                                                                            | List of the openers to open the DatePicker (example - icon, button, etc.)                                                                                                                      |
| showAlways                     | X        | boolean = true                                                                    | Show the DatePicker always                                                                                                  |
| autoClose           | X        | boolean = true                                                                    | Close the DatePicker after clicking the date.                                                    |
| usageStatistics                | X        | boolean = true                                                                                                              | Send a hostname to Google Analytics (default: true)                                                                                                         |
| weekStartDay         | X        | string = 'Sun'                                                                                                            | Start of the week. 'Sun', 'Mon', ..., 'Sat'(default: 'Sun'(start on Sunday))

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