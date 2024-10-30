// app/page.tsx
import Notebook from '@/app/components/notebook';

export default function Home() {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <Notebook />
    </div>
  );
}
