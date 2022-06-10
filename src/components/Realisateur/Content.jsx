const data = [
  {
    image: 'https://i.mydramalist.com/eR2KQc.jpg',
    caption: 'Yasujirō Ozu',
    presentation: `Yasujirō Ozu était un réalisateur et scénariste japonais. Il a commencé sa carrière à l'époque du cinéma muet. Ozu a d'abord réalisé un certain nombre 
    de courtes comédies, avant de se tourner vers des thèmes plus sérieux dans les années 1930.
      Le mariage et la famille, en particulier les relations entre les générations, sont des thèmes importants dans l'œuvre d'Ozu. Ses films les plus appréciés incluent 
      "Printemps tardif" (1949), "Voyage à Tokyo" (1953), "Herbes flottantes " (1959) et "Le Goût du saké" (1962).
      Sa réputation n'a cessé de croître depuis sa mort et il est largement considéré comme l'un des réalisateurs les plus influents au monde. Dans le sondage Sight & Sound 
      de 2012, "Voyage à Tokyo" a été élu meilleur film de tous les temps par les réalisateurs mondiaux.
   `,
    movie:
      "	Gosses de Tokyo, Histoire d'herbes flottantes, Voyage à Tokyo, Bonjour, Le Goût du saké",
  },
  {
    image: 'https://i.mydramalist.com/oVlmNc.jpg',
    caption: 'Akira Kurosawa',
    presentation: `Akira Kurosawa (黒澤 明) est un réalisateur, producteur, scénariste et monteur japonais, né le 23 mars 1910 à 
    Tokyo et mort le 6 septembre 1998 dans la même ville. Avec Yasujirō Ozu et Kenji Mizoguchi, il est considéré comme l'un 
    des cinéastes japonais les plus célèbres et influents de l'histoire. En cinquante-sept ans de carrière cinématographique, il a réalisé plus de trente films.`,
    movie: `	Rashōmon,
    Les Sept Samouraïs
    Barberousse
    Dersou Ouzala
    Kagemusha
    Ran`,
  },
  {
    image: 'https://i.mydramalist.com/jZj5B_5c.jpg',
    caption: 'Kenji Mizoguchi',
    presentation: `Kenji Mizoguchi (溝口 健二) est un réalisateur japonais, né le 16 mai 1898 à Tokyo et mort le 24 août 1956 à Kyoto. 
    Il est aujourd'hui considéré comme un des maîtres du cinéma japonais aux côtés d'Akira Kurosawa et de Yasujirō Ozu, mais aussi du cinéma mondial. 
    France Culture le désigne comme « le plus grand cinéaste du monde ».`,
    movie: `Conte des chrysanthèmes tardifs,
    Miss Oyu,
    La Vie d'O'Haru femme galante,
    Les Contes de la lune vague après la pluie,
    L'Intendant Sansho,
    Les Amants crucifiés,
    Le Héros sacrilège,
    La Rue de la honte`,
  },
  {
    image: 'https://i.mydramalist.com/eR7PEc.jpg',
    caption: 'Kinuyo Tanaka',
    presentation: `Kinuyo Tanaka (田中 絹代), née à Shimonoseki le 29 novembre 1909 et morte à Tokyo le 21 mars 1977, est une actrice et réalisatrice japonaise.
    Considérée comme l'une des plus grandes actrices japonaises, Kinuyo Tanaka apparaît dans plus de 250 films et sa carrière court sur un demi-siècle. 
    Elle fait ses débuts d'actrice à la Shōchiku en 1924 à l'âge de quatorze ans et devient rapidement une vedette du cinéma muet. En 1931, elle se retrouve à l'affiche de 
    "Mon amie et mon épouse" (マダムと女房, Madamu to nyōbō), le premier film parlant japonais. Elle tourne avec certains des plus grands cinéastes japonais de son temps : 
    Yasujirō Ozu, Mikio Naruse, Heinosuke Gosho, Hiroshi Shimizu ou encore Keisuke Kinoshita.`,
    movie: `Mon amie et mon épouse,
    Miss Oyu,
    La Vie d'O'Haru femme galante,
    L'Intendant Sansho,
    La Ballade de Narayama,
    Sandakan N° 8`,
  },
  {
    image: 'https://i.mydramalist.com/yN8J1c.jpg',
    caption: 'Masaki Kobayashi',
    presentation: `Masaki Kobayashi était un réalisateur japonais, surtout connu pour la trilogie épique "La Condition de l'homme" (1959-1961), le film de samouraï "Hara-kiri" (1962) et "Kwaidan" (1964).
     Kobayashi a étudié les arts orientaux anciens et la philosophie. Kobayashi s’est lancé dans une carrière cinématographique en 1941 lorsqu’il est entré aux studios 
     Shochiku en tant qu’apprenti réalisateur, mais sa carrière a été presque immédiatement interrompue lorsqu’il a été enrôlé dans l’armée et envoyé en Mandchourie. 
    Kobayashi se considérait comme un pacifiste. Sa façon de résister était de refuser la promotion à un rang supérieur à celui de soldat. Il a passé du temps comme 
    prisonnier de guerre dans un camp d’Okinawa. Après sa libération, en 1946, il retourne à Shochiku en tant qu’assistant du réalisateur Keisuke Kinoshita.
    Kobayashi était un cousin au second degré de l’actrice et réalisatrice Kinuyo Tanaka.`,
    movie: `La Condition de l'homme,
    Hara-kiri,
    Kwaïdan,
    Rébellion`,
  },
  {
    image: 'https://i.mydramalist.com/joOg8_5c.jpg',
    caption: 'Kon Ichikawa',
    presentation: `Kon Ichikawa (市川 崑), né le 20 novembre 1915, à Ise, nouveau nom de Ujiyamada dans la préfecture de Mie, et mort le 13 février 2008 dans sa ville natale, 
    est l'un des plus célèbres réalisateurs japonais.
    Il réalise plus de quatre-vingts films, du milieu des années 1940 au milieu des années 2000, et, bien que peu d'entre eux soient diffusés en Occident, 
    leur reconnaissance (nomination, parfois récompense) dans des festivals internationaux parmi les plus prisés, comme la Mostra de Venise ou le Festival de Cannes, 
    lui valent une notoriété internationale. Son style a beaucoup varié durant sa longue carrière, mais on notera qu'il privilégie souvent les objectifs grand angle et 
    le cinémascope pour restituer une esthétique visuelle proche du théâtre kabuki, et qu'il revient fréquemment à des thèmes pacifistes nuancés d'humour noir.`,
    movie: `	La Harpe de Birmanie,
    Le Pavillon d'or,
    La Vengeance d'un acteur`,
  },
  {
    image: 'https://i.mydramalist.com/qkJo8c.jpg',
    caption: 'Nagisa Ōshima',
    presentation: `Nagisa Ōshima (大島 渚), né le 31 mars 1932 à Kyoto et mort le 15 janvier 2013 à Fujisawa, est un cinéaste japonais. Plusieurs de ses films font scandale au Japon ou en Europe, par leur aspect politique 
    ("Nuit et brouillard du Japon", "Furyo") ou transgressif ("L'Empire des sens").`,
    movie: `	Contes cruels de la jeunesse,
    L'Empire des sens,
    Furyo,
    Tabou`,
  },
  {
    image: 'https://i.mydramalist.com/B1xm5_5c.jpg',
    caption: 'Takeshi Kitano',
    presentation: `Takeshi Kitano (北野 武), également connu sous le nom de scène de Beat Takeshi (ビートたけし), est un cinéaste, acteur, animateur de télévision, humoriste, 
    artiste-peintre, et écrivain, né le 18 janvier 1947 dans le quartier d'Umejima dans l'arrondissement d'Adachi à Tokyo.
    Il a reçu les louanges de la critique, tant dans son pays qu'à l'étranger, pour son travail cinématographique très singulier. 
    En dehors de son activité de réalisateur, il est connu au Japon surtout sous son pseudonyme de Beat Takeshi.
    Ses premiers films sont des polars violents et mélancoliques ou des comédies dramatiques remarqués par les critiques
     pour son esprit pince-sans-rire. Cinématographiquement, Takeshi Kitano est friand de plans-séquence où rien ne semble se passer 
     et de scènes immédiatement coupées dès que la fin de l'action est atteinte.`,
    movie: `A scene at the sea, 
    Kids Return,
    Hana-bi,
    L'été de Kikujiro`,
  },
  {
    image: 'https://i.mydramalist.com/odQLkc.jpg',
    caption: 'Kiyoshi Kurosawa',
    presentation: `Kiyoshi Kurosawa (黒沢 清) est un réalisateur et scénariste japonais, né le 19 juillet 1955 à Kōbe. Il est considéré comme l'un des artistes marquants du renouveau du cinéma japonais.
    Tout comme Hideo Nakata, Kiyoshi Kurosawa réalise des séries B mais également des longs-métrages à la portée plus universelle. En vingt ans de carrière, il a réalisé une vingtaine de films.`,
    movie: `Cure,
    Charisma,
    Ko-rei,
    Kaïro,
    Tokyo Sonata`,
  },
  {
    image: 'https://i.mydramalist.com/wEWDg_5c.jpg',
    caption: 'Sono Sion',
    presentation: `Sono Sion (園子温) est un écrivain, poète, réalisateur et scénariste japonais, né le 18 décembre 1961 à Toyokawa, dans la préfecture d'Aichi.
    Son œuvre cinématographique est principalement connu pour ses films subversifs qu'il réalise après la sortie de Suicide Club (2001). Derrière la violence extrêmes de ses films se cachent un discours 
    particulièrement acerbe sur la société capitaliste japonaise (Cold Fish, 2010), la condition de la femme au Japon (Guilty of Romance, Tag), le sectarisme ou la folie (Love Exposure, 2008). 
    Plus récemment il réalise des mini-séries, Tokyo Vampire Hotel (2017) et The Forest of Love (2019), commandées respectivement par Amazon Prime et Netflix.`,
    movie: `	Suicide Club,
    Why Don't You Play in Hell?,
    Love Exposure,
    Cold Fish,
    Guilty of Romance`,
  },
  {
    image: 'https://i.mydramalist.com/b2D0Nc.jpg',
    caption: 'Hirokazu Kore-eda',
    presentation: `Hirokazu Kore-eda (是枝 裕和), né le 6 juin 1962 à Tokyo, est un réalisateur japonais.
    Il est réputé pour son approche novatrice, non spectaculaire et quasiment documentaire du cinéma de fiction (trait commun à une série de jeunes réalisateurs japonais).
    Son cinéma, fait de chroniques familiales, évoque avec une grande douceur le deuil, le mensonge, l'abandon, la culpabilité, la difficulté d'être parents, la solidarité 
    des enfants. Par sa délicatesse, ses sentiments pudiques et ses qualités de mise en scène, Hirokazu Kore-eda est comparé à Yasujirō Ozu ou à Tchekov, bien qu'il dise lui-même se rapprocher de Mikio Naruse ou de Ken Loach.`,
    movie: `Maborosi,
    Nobody Knows,
    Still Walking,
    Tel père, tel fils,
    Une affaire de famille`,
  },
  {
    image: 'https://i.mydramalist.com/rDDWm_5c.jpg',
    caption: 'Ryūsuke Hamaguchi',
    presentation: `Hamaguchi Ryusuke est un réalisateur et scénariste japonais né dans la préfecture de Kanagawa au Japon.
    Après avoir obtenu son diplôme de l’Université de Tokyo, il a travaillé dans l’industrie cinématographique pendant quelques années avant d’entrer dans le programme d’études supérieures en cinéma de 
    l’Université des arts de Tokyo. Son film de fin d’études, "Passion", a été projeté au Festival du film de Saint-Sébastien en 2008. Son film de 317 minutes "Senses" (découpé en 5 parties en 3 films en France) a été présenté 
    pour la première fois à 
    Locarno et a été projeté et a remporté des prix dans de nombreux festivals de cinéma. "Asako I & II" a été sélectionné pour la compétition à Cannes en 2018. Il a également écrit le scénario de "Les Amants sacrifiés" de 
    Kiyoshi Kurosawa, qui a remporté le Lion d’argent à Venise en 2020.`,
    movie: `	Senses,
    Asako I & II,
    Drive My Car`,
  },
];

export default data;
