import dynamic from 'next/dynamic';
import IncidentsTable from "@/components/Incident/IncidentsTable";

export default async function Page() {

    try {
        const response = await fetch(process.env.BACKEND_URL+`/open-source?dataType=incidents`);
        if (!response.ok) {
            throw new Error(`Failed to fetch threats data: ${response.status}`);
        }
        const data = await response.json();
        console.log("Threats data:", data);

        return (
            <div>
                <h1>Incidents</h1>   
                <IncidentsTable data={data?.data} />
            </div>
        );
    } catch (error: any) {
        return <div>Error: {error?.message}</div>;
    }
}
