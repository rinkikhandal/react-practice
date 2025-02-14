// Birthday Reminder Page
import { useState } from "react";
import ThemeSelect from "./components/ThemeSelect";

const App = () => {
  const [theme, setTheme] = useState("light");

  const handleClick = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <main
      className={`${theme} bg-sky-500 dark:bg-neutral-950  dark:text-white backdrop-opacity-35 min-h-[100vh] pt-30 px-3 relative`}
    >
      <ThemeSelect theme={theme} handleClick={handleClick} />
      <section className="bg-white dark:bg-neutral-950 mx-auto w-[min(450px,100%)] py-7 px-5 rounded-sm shadow-[3px_3px_8px_0px_rgba(7,94,116,0.75)] dark:shadow-[4px_4px_10px_0px_rgba(7,94,116,0.75),-4px_-4px_10px_0px_rgba(7,94,116,0.75)] dark:border dark:border-sky-500">
        <h1 className="text-3xl font-medium">0 Birthdays Today</h1>
        <button className="bg-sky-500  mt-10 block text-white w-full py-1 shadow-[1px_1px_3px_0px_rgba(7,94,116,0.9)] dark:shadow-[8px_8px_15px_0px_rgba(7,94,116,0.75)] rounded-sm text-lg font-medium tracking-wide active:shadow-[2px_2px_10px_0px_rgba(7,94,116,0.9)_inset] ">
          Clear All
        </button>
      </section>
    </main>
  );
};

export default App;
