import Note from "../components/ui/Note";
import Paragraph from "../components/ui/Paragraph";
import SubHeading from "../components/ui/SubHeading";
import BlogImage from "../components/ui/BlogImage";
import BlogHeader from "../components/ui/BlogHeader";
const Blog = () => {
    return (
        <div className="container my-24 mx-auto md:px-6">
            <section className="mb-32">
                <BlogHeader title="An intriguing title for an interesting article"
                    author="Abhinav Yadav" upvotes={213} />
                <Paragraph content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio
          sapiente molestias consectetur. Fuga nulla officia error placeat
          veniam, officiis rerum laboriosam ullam molestiae magni velit laborum
          itaque minima doloribus eligendi! Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Optio sapiente molestias consectetur.
          Fuga nulla officia error placeat veniam, officiis rerum laboriosam
          ullam molestiae magni velit laborum itaque minima doloribus eligendi!" />

                <SubHeading content="Optio sapiente molestias consectetur?" />


                <Paragraph content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
          architecto ex ab aut tempora officia libero praesentium, sint id
          magnam eius natus unde blanditiis. Autem adipisci totam sit
          consequuntur eligendi." />

                <Note content="Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Optio odit consequatur porro sequi ab distinctio
          modi. Rerum cum dolores sint, adipisci ad veritatis laborum eaque
          illum saepe mollitia ut voluptatum." />


                <Paragraph content=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
          libero repellat molestiae aperiam laborum aliquid atque magni nostrum,
          inventore perspiciatis possimus quia incidunt maiores molestias eaque
          nam commodi! Magnam, labore." />

                <BlogImage url="https://mdbcdn.b-cdn.net/img/new/slides/194.jpg" alt="Loading image.." />
                <Paragraph content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
          temporibus nulla voluptatibus accusantium sapiente doloremque.
          Doloribus ratione laboriosam culpa. Ab officiis quidem, debitis
          nostrum in accusantium dolore veritatis eius est?" />
            </section>
        </div>
    );
};

export default Blog;
