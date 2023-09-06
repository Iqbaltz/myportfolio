import styles from "./Collaboration.module.scss";
import { urlFor } from "../../../libs/sanity";

export default function Collaboration({ data }: any) {
  return (
    <section className={styles.collab}>
      <h1 className={styles.title}>
        I am proud to have collaborated with some amazing companies:
      </h1>
      <div className={styles.companies}>
        {data.map(({ altText, logo }: any) => (
          <div className={styles.company} key={altText}>
            <img src={urlFor(logo).url()} alt={altText} />
          </div>
        ))}
      </div>
    </section>
  );
}
