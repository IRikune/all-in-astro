import { Preview } from "./Preview"

export function Note() {
    return (
        <article  class="shadow p-">
            <header>
                <Preview />
            </header>
            <footer>
                <h2>Title</h2>
                <small>Date</small>
            </footer>
        </article>
    )
}