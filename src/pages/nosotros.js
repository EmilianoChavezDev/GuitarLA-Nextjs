import Layout from "components/layout";
import Image from "next/image";
import styles from "../styles/Nosotros.module.css";

export default function Nosotros() {
  return (
    <>
      <Layout
        title="Nosotros"
        description="Sobre nosotros, GuitarLA tienda de musica"
      >
        <main className="contenedor">
          <h2 className="heading">Nosotros</h2>
          <div className={styles.contenido}>
            <Image
              src="/img/nosotros.jpg"
              width={1000}
              height={800}
              alt="imagen sobre nosotros"
            />
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
                fuga assumenda omnis! Ipsum magni deserunt, libero, doloribus
                quo ullam eum nemo necessitatibus accusamus numquam enim nostrum
                odio soluta quaerat dolor! Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Voluptatum voluptate minus,
                praesentium consequatur explicabo nesciunt corrupti, fugit ipsam
                libero, beatae illo possimus corporis natus necessitatibus a
                commodi debitis distinctio repellat. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Ullam incidunt laboriosam iure
                dolor deserunt earum qui rerum eos voluptates, vero
                reprehenderit explicabo sit, voluptatum, et aperiam reiciendis
                nisi sunt quos.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
                fuga assumenda omnis! Ipsum magni deserunt, libero, doloribus
                quo ullam eum nemo necessitatibus accusamus numquam enim nostrum
                odio soluta quaerat dolor! Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Voluptatum voluptate minus,
                praesentium consequatur explicabo nesciunt corrupti, fugit ipsam
                libero, beatae illo possimus corporis natus necessitatibus a
                commodi debitis distinctio repellat. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Ullam incidunt laboriosam iure
                dolor deserunt earum qui rerum eos voluptates, vero
                reprehenderit explicabo sit, voluptatum, et aperiam reiciendis
                nisi sunt quos.
              </p>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
}
