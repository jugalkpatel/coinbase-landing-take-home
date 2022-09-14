import { memo } from "react";
import styles from "./Tile.module.css";
import { formatCurrency } from "../../utils";

function Name({ img, symbol, name }) {
  return (
    <td className={`commonPadding ${styles.dataCell} ${styles.name}`}>
      <img src={img} alt="logo" width="30" height="30" />
      <article className={styles.col}>
        <span className={styles.name}>{name}</span>
        <span className={styles.symbol}>{symbol}</span>
      </article>
    </td>
  );
}

function Tile({
  id,
  rank,
  symbol,
  name,
  supply,
  maxSupply,
  marketCapUsd,
  volumeUsd24Hr,
  priceUsd,
  changePercent24Hr,
  vwap24Hr,
  explorer,
}) {
  const img = `https://assets.coincap.io/assets/icons/${symbol.toLowerCase()}@2x.png`;
  const percent = parseFloat(changePercent24Hr).toFixed(2);
  const percentColor = percent > 1 ? "green" : "red";
  return (
    <tr className={`colGrid commonBorder`}>
      <td className={`commonPadding right align ${styles.dataCell}`}>{rank}</td>
      <Name img={img} symbol={symbol} name={name} />
      <td className={`commonPadding right align ${styles.dataCell}`}>
        ${parseFloat(priceUsd).toFixed(2)}
      </td>
      <td className={`commonPadding right align ${styles.dataCell}`}>
        ${formatCurrency(Number(marketCapUsd))}
      </td>
      <td className={`commonPadding right align ${styles.dataCell}`}>
        ${Number(vwap24Hr).toFixed(2)}
      </td>
      <td className={`commonPadding right align ${styles.dataCell}`}>
        {formatCurrency(Number(supply))}
      </td>
      <td className={`commonPadding right align ${styles.dataCell}`}>
        ${formatCurrency(Number(volumeUsd24Hr))}
      </td>
      <td
        className={`commonPadding right align ${percentColor} ${styles.dataCell}`}
      >
        {percent}%
      </td>
    </tr>
  );
}

const MemoizedTile = memo(Tile);

export default MemoizedTile;
