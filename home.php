<!-- VIDEO -->
<!-- https://www.youtube.com/watch?v=34MBVXsDOtA -->
 <!-- SWIPER -->
<!-- https://swiperjs.com/ -->
 <!-- CLIP PATH MAKER -->
<!-- https://bennettfeely.com/clippy/ -->


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>home</title>
    <!-- font awesome CDN link -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <!-- css file link -->
    <link rel="stylesheet" href="style.css">
    <!-- swiper css link -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"/>

</head>
<body>
    <!-- header section starts -->
     <section class="header">

        <a href="home.php" class="logo">travel.</a>
        <nav class="navbar">
            <a href="home.php">home</a>
            <a href="about.php">about</a>
            <a href="package.php">package</a>
            <a href="book.php">book</a>
        </nav>

        <div id="menu-btn" class="fas fa-bars"></div>

     </section>
    <!-- header section ends -->





    
    <!-- home section starts -->

    <section class="home">

        <div class="swiper home-slider">

            <div class="swiper-wrapper">

                <div class="swiper-slide slide" style="background:url(images/home-slide-1.jpg) no-repeat">
                    <div class="content">
                        <span>explore, discover, travel</span>
                        <h3>travel around the world</h3>
                        <a href="package.php" class="btn">discover more</a>
                    </div>
                </div>

                <div class="swiper-slide slide" style="background:url(images/home-slide-2.jpg) no-repeat">
                    <div class="content">
                        <span>explore, discover, travel</span>
                        <h3>discover new places</h3>
                        <a href="package.php" class="btn">discover more</a>
                    </div>
                </div>

                <div class="swiper-slide slide" style="background:url(images/home-slide-3.jpg) no-repeat">
                    <div class="content">
                        <span>explore, discover, travel</span>
                        <h3>make your tour worthwhile</h3>
                        <a href="package.php" class="btn">discover more</a>
                    </div>
                </div>

            </div>
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
        </div>

    </section>

     <!-- home section ends -->






    <!-- services section starts  -->
     <section class="services">

        <h1 class="heading-title"> our services </h1>

        <div class="box-container">

            <div class="box">
                <img src="images/icon-1.png" alt="">
                <h3>adventure</h3>
            </div>

            <div class="box">
                <img src="images/icon-2.png" alt="">
                <h3>tour guide</h3>
            </div>

            <div class="box">
                <img src="images/icon-3.png" alt="">
                <h3>trekking</h3>
            </div>

            <div class="box">
                <img src="images/icon-4.png" alt="">
                <h3>camp fire</h3>
            </div>

            <div class="box">
                <img src="images/icon-5.png" alt="">
                <h3>off road</h3>
            </div>

            <div class="box">
                <img src="images/icon-6.png" alt="">
                <h3>camping</h3>
            </div>

        </div>
     </section>
    <!-- services section ends -->


    <!-- home about section starts -->

    <section class="home-about">

        <div class="image">
            <img src="images/about-img-jpg.jpg" alt="">
        </div>

        <div class="content">
            <h3>about us</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique amet harum sunt, adipisci eum vel unde eius
            optio qui consectetur rerum saepe autem eveniet facere nisi itaque ea, doloribus mollitia.</p>
            <a href="about.php" class="btn">read more</a>
        </div>
    </section>

    <!-- home about section ends -->


    <!-- home packages section starts  -->

        <section class="home-packages">

            <h1 class="heading-title">our packages</h1>

            <div class="box-container">

                <div class="box">
                    <div class="image">
                        <img src="images/img-1.jpg" alt="">
                    </div>
                    <div class="content">
                        <h3>adventure & tour</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, maxime ut.</p>
                        <a href="book.php" class="btn">book now</a>
                    </div>
                </div>

                <div class="box">
                    <div class="image">
                        <img src="images/img-2.jpg" alt="">
                    </div>
                    <div class="content">
                        <h3>adventure & tour</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, maxime ut.</p>
                        <a href="book.php" class="btn">book now</a>
                    </div>
                </div>

                <div class="box">
                    <div class="image">
                        <img src="images/img-3.jpg" alt="">
                    </div>
                    <div class="content">
                        <h3>adventure & tour</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, maxime ut.</p>
                        <a href="book.php" class="btn">book now</a>
                    </div>
                </div>

            </div>

            <div class="load-more"><a href="package.php" class="btn">load more</a></div>

        </section>

     <!-- home packages section ends  -->

     <!-- home offer section starts -->

    
     <section class="home-offer">
        <div class="content">
            <h3>up to 50% off</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe animi nesciunt sequi? Voluptatum ut sequi eveniet est iste
                fugit hic laudantium et odio doloremque praesentium odit rerum unde, incidunt quia?</p>
            <a href="book.php" class="btn">book now</a>
        </div>
     </section>
      <!-- home offer section ends -->



    <!-- footer section starts -->
     <section class="footer">
        <div class="box-container">
            <div class="box">
                <h3>quick links</h3>
                <a href="home.php"><i class="fas fa-angle-right"></i> home</a>
                <a href="about.php"><i class="fas fa-angle-right"></i> about</a>
                <a href="package.php"><i class="fas fa-angle-right"></i> package</a>
                <a href="book.php"><i class="fas fa-angle-right"></i> book</a>
            </div>

            <div class="box">
                <h3>extra links</h3>
                <a href="#"><i class="fas fa-angle-right"></i> ask questions</a>
                <a href="#"><i class="fas fa-angle-right"></i> about us</a>
                <a href="#"><i class="fas fa-angle-right"></i> privacy policy</a>
                <a href="#"><i class="fas fa-angle-right"></i> terms of use</a>
            </div>


            <div class="box">
                <h3>contact info</h3>
                <a href="#"><i class="fas fa-phone"></i> +123-456-7890</a>
                <a href="#"><i class="fas fa-phone"></i> +222-456-7890</a>
                <a href="#"><i class="fas fa-envelope"></i> 123@gmail.com </a>
                <a href="#"><i class="fas fa-map"></i> mumbai,india - 400104</a>
            </div>

            <div class="box">
                <h3>follow us</h3>
                <a href="#"> <i class="fab fa-facebook-f"></i> facebook </a>
                <a href="#"> <i class="fab fa-twitter"></i> twitter </a>
                <a href="#"> <i class="fab fa-instagram"></i> instagram </a>
                <a href="#"> <i class="fab fa-linkedin"></i> linkedin </a>
            </div>

        </div>

        <!-- <div class="credits"> created by <span>mr. web designer </span>| all rights reserved</div> -->

     </section>
     <!-- footer section ends -->


    <!-- swiper js link -->
    <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>   <!-- /!\ ordre des scripts ! -->
    <!-- js file link -->
    <script src="script.js"></script>   <!-- /!\ ordre des scripts ! -->
</body>
</html>