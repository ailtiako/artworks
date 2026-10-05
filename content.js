/* ============================================================
   RESOURCE FILE — all copy for the site lives in this object.
   Edit text here only; markup and logic below never contain copy.
   Titles, dimensions and descriptions below are placeholders —
   replace with the real details for each painting.
   ============================================================ */
   const CONTENT = {
    artist: {
      name: "Natalia Maltsev",
      tagline: "Paintings in oil",
      galleryIntro: "Recent paintings, arranged by subject. Choose a group to see the work it contains.",
      bioParagraphs: [
        "bio TODO"
      ],
      footer: "© Natalia Maltsev. All works shown remain the property of the artist unless noted as sold.",
      contactLead: "For studio visits, commission enquiries or exhibition proposals, get in touch directly — replies usually take a few days."
    },
  
    detailLabels: {
      main: "Full work",
      detail1: "Detail",
      detail2: "Detail"
    },
  
    categories: [
      { id: "landscape", label: "Landscape", blurb: "TODO" },
      { id: "portrait", label: "Portrait", blurb: "TODO" },
      { id: "stilllife", label: "Still Life", blurb: "TODO" },
      { id: "flowers", label: "Flowers", blurb: "TODO" }
    ],
  
    education: [
      { year: "1998", what: "MFA, Painting", where: "Repin Institute of Arts (Russian Academy of Arts), St Petersburg, Russia" }
    ],
  
    exhibitions: {
      solo: [
        { year: "2014", what: "", where: "Botanic Garden of Peter The Great, St Petersburg, Russia" },
        { year: "2013", what: "", where: "Botanic Garden of Peter The Great, St Petersburg, Russia" },
        { year: "2012", what: "", where: " Brodsky museum, St Petersburg, Russia" },
        { year: "2009", what: "", where: "'Art Object' gallery, St Petersburg, Russia" },
        { year: "2004", what: "", where: "Journalist House, St Petersburg, Russia" }
      ],
      group: [
        { year: "2007", what: "", where: "'Belgravia' gallery, London, UK" },
        { year: "2006", what: "", where: "'Belgravia' gallery, London, UK" },
        { year: "2006", what: "", where: "'Tidakov & Svetlana Volkov' gallery, Munich, Germany" },
        { year: "2002", what: "Mexico - Russia, Watercolour", where: "Exhibition Center 'Manezh', St Petersburg, Russia" }
      ]
    },
   
    contact: [
      { label: "Email", value: "todo", href: "todo" },
      { label: "Instagram", value: "todo", href: "todo" },
      { label: "Studio", value: "St Petersburg — visits by appointment" }
    ],
  
    artworks: [
      {
        id: "pg1", title: "Pine Grove, Late Afternoon", series: "", year: "2024", category: "landscape",
        medium: "Oil on canvas", dimensions: "Dimensions on request", status: "Available",
        description: "Painted on site beneath a stand of pines, working quickly to catch the particular pattern of shadow the low sun threw across the grass.",
        images: [
          { key: "img_0676_main", label: "main" },
          { key: "img_0676_detail1", label: "detail1" }
        ]
      },
      {
        id: "pg2", title: "Park Avenue, Midsummer", series: "", year: "2024", category: "landscape",
        medium: "Oil on canvas", dimensions: "Dimensions on request", status: "Available",
        description: "A view along a shaded park path, with a summer gathering visible in the clearing beyond. The figures are kept loose, secondary to the light falling through the canopy.",
        images: [
          { key: "img_0677_main", label: "main" },
          { key: "img_0677_detail1", label: "detail1" }
        ]
      },
      {
        id: "pg3", title: "TBD", series: "", year: "TODO", category: "landscape",
        medium: "Oil on canvas", dimensions: "Dimensions on request", status: "Available",
        description: "TODO",
        images: [
          { key: "img_0705_main", label: "" }
        ]
      },
      {
        id: "pg4", title: "TBD", series: "", year: "TODO", category: "landscape",
        medium: "Oil on canvas", dimensions: "Dimensions on request", status: "Available",
        description: "TODO",
        images: [
          { key: "img_0711_main", label: "" }
        ]
      },
      {
        id: "pg5", title: "TBD", series: "", year: "TODO", category: "landscape",
        medium: "Oil on canvas", dimensions: "Dimensions on request", status: "Available",
        description: "TODO",
        images: [
          { key: "img_0717_main", label: "" }
        ]
      },
      {
        id: "pg6", title: "TBD", series: "", year: "TODO", category: "landscape",
        medium: "Oil on canvas", dimensions: "Dimensions on request", status: "Available",
        description: "TODO",
        images: [
          { key: "img_0829_main", label: "" }
        ]
      },
      {
        id: "pg7", title: "TBD", series: "", year: "TODO", category: "landscape",
        medium: "Oil on canvas", dimensions: "Dimensions on request", status: "Available",
        description: "TODO",
        images: [
          { key: "img_0836_main", label: "" }
        ]
      },
      {
        id: "pg8", title: "TBD", series: "", year: "TODO", category: "landscape",
        medium: "Oil on canvas", dimensions: "Dimensions on request", status: "Available",
        description: "TODO",
        images: [
          { key: "img_0847_main", label: "" }
        ]
      },
      {
        id: "prt1", title: "Girl in a Ruffled Collar", series: "", year: "2023", category: "portrait",
        medium: "Oil on canvas", dimensions: "Dimensions on request", status: "Available",
        description: "A studio portrait built up over several sittings, with particular care given to the curl of the hair and the quiet, direct gaze of the sitter.",
        images: [
          { key: "img_1390_main", label: "main" },
          { key: "img_1390_detail1", label: "detail1" },
          { key: "img_1390_detail2", label: "detail2" }
        ]
      },
      {
        id: "prt2", title: "Slavka", series: "", year: "1989", category: "portrait",
        medium: "Oil on canvas", dimensions: "Dimensions on request", status: "Private Collection",
        description: "",
        images: [
          { key: "img_1395_main", label: "main" },
          { key: "img_1395_detail1", label: "detail1" },
          { key: "img_1395_detail2", label: "detail2" }
        ]
      },
      {
        id: "prt3", title: "TBD", series: "", year: "90x", category: "portrait",
        medium: "Oil on canvas", dimensions: "Dimensions on request", status: "Private Collection",
        description: "",
        images: [
          { key: "img_0839_main", label: "" }        ]
      },
      {
        id: "prt4", title: "TBD", series: "", year: "90x", category: "portrait",
        medium: "Oil on canvas", dimensions: "Dimensions on request", status: "Private Collection",
        description: "",
        images: [
          { key: "img_1367_main", label: "" }        ]
      },
      {
        id: "prt5", title: "TBD", series: "", year: "90x", category: "portrait",
        medium: "Oil on canvas", dimensions: "Dimensions on request", status: "Private Collection",
        description: "",
        images: [
          { key: "img_1023_main", label: "" }        ]
      },
      {
        id: "prt6", title: "TBD", series: "", year: "90x", category: "portrait",
        medium: "Oil on canvas", dimensions: "Dimensions on request", status: "Private Collection",
        description: "",
        images: [
          { key: "img_1448_main", label: "" }        ]
      },
      {
        id: "img_0828", title: "TBD", series: "", year: "todo", category: "stilllife",
        medium: "Oil on canvas", dimensions: "Dimensions on request", status: "Private Collection",
        description: "",
        images: [
          { key: "img_0828_main", label: "" }        ]
      },
      {
        id: "img_1104", title: "TBD", series: "", year: "todo", category: "stilllife",
        medium: "Oil on canvas", dimensions: "Dimensions on request", status: "Private Collection",
        description: "",
        images: [
          { key: "img_1104_main", label: "" }        ]
      },
      {
        id: "img_1358", title: "TBD", series: "", year: "todo", category: "stilllife",
        medium: "Oil on canvas", dimensions: "Dimensions on request", status: "Private Collection",
        description: "",
        images: [
          { key: "img_1358_main", label: "" }        ]
      },
      {
        id: "img_1361", title: "TBD", series: "", year: "todo", category: "stilllife",
        medium: "Oil on canvas", dimensions: "Dimensions on request", status: "Private Collection",
        description: "",
        images: [
          { key: "img_1361_main", label: "" }        ]
      },
      {
        id: "img_0826", title: "TBD", series: "", year: "todo", category: "flowers",
        medium: "Oil on canvas", dimensions: "Dimensions on request", status: "Private Collection",
        description: "",
        images: [
          { key: "img_0826_main", label: "" }        ]
      },
      {
        id: "img_1109", title: "TBD", series: "", year: "todo", category: "flowers",
        medium: "Oil on canvas", dimensions: "Dimensions on request", status: "Private Collection",
        description: "",
        images: [
          { key: "img_1109_main", label: "" }        ]
      },
      {
        id: "img_1215", title: "TBD", series: "", year: "todo", category: "flowers",
        medium: "Oil on canvas", dimensions: "Dimensions on request", status: "Private Collection",
        description: "",
        images: [
          { key: "img_1215_main", label: "" }        ]
      }
   ]
  };
  /* ============================================================
     End of resource file.
     =============================================
*/