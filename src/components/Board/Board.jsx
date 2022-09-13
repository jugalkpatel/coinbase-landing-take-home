import styles from "./Board.module.css";

const stats = [
  { label: "market cap", value: "1.27T" },
  { label: "exchange vol", value: "$69.40B" },
  { label: "assets", value: "2,295" },
  { label: "exchanges", value: "73" },
  { label: "markets", value: "14,037" },
  { label: "btc dom index", value: "32.6%" },
];

function Board() {
  return (
    <div className={styles.board}>
      {stats.map(({ label, value }) => {
        return (
          <article key={label} className={styles.stats}>
            <span className={styles.label}>{label.toUpperCase()}</span>
            <span className={styles.value}>{value}</span>
          </article>
        );
      })}
    </div>
  );
}

export default Board;
