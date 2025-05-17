import {Theme, theme} from "../../stores/mod";
import {MoonIcon} from "./icons/MoonIcon";
import {SunIcon} from "./icons/SunIcon";

interface Props {
  className?: string;
}

export function ToggleTheme(props: Props) {
  return (
    <button
      class={`${props.className} hover:bg-neutral-200 p-2 rounded transition-colors cursor-pointer`}
      onClick={() => {
        theme.value = theme.value === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
        console.log(theme.value);
        document.documentElement.setAttribute("data-theme", theme.value);
      }}
      type="button"
    >
      {theme.value === Theme.LIGHT ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}
