import TravelLogForm from '@/components/TravelLogForm';
import { TravelLogs } from '@/models/TravelLogs'

export default async function Home() {
  const logs = await TravelLogs.find().toArray()
  
  return (
    <main>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <h2>There are {logs.length} in the Database.</h2>
      {logs.map((log) => (
        <div key={log._id.toString()}>{log.title}</div>
      ))}
      <TravelLogForm />
    </main>
  );
}
