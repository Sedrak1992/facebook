const postList = [
  {
    id: 1,
    imgLogo:
      "https://scontent.fevn11-1.fna.fbcdn.net/v/t39.30808-1/301873921_386727586976324_2791501370287178672_n.jpg?stp=c31.0.80.80a_cp0_dst-jpg_p80x80&_nc_cat=103&ccb=1-7&_nc_sid=c6021c&_nc_ohc=PYgh7ybIb3wAX8mkhIJ&tn=ffOXZHG-wZX3vd6c&_nc_ht=scontent.fevn11-1.fna&oh=00_AT_oHeVVm_e4g6DtSQOh2gBm9TSOH1L2LbVgfTDxr7o-aQ&oe=634DDB4A",
    data: " 30 июнь 2021",
    body: "Civic.am",
    title:
      "ԱՄՆ-ն չեղյալ է հայտարարել դիվանագիտական այցը՝ դեպի Չինաստան՝ ակնկալվողբարձրաստիճան հանդիպման մերժումից հետո",
    imgSrc: "img/269669879_3137994416483686_4685938482215500696_n.jpeg",
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
      "https://external.fevn11-1.fna.fbcdn.net/emg1/v/t13/4795357778944474132?url=https%3A%2F%2Fcivic.am%2Fuploads%2Fposts%2F2021-08%2F1630436852_241145257_2970153593243839_5519482623161601258_n.jpeg&fb_obo=1&utld=civic.am&stp=c0.5000x0.5000f_dst-jpg_flffffff_p786x410_q75&ccb=13-1&oh=06_AapcWKJYXG7_0PgtEIgwgu5hj5addZ6zKmkZwnsQqCEm-g&oe=634C7827&_nc_sid=7ca135",
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
      " https://external.fevn11-1.fna.fbcdn.net/emg1/v/t13/9235872977555898658?url=https%3A%2F%2Fcivic.am%2Fuploads%2Fposts%2F2021-09%2F1630571197_7-watch-_-facebook-google-chrome-02_09_2021-12_25_27.png&fb_obo=1&utld=civic.am&stp=c0.5000x0.5000f_dst-jpg_flffffff_p1000x522_q75&ccb=13-1&oh=06_Aap0JQ_PH3qTTirt2gi9I_bmZfY4mUq0r4dagM4pQrxlyQ&oe=634D86F6&_nc_sid=17d95b",
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
    imgSrc:
      "https://external.fevn11-1.fna.fbcdn.net/emg1/v/t13/411964560436783726?url=https%3A%2F%2Fcivic.am%2Fuploads%2Fposts%2F2021-09%2F1631693674_l-0x54wh-1280x745z-0_6141.jpeg&fb_obo=1&utld=civic.am&stp=c0.5000x0.5000f_dst-jpg_flffffff_p1000x522_q75&ccb=13-1&oh=06_Aaq-VXGxR17U7-3NjyTO1FZsdgsPua2Zx6uD159tceL7nQ&oe=634D4C5D&_nc_sid=17d95b",
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
      "https://external.fevn11-1.fna.fbcdn.net/emg1/v/t13/8289562072107587032?url=https%3A%2F%2Fcivic.am%2Fuploads%2Fposts%2F2021-09%2F1631693590_1063177.jpg&fb_obo=1&utld=civic.am&stp=c0.5000x0.5000f_dst-jpg_flffffff_p670x349_q75&ccb=13-1&oh=06_Aao7og9tMn6qGCyp6F9lebgIGWtJuBILaDxwqL9ZkYgJwg&oe=634D9FC4&_nc_sid=17d95b",
    preview:
      "Երևան և Մարտունի քաղաքների մի շարք հասցեների գազամատակարարումը սեպտեմբերի 16-ին կդադարեցվի",
    linkTitle: "CIVIC.AM",
  },
];
export default postList;
