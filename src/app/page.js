"use client"
import Image from 'next/image'
import styles from './page.module.css'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, getTotals } from '@/redux/slices/cartSlice';
import HeroSection from './components/HeroSection';
import ProductCard from './components/ProductCard';
import Link from 'next/link';
import axios from 'axios';
import { baseURL, imageUrl } from './config/apiUrl';

// import asasa from '../../public/img'


export default function Home() {

  const [loading, setLoading] = useState(false);
  const { categories } = useSelector((state) => state.category);

  const dispatch = useDispatch()





  // useEffect(() => {
  //   fetchMain_cat()
  //   dispatch(getTotals())
  // }, [])

  const [mensproducts, setMensProducts] = useState([]);
  const [womenproducts, setWomenProducts] = useState([]);

  const fetchMensProducts = async () => {
    setLoading(true)
    try {
      const response = await axios.get(baseURL + `/products_by_mens`);
      const { data } = response.data;
      setMensProducts(data.data);
      // setLoading(false)
    } catch (error) {
      // setLoading(false)
    }
  };
  const fetchWomenProducts = async () => {
    setLoading(true)
    try {
      const response = await axios.get(baseURL + `/products_by_womens`);
      const { data } = response.data;
      setWomenProducts(data.data);
      // setLoading(false)
    } catch (error) {
      // setLoading(false)
    }
  };
  useEffect(() => {
    fetchWomenProducts()
    fetchMensProducts()
  }, [])

  const [time, setTime] = useState(calculateTimeRemaining());

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Calculate the remaining time
      const newTime = calculateTimeRemaining();

      // Update the timer state
      setTime(newTime);
    }, 1000); // Update every second

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  function calculateTimeRemaining() {
    const now = new Date();
    const currentDay = now.getDay();

    // Calculate remaining time until 11:59 PM of the current Sunday
    let endOfSunday;
    if (currentDay === 0) {
      // If today is Sunday, set endOfSunday to 11:59 PM today
      endOfSunday = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59, 999);
    } else {
      // If today is not Sunday, set endOfSunday to 11:59 PM next Sunday
      endOfSunday = new Date(now.getFullYear(), now.getMonth(), now.getDate() + (7 - currentDay), 23, 59, 59, 999);
    }

    const remainingTime = Math.max(endOfSunday - now, 0);

    // Convert remaining time to seconds
    const remainingSeconds = Math.floor(remainingTime / 1000);

    // Calculate days, hours, minutes, and seconds
    const remainingDays = Math.floor(remainingSeconds / (24 * 60 * 60));
    const remainingHours = Math.floor((remainingSeconds % (24 * 60 * 60)) / 3600);
    const remainingMinutes = Math.floor((remainingSeconds % 3600) / 60);
    const remainingSecs = remainingSeconds % 60;

    // Return the time object
    return {
      days: remainingDays,
      hours: remainingHours,
      minutes: remainingMinutes,
      seconds: remainingSecs,
    };
  }


  return (
    <>
      <main>
        <HeroSection />
        {/* Banner Section Begin */}

        <div className="banner-section spad">
          <div className="container-fluid">
            <div className="row">
              {categories.map((item, index) => (
                <div className="col-lg-3" key={index}>
                  <Link
                     href={`/collections/${item.slug}`}
                    >
                  <div className="single-banner">
                    <Image src={`${imageUrl}/uploads/${item.image}`} style={{ objectFit: "cover" }} alt="" width={386}
                      height={217} />
                    <div className="inner-text">
                      <h4>{item.name}</h4>
                    </div>
                  </div>
                  </Link>
                </div>

              ))}

            </div>
          </div>
        </div>
        {/* Banner Section End */}


        {/* Man Banner Section Begin */}
        <section className="man-banner spad">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-8">
                <div className="">
                  <ProductCard products={mensproducts}/>
                </div>
              </div>
              <div className="col-lg-3 offset-lg-1">
                <div
                  className="product-large set-bg m-large"
                  style={{ backgroundImage: `url("/img/products/man-large.jpg")` }}
                >
                  <h2>Men’s</h2>
                  <Link href="/collections/mens">Discover More</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Man Banner Section End */}

        {/* Deal Of The Week Section Begin*/}
        <section className="deal-of-week set-bg spad" style={{ backgroundImage: `url("/img/2.png")` }}>

          <div className="container">
            <div className="col-lg-6 text-center">
              <div className="section-title">
                <h2>Deal Of The Week</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  <br /> do ipsum dolor sit amet, consectetur adipisicing elit{" "}
                </p>
                <div className="product-price">
                  $35.00
                  <span>/ HanBag</span>
                </div>
              </div>
              <div className="countdown-timer">
      <div className="cd-item">
        <span>{time.days}</span>
        <p>Days</p>
      </div>
      <div className="cd-item">
        <span>{time.hours}</span>
        <p>Hrs</p>
      </div>
      <div className="cd-item">
        <span>{time.minutes}</span>
        <p>Mins</p>
      </div>
      <div className="cd-item">
        <span>{time.seconds}</span>
        <p>Secs</p>
      </div>
    </div>
              {/* <div className="countdown-timer" id="countdown">
                <div className="cd-item">
                  <span>56</span>
                  <p>Days</p>
                </div>
                <div className="cd-item">
                  <span>12</span>
                  <p>Hrs</p>
                </div>
                <div className="cd-item">
                  <span>40</span>
                  <p>Mins</p>
                </div>
                <div className="cd-item">
                  
                  <span>52 {time.seconds}</span>
                  <p>Secs</p>
                </div>
              </div> */}
              <Link href="/" className="primary-btn">
                Shop Now
              </Link>
            </div>
          </div>
        </section>
        {/* Deal Of The Week Section End */}


        {/* Women Banner Section Begin */}
        <section className="women-banner spad">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-3">
                <div
                  className="product-large set-bg"
                  style={{ backgroundImage: `url("/img/products/women-large.jpg")` }}
                >
                  <h2>Women’s</h2>
                  <Link href="/collections/womens">Discover More</Link>
                </div>
              </div>
              <div className="col-lg-8 offset-lg-1">
                <div className="filter-control">

                </div>
                <div className="">
                  <ProductCard products={womenproducts}/>
    

                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Women Banner Section End */}



        {/* Instagram Section Begin */}
        <div className="instagram-photo">
          <div className="insta-item set-bg" style={{ backgroundImage: `url("/img/insta-1.jpg")` }}>
            <div className="inside-text">
              <i className="ti-instagram" />
              <h5>
                <Link href="/">colorlib_Collection</Link>
              </h5>
            </div>
          </div>
          <div className="insta-item set-bg" style={{ backgroundImage: `url("/img/insta-2.jpg")` }}>
            <div className="inside-text">
              <i className="ti-instagram" />
              <h5>
                <Link href="/">colorlib_Collection</Link>
              </h5>
            </div>
          </div>
          <div className="insta-item set-bg" style={{ backgroundImage: `url("/img/insta-3.jpg")` }}>
            <div className="inside-text">
              <i className="ti-instagram" />
              <h5>
                <Link href="/">colorlib_Collection</Link>
              </h5>
            </div>
          </div>
          <div className="insta-item set-bg" style={{ backgroundImage: `url("/img/insta-4.jpg")` }}>
            <div className="inside-text">
              <i className="ti-instagram" />
              <h5>
                <Link href="/">colorlib_Collection</Link>
              </h5>
            </div>
          </div>
          <div className="insta-item set-bg" style={{ backgroundImage: `url("/img/insta-5.jpg")` }}>
            <div className="inside-text">
              <i className="ti-instagram" />
              <h5>
                <Link href="/">colorlib_Collection</Link>
              </h5>
            </div>
          </div>
          <div className="insta-item set-bg" style={{ backgroundImage: `url("/img/insta-6.jpg")` }}>
            <div className="inside-text">
              <i className="ti-instagram" />
              <h5>
                <Link href="/">colorlib_Collection</Link>
              </h5>
            </div>
          </div>
        </div>
        {/* Instagram Section End */}


        <>
          {/* Latest Blog Section Begin */}
          <section className="latest-blog spad">
            <div className="container">
              <div className="benefit-items">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="single-benefit">
                      <div className="sb-icon">
                        <Image src="/img/icon-1.png" alt="" width={47} height={34} />
                      </div>
                      <div className="sb-text">
                        <h6>Free Shipping</h6>
                        <p>For all order over 99$</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="single-benefit">
                      <div className="sb-icon">
                        <Image src="/img/icon-2.png" alt="" width={38} height={38} />
                      </div>
                      <div className="sb-text">
                        <h6>Delivery On Time</h6>
                        <p>If good have prolems</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="single-benefit">
                      <div className="sb-icon">
                        <Image src="/img/icon-1.png" alt="" width={47} height={34} />
                      </div>
                      <div className="sb-text">
                        <h6>Secure Payment</h6>
                        <p>100% secure payment</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Latest Blog Section End */}
        </>

      </main>
    </>

  )
}

{/* <div className={styles.description}>
<p>
  Get started by editing&nbsp;
  <code className={styles.code}>src/app/page.js</code>
</p>
<div>
  <Link
    href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    target="_blank"
    rel="noopener noreferrer"
  >
    By{' '}
    <Image
      src="/vercel.svg"
      alt="Vercel Logo"
      className={styles.vercelLogo}
      width={100}
      height={24}
      priority
    />
  </Link>
</div>
</div>

<div className={styles.center}>
<Image
  className={styles.logo}
  src="/next.svg"
  alt="Next.js Logo"
  width={180}
  height={37}
  priority
/>
</div>

<div className={styles.grid}>
<Link
  href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
  className={styles.card}
  target="_blank"
  rel="noopener noreferrer"
>
  <h2>
    Docs <span>-&gt;</span>
  </h2>
  <p>Find in-depth information about Next.js features and API.</p>
</Link>

<Link
  href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
  className={styles.card}
  target="_blank"
  rel="noopener noreferrer"
>
  <h2>
    Learn <span>-&gt;</span>
  </h2>
  <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
</Link>

<Link
  href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
  className={styles.card}
  target="_blank"
  rel="noopener noreferrer"
>
  <h2>
    Templates <span>-&gt;</span>
  </h2>
  <p>Explore starter templates for Next.js.</p>
</Link>

<Link
  href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
  className={styles.card}
  target="_blank"
  rel="noopener noreferrer"
>
  <h2>
    Deploy <span>-&gt;</span>
  </h2>
  <p>
    Instantly deploy your Next.js site to a shareable URL with Vercel.
  </p>
</Link>
</div> */}
