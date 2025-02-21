import type { Task as TaskType } from "../../../deno/types/mod"
import { Button } from "./Button"
import { Icon } from "./icons/Icon"


interface Props {
    task: TaskType
}

export function Task(task: TaskType) {
    return (
        <article class="flex">
            <section>
                <form>
                    <input type="checkbox" />
                </form>
            </section>
            <section>
                <h2>{task.title}</h2>
                <p>{task.content}</p>
                <div>
                    <Button icon="hash">
                        <span>{task.comments.length}</span>
                    </Button>
                    <Button icon="calendar">
                        <span>{task.date.expected}</span>
                    </Button>
                </div>
            </section>
            <section>
                <Button icon="hash" />
            </section>
        </article>
    )
}