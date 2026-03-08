import { formatDate, truncateText } from "@lib/utils"
import type { CollectionEntry } from "astro:content"

type Props = {
  entry: CollectionEntry<"blog"> | CollectionEntry<"projects">
  pill?: boolean
}

export default function ArrowCard({ entry, pill }: Props) {
  const isBlog = entry.collection === "blog"

  if (isBlog) {
    // Minimal steipete.me-style: date + title only, no border card — just a clean list row
    return (
      <a
        href={`/${entry.collection}/${entry.slug}`}
        class="group flex items-baseline gap-4 py-3 border-b transition-colors duration-200"
        style={{ borderColor: "var(--color-border)" }}
      >
        <time
          class="shrink-0 text-xs tabular-nums font-mono"
          style={{ color: "var(--color-text-subtle)" }}
          dateTime={entry.data.date.toISOString()}
        >
          {formatDate(entry.data.date)}
        </time>
        <span
          class="font-medium transition-colors duration-200 group-hover:underline underline-offset-2"
          style={{ color: "var(--color-text)" }}
        >
          {entry.data.title}
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="shrink-0 ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          style={{ stroke: "var(--color-accent)" }}
        >
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </a>
    )
  }

  // Project card — Glassmorphism with sharp-edge focus (Sphere × Paper hybrid)
  return (
    <a
      href={`/${entry.collection}/${entry.slug}`}
      class="card-glass group p-5 gap-3 flex items-start rounded-lg transition-all duration-300 ease-in-out"
    >
      <div class="w-full">
        <div class="flex flex-wrap items-center gap-2">
          {pill && (
            <div
              class="text-xs capitalize px-2 py-0.5 rounded border"
              style={{ borderColor: "var(--color-border)", color: "var(--color-text-subtle)" }}
            >
              project
            </div>
          )}
          <time
            class="text-xs tabular-nums font-mono"
            style={{ color: "var(--color-text-subtle)" }}
            dateTime={entry.data.date.toISOString()}
          >
            {formatDate(entry.data.date)}
          </time>
        </div>

        <div
          class="font-semibold mt-3 text-base leading-snug tracking-tight transition-colors duration-200 group-hover:text-[var(--color-accent)]"
          style={{ color: "var(--color-text)" }}
        >
          {entry.data.title}
        </div>

        <div
          class="text-sm mt-1.5 leading-relaxed line-clamp-2"
          style={{ color: "var(--color-text-body)" }}
        >
          {entry.data.summary}
        </div>

        <ul class="flex flex-wrap mt-3 gap-1.5">
          {entry.data.tags.map((tag: string) => (
            <li
              class="text-xs py-0.5 px-2 rounded-sm font-mono"
              style={{
                background: "var(--color-accent-subtle)",
                color: "var(--color-accent)",
              }}
            >
              {truncateText(tag, 20)}
            </li>
          ))}
        </ul>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="shrink-0 mt-1 opacity-40 group-hover:opacity-100 transition-all duration-300 translate-x-0 group-hover:translate-x-1"
        style={{ stroke: "var(--color-accent)" }}
      >
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" />
      </svg>
    </a>
  )
}