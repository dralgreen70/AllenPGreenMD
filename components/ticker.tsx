const defaultItems = [
  { label: "EXPERIENCE", value: "500+ Procedures" },
  { label: "BOARD CERTIFIED", value: "Clinical Pathologist" },
  { label: "SPECIALTY", value: "Apheresis" },
  { label: "TRAINING", value: "UT Southwestern" },
  { label: "RESEARCH", value: "6+ Published Papers" },
]

function TickerItems({ items }: { items: { label: string; value: string }[] }) {
  return (
    <>
      {items.map((item, i) => (
        <span key={i} style={{ display: "contents" }}>
          <div className="ticker-item">
            <span className="label-text">{item.label}</span>
            <span className="value">{item.value}</span>
          </div>
          <div className="ticker-divider" />
        </span>
      ))}
    </>
  )
}

export function Ticker({ items }: { items?: { label: string; value: string }[] }) {
  const data = items ?? defaultItems
  return (
    <div className="ticker">
      <div className="ticker-track">
        <TickerItems items={data} />
        <TickerItems items={data} />
      </div>
    </div>
  )
}
