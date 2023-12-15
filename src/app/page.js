"use client"
import Image from 'next/image'
import styles from './page.module.css'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, getTotals } from '@/redux/slices/cartSlice';
import HeroSection from './components/HeroSection';
import ProductCard from './components/ProductCard';
import Link from 'next/link';

// import asasa from '../../public/img'


export default function Home() {



  useEffect(() => {
    $(".hero-items").owlCarousel({
      loop: true,
      margin: 0,
      nav: true,
      items: 1,
      dots: false,
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
      smartSpeed: 1200,
      autoHeight: false,
      autoplay: true,
    });

    


/*------------------
    Hero Slider
--------------------*/
$(".hero-items").owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    items: 1,
    dots: false,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
    smartSpeed: 1200,
    autoHeight: false,
    autoplay: true,
});

/*------------------
    Product Slider
--------------------*/
$(".product-slider").owlCarousel({
    loop: true,
    margin: 25,
    nav: true,
    items: 4,
    dots: true,
    navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
    smartSpeed: 1200,
    autoHeight: false,
    autoplay: true,
    responsive: {
        0: {
            items: 1,
        },
        576: {
            items: 2,
        },
        992: {
            items: 2,
        },
        1200: {
            items: 3,
        }
    }
});

/*------------------
   logo Carousel
--------------------*/
$(".logo-carousel").owlCarousel({
    loop: false,
    margin: 30,
    nav: false,
    items: 5,
    dots: false,
    navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
    smartSpeed: 1200,
    autoHeight: false,
    mouseDrag: false,
    autoplay: true,
    responsive: {
        0: {
            items: 3,
        },
        768: {
            items: 5,
        }
    }
});

/*-----------------------
   Product Single Slider
-------------------------*/
$(".ps-slider").owlCarousel({
    loop: false,
    margin: 10,
    nav: true,
    items: 3,
    dots: false,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    smartSpeed: 1200,
    autoHeight: false,
    autoplay: true,
});


  }, []);
  return (
    <>
    <main>
      <HeroSection/>



  {/* Banner Section Begin */}
  <div className="banner-section spad">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-4">
          <div className="single-banner">
            <Image src='/img/banner-1.jpg' alt=""   width={386}
        height={217} />
            <div className="inner-text">
              <h4>Men’s</h4>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="single-banner">
            <Image src='/img/banner-2.jpg' alt=""   width={386}
        height={217} />
            <div className="inner-text">
              <h4>Women’s</h4>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="single-banner">
            <Image src='/img/banner-3.jpg' alt=""   width={386}
        height={217} />
            <div className="inner-text">
              <h4>Kid’s</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Banner Section End */}


 {/* Man Banner Section Begin */}
 <section className="man-banner spad">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-8">
          <div className="filter-control">
            {/* <ul>
              <li className="active">Clothings</li>
              <li>HandBag</li>
              <li>Shoes</li>
              <li>Accessories</li>
            </ul> */}
          </div>
          <div className="product-slider owl-carousel">
            <ProductCard/>
            {/* <div className="product-item">
              <div className="pi-pic">
                <img src="img/products/man-2.jpg" alt="" />
                <div className="icon">
                  <i className="icon_heart_alt" />
                </div>
                <ul>
                  <li className="w-icon active">
                    <Link href="/">
                      <i className="ti-shopping-cart" />
                    </Link>
                  </li>
                  <li className="quick-view">
                    <Link href="/">+ Quick View</Link>
                  </li>
                  <li className="w-icon">
                    <Link href="/">
                      <i className="fa fa-random" />
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="pi-text">
                <div className="catagory-name">Shoes</div>
                <Link href="/">
                  <h5>Guangzhou sweater</h5>
                </Link>
                <div className="product-price">$13.00</div>
              </div>
            </div>
            <div className="product-item">
              <div className="pi-pic">
                <img src="img/products/man-3.jpg" alt="" />
                <div className="icon">
                  <i className="icon_heart_alt" />
                </div>
                <ul>
                  <li className="w-icon active">
                    <Link href="/">
                      <i className="ti-shopping-cart" />
                    </Link>
                  </li>
                  <li className="quick-view">
                    <Link href="/">+ Quick View</Link>
                  </li>
                  <li className="w-icon">
                    <Link href="/">
                      <i className="fa fa-random" />
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="pi-text">
                <div className="catagory-name">Towel</div>
                <Link href="/">
                  <h5>Pure Pineapple</h5>
                </Link>
                <div className="product-price">$34.00</div>
              </div>
            </div>
            <div className="product-item">
              <div className="pi-pic">
                <img src="img/products/man-4.jpg" alt="" />
                <div className="icon">
                  <i className="icon_heart_alt" />
                </div>
                <ul>
                  <li className="w-icon active">
                    <Link href="/">
                      <i className="ti-shopping-cart" />
                    </Link>
                  </li>
                  <li className="quick-view">
                    <Link href="/">+ Quick View</Link>
                  </li>
                  <li className="w-icon">
                    <Link href="/">
                      <i className="fa fa-random" />
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="pi-text">
                <div className="catagory-name">Towel</div>
                <Link href="/">
                  <h5>Converse Shoes</h5>
                </Link>
                <div className="product-price">$34.00</div>
              </div>
            </div> */}
          </div>
        </div>
        <div className="col-lg-3 offset-lg-1">
          <div
            className="product-large set-bg m-large"
            style={{backgroundImage: `url("img/products/man-large.jpg")`}}
          >
            <h2>Men’s</h2>
            <Link href="/">Discover More</Link>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Man Banner Section End */}



  {/* Deal Of The Week Section Begin*/}
  <section className="deal-of-week set-bg spad" style={{backgroundImage: `url("img/2.png")`}}>

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
        <div className="countdown-timer" id="countdown">
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
            <span>52</span>
            <p>Secs</p>
          </div>
        </div>
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
            style={{backgroundImage: `url("img/products/women-large.jpg")`}}
          >
            <h2>Women’s</h2>
            <Link href="/">Discover More</Link>
          </div>
        </div>
        <div className="col-lg-8 offset-lg-1">
          <div className="filter-control">
            {/* <ul>
              <li className="active">Clothings</li>
              <li>HandBag</li>
              <li>Shoes</li>
              <li>Accessories</li>
            </ul> */}
          </div>
          <div className="product-slider owl-carousel">
            <ProductCard/>
            {/* <div className="product-item">
              <div className="pi-pic">
                <img src="img/products/women-1.jpg" alt="" />
                <div className="sale">Sale</div>
                <div className="icon">
                  <i className="icon_heart_alt" />
                </div>
                <ul>
                  <li className="w-icon active">
                    <Link href="/">
                      <i className="ti-shopping-cart" onClick={() => handleAddToCart(value)}/>
                    </Link>
                  </li>
                  <li className="quick-view">
                    <Link href="/">+ Quick View</Link>
                  </li>
                  <li className="w-icon">
                    <Link href="/">
                      <i className="fa fa-random" />
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="pi-text">
                <div className="catagory-name">Coat</div>
                <Link href="/">
                  <h5>Pure Pineapple</h5>
                </Link>
                <div className="product-price">
                  $14.00
                  <span>$35.00</span>
                </div>
              </div>
            </div> */}

          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Women Banner Section End */}



{/* Instagram Section Begin */}
<div className="instagram-photo">
    <div className="insta-item set-bg" style={{backgroundImage: `url("img/insta-1.jpg")`}}>
      <div className="inside-text">
        <i className="ti-instagram" />
        <h5>
          <Link href="/">colorlib_Collection</Link>
        </h5>
      </div>
    </div>
    <div className="insta-item set-bg"  style={{backgroundImage: `url("img/insta-2.jpg")`}}>
      <div className="inside-text">
        <i className="ti-instagram" />
        <h5>
          <Link href="/">colorlib_Collection</Link>
        </h5>
      </div>
    </div>
    <div className="insta-item set-bg"  style={{backgroundImage: `url("img/insta-3.jpg")`}}>
      <div className="inside-text">
        <i className="ti-instagram" />
        <h5>
          <Link href="/">colorlib_Collection</Link>
        </h5>
      </div>
    </div>
    <div className="insta-item set-bg"  style={{backgroundImage: `url("img/insta-4.jpg")`}}>
      <div className="inside-text">
        <i className="ti-instagram" />
        <h5>
          <Link href="/">colorlib_Collection</Link>
        </h5>
      </div>
    </div>
    <div className="insta-item set-bg"  style={{backgroundImage: `url("img/insta-5.jpg")`}}>
      <div className="inside-text">
        <i className="ti-instagram" />
        <h5>
          <Link href="/">colorlib_Collection</Link>
        </h5>
      </div>
    </div>
    <div className="insta-item set-bg"  style={{backgroundImage: `url("img/insta-6.jpg")`}}>
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
