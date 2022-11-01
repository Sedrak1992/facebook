const postList = [
  {
    id: 1,
    imgLogo:
      "https://scontent.fevn11-1.fna.fbcdn.net/v/t39.30808-1/301873921_386727586976324_2791501370287178672_n.jpg?stp=c31.0.80.80a_cp0_dst-jpg_p80x80&_nc_cat=103&ccb=1-7&_nc_sid=c6021c&_nc_ohc=PYgh7ybIb3wAX8mkhIJ&tn=ffOXZHG-wZX3vd6c&_nc_ht=scontent.fevn11-1.fna&oh=00_AT_oHeVVm_e4g6DtSQOh2gBm9TSOH1L2LbVgfTDxr7o-aQ&oe=634DDB4A",
    data: " 30 июнь 2021",
    body: "Civic.am",
    title:
      "ԱՄՆ-ն չեղյալ է հայտարարել դիվանագիտական այցը՝ դեպի Չինաստան՝ ակնկալվողբարձրաստիճան հանդիպման մերժումից հետո",
    imgSrc:
      "https://www.middleweb.com/wp-content/uploads/2017/08/breaking-news-blue-600.jpg",
    preview:
      "ԱՄՆ-ն չեղյալ է հայտարարել դիվանագիտական այցը՝ դեպի Չինաստան՝ ակնկալվող...",
    linkTitle: "CIVIC.AM",
  },
  {
    id: 2,
    imgLogo:
      "https://scontent.fevn11-1.fna.fbcdn.net/v/t39.30808-1/301873921_386727586976324_2791501370287178672_n.jpg?stp=c31.0.80.80a_cp0_dst-jpg_p80x80&_nc_cat=103&ccb=1-7&_nc_sid=c6021c&_nc_ohc=PYgh7ybIb3wAX8mkhIJ&tn=ffOXZHG-wZX3vd6c&_nc_ht=scontent.fevn11-1.fna&oh=00_AT_oHeVVm_e4g6DtSQOh2gBm9TSOH1L2LbVgfTDxr7o-aQ&oe=634DDB4A",
    data: "1 сентябрь 2021",
    body: "Civic.am",
    title: "Շիրակի մարզը միանում է «իԳործ» ծրագրին",
    imgSrc:
      "https://resize.indiatvnews.com/en/centered/newbucket/1200_675/2020/07/breakingnews-live-blog-1568185450-1595123397-1595295947.jpg",
    preview:
      "Շիրակի մարզը միանում է «իԳործ» ծրագրին Շիրակի մարզպետ Հովհաննես Հարությունյանն այսօր ընդունել է ...",
    linkTitle: "CIVIC.AM",
  },
  {
    id: 3,
    imgLogo:
      "https://scontent.fevn11-1.fna.fbcdn.net/v/t39.30808-1/301873921_386727586976324_2791501370287178672_n.jpg?stp=c31.0.80.80a_cp0_dst-jpg_p80x80&_nc_cat=103&ccb=1-7&_nc_sid=c6021c&_nc_ohc=PYgh7ybIb3wAX8mkhIJ&tn=ffOXZHG-wZX3vd6c&_nc_ht=scontent.fevn11-1.fna&oh=00_AT_oHeVVm_e4g6DtSQOh2gBm9TSOH1L2LbVgfTDxr7o-aQ&oe=634DDB4A",
    data: "2 сентябрь 2021",
    body: "Civic.am",
    title:
      " Միասին մենք կարող ենք նպաստել ավելի խաղաղ և բարեկեցիկ ապագայի ապահովմանը. դեսպան Ջոն Գալագեր",
    imgSrc:
      "https://dkofva0t6jnyn.cloudfront.net/sites/default/files/styles/amp_blog_image_large/public/consumer/blog/breaking-news-blog-1138x658-1.jpg",
    preview:
      "Միասին մենք կարող ենք նպաստել ավելի խաղաղ և բարեկեցիկ ապագայի ապահովմանը. դեսպան ...",
    linkTitle: "CIVIC.AM",
  },
  {
    id: 4,
    imgLogo:
      "https://scontent.fevn11-1.fna.fbcdn.net/v/t39.30808-1/301873921_386727586976324_2791501370287178672_n.jpg?stp=c31.0.80.80a_cp0_dst-jpg_p80x80&_nc_cat=103&ccb=1-7&_nc_sid=c6021c&_nc_ohc=PYgh7ybIb3wAX8mkhIJ&tn=ffOXZHG-wZX3vd6c&_nc_ht=scontent.fevn11-1.fna&oh=00_AT_oHeVVm_e4g6DtSQOh2gBm9TSOH1L2LbVgfTDxr7o-aQ&oe=634DDB4A",
    data: "15 сентябрь 2021 ",
    body: "Civic.am",
    title:
      "Մինչ օրս հարկային արտոնություն է ստացել 1009 նորաստեղծ տեխնոլոգիական ընկերություն",
    imgSrc: "https://i.ytimg.com/vi/w_Ma8oQLmSM/maxresdefault.jpg",
    preview:
      "Մինչ օրս հարկային արտոնություն է ստացել 1009 նորաստեղծ տեխնոլոգիական ընկերություն",
    linkTitle: "CIVIC.AM",
  },
  {
    id: 5,
    imgLogo:
      "https://scontent.fevn11-1.fna.fbcdn.net/v/t39.30808-1/301873921_386727586976324_2791501370287178672_n.jpg?stp=c31.0.80.80a_cp0_dst-jpg_p80x80&_nc_cat=103&ccb=1-7&_nc_sid=c6021c&_nc_ohc=PYgh7ybIb3wAX8mkhIJ&tn=ffOXZHG-wZX3vd6c&_nc_ht=scontent.fevn11-1.fna&oh=00_AT_oHeVVm_e4g6DtSQOh2gBm9TSOH1L2LbVgfTDxr7o-aQ&oe=634DDB4A",
    data: "15 сентябрь 2021 ",
    body: "Civic.am",
    title:
      "Երևան և Մարտունի քաղաքների մի շարք հասցեների գազամատակարարումը սեպտեմբերի 16-ին կդադարեցվի",
    imgSrc:
      "https://cdn.iview.abc.net.au/thumbs/i/nu/NU2205Q_62940be99cc24_1280.jpg",
    preview:
      "Երևան և Մարտունի քաղաքների մի շարք հասցեների գազամատակարարումը սեպտեմբերի 16-ին կդադարեցվի",
    linkTitle: "CIVIC.AM",
  },
];
export default postList;
