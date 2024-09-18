import { Card, Container, Divider } from "@mantine/core";
import LaporanPolisiTable from "~/components/(dashboard)/laporanPolisi/table";

function Page(){
    return(
        <div>
            <Card>
                <LaporanPolisiWrapper />
            </Card>
        </div>
    )
}

export default Page;

async function LaporanPolisiWrapper(){
    return(
        <LaporanPolisiTable />
    )
}