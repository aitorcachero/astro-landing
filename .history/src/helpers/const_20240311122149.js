const SECTIONS = [
  { name: 'About us', img: '/about-us-home-1.webp', url: '/about' },
  { name: 'Brands', img: '/brands-hom.webp', url: '/brands' },
  {
    name: 'Sustainability',
    img: '/sustainability_portrait.webp',
    url: '/sustainability',
  },
  { name: 'Careers', img: '/talents-home-1.webp', url: '/careers' },
  { name: 'News', img: '/news-home-4.webp', url: '/news' },
];

const PARTNERS = [
  {
    name: 'Pepe Jeans',
    img: '/pepe_jeans-1.webp',
    url: 'https://www.pepejeans.com/?utm_source=awwg_site',
  },
  {
    name: 'Hackett London',
    img: '/hackett.webp',
    url: 'https://www.hackett.com/es/home?utm_source=awwg_site',
  },
  {
    name: 'Façonnable',
    img: '/façonnable.webp',
    url: 'https://www.faconnable.com/?utm_source=awwg_site',
  },
  {
    name: 'PVH Iberia Agency',
    img: '/iberia.webp',
    url: 'https://www.pvh.com/?utm_source=awwg_site',
  },
];

const FOOTER = [
  {
    name: 'Contact us',
    url: '',
  },
  {
    name: 'Legal info',
    url: '',
  },
  {
    name: 'Cookie policy',
    url: '',
  },
  {
    name: 'Privacy policy',
    url: '',
  },
  {
    name: 'Non-financial report',
    url: '',
  },
];

const SUSTAINABILITY = [
  {
    name: 'Products',
    img: '/sustainability1.webp',
    text: 'We aim to produce high-quality, sustainable fashion by maximising our use of responsible materials as BCI and recycled fibres, while minimising the use of water and hazardous chemicals. We have incorporated innovative technologies into our production process including, N22 and Eco one® and Wiser Wash Denim, as well supporting animal welfare through the use of responsible wool and leather products.',
  },
  {
    name: 'People',
    img: '/people1-2.webp',
    text: 'In order to create a positive work culture that allows our employees to thrive, we are dedicated to fostering diversity and inclusion through specific training and initiatives.',
  },
  {
    name: 'Partners',
    img: '/partners4-1.webp',
    text: 'We ensure that our relationships with partners are built on mutual trust and respect, by working on ethical and transparent sourcing as part of our supply chain commitment within the textile industry.',
  },
  {
    name: 'Places',
    img: '/places2.webp',
    text: 'We aim to minimize our environmental impact by extending the use of renewable energy in all of our owned & operated offices, warehouses and stores, as well as introducing sustainable packaging.',
  },
];

const NEWS = [
  {
    title:
      'AWWG achieves the Great Place to Work certification in nine countries',
    date: '15th November 2023',
    text: 'The global fashion group AWWG has been recognised as a Great Place to Work (GPTW) by obtaining the prestigious certification that highlights companies that meet certain standards or minimum criteria to be recognised as a great place to work. In this…',
    img: '/news1.webp',
    url: 'https://awwg.com/2023/11/awwg-achieves-the-great-place-to-work-certification-in-nine-countries/',
  },
  {
    title:
      'Pepe Jeans London: 50 years of style and fashion denim unveiled at London Fashion Week',
    date: '19th September 2023',
    text: '“The celebration encompassed a retrospective showcasing the iconic advertising of the British brand, captivating art installations by denim artist Ian Berry, and a refined seated dinner.” Pepe Jeans London, one of the brands of the global fashion group AWWG, has been…',
    img: '/news2.webp',
    url: 'https://awwg.com/2023/09/pepe-jeans-london-50-years-of-style-and-fashion-denim-unveiled-at-london-fashion-week/',
  },
  {
    title:
      'AWWG launches the Hackett London AW23 campaign, featuring Jenson Button and Matthew Goode in the highlands of Scotland',
    date: '14th September 2023',
    text: 'Hackett London,one of the brands of the global fashion group AWWG, embarks on an extraordinary journey through time and nature with the Autumn-Winter 2023 brand campaign, a harmonious fusion that blends traditional tailoring with a contemporary British twist. Prepare to be…',
    img: '/news3.webp',
    url: 'https://awwg.com/2023/09/awwg-launches-the-hackett-london-aw23-campaign-featuring-jenson-button-and-matthew-goode-in-the-highlands-of-scotland/',
  },
  {
    title:
      'AWWG announces the launch of Pepe Jeans London’s AW23 brand campaigns: “W11 LOVE FROM LONDON” featuring british model Lila Moss and “LONDON AFTER HOURS”embodied by internationally acclaimed singer-songwriter Rita Ora',
    date: '5th September 2023',
    text: 'Pepe Jeans London, one of the brands of the global fashion group AWWG, celebrates its 50th anniversary under the seasonal story “I LOVE LONDON”, the original London born denim lifestyle brand presents captivating collaborations with two London style icons that pay…',
    img: '/news4.webp',
    url: 'https://awwg.com/2023/09/awwg-announces-the-launch-of-pepe-jeans-londons-aw23-brand-campaigns-w11-love-from-london-featuring-british-model-lila-moss-and-london-after-hoursembodied/',
  },
  {
    title: 'AWWG joins the Spanish Retail Textile Association, ARTE',
    date: '25th July 2023',
    text: 'AWWG announces its incorporation into ARTE, the Spanish Retail Textile Association, which represents the main textile brands in Spain and defends the common interests of the textile trade sector before public and private institutions in Spain. (more…)',
    img: '/news5.webp',
    url: 'https://awwg.com/2023/07/awwg-joins-the-spanish-retail-textile-association-arte/',
  },
  {
    title:
      'AWWG announces the launch of Pepe Jeans London’s SS23 menswear and womenswear campaigns shot in Marrakech',
    date: '23rd March 2023',
    text: 'The SS23 campaign is shot in one of Morocco’s most emblematic cities, Marrakech. The collection is inspired by a colour palette comprised of natural shades that blend into the landscape and includes fabrics made to withstand the heat.  Pepe Jeans London,…',
    img: '/news6.webp',
    url: 'https://awwg.com/2023/03/awwg-announces-the-launch-of-pepe-jeans-londons-ss23-menswear-and-womenswear-campaigns-shot-in-marrakech/',
  },
  {
    title:
      'AWWG announces the launch of Hackett London’s SS23 campaign featuring Jenson Button on Safari',
    date: '21st March 2023',
    text: '“AWWG brand Hackett London unveils its Spring-Summer 2023 campaign, which features Formula 1 world champion, Jenson Button.” Hackett London, one of the brands of the global fashion group AWWG, proudly announces the launch of its Spring-Summer 2023 campaign, a continued collaboration with…',
    img: '/news7.webp',
    url: 'https://awwg.com/2023/03/awwg-announces-the-launch-of-hackett-londons-ss23-campaign-featuring-jenson-button-on-safari/',
  },
  {
    title:
      'AWWG signs a collaboration agreement with ISEM Fashion Business School',
    date: '16th January 2023',
    text: 'The global fashion group AWWG cements its commitment to train future generations by signing a collaboration agreement with ISEM Fashion Business School, the first business school specialising exclusively in fashion companies in Spain. Marcella Wartenbergh, Chief Executive Officer (CEO) of AWWG,…',
    img: '/news8.webp',
    url: 'https://awwg.com/2023/01/awwg-signs-a-collaboration-agreement-with-isem-fashion-business-school/',
  },
  {
    title:
      'AWWG launches the Hackett London’s new perfume line featuring Jenson Button',
    date: '29th September 2022',
    text: '“AWWG brand Hackett London and Tailored Perfumes proudly announces the launch of its first international perfume line featuring Jenson Button.” (more…)',
    img: '/news9.webp',
    url: 'https://awwg.com/2022/09/awwg-launches-the-hackett-londons-new-perfume-line-featuring-jenson-button/',
  },
  {
    title:
      'AWWG announces the launch of Hackett London’s AW22 campaign featuring Jenson Button and reveals its new logo',
    date: '28th September 2022',
    text: '“AWWG brand Hackett London unveils its Autumn-Winter 2022 campaign which features Formula 1 world champion, Jenson Button and reveals its new logo.” (more…)',
    img: '/news10.webp',
    url: 'https://awwg.com/2022/09/awwg-announces-the-launch-of-hackett-londons-aw22-campaign-featuring-jenson-button-and-reveals-its-new-logo/',
  },
];

const BRANDS = [
  {
    imgBrand: '/pepe-jeans-2.webp',
    text: [
      'Pepe Jeans London has been at the forefront of internation denim-led fashion for the past 50 years, being able to create an internationally recognized brand with a unique strategy and reputation. This has been possible thanks not only to the great Pepe Jeans team but also to the commitment to create the best possible collections and the most exciting retail environments while remaining sincere to the brand’s DNA and in particular the roots in London’s Portobello Road. Pepe Jeans London has also collaborated with the most iconic celebrities such as Kate Moss, Sienna Miller, Alexa Chung, Cara Delevingne, Georgia Jagger or Dua Lipa, in the hottest multimedia marketing campaigns.',
    ],
    banner: [
      {
        img: '/brands-pepe-jeans.webp',
        url: 'https://www.pepejeans.com/?utm_source=awwg_site',
      },
    ],
  },
  {
    imgBrand: '/hackett-london.webp',
    text: [
      'It all started in 1983 when Jeremy Hackett opened his first store selling second-hand clothes on the King’s Road, Chelsea. It was here that he began then creating his own garments, by merging traditional styles with modern cuts, perfect for those seeking the Savile Row style but brought to today: craftsmanship combined with a unique British twist. Hackett has achived that by focusing on its personality, which is what makes it truly unique. Hackett is defined by its excellence and craftsmanship and has its mind set on leaving a mark. Today, Hackett boasts collaborations with like-minded partners such as Aston Martin, Henley Royal Regatta and British Army Polo.',
    ],
    banner: [
      {
        img: '/hackett-brands.webp',
        url: 'https://www.hackett.com/es/home?utm_source=awwg_site',
      },
    ],
  },
  {
    imgBrand: '/façonnable-logo-brands.webp',
    text: [
      'The French men’s prêt à porter brand first set up shop in 1950, on the Côte d’Azur.',
      'Its unique collection of bright, colourful garments, in a range of smart-casual styles, is still made in Nice to this day. The brand is inspired by the typical lifestyle of this region nestled between the Mediterranean and Nice’s hinterland. It immortalises the values that have been passed down through the years while adding its own modern touch.',
      'It offers a complete male wardrobe featuring quality materials and immaculate details that lend its garments a tailored, nautical, sporty air.',
    ],
    banner: [
      {
        img: '/façonnable-brands.webp',
        url: 'https://www.faconnable.com/?utm_source=awwg_site',
      },
    ],
  },
  {
    imgBrand: '/pvh-logo-brands.webp',
    text: [
      'Tommy Hilfiger is one of the world’s leading designer lifestyle brands and is internationally recognized for celebrating the essence of classic American cool style, featuring preppy with a twist designs. In 1993 Tommy Hilfiger arrives to Europe, settling in Spain with the help of AWWG.',
      'Calvin Klein is a global lifestyle brand that exemplifies bold, progressive ideals and a seductive, and often minimal, aesthetic. We seek to thrill and inspire our audience while using provocative imagery and striking designs to ignite the senses. In 2013 an agreement was reached with PVH to distribute Calvin Klein in Spain and Portugal.',
    ],
    banner: [
      {
        img: '/tommy-brands.webp',
        url: 'https://es.tommy.com/?utm_source=awwg_site',
      },
      {
        img: '/ck-brands.webp',
        url: 'https://www.calvinklein.es/?utm_source=awwg_site',
      },
    ],
  },
];

const DIVISIONS = [
  {
    title: 'Office careers',
    img: '/careers1.webp',
    url: 'https://awwg.com/careers/office-careers/',
  },
  {
    title: 'Retail careers',
    img: '/careers2.webp',
    url: 'https://awwg.com/careers/retail-careers/',
  },
  {
    title: 'Intership & graduate program',
    img: '/careers3.webp',
    url: 'https://awwg.com/careers/internship-and-graduate-program/',
  },
];

const VALUES = [
  {
    title: 'OwnerShip',
    text: 'We are leaders.',
    bgColor: '#2E5172',
    img: '/bgouwnership.jpg',
  },
  {
    title: 'Passion',
    text: 'We achieve our dreams.',
    bgColor: '#385E80',
    img: '/bgpassion.jpg',
  },
  {
    title: 'Adaptability',
    text: 'We embrace change.',
    bgColor: '#2E5172',
    img: '/bgadaptability.jpg',
  },
  {
    title: 'Collaboration',
    text: 'We evolve together.',
    bgColor: '#2E5172',
    img: '/bgcollaboration.jpg',
  },
  {
    title: 'Invention',
    text: 'We defy the limits.',
    bgColor: '#385E80',
    img: '/bginvention.jpg',
  },
  {
    title: 'Inclusivity',
    text: 'We embrace everyone.',
    bgColor: '#2E5172',
    img: '/bginclusivity.jpg',
  },
];

const EXECUTIVE_TEAM = [
  {
    name: 'Marcella Wartenbergh',
    position: 'Chief Executive Officer',
    url: 'https://awwg.com/about-us/marcella-wartenbergh/',
    img: '/Marcella_Wartenbergh.webp',
  },
  {
    name: 'Laura Fernández Plaza',
    position: 'Chief Financial & Business Officer',
    url: 'https://awwg.com/about-us/laura-fernandez-plaza',
    img: '/Laura_Fernandez_Plaza.webp',
  },
  {
    name: 'Juanjo Sotomayor',
    position: 'Chief Commercial Officer',
    url: 'https://awwg.com/about-us/juanjo-sotomayor/',
    img: '/Juanjo_Sotomayor.webp',
  },
  {
    name: 'Mark Blenkinsop',
    position: 'Chief Marketing Officer',
    url: 'https://awwg.com/about-us/mark-blenkinsop/',
    img: '/Mark_Blenkinsop.webp',
  },
  {
    name: 'Iván Vender',
    position: 'Chief Operations Officer',
    url: 'https://awwg.com/about-us/ivan-vender',
    img: '/Ivan_Vender.webp',
  },
  {
    name: 'Paola Maestro',
    position: 'Chief Product Officer Pepe Jeans',
    url: 'https://awwg.com/about-us/paola-maestro/',
    img: '/Paola_Maestro.webp',
  },
  {
    name: 'Carlos del Río Cortázar',
    position: 'Chief Human Resources Officer',
    url: 'https://awwg.com/about-us/carlos-del-rio-cortazar/',
    img: '/Carlos_Cortazar.webp',
  },
  {
    name: 'Armand Griesdoorn',
    position: 'Vice President of Merchandising & Planning',
    url: 'https://awwg.cmasa.es/about-us/armand-griesdoorn/',
    img: '/Armand_Griesdoorn.webp',
  },
  {
    name: 'Dan Slater',
    position: 'Vice President of Retail, Hackett',
    url: 'https://awwg.com/about-us/dan-slater/',
    img: '/Dan_Slater.webp',
  },
  {
    name: 'Giani Colarossi',
    position: 'Vice President of Product, Hackett',
    url: 'https://awwg.com/about-us/gianni-colarossi/',
    img: '/Gianni_Colarossi.webp',
  },
  {
    name: 'Johan Vercammen',
    position: 'Vice President of Retail, Pepe Jeans',
    url: 'https://awwg.com/about-us/johan-vercammen/',
    img: '/Johan_Vercammen.webp',
  },
];

const HISTORY = [
  {
    date: '1989',
    img: '/pepe-jeans-2.webp',
    text: 'The iconic brand Pepe Jeans London, starts its distribution in Spain and Portugal.',
    founded: 'Founded in 1973',
  },
  {
    date: '1998',
    img: '/tommy_logo.webp',
    text: 'The distribution of Tommy Hilfiger in Spain and Portugal is incorporated to the group.',
    founded: 'Founded in 1985',
  },
  {
    date: '2002',
    img: '/pepe-jeans-2.webp',
    text: 'The global Pepe Jeans brand was acquired and the HQ were located in Barcelona and Madrid.',
    founded: 'Founded in 1973',
  },
  {
    date: '2006',
    img: '/hackett-london.webp',
    text: 'The Hackett Global brand, with offices in London, was acquired.',
    founded: 'Founded in 1983',
  },
  {
    date: '2013',
    img: '/ck_logo.webp',
    text: 'The group reaches an agreement with PVH, to become the official distributor of Calvin Klein in Spain and Portugal.',
    founded: 'Founded in 1968',
  },
  {
    date: '2016',
    img: '/façonnable-logo-brands.webp',
    text: 'Façonnable, with offices in Nice, was acquired by the Group.',
    founded: 'Founded in 1950',
  },
  {
    date: '2020',
    img: '/awwg.svg',
    text: 'To unify all the brands and teams the name of the Group was changed to AWWG.',
    founded: '',
  },
];

const COUNTER_DATA = [
  {
    num: 4500,
    text: 'Employees worldwide',
  },
  {
    num: 66,
    text: 'Nationalities',
  },
  {
    num: 500,
    text: 'Brand stores',
  },
  {
    num: 5000,
    text: 'Points os sale',
  },
];

export {
  SECTIONS,
  PARTNERS,
  FOOTER,
  SUSTAINABILITY,
  NEWS,
  BRANDS,
  DIVISIONS,
  VALUES,
  EXECUTIVE_TEAM,
  HISTORY,
  COUNTER_DATA,
};
