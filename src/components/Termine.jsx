const Termine = () => {
    return (
        <div className="font-text text-center">
            <h2 class="text-center text-[30px] font-head mb-[40px]">
                Termine
            </h2>
            <div class="lg:flex justify-evenly items-center">
                <div>
                    <p class="text-[25px] underline">Ganze Gans</p>
                    <p class="text-[20px]">im drei Gänge Menü</p>
                    <p class="text-[20px]">
                        (nur auf Vorbestellung ab 4 Personen)
                    </p>
                    <p class="text-[20px]">am 11. / 18. / 25.11</p>
                    <p class="text-[20px]">p.P. ca. 68,50€</p>
                </div>
                <br />
                <div>
                    <p class="text-[25px] underline">
                        2. Weihnachtsfeiertag
                    </p>
                    <p class="text-[20px]">im drei Gänge Menü</p>
                    <p class="text-[20px]">(nur auf Reservierung)</p>
                    <p class="text-[20px]">11:30-14:00 & 14:30-17:00 & 17:30</p>
                </div>
            </div>
        </div>
    );
}

export default Termine;
