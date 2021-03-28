import { FaRegUser, FaSearch, FaPlus, FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
import styles from "./header.module.scss";
import { useRouter } from "next/router";

export const Header = () => {
  const location = useRouter();
  return (
    <header>
      <nav className={styles.nav}>
        <div className={styles.navLink}>
          {location.pathname !== "/add" ? (
            <Link href="/add">
              <a>
                <FaPlus size="22" fill="#969595" />{" "}
                <span className={styles.add}>ADD PRODUCT</span>
              </a>
            </Link>
          ) : (
            <Link href="/">
              <a>
                <FaArrowLeft size="22" fill="#969595" />{" "}
                <span className={styles.add}>BACK</span>
              </a>
            </Link>
          )}
        </div>
        <div>
          <FaRegUser size="22" fill="#969595" />
        </div>
        <div>
          <FaSearch size="22" fill="#969595" />
        </div>
      </nav>
    </header>
  );
};
