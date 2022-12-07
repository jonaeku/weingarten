import Button from "./Button";

const Termine = () => {
    return (
        <div className="font-text text-center">
            <h2 class="text-center text-[30px] font-head mb-[40px]">
                Termine
            </h2>
            <div class="lg:flex justify-evenly items-center">
                {/* <div class="flex flex-col justify-center items-center">
                    <p class="text-[25px] underline">Ganze Gans</p>
                    <p class="text-[20px]">im 3-Gänge Menü</p>
                    <p class="text-[20px]">
                        (nur auf Vorbestellung ab 4 Personen)
                    </p>
                    <p class="text-[20px]">am 11. / 18. / 25.11</p>
                   <Button url={"Gans Essen"}/>
                </div> */}
                <br />
                <div>
                    <a class="text-[25px] underline">
                        2. Weihnachtsfeiertag
                    </a>
                    <p class="text-[20px]">(nur auf Reservierung)</p>
                    <p class="text-[20px]">11:30-14:00 & 14:30-17:00 & 17:30</p>
                </div>
                <br />
                {/* <div>
                    <p class="text-[25px] underline">
                        Adventserlebnisabend
                    </p>
                    <p class="text-[20px]">im 6-Gänge Menü</p>
                    <p class="text-[20px]">(nur auf Reservierung)</p>
                    <p class="text-[20px]">am 02.12.2022 Beginn 17:30</p>
                    <Button url={"Adventsessen"}/>
                </div> */}
            </div>
        </div>
    );
}

export default Termine;
