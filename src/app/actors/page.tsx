
import ActorsTable from "@/components/actor/ActorTable"; 

export default async function Page() {

    try {
        const response = await fetch(process.env.BACKEND_URL+`/open-source?dataType=actors`);
        if (!response.ok) {
            throw new Error(`Failed to fetch threats data: ${response.status}`);
        }
        const data = await response.json();

        return (
            <div>
                <h1>Actor</h1>   
                <ActorsTable data={data?.data} />
            </div>
        );
    } catch (error: any) {
        return <div>Error: {error?.message}</div>;
    }
}
