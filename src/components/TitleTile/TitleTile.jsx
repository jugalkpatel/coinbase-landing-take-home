import styles from "./TitleTile.module.css";

const columns = [
  "Rank",
  "Name",
  "Price",
  "Market Cap",
  "VWAP(24hr)",
  "Supply",
  "Volume(24hr)",
  "Change(24hr)",
];

function TitleTile() {
  return (
    <thead>
      <tr className={`colGrid commonBorder`}>
        {columns.map((title) => {
          const textAlign =
            title === "Rank" ? "center" : title === "Name" ? "left" : "right";
          const align = title !== "Name" ? "align" : styles.name;
          return (
            <th
              key={title}
              className={`commonPadding ${align} ${textAlign} ${styles.title}`}
            >
              {title}
            </th>
          );
        })}
      </tr>
    </thead>
  );
}

export default TitleTile;
