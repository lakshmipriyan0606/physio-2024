import BlogItem, { SectionButton, SectionTitle } from './OtherComponent';
import  blogPostImg1 from '../../../assets/images/post-1.jpg'
import  blogPostImg2 from '../../../assets/images/post-2.jpg'
import  blogPostImg3 from '../../../assets/images/post-3.jpg'

const BlogSection = () => {
  return (
    <div className="our-blog">
      <div className="container">
        <div className="row section-row align-items-center">
          <div className="col-lg-9">
            <SectionTitle title={'news & blog'} descriptionLeft={'Our Latest'}  descriptionRight={'Insights And Updates'}/>
          </div>
          {/* <div className="col-lg-3">
            <SectionButton />
          </div> */}
        </div>
        <div className="row">
          <BlogItem
            imageSrc={blogPostImg1}
            title="10 essential benefits of regular physiotherapy"
          />
          <BlogItem
            imageSrc={blogPostImg2}
            title="How to choose the right physiotherapist for you"
            delay={0.2}
          />
          <BlogItem
            imageSrc={blogPostImg3}
            title="Importance of correct posture and how to improve it"
            delay={0.4}
          />
        </div>
      </div>
    </div>
  );
};

export default BlogSection;