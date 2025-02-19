import type { JSX } from "preact/jsx-runtime";

interface Props {
    children: JSX.Element;
    tasks: number;
    progress: number;
    tasksCompleted?: boolean;
    class?: string;
}

export function ProgressCircle({children,tasks, progress, tasksCompleted, class: className}: Props) {
    const grados = 360 * (progress / tasks);

    const taskAndCompleted = tasksCompleted
        ? "green 360deg"
        : `orange ${progress === 0 ? 0 : grados}deg`;
    const cssVarStyles = `
        position: relative;
        border-radius: 50%;
        background: conic-gradient(${taskAndCompleted}, rgb(238, 238, 238) 0deg);
    `;
    return (
            <div
            class={`circle w-8 h-8 rounded-full flex items-center justify-center ${className}`}
            style={cssVarStyles}
            >
                <div class={"w-7 h-7 bg-white rounded-full "}>
                    {children}
                </div>
            </div>

    )
}