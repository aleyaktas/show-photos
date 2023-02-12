const data = [
  {
    id: 1,
    category: "blackwhite",
    url: "https://thumbs.dreamstime.com/b/mighty-beautiful-lion-resting-african-savannah-black-white-kenya-96042281.jpg",
  },
  {
    id: 2,
    category: "blackwhite",
    url: "https://images.pexels.com/photos/60342/pexels-photo-60342.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    id: 3,
    category: "blackwhite",
    url: "https://muhtesemsozler.com/wp-content/uploads/2020/04/siyah-beyaz2.jpg",
  },
  {
    id: 4,
    category: "blackwhite",
    url: "https://haber.sol.org.tr/sites/default/files/styles/content_image_size_type4/public/images/content/article/2021/11/12/%C3%A7%C4%B1plak%20arama.jpg?itok=XBzJQopa",
  },
  {
    id: 5,
    category: "blackwhite",
    url: "https://www.adobe.com/content/dam/cc/us/en/creativecloud/design/discover/is-black-a-color/desktop/is-black-a-color_P4a_690x450.jpg.img.jpg",
  },
  {
    id: 6,
    category: "blackwhite",
    url: "https://thumbs.dreamstime.com/b/calm-scene-black-white-abandoned-jetty-teluk-tempoyak-penang-malaysia-fine-art-41917535.jpg",
  },
  {
    id: 7,
    category: "blackwhite",
    url: "https://cdn.mos.cms.futurecdn.net/5PMe5hr8tjSS9Nq5d6Cebe-1200-80.jpg",
  },
  {
    id: 8,
    category: "blackwhite",
    url: "https://121clicks.com/wp-content/uploads/2014/08/great_black_and_white_photos_02.jpg",
  },
  {
    id: 9,
    category: "blackwhite",
    url: "https://media.istockphoto.com/photos/black-white-tiger-picture-id954560222?k=20&m=954560222&s=612x612&w=0&h=zb2RFnC8gYUUe71WjqU4D3q6SCbVkKDXA2N1uLMn0Gg=",
  },
  {
    id: 10,
    category: "blackwhite",
    url: "https://www.thephotoargus.com/wp-content/uploads/2012/04/stunning-black-and-white-25.jpg",
  },
  {
    id: 11,
    category: "blackwhite",
    url: "https://blog.fotografium.com/wp-content/uploads/2012/01/black-and-white-car-vehicle-vintage.jpg",
  },
  {
    id: 12,
    category: "blackwhite",
    url: "https://i.ytimg.com/vi/QuU9cDdqBME/maxresdefault.jpg",
  },
  {
    id: 13,
    category: "blackwhite",
    url: "http://cliparts.co/cliparts/qcB/obd/qcBobdbRi.jpg",
  },
  {
    id: 14,
    category: "blackwhite",
    url: "https://blog.konusarakogren.com/wp-content/uploads/2015/12/black_white-1024x768.jpg",
  },
  {
    id: 15,
    category: "blackwhite",
    url: "https://www.verywellmind.com/thmb/t_7YKfvd1lT4H60rXsNR5v9XPA0=/2048x1368/filters:fill%28ABEAC3,1%29/GettyImages-569191285-56a7984e5f9b58b7d0ebfbca.jpg",
  },
  {
    id: 16,
    category: "blackwhite",
    url: "https://cdn.pixabay.com/photo/2017/05/08/08/22/portrait-2294754_960_720.jpg",
  },
  {
    id: 17,
    category: "blackwhite",
    url: "https://www.araguler.com.tr/images/istanbul/31.jpg",
  },
  {
    id: 18,
    category: "blackwhite",
    url: "https://drscdn.500px.org/photo/98460377/m%3D900/4f4b8ec9743c14b06acbd5ecb43343f6",
  },
  {
    id: 19,
    category: "lifestyle",
    url: "https://cloudfront.omsphoto.com/wp-content/uploads/2020/11/OMS-Photo-lifestyle-photography-Mat-Witherspoon-010.jpg",
  },
  {
    id: 20,
    category: "lifestyle",
    url: "https://www.nationsphotolab.com/blog/wp-content/uploads/2020/03/horizontal_blog-3.jpg",
  },
  {
    id: 21,
    category: "lifestyle",
    url: "https://photographyreel.com/file/image/11-2020/1-lifestyle-photography-night-out-friends-by-tom-hussey.jpg",
  },
  {
    id: 22,
    category: "lifestyle",
    url: "https://media.macphun.com/img/uploads/macphun/blog/1288/willian-justen-de-vasconcellos-598072-unsplash-min.jpg?q=75&w=1710&h=906&resize=cover",
  },
  {
    id: 23,
    category: "lifestyle",
    url: "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/124208937/original/80d128435102c6779d9cd5d7ee7fea755d15767e/capture-product-and-lifestyle-photography.jpg",
  },
  {
    id: 24,
    category: "lifestyle",
    url: "https://www.slrlounge.com/wp-content/uploads/2016/06/lifestyle-photography-tips-1.jpg",
  },
  {
    id: 25,
    category: "lifestyle",
    url: "https://i.pinimg.com/originals/8e/c7/2b/8ec72bc3c845cba1031202ac94125fc6.jpg",
  },
  {
    id: 26,
    category: "lifestyle",
    url: "https://www.radiocentre.org/wp-content/uploads/2018/07/PHOTOGRAPHY-Young-man-Office-Google-Home.jpg",
  },
  {
    id: 27,
    category: "lifestyle",
    url: "https://amandajoy-photography.com/wp-content/uploads/2018/07/Amanda-Joy-Photography-Basel_0523.jpg",
  },
  {
    id: 28,
    category: "lifestyle",
    url: "https://images.squarespace-cdn.com/content/v1/50be6057e4b030a9a18e24ba/1557155232404-FV91I6YHBYD4HX29P34F/Jarlsberg_Sweden05.jpg?format=500w",
  },
  {
    id: 29,
    category: "lifestyle",
    url: "http://elina-photography.com/wp-content/uploads/2016/01/EMK_0361web-noresize.jpg",
  },
  {
    id: 30,
    category: "lifestyle",
    url: "https://images.squarespace-cdn.com/content/v1/52f29591e4b0d3acccdd6286/1512148912918-IKKBGZBFR31WO7DWETF7/matera+lifestyle+hike+mt+rainier_DSC5944.jpg?format=1000w",
  },
  {
    id: 31,
    category: "lifestyle",
    url: "https://images.squarespace-cdn.com/content/v1/545a3cf1e4b0ca6b8bdbc10d/1554053415230-9W9T8NY63ECMQYACOKH9/Dubai_Lifestyle_Luxury_Photographer20.jpg",
  },
  {
    id: 32,
    category: "lifestyle",
    url: "https://images.squarespace-cdn.com/content/v1/574512d92eeb81676262d877/1592079024081-XFLNRHCEXN0ERGPM9TMM/IanKobylanskiVancouverLifestyleFashionPhotographer",
  },
  {
    id: 33,
    category: "lifestyle",
    url: "https://8a9c29b2e62e76f2a7df-82dbf131539578d574129f1d22e5b29b.ssl.cf1.rackcdn.com/080529_Kavu_061wr.jpg",
  },
  {
    id: 34,
    category: "lifestyle",
    url: "https://format-com-cld-res.cloudinary.com/image/private/s--7gsfTLRN--/c_limit,g_center,h_1200,w_65535/fl_keep_iptc.progressive,q_95/75345-6930549-Michelle_Bryant_Esesh214.jpg",
  },
  {
    id: 35,
    category: "lifestyle",
    url: "https://f8cabf6baca1ed37fba4-1b8de4c9b7151e36219ad26b6e33e8d3.ssl.cf1.rackcdn.com/overview_food_lifestyle019.jpg",
  },
  {
    id: 36,
    category: "travel",
    url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/enjoying-the-view-royalty-free-image-1582838254.jpg",
  },
  {
    id: 37,
    category: "travel",
    url: "https://cloudfront-us-east-2.images.arcpublishing.com/reuters/744CIGSI55FURPPEVBGP372QQQ.JPG",
  },
  {
    id: 38,
    category: "travel",
    url: "https://www.twowanderingsoles.com/wp-content/uploads/2017/10/TravelPhotographyTips.jpg",
  },
  {
    id: 39,
    category: "travel",
    url: "https://cdn2.wanderlust.co.uk/media/1115/articles-a-pretty-picture-is-not-enough-it-needs-to-be-original-photo-mike-baird1.jpg?anchor=center&mode=crop&width=1200&height=0&rnd=131455539260000000",
  },
  {
    id: 40,
    category: "travel",
    url: "https://images.squarespace-cdn.com/content/v1/52f29591e4b0d3acccdd6286/1512148940670-U245O76QDT1WBGPDXWPK/dmb5-148.jpg?format=2500w",
  },
  {
    id: 41,
    category: "travel",
    url: "https://www.freakytravel.com/wp-content/uploads/hiker-ocean-extreme.jpg",
  },
  {
    id: 42,
    category: "travel",
    url: "https://www.ctvnews.ca/polopoly_fs/1.5036379.1595530668!/httpImage/image.jpg_gen/derivatives/landscape_1020/image.jpg",
  },
  {
    id: 43,
    category: "travel",
    url: "https://static.euronews.com/articles/stories/05/69/99/50/400x225_cmsv2_248bd2e8-f237-56b8-a794-d7e4ec92c338-5699950.jpg",
  },
  {
    id: 44,
    category: "travel",
    url: "https://img.etimg.com/thumb/msid-66129697,width-640,resizemode-4,imgsize-342241/how-to-get-your-trips-sponsored.jpg",
  },
  {
    id: 45,
    category: "travel",
    url: "https://img.huffingtonpost.com/asset/6054be58240000760a25f476.jpeg?ops=scalefit_720_noupscale",
  },
  {
    id: 46,
    category: "travel",
    url: "https://parade.com/wp-content/uploads/2019/12/travel-instagram-captions.jpg",
  },
  {
    id: 47,
    category: "travel",
    url: "https://www.schengenvisainfo.com/news/wp-content/uploads/2021/05/paris-France-1.jpg",
  },
  {
    id: 48,
    category: "travel",
    url: "https://d2rdhxfof4qmbb.cloudfront.net/wp-content/uploads/20190219165911/sta-travel-default-min.jpg",
  },
  {
    id: 49,
    category: "travel",
    url: "https://d3dqioy2sca31t.cloudfront.net/Projects/cms/production/000/031/491/medium/c70b9d01b0d94937d0e80164735880e8/tile-home-xmas-general.jpg",
  },
  {
    id: 50,
    category: "travel",
    url: "https://img-s2.onedio.com/id-5c4e2a71859b4f89779fbb47/rev-0/w-600/h-336/f-gif/s-60a5a19125fbb600181c6408dd72d07425d9e5de.gif",
  },
  {
    id: 51,
    category: "travel",
    url: "https://assets.wego.com/image/upload/w_480,c_fill,f_auto,fl_lossy,q_auto:low/v1555990166/destinations/country-thumbnail/IN.jpg",
  },
];

export default data;
