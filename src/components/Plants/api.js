const plantsData = [
    {
      "nombre": "Aloe Vera",
      "frecuenciaRiego": 72,
      "descripcion": "Planta suculenta conocida por sus propiedades medicinales.",
      "recomendaciones": "Luz solar indirecta y suelo bien drenado."
    },
    {
      "nombre": "Sansevieria (Lengua de Suegra)",
      "frecuenciaRiego": 168,
      "descripcion": "Planta resistente con hojas largas y puntiagudas.",
      "recomendaciones": "Poca agua, tolera luz baja."
    },
    {
      "nombre": "Ficus Benjamina",
      "frecuenciaRiego": 48,
      "descripcion": "Árbol de interior popular con hojas brillantes.",
      "recomendaciones": "Alto nivel de luz, evitar corrientes de aire."
    },
    {
      "nombre": "Helecho de Boston",
      "frecuenciaRiego": 24,
      "descripcion": "Planta frondosa con hojas plumosas.",
      "recomendaciones": "Alta humedad y luz indirecta."
    },
    {
      "nombre": "Monstera Deliciosa",
      "frecuenciaRiego": 72,
      "descripcion": "Planta tropical con hojas grandes y perforadas.",
      "recomendaciones": "Luz indirecta y alta humedad."
    },
    {
        "nombre": "Potos (Epipremnum aureum)",
        "frecuenciaRiego": 72,
        "descripcion": "Enredadera con hojas en forma de corazón, muy adaptable.",
        "recomendaciones": "Luz indirecta, suelo húmedo."
      },
      {
        "nombre": "Palma Areca",
        "frecuenciaRiego": 48,
        "descripcion": "Palmera elegante con hojas plumosas.",
        "recomendaciones": "Buena luz, evitar el exceso de agua."
      },
      {
        "nombre": "Cactus",
        "frecuenciaRiego": 336,
        "descripcion": "Variedad de especies suculentas con espinas.",
        "recomendaciones": "Mucho sol, riego escaso."
      },
      {
        "nombre": "Hiedra Inglesa",
        "frecuenciaRiego": 48,
        "descripcion": "Planta trepadora con hojas verdes brillantes.",
        "recomendaciones": "Luz moderada, mantener el suelo uniformemente húmedo."
      },
      {
        "nombre": "Planta Araña",
        "frecuenciaRiego": 72,
        "descripcion": "Planta con hojas largas y delgadas que caen en cascada.",
        "recomendaciones": "Luz indirecta, riego moderado."
      },
      {
        "nombre": "Philodendron",
        "frecuenciaRiego": 72,
        "descripcion": "Planta con grandes hojas verdes, fácil de cuidar.",
        "recomendaciones": "Luz indirecta, suelo húmedo pero no empapado."
      },
      {
        "nombre": "Zamioculcas",
        "frecuenciaRiego": 168,
        "descripcion": "Planta resistente con hojas brillantes y gruesas.",
        "recomendaciones": "Poca luz, riego esporádico."
      },
      {
        "nombre": "Bambú de la Suerte",
        "frecuenciaRiego": 168,
        "descripcion": "Tallos verdes que crecen en espiral o rectos.",
        "recomendaciones": "Poca luz, mantener el agua fresca."
      },
      {
        "nombre": "Begonia",
        "frecuenciaRiego": 72,
        "descripcion": "Planta con flores vistosas y hojas ornamentales.",
        "recomendaciones": "Luz indirecta, evitar agua en las hojas."
      },
      {
        "nombre": "Calathea",
        "frecuenciaRiego": 48,
        "descripcion": "Planta con hojas grandes y patrones llamativos.",
        "recomendaciones": "Alta humedad, evitar luz solar directa."
      },
      {
        "nombre": "Peperomia",
        "frecuenciaRiego": 168,
        "descripcion": "Pequeña planta ornamental con hojas gruesas.",
        "recomendaciones": "Luz media, suelo bien drenado."
      },
      {
        "nombre": "Croton",
        "frecuenciaRiego": 72,
        "descripcion": "Planta con hojas de colores brillantes.",
        "recomendaciones": "Luz brillante, mantener el suelo húmedo."
      },
      {
        "nombre": "Anthurium",
        "frecuenciaRiego": 96,
        "descripcion": "Planta tropical con flores en forma de corazón.",
        "recomendaciones": "Luz brillante indirecta, alta humedad."
      },
      {
        "nombre": "Dracaena",
        "frecuenciaRiego": 120,
        "descripcion": "Planta de interior alta con hojas delgadas y largas.",
        "recomendaciones": "Poca luz, suelo ligeramente húmedo."
      },
      {
        "nombre": "Maranta (Planta de la Oración)",
        "frecuenciaRiego": 48,
        "descripcion": "Planta conocida por sus hojas que se pliegan por la noche.",
        "recomendaciones": "Luz indirecta, alta humedad."
      },
      {
        "nombre": "Aspidistra (Planta de Hierro)",
        "frecuenciaRiego": 168,
        "descripcion": "Planta robusta con hojas grandes y verdes.",
        "recomendaciones": "Poca luz, suelo seco."
      },
      {
        "nombre": "Ficus Lyrata (Árbol de Hoja de Violín)",
        "frecuenciaRiego": 120,
        "descripcion": "Árbol de interior con hojas grandes en forma de violín.",
        "recomendaciones": "Luz brillante indirecta, no tolera el exceso de riego."
      },
      {
        "nombre": "Schefflera (Árbol Paraguas)",
        "frecuenciaRiego": 120,
        "descripcion": "Planta con hojas que crecen en un patrón radial.",
        "recomendaciones": "Luz indirecta, dejar secar el suelo entre riegos."
      },
      {
        "nombre": "Haworthia",
        "frecuenciaRiego": 240,
        "descripcion": "Suculenta pequeña con hojas verdes y texturizadas.",
        "recomendaciones": "Luz indirecta, riego escaso."
      },
      {
        "nombre": "Crisantemo",
        "frecuenciaRiego": 48,
        "descripcion": "Planta con flores coloridas y vistosas.",
        "recomendaciones": "Luz brillante, mantener el suelo constantemente húmedo."
      },
      {
        "nombre": "Codiaeum (Croton)",
        "frecuenciaRiego": 72,
        "descripcion": "Planta de hoja perenne con hojas multicolores.",
        "recomendaciones": "Luz brillante, humedad alta."
      },
      {
        "nombre": "Fittonia",
        "frecuenciaRiego": 48,
        "descripcion": "Planta pequeña con hojas nervadas de colores vivos.",
        "recomendaciones": "Luz indirecta, alta humedad."
      },
      {
        "nombre": "Planta de Serpiente (Sansevieria Trifasciata)",
        "frecuenciaRiego": 240,
        "descripcion": "Planta resistente con hojas largas y puntiagudas.",
        "recomendaciones": "Poca luz, riego esporádico."
      },
      {
        "nombre": "Pilea Peperomioides",
        "frecuenciaRiego": 72,
        "descripcion": "Planta conocida por sus hojas redondas y verdes.",
        "recomendaciones": "Luz indirecta brillante, dejar secar entre riegos."
      },
      {
        "nombre": "Spathiphyllum (Lirio de la Paz)",
        "frecuenciaRiego": 72,
        "descripcion": "Planta con flores blancas y hojas largas y verdes.",
        "recomendaciones": "Luz indirecta, alta humedad."
      },
      {
        "nombre": "Tradescantia (Amor de Hombre)",
        "frecuenciaRiego": 48,
        "descripcion": "Planta de rápido crecimiento con hojas variegadas.",
        "recomendaciones": "Luz indirecta, mantener húmedo."
      },
      {
        "nombre": "Ceropegia (Cadena de Corazones)",
        "frecuenciaRiego": 168,
        "descripcion": "Planta suculenta colgante con pequeñas hojas en forma de corazón.",
        "recomendaciones": "Luz brillante, riego moderado."
      },
      {
        "nombre": "Oxalis (Trébol Púrpura)",
        "frecuenciaRiego": 72,
        "descripcion": "Planta con hojas en forma de trébol y color púrpura.",
        "recomendaciones": "Luz indirecta, suelo húmedo."
      },
      {
        "nombre": "Rosa",
        "frecuenciaRiego": 48,
        "descripcion": "Flor clásica con fragancia distintiva y variedad de colores.",
        "recomendaciones": "Sol pleno, suelo bien drenado, poda regular."
      },
      {
        "nombre": "Girasol",
        "frecuenciaRiego": 24,
        "descripcion": "Flor grande y brillante que sigue al sol.",
        "recomendaciones": "Sol directo, suelo nutritivo, apoyo para tallos largos."
      },
      {
        "nombre": "Tulipán",
        "frecuenciaRiego": 72,
        "descripcion": "Flor bulbosa con una amplia gama de colores.",
        "recomendaciones": "Sol parcial, evitar el agua estancada, buen drenaje."
      },
      {
        "nombre": "Dalia",
        "frecuenciaRiego": 48,
        "descripcion": "Flores vistosas con patrones y colores variados.",
        "recomendaciones": "Sol pleno, suelo rico y bien drenado, protección contra el viento."
      },
      {
        "nombre": "Clavel",
        "frecuenciaRiego": 48,
        "descripcion": "Flores populares por su longevidad y variedad de colores.",
        "recomendaciones": "Sol pleno a parcial, suelo fértil y bien drenado."
      },
      {
        "nombre": "Lirio",
        "frecuenciaRiego": 72,
        "descripcion": "Flor elegante con fragancia dulce y flores grandes.",
        "recomendaciones": "Sol pleno a parcial, suelo bien drenado, evitar el riego excesivo."
      },
      {
        "nombre": "Peonía",
        "frecuenciaRiego": 72,
        "descripcion": "Flores grandes y fragantes, disponibles en varios colores.",
        "recomendaciones": "Sol pleno, suelo rico y bien drenado, poda en otoño."
      },
      {
        "nombre": "Azalea",
        "frecuenciaRiego": 48,
        "descripcion": "Arbusto con flores vistosas, ideal para jardines sombríos.",
        "recomendaciones": "Sombra parcial, suelo ácido y húmedo, evitar el sol directo."
      },
      {
        "nombre": "Margarita",
        "frecuenciaRiego": 48,
        "descripcion": "Flor simple y alegre con un centro oscuro y pétalos blancos.",
        "recomendaciones": "Sol pleno a parcial, suelo bien drenado, resistente a la sequía."
      },
      {
        "nombre": "Camelia",
        "frecuenciaRiego": 72,
        "descripcion": "Arbusto de floración invernal con flores grandes y brillantes.",
        "recomendaciones": "Sombra parcial, proteger del sol intenso, suelo ácido y húmedo."
      },
      {
        "nombre": "Petunia",
        "frecuenciaRiego": 48,
        "descripcion": "Flor popular para canteros y contenedores con una amplia gama de colores.",
        "recomendaciones": "Sol pleno, suelo bien drenado, poda para fomentar más flores."
      },
      {
        "nombre": "Hortensia",
        "frecuenciaRiego": 48,
        "descripcion": "Arbusto con grandes flores en forma de bola, colores varían según la acidez del suelo.",
        "recomendaciones": "Sombra parcial, suelo húmedo y rico, proteger de temperaturas extremas."
      },
      {
        "nombre": "Geranio",
        "frecuenciaRiego": 72,
        "descripcion": "Planta de floración prolongada, ideal para balcones y ventanas.",
        "recomendaciones": "Sol pleno a parcial, evitar encharcamiento, poda regular."
      },
      {
        "nombre": "Iris",
        "frecuenciaRiego": 48,
        "descripcion": "Flor elegante con una variedad de colores y patrones.",
        "recomendaciones": "Sol pleno a parcial, suelo bien drenado, dividir los rizomas cada pocos años."
      },
      {
        "nombre": "Viola",
        "frecuenciaRiego": 48,
        "descripcion": "Pequeñas flores en una variedad de colores vivos.",
        "recomendaciones": "Sol pleno a sombra parcial, suelo rico y húmedo, poda para prolongar la floración."
      },
      {
        "nombre": "Begonia",
        "frecuenciaRiego": 72,
        "descripcion": "Planta con flores coloridas y hojas ornamentales.",
        "recomendaciones": "Luz indirecta, evitar agua en las hojas, suelo bien drenado."
      },
      {
        "nombre": "Narciso",
        "frecuenciaRiego": 72,
        "descripcion": "Bulbo de primavera con flores amarillas o blancas en forma de trompeta.",
        "recomendaciones": "Sol pleno a parcial, suelo bien drenado, plantar bulbos en otoño."
      },
      {
        "nombre": "Amapola",
        "frecuenciaRiego": 72,
        "descripcion": "Flor silvestre con pétalos delicados y un centro oscuro.",
        "recomendaciones": "Sol pleno, suelo pobre y bien drenado, sembrar directamente en el jardín."
      },
      {
        "nombre": "Magnolia",
        "frecuenciaRiego": 72,
        "descripcion": "Árbol o arbusto con grandes y fragantes flores blancas o rosadas.",
        "recomendaciones": "Sol pleno a parcial, suelo rico y húmedo, evitar mover una vez plantada."
      },
      {
        "nombre": "Zinnia",
        "frecuenciaRiego": 48,
        "descripcion": "Flor de fácil cuidado con flores brillantes y multicolores.",
        "recomendaciones": "Sol pleno, suelo bien drenado, eliminar flores marchitas para fomentar más floración."
      },
      {
        "nombre": "Aster",
        "frecuenciaRiego": 48,
        "descripcion": "Flor perenne con flores parecidas a margaritas, en tonos de azul, púrpura y rosa.",
        "recomendaciones": "Sol pleno, suelo bien drenado, poda después de la floración."
      },
      {
        "nombre": "Lavanda",
        "frecuenciaRiego": 120,
        "descripcion": "Arbusto aromático con flores en espigas de color violeta.",
        "recomendaciones": "Sol pleno, suelo bien drenado, podar para mantener la forma."
      },
      {
        "nombre": "Crisantemo",
        "frecuenciaRiego": 48,
        "descripcion": "Popular flor de otoño con una amplia gama de colores y formas.",
        "recomendaciones": "Sol pleno, suelo fértil y bien drenado, dividir cada pocos años."
      },
      {
        "nombre": "Gazania",
        "frecuenciaRiego": 72,
        "descripcion": "Flores brillantes y coloridas que se cierran en días nublados y por la noche.",
        "recomendaciones": "Sol pleno, suelo bien drenado, ideal para climas cálidos."
      },
      {
        "nombre": "Alhelí",
        "frecuenciaRiego": 48,
        "descripcion": "Flor con un agradable aroma y una variedad de colores.",
        "recomendaciones": "Sol pleno a parcial, suelo fértil y bien drenado, eliminar flores marchitas."
      },
      {
        "nombre": "Rudbeckia (Ojo Negro)",
        "frecuenciaRiego": 48,
        "descripcion": "Flor perenne con un distintivo centro oscuro y pétalos amarillos.",
        "recomendaciones": "Sol pleno, suelo bien drenado, resistente a la sequía."
      },
      {
        "nombre": "Anémona",
        "frecuenciaRiego": 48,
        "descripcion": "Flor delicada disponible en varios colores, con un centro distintivo.",
        "recomendaciones": "Sombra parcial, suelo húmedo y bien drenado, proteger de vientos fuertes."
      },
      {
        "nombre": "Campanilla",
        "frecuenciaRiego": 48,
        "descripcion": "Flores en forma de campana, comúnmente en tonos de azul y púrpura.",
        "recomendaciones": "Sol pleno a sombra parcial, suelo bien drenado, buena para bordes y macetas."
      },
      {
        "nombre": "Delphinium",
        "frecuenciaRiego": 48,
        "descripcion": "Planta perenne con espigas de flores, generalmente en azul o púrpura.",
        "recomendaciones": "Sol pleno, suelo rico y bien drenado, estacar para soporte."
      },
      {
        "nombre": "Freesia",
        "frecuenciaRiego": 72,
        "descripcion": "Flores aromáticas en una variedad de colores, conocidas por su larga vida en florero.",
        "recomendaciones": "Sol pleno a sombra ligera, suelo bien drenado, ideal para ramos de flores."
      },
  ]
export default plantsData;
