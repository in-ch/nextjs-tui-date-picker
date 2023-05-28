import dynamic from 'next/dynamic';

const DynamicTuiDatePicker = dynamic(
  () =>
    import('react-tui-date-picker').then((module) => module.TuiMonthPicker),
  {
    ssr: false,
  }
);


export default function Home() {
  return (
    <>
      <DynamicTuiDatePicker handleChange={() => console.log('변경')} />
    </>
  );
}