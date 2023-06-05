import dynamic from 'next/dynamic';

const DynamicTuiDatePicker = dynamic(
  () =>
    import('./nextjs-tui-date-picker').then((module) => module.TuiTimeTabPicker),
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