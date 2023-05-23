import dynamic from 'next/dynamic';

const DynamicTuiDateRangePicker = dynamic(
  () =>
    import('react-tui-date-picker').then((module) => module.TuiDateRangePicker),
  {
    ssr: false,
  }
);

const DynamicTuiDatePicker = dynamic(
  () =>
    import('react-tui-date-picker').then((module) => module.TuiDatePicker),
  {
    ssr: false,
  }
);



export default function Home() {
  return (
    <>
      <DynamicTuiDateRangePicker handleChange={() => console.log('Hello')} />
      <DynamicTuiDatePicker handleChange={() => console.log('변경')} />
    </>
  );
}