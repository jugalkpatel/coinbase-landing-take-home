import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HashLoader, PulseLoader } from "react-spinners";
import { BiErrorAlt } from "react-icons/bi";

import styles from "./Home.module.css";

import {
  loading,
  loadMore,
  selectData,
  selectStatus,
} from "../../features/state/dataSlice";
import { Tile, TitleTile, Board, Navbar } from "../../components";

export default function Home() {
  const dispatch = useDispatch();
  const status = useSelector(selectStatus);
  const data = useSelector(selectData);

  useEffect(() => {
    dispatch(loading());
  }, [dispatch]);

  const handleLoadMore = (e) => {
    dispatch(loadMore());
  };

  const table = (
    <table className={styles.table}>
      <TitleTile />

      <tbody>
        {data.map((item) => {
          return <Tile key={item.id} {...item} />;
        })}
      </tbody>
    </table>
  );

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <article className={styles.bgBlue}>
          <Board />
        </article>

        <article className={styles.bgWhite}>
          <section className={styles.overlay}>
            <article className={styles.shadow}>
              {status === "LOADING" && (
                <HashLoader style={{ opacity: "0.3" }} />
              )}
              {(status === "DATA" || status === "LOAD_MORE") && data?.length ? (
                <>{table}</>
              ) : null}

              {status === "ERROR" && !data?.length ? (
                <div className={styles.error}>
                  <BiErrorAlt
                    size={120}
                    style={{
                      opacity: "0.3",
                      justifySelf: "center",
                      alignSelf: "center",
                    }}
                  />
                  <span className={styles.errorMessage}>
                    Error while fetching data
                  </span>
                </div>
              ) : status === "ERROR" && data?.length ? (
                <>{table}</>
              ) : null}
            </article>

            {(status === "DATA" || status === "LOAD_MORE") && (
              <button className="btn" onClick={handleLoadMore}>
                {status === "LOAD_MORE" ? (
                  <PulseLoader size={5} color="#fff" />
                ) : (
                  "View More"
                )}
              </button>
            )}
          </section>
        </article>
      </div>
    </>
  );
}
