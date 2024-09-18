import { Divider, Title } from "@mantine/core";
import DetailLaporan from "~/components/(dashboard)/laporanPolisi/detail";
import TimeLine from "~/components/(dashboard)/stepper";
import StepperDown from "~/components/(dashboard)/stepperDown";

function DetailLaporanPolisi(){
    return(
        <>
        <Title order={3} mb={15}>Detail Laporan Polisi</Title>
        <div>
            <DetailLaporan />
            <Divider my={50} />
            <TimeLine />
            <Divider my={50} />
            <StepperDown />
        </div>
        </>
    )
}

export default DetailLaporanPolisi;