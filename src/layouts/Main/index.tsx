import Post from "@/components/Post";
import Pagination from "@/components/Pagination";

import styles from "./styles.module.scss";

const Main = () => {
  return (
    <div className={styles.main}>
      <Post
        isFeatured={true}
        title="Massive Headline"
        date="April 25, 2017"
        imageSrc="images/pic01.jpg"
        buttonUrl="#"
        buttonText="Full Story"
      >
        Aenean ornare velit lacus varius enim ullamcorper proin aliquam
        <br />
        facilisis ante sed etiam magna interdum congue. Lorem ipsum dolor
        <br />
        amet nullam sed etiam veroeros.
      </Post>

      {/* <!-- Posts --> */}
      <section className={styles.posts}>
        <Post
          isFeatured={true}
          title="Ante mattis"
          date="April 24, 2017"
          imageSrc="images/pic02.jpg"
          buttonUrl="#"
          buttonText="Full Story"
        >
          Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis
          in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis
          sagittis magna etiam.
        </Post>
        <Post
          isFeatured={true}
          title="Tempus sed"
          date="April 22, 2017"
          imageSrc="images/pic03.jpg"
          buttonUrl="#"
          buttonText="Full Story"
        >
          Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis
          in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis
          sagittis magna etiam.
        </Post>
        <Post
          isFeatured={true}
          title="Sed magna"
          date="April 19, 2017"
          imageSrc="images/pic04.jpg"
          buttonUrl="#"
          buttonText="Full Story"
        >
          Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis
          in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis
          sagittis magna etiam.
        </Post>
        <Post
          isFeatured={true}
          title="Massive Headline"
          date="April 18, 2017"
          imageSrc="images/pic05.jpg"
          buttonUrl="#"
          buttonText="Full Story"
        >
          Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis
          in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis
          sagittis magna etiam.
        </Post>
        <Post
          isFeatured={true}
          title="Odio magna"
          date="April 14, 2017"
          imageSrc="images/pic06.jpg"
          buttonUrl="#"
          buttonText="Full Story"
        >
          Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis
          in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis
          sagittis magna etiam.
        </Post>
        <Post
          isFeatured={true}
          title="Augue lorem"
          date="April 10, 2017"
          imageSrc="images/pic07.jpg"
          buttonUrl="#"
          buttonText="Full Story"
        >
          Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis
          in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis
          sagittis magna etiam.
        </Post>
      </section>
      <Pagination />
    </div>
  );
};

export default Main;
