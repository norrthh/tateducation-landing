import Image from "next/image";

export default function Home() {
    return (
        <div
            className="container mx-auto px-4 py-8">

            <div className="flex gap-4 items-center pt-12 max-lg:flex-col">
                <div className="flex flex-col gap-4 pt-7 ">
                    <h1 className="text-5xl font-medium max-lg:text-center">
                        Добро пожаловать<br/> в <span className="text-[#4DBF92] font-bold">TatEducation</span>
                    </h1>

                    <p className="text-[#C5C5C5] max-lg:text-center">
                        Начни свой путь к знанию татарского: изучай слова, фразы и выражения через игру, вдохновение и
                        поддержку сообщества
                    </p>

                    <a href="https://t.me/tateducation" className="p-4 bg-[#4DBF92] w-2/3 text-center rounded-lg max-lg:mx-auto">
                        В приложение
                    </a>
                </div>

                <img src="/hero.svg" alt=""/>
            </div>

            <footer>
                <p className="text-center text-lg pt-4 text-gray-500">© 2025 TatLand. All rights reserved.</p>
            </footer>
        </div>
    );
}
