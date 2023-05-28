import dynamic from 'next/dynamic';

const DynamicTuiDateRangePicker = dynamic(
  () =>
    import('react-tui-date-picker').then((module) => module.TuiDateRangePicker),
  {
    ssr: false,
  }
);


export default function Home() {
  return (
    <>
      <DynamicTuiDateRangePicker handleChange={() => console.log('Hello')} />
    </>
  );
}