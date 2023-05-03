import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Author, testAuthor } from '../components/author';
import { Post, testPosts } from '../components/post-list-item';
import { Accordion, testPanels } from '../components/ap';
import { PostDetails } from '../components/acp-posts';

export default function Home() {


  return (


    <div className={styles.container}>
      <div className={styles.mainBar}>
        <div className={styles.mainBarContent}>
          <div className={styles.mainBarContentLeft}>
            <form className={styles.form}>
              <input type="search" className={styles.formControl} placeholder="Search..." />
            </form>
          </div>
          <div className={styles.mainBarContentMiddle}>
            <h1>MAGDESIGN</h1>
          </div>
          <div className={styles.mainBarContentRight}>
            <ul className={styles.mainBarContentRightList}>
              <li>
                <a href="#">T</a>
              </li>
              <li>
                <a href="#">I</a>
              </li>
              <li>
                <a href="#">F</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.firstTitle}>
        <h1>Trending</h1> 
      </div>
      <div className={styles.firstCarousel}>
        <Accordion title="Boating" items={testPanels} />
        <div className={styles.accordion}>
          <div className={styles.accordionPanel}>
            <h2 id='panel1-title' >
              <button
                className={styles.accordionTrigger}
                aria-controls='panel1-content'
                aria-expanded='true'>
                <span className={styles.accordionTitle}>Boating</span>
                <svg className={styles.accordionIcon} aria-hidden="true">
                  <use xlinkHref="#boat"></use>
                </svg>
              </button>
            </h2>

            <div
              className={styles.accordionContent}
              id='panel1-content'
              aria-labelledby='panel1-title'
              aria-hidden='false'
              role='region'>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
              <img src="https://preview.colorlib.com/theme/magdesign/images/img_1.jpg" alt="" className={styles.accordionImage} />
            </div>

          </div>
          <div className={styles.accordionPanel}>
            <h2 id='panel2-heading' >
              <button
                className={styles.accordionTrigger}
                aria-controls='panel2-content'
                aria-expanded='false'>
                <span className={styles.accordionTitle}>Boating</span>
                <svg className={styles.accordionIcon} aria-hidden="true">
                  <use xlinkHref="#boat"></use>
                </svg>
              </button>
            </h2>

            <div
              className={styles.accordionContent}
              id='panel2-content'
              aria-labelledby='panel2-title'
              aria-hidden='true'
              role='region'>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
              <img src="https://preview.colorlib.com/theme/magdesign/images/img_1.jpg" alt="" className={styles.accordionImage} />
            </div>

          </div>
          <div className={styles.accordionPanel}>
            <h2 id='panel3-title' >
              <button
                className={styles.accordionTrigger}
                aria-controls='panel3-content'
                aria-expanded='false'>
                <span className={styles.accordionTitle}>Boating</span>
                <svg className={styles.accordionIcon} aria-hidden="true">
                  <use xlinkHref="#boat"></use>
                </svg>
              </button>
            </h2>

            <div
              className={styles.accordionContent}
              id='panel3-content'
              aria-labelledby='panel3-title'
              aria-hidden='true'
              role='region'>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
              <img src="https://preview.colorlib.com/theme/magdesign/images/img_1.jpg" alt="" className={styles.accordionImage} />
            </div>

          </div>
          <div className={styles.accordionPanel}>
            <h2 id='panel4-title' >
              <button
                className={styles.accordionTrigger}
                aria-controls='panel4-content'
                aria-expanded='false'>
                <span className={styles.accordionTitle}>Boating</span>
                <svg className={styles.accordionIcon} aria-hidden="true">
                  <use xlinkHref="#boat"></use>
                </svg>
              </button>
            </h2>

            <div
              className={styles.accordionContent}
              id='panel4-content'
              aria-labelledby='panel4-title'
              aria-hidden='true'
              role='region'>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
              <img src="https://preview.colorlib.com/theme/magdesign/images/img_1.jpg" alt="" className={styles.accordionImage} />
            </div>

          </div>
          <div className={styles.accordionPanel}>
            <h2 id='panel4-title' >
              <button
                className={styles.accordionTrigger}
                aria-controls='panel4-content'
                aria-expanded='false'>
                <span className={styles.accordionTitle}>Boating</span>
                <svg className={styles.accordionIcon} aria-hidden="true">
                  <use xlinkHref="#boat"></use>
                </svg>
              </button>
            </h2>

            <div
              className={styles.accordionContent}
              id='panel5-content'
              aria-labelledby='panel5-title'
              aria-hidden='true'
              role='region'>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
              <img src="https://preview.colorlib.com/theme/magdesign/images/img_1.jpg" alt="" className={styles.accordionImage} />
            </div>

          </div>
        </div>
        {/* <div className={styles.firstCarouselBox}>
          <img src="https://preview.colorlib.com/theme/magdesign/images/img_1.jpg" alt="" />
          <div className={styles.carouselContent}>
            <div className={styles.firstContentBoxCategory}>
              <div className={styles.firstContentBoxCategoryBlog}>
                <p>Business, Travel</p>
              </div>
              <div className={styles.firstContentBoxCategoryDate}>
                <p>- May 28,2021</p>
              </div>
            </div>
            <h2>Your most unhappy customers are your greatest source of learning.</h2>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            <div className={styles.firstContentBoxAuthor}>
              <img src="https://preview.colorlib.com/theme/magdesign/images/person_1.jpg" alt="" />
              <div className={styles.firstContentBoxAuthorName}>
                <strong>Sergy Campbell</strong>
                <span> CEO and Founder</span>
              </div>
            </div>
          </div>
        </div> */}
      </div>
      <div className={styles.firstContent}>
     {testPosts.slice(0,6).map((article) => {
      console.log(article)
      return <Post post={article} />
     })}
     {/* <PostDetails start={0} finish={3} list={testPosts} /> */}
{/* transforma mapul de mai sus in componenta care sa aibe start,finish, array(moving parts) */}
      </div>

      <div className={styles.secondTitle}>
        <h1>Most Popular Posts</h1>
      </div>
      <div className={styles.firstCarousel}>
        <div className={styles.firstCarouselBox}>
          <img src="https://preview.colorlib.com/theme/magdesign/images/img_1.jpg" alt="" />
          <div className={styles.carouselContent}>
            <div className={styles.firstContentBoxCategory}>
              <div className={styles.firstContentBoxCategoryBlog}>
                <p>Business, Travel</p>
              </div>
              <div className={styles.firstContentBoxCategoryDate}>
                <p>- May 28,2021</p>
              </div>
            </div>
            <h2>Your most unhappy customers are your greatest source of learning.</h2>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            <div className={styles.firstContentBoxAuthor}>
              <img src="https://preview.colorlib.com/theme/magdesign/images/person_1.jpg" alt="" />
              <div className={styles.firstContentBoxAuthorName}>
                <strong>Sergy Campbell</strong>
                <span> CEO and Founder</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.firstContent}>
        {/* <PostList author={''} title={''} category={''} date={undefined} picture={''} description={''} />
        <PostList author={''} title={''} category={''} date={undefined} picture={''} description={''} />
        <PostList author={''} title={''} category={''} date={undefined} picture={''} description={''} />
        <PostList author={''} title={''} category={''} date={undefined} picture={''} description={''} />
        <PostList author={''} title={''} category={''} date={undefined} picture={''} description={''} />
        <PostList author={''} title={''} category={''} date={undefined} picture={''} description={''} /> */}
      </div>

      <div className={styles.subscribe}>
        <div className={styles.subscribeTitle}>
          <h2>Subscribe to our newsletter</h2>
        </div>
        <div className={styles.subscribeForm}>
          <input type="text" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
      </div>

      <div className={styles.footer}>

      </div>



      <svg width="0" height="0" className={styles.hidden}>

        <symbol
          id="boat"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 35.38 36.29"
          xmlBase="http://www.w3.org/2000/svg" >


          <polygon fill="#ffffff" points="12.9 18 4.1 18 4.1 18 12.9 18 12.9 18" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />

          <polygon fill="#ffffff" points="20 14 4 14 4 14 20 14 20 14" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />

          <polygon fill="#ffffff" points="12.9 10 4.1 10 4.1 10 12.9 10 12.9 10" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />

          <polygon fill="#ffffff" points="20 6 4 6 4 6 20 6 20 6" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />

        </symbol>

      </svg>
    </div>





  )
}
