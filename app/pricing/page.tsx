import { useState } from "react";

// --- Types ---
interface BlockBase {
  heading: string;
}
interface BodyBlock extends BlockBase {
  body: string;
  list?: never;
  table?: never;
}
interface ListBlock extends BlockBase {
  list: string[];
  body?: never;
  table?: never;
}
interface TableBlock extends BlockBase {
  table: string[][];
  body?: never;
  list?: never;
}
interface ComboBlock extends BlockBase {
  body: string;
  list: string[];
  table?: never;
}

type Block = BodyBlock | ListBlock | TableBlock | ComboBlock;

interface Section {
  id: string;
  label: string;
  color: string;
  content: {
    title: string;
    blocks: Block[];
  };
}

const sections: Section[] = [
  // ... your existing sections array (unchanged)
];

export default function App() {
  const [active, setActive] = useState("intro");
  const section = sections.find((s) => s.id === active)!; // non-null assertion since default always matches

  return (
    <div
      style={{
        background: "#0a0a0f",
        minHeight: "100vh",
        fontFamily: "monospace",
        color: "#e2e8f0",
      }}
    >
      {/* Nav */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 6,
          padding: "16px 16px 0",
        }}
      >
        {sections.map((s) => (
          <button
            key={s.id}
            onClick={() => setActive(s.id)}
            style={{
              background: active === s.id ? s.color : "#1a1a2e",
              color: active === s.id ? "#0a0a0f" : s.color,
              border: `1px solid ${s.color}`,
              padding: "6px 14px",
              borderRadius: 4,
              cursor: "pointer",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: 1,
              transition: "all 0.15s",
            }}
          >
            {s.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div style={{ padding: 16, maxWidth: 780 }}>
        <div
          style={{
            borderBottom: `2px solid ${section.color}`,
            marginBottom: 20,
            paddingBottom: 8,
          }}
        >
          <div
            style={{
              fontSize: 11,
              color: section.color,
              letterSpacing: 2,
              marginBottom: 4,
            }}
          >
            SECTION {sections.findIndex((s) => s.id === active) + 1} OF{" "}
            {sections.length}
          </div>
          <div style={{ fontSize: 22, fontWeight: 800, color: "#fff" }}>
            {section.content.title}
          </div>
        </div>

        {section.content.blocks.map((block, i) => (
          <div
            key={i}
            style={{
              marginBottom: 24,
              background: "#111122",
              border: "1px solid #1e1e3a",
              borderRadius: 6,
              padding: 16,
            }}
          >
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: section.color,
                letterSpacing: 1,
                marginBottom: 10,
                textTransform: "uppercase",
              }}
            >
              {block.heading}
            </div>

            {"body" in block && block.body && (
              <div
                style={{
                  fontSize: 13,
                  lineHeight: 1.7,
                  color: "#cbd5e1",
                  whiteSpace: "pre-line",
                  background: "#0d0d1a",
                  padding: 12,
                  borderRadius: 4,
                  borderLeft: `3px solid ${section.color}`,
                }}
              >
                {block.body}
              </div>
            )}

            {"list" in block && block.list && (
              <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                {block.list.map((item, j) => (
                  <li
                    key={j}
                    style={{
                      fontSize: 13,
                      color: "#cbd5e1",
                      padding: "5px 0",
                      borderBottom: "1px solid #1a1a2e",
                      display: "flex",
                      gap: 8,
                    }}
                  >
                    <span style={{ color: section.color, flexShrink: 0 }}>
                      →
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}

            {"table" in block && block.table && (
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  fontSize: 13,
                }}
              >
                <tbody>
                  {block.table.map((row: string[], j: number) => (
                    <tr
                      key={j}
                      style={{
                        background:
                          j === 0
                            ? "#0d0d1a"
                            : j % 2 === 0
                              ? "#0f0f1e"
                              : "transparent",
                      }}
                    >
                      {row.map((cell: string, k: number) => (
                        <td
                          key={k}
                          style={{
                            padding: "8px 10px",
                            color: j === 0 ? section.color : "#cbd5e1",
                            fontWeight: j === 0 ? 700 : 400,
                            borderBottom: "1px solid #1a1a2e",
                            fontSize: j === 0 ? 11 : 13,
                            letterSpacing: j === 0 ? 1 : 0,
                          }}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
