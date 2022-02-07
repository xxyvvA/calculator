import { useState, useEffect, useRef } from "react";
import type { NextPage } from "next";
import Image from "next/image";
import Head from "../components/Head";
import styles from "../styles/Home.module.scss";
import clsx from "clsx";

const Calculator: NextPage = () => {
  const [theme, setTheme] = useState<"1" | "2" | "3">("1");
  const [display, setDisplay] = useState<string>("");

  let detect = useRef<string[]>([]);
  let evaluate = useRef<string>("");

  useEffect(() => {
    console.log(display);
    detect.current = display.split("");
    for (let i = 0; i < detect.current.length; i++) {
      if (detect.current[i] === "x") {
        detect.current.splice(i, 1, "*");
      }
    }
    evaluate.current = detect.current.join("");
  }, [display]);

  return (
    <>
      <Head title={"Calculator"} />

      <div
        className={clsx(
          styles.calculator,
          styles[theme === "1" ? "dark" : theme === "2" ? "light" : "neon"]
        )}
      >
        <div className={styles.container}>
          <div
            className={clsx(
              styles.header,
              styles[theme === "1" ? "dark" : theme === "2" ? "light" : "neon"]
            )}
          >
            <h1>calc</h1>
            <div className={styles.theme}>
              <p>THEME</p>
              <div className={styles.selector}>
                <div className={styles.numbersContainer}>
                  <p className={styles.number}>1</p>
                  <p className={styles.number}>2</p>
                  <p className={styles.number}>3</p>
                </div>
                <div
                  className={clsx(
                    styles.selectorbg,
                    styles[theme === "1" ? "dark" : theme === "2" ? "light" : "neon"]
                  )}
                >
                  <input
                    type="radio"
                    name="theme"
                    id="theme 1"
                    value="theme 1"
                    checked={theme === "1"}
                    onChange={() => setTheme("1")}
                  />
                  <label htmlFor="theme 1">
                    <div
                      className={clsx(
                        styles.circle,
                        styles[theme === "1" ? "dark" : theme === "2" ? "light" : "neon"]
                      )}
                    ></div>
                  </label>

                  <input
                    type="radio"
                    name="theme"
                    id="theme 2"
                    value="theme 2"
                    checked={theme === "2"}
                    onChange={() => setTheme("2")}
                  />
                  <label htmlFor="theme 2">
                    <div
                      className={clsx(
                        styles.circle,
                        styles[theme === "1" ? "dark" : theme === "2" ? "light" : "neon"]
                      )}
                    ></div>
                  </label>

                  <input
                    type="radio"
                    name="theme"
                    id="theme 3"
                    value="theme 3"
                    checked={theme === "3"}
                    onChange={() => setTheme("3")}
                  />
                  <label htmlFor="theme 3">
                    <div
                      className={clsx(
                        styles.circle,
                        styles[theme === "1" ? "dark" : theme === "2" ? "light" : "neon"]
                      )}
                    ></div>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.content}>
            <div
              className={clsx(
                styles.display,
                styles[theme === "1" ? "dark" : theme === "2" ? "light" : "neon"]
              )}
            >
              <p className={styles.displayNum}>{display}</p>
            </div>

            <div
              className={clsx(
                styles.buttonsbg,
                styles[theme === "1" ? "dark" : theme === "2" ? "light" : "neon"]
              )}
            >
              <div className={styles.buttons}>
                <div
                  className={clsx(
                    styles.small,
                    styles[theme === "1" ? "dark" : theme === "2" ? "light" : "neon"]
                  )}
                >
                  <button
                    className={clsx(
                      styles.shadow,
                      styles[theme === "1" ? "dark" : theme === "2" ? "light" : "neon"]
                    )}
                    onClick={() => setDisplay(display + "7")}
                  >
                    <div className={styles.button}>
                      <p>7</p>
                    </div>
                  </button>

                  <button
                    className={clsx(
                      styles.shadow,
                      styles[theme === "1" ? "dark" : theme === "2" ? "light" : "neon"]
                    )}
                    onClick={() => setDisplay(display + "8")}
                  >
                    <div className={styles.button}>
                      <p>8</p>
                    </div>
                  </button>

                  <button
                    className={clsx(
                      styles.shadow,
                      styles[theme === "1" ? "dark" : theme === "2" ? "light" : "neon"]
                    )}
                    onClick={() => setDisplay(display + "9")}
                  >
                    <div className={styles.button}>
                      <p>9</p>
                    </div>
                  </button>

                  <button
                    className={clsx(
                      styles.shadow,
                      styles.del,
                      styles[theme === "1" ? "dark" : theme === "2" ? "light" : "neon"]
                    )}
                    onClick={() => {
                      let arr = display.split("");
                      arr.splice(-1);
                      setDisplay(arr.join(""));
                    }}
                  >
                    <div className={styles.button}>
                      <p>DEL</p>
                    </div>
                  </button>

                  <button
                    className={clsx(
                      styles.shadow,
                      styles[theme === "1" ? "dark" : theme === "2" ? "light" : "neon"]
                    )}
                    onClick={() => setDisplay(display + "4")}
                  >
                    <div className={styles.button}>
                      <p>4</p>
                    </div>
                  </button>

                  <button
                    className={clsx(
                      styles.shadow,
                      styles[theme === "1" ? "dark" : theme === "2" ? "light" : "neon"]
                    )}
                    onClick={() => setDisplay(display + "5")}
                  >
                    <div className={styles.button}>
                      <p>5</p>
                    </div>
                  </button>

                  <button
                    className={clsx(
                      styles.shadow,
                      styles[theme === "1" ? "dark" : theme === "2" ? "light" : "neon"]
                    )}
                    onClick={() => setDisplay(display + "6")}
                  >
                    <div className={styles.button}>
                      <p>6</p>
                    </div>
                  </button>

                  <button
                    className={clsx(
                      styles.shadow,
                      styles[theme === "1" ? "dark" : theme === "2" ? "light" : "neon"]
                    )}
                    onClick={() => {
                      let compare = display.split("")[display.length - 1];
                      if (
                        compare !== "+" &&
                        compare !== "-" &&
                        compare !== "x" &&
                        compare !== "/" &&
                        compare !== "." &&
                        display !== ""
                      ) {
                        setDisplay(display + "+");
                      }
                    }}
                  >
                    <div className={styles.button}>
                      <p>+</p>
                    </div>
                  </button>

                  <button
                    className={clsx(
                      styles.shadow,
                      styles[theme === "1" ? "dark" : theme === "2" ? "light" : "neon"]
                    )}
                    onClick={() => setDisplay(display + "1")}
                  >
                    <div className={styles.button}>
                      <p>1</p>
                    </div>
                  </button>

                  <button
                    className={clsx(
                      styles.shadow,
                      styles[theme === "1" ? "dark" : theme === "2" ? "light" : "neon"]
                    )}
                    onClick={() => setDisplay(display + "2")}
                  >
                    <div className={styles.button}>
                      <p>2</p>
                    </div>
                  </button>

                  <button
                    className={clsx(
                      styles.shadow,
                      styles[theme === "1" ? "dark" : theme === "2" ? "light" : "neon"]
                    )}
                    onClick={() => setDisplay(display + "3")}
                  >
                    <div className={styles.button}>
                      <p>3</p>
                    </div>
                  </button>

                  <button
                    className={clsx(
                      styles.shadow,
                      styles[theme === "1" ? "dark" : theme === "2" ? "light" : "neon"]
                    )}
                    onClick={() => {
                      let compare = display.split("")[display.length - 1];
                      if (
                        compare !== "+" &&
                        compare !== "-" &&
                        compare !== "x" &&
                        compare !== "/" &&
                        compare !== "."
                      ) {
                        setDisplay(display + "-");
                      }
                    }}
                  >
                    <div className={styles.button}>
                      <p>-</p>
                    </div>
                  </button>

                  <button
                    className={clsx(
                      styles.shadow,
                      styles[theme === "1" ? "dark" : theme === "2" ? "light" : "neon"]
                    )}
                    onClick={() => {
                      let compare = display.split("")[display.length - 1];
                      if (
                        compare !== "+" &&
                        compare !== "-" &&
                        compare !== "x" &&
                        compare !== "/" &&
                        compare !== "."
                      ) {
                        setDisplay(display + (!display ? "0." : "."));
                      }
                    }}
                  >
                    <div className={styles.button}>
                      <p>.</p>
                    </div>
                  </button>

                  <button
                    className={clsx(
                      styles.shadow,
                      styles[theme === "1" ? "dark" : theme === "2" ? "light" : "neon"]
                    )}
                    onClick={() => setDisplay(display + "0")}
                  >
                    <div className={styles.button}>
                      <p>0</p>
                    </div>
                  </button>

                  <button
                    className={clsx(
                      styles.shadow,
                      styles[theme === "1" ? "dark" : theme === "2" ? "light" : "neon"]
                    )}
                    onClick={() => {
                      let compare = display.split("")[display.length - 1];
                      if (
                        compare !== "+" &&
                        compare !== "-" &&
                        compare !== "x" &&
                        compare !== "/" &&
                        compare !== "." &&
                        display !== ""
                      ) {
                        setDisplay(display + "/");
                      }
                    }}
                  >
                    <div className={styles.button}>
                      <p>/</p>
                    </div>
                  </button>

                  <button
                    className={clsx(
                      styles.shadow,
                      styles[theme === "1" ? "dark" : theme === "2" ? "light" : "neon"]
                    )}
                    onClick={() => {
                      let compare = display.split("")[display.length - 1];
                      if (
                        compare !== "+" &&
                        compare !== "-" &&
                        compare !== "x" &&
                        compare !== "/" &&
                        compare !== "." &&
                        display !== ""
                      ) {
                        setDisplay(display + "x");
                      }
                    }}
                  >
                    <div className={styles.button}>
                      <p>x</p>
                    </div>
                  </button>
                </div>

                <div className={styles.big}>
                  <button
                    className={clsx(
                      clsx(
                        styles.shadow,
                        styles.reset,
                        styles[theme === "1" ? "dark" : theme === "2" ? "light" : "neon"]
                      )
                    )}
                    onClick={() => setDisplay("")}
                  >
                    <div className={styles.button}>
                      <p>RESET</p>
                    </div>
                  </button>

                  <button
                    className={clsx(
                      clsx(
                        styles.shadow,
                        styles.equal,
                        styles[theme === "1" ? "dark" : theme === "2" ? "light" : "neon"]
                      )
                    )}
                    onClick={() => setDisplay(eval(evaluate.current).toString())}
                  >
                    <div className={styles.button}>
                      <p>=</p>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculator;
