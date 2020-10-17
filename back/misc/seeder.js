import Coffee from "../models/coffee.js";

const db = require("./db");

export default function coffeeSeeder() {
  db.then(async ({connection, disconnect }) => {
    await connection.db.dropDatabase();
    await Coffee.insertMany([
      {
        title: "Ява Золотая",
        description: "tut descr",
        tags: "tut tag",
        region: "Сунда",
        type: "Фильтр",
        acidity: "tut kislota",
        image: "yava_zolotaya_1_kg_min.png",
      },
      {
        title: "Уганда Бузи Черри",
        description: "tut descr",
        tags: "tut tag",
        region: "Западная Уганда",
        type: "Фильтр",
        acidity: "tut kislota",
        image: "uganda_buzi_cherri_1000_zh_2_min.png",
      },
      {
        title: "Колумбия Габриэль Кастаньо Анаэробная обработка",
        description: "tut descr",
        tags: "tut tag",
        region: "Уила, Сан-Адольфо",
        type: "Фильтр",
        acidity: "tut kislota",
        image: "Kolumbya_Gabriel_01_min.png",
      },
      {
        title: "Эфиопии под молочко",
        description: "tut descr",
        tags: "tut tag",
        region: "Иргачиф",
        type: "Эспрессо",
        acidity: "tut kislota",
        image: "Ephiopia_Milk_02_min.png",
      },
      {
        title: "Колумбии под молочко",
        description: "tut descr",
        tags: "tut tag",
        region: "Нариньо",
        type: "Эспрессо",
        acidity: "tut kislota",
        image: "Columbia_Milk_02_min.png",
      },
      {
        title: "Бурунди Бузирагухиндва",
        description: "tut descr",
        tags: "tut tag",
        region: "Каянза",
        type: "Фильтр",
        acidity: "tut kislota",
        image: "burundy_buziraguhindva_250_min.png",
      },
      {
        title: "Колумбия Асиведо-Питалито",
        description: "tut descr",
        tags: "tut tag",
        region: "Уила, Асиведо, Питалито",
        type: "Эспрессо",
        acidity: "tut kislota",
        image: "kolumbiya-asivedo_pitalito2_min.png",
      },
      {
        title: "Кения Гатаити АА из бочки",
        description: "tut descr",
        tags: "tut tag",
        region: "Округ Ньери, Тету",
        type: "Фильтр",
        acidity: "tut kislota",
        image: "KenyaGataiti.png",
      },
      {
        title: "Колумбия Пасто Седе из бочки",
        description: "tut descr",
        tags: "tut tag",
        region: "Нариньо",
        type: "Фильтр",
        acidity: "tut kislota",
        image: "ColumbiaPastoSede.png",
      },
      {
        title: "Эфиопия Лалиса",
        description: "tut descr",
        tags: "tut tag",
        region: "Иргачиф",
        type: "Эспрессо",
        acidity: "tut kislota",
        image: "250g_ch_YAvaZolotaya_02.png",
      },
      {
        title: "Бразилия Наталья Гарсия",
        description: "tut descr",
        tags: "tut tag",
        region: "Минас Жерайс, Кампо дас Вертентес",
        type: "Фильтр",
        acidity: "tut kislota",
        image: "braziliyanatalyagarsiya-228x228.png",
      },
      {
        title: "Бразилия Ягуара",
        description: "tut descr",
        tags: "tut tag",
        region: "Минас Жерайс, Кампо дас Вертентес",
        type: "Фильтр",
        acidity: "tut kislota",
        image: "braziliyayaguara-228x228.png",
      },
      {
        title: "Бурунди Мбиризи",
        description: "tut descr",
        tags: "tut tag",
        region: "Каянза",
        type: "Фильтр",
        acidity: "tut kislota",
        image: "burundimbirizi-228x228.png",
      },
      {
        title: "Индонезия Фринса Лактик",
        description: "tut descr",
        tags: "tut tag",
        region: "Сунда",
        type: "Фильтр",
        acidity: "tut kislota",
        image: "indoneziyafrinsalaktik-228x228.png",
      },
      {
        title: "Кения Кангочо",
        description: "tut descr",
        tags: "tut tag",
        region: "Ньери",
        type: "Фильтр",
        acidity: "tut kislota",
        image: "keniyakangocho-228x228.png",
      },
      {
        title: "Кения Каримикуй",
        description: "tut descr",
        tags: "tut tag",
        region: "Кириньяга",
        type: "Фильтр",
        acidity: "tut kislota",
        image: "keniyakarimikui_25CC_2586-228x228.png",
      },
      {
        title: "Колумбия Ла Виргиния",
        description: "tut descr",
        tags: "tut tag",
        region: "Уила",
        type: "Фильтр",
        acidity: "tut kislota",
        image: "kolumbiyalavirginya-228x228.png",
      },
      {
        title: "Колумбия Рафаэль Айа",
        description: "tut descr",
        tags: "tut tag",
        region: "Уила",
        type: "Фильтр",
        acidity: "tut kislota",
        image: "kolumbiyarafaelai_25CC_2586a-228x228.png",
      },
      {
        title: "Колумбия Рафаэль Айа Катурра 90",
        description: "tut descr",
        tags: "tut tag",
        region: "Уила",
        type: "Фильтр",
        acidity: "tut kislota",
        image: "kolumbiyarafaelai_25CC_2586akaturra90-228x228.png",
      },
      {
        title: "Коста-Рика Монтерога",
        description: "tut descr",
        tags: "tut tag",
        region: "Тараззу, Сан Исидро",
        type: "Фильтр",
        acidity: "tut kislota",
        image: "kosta-rikamonteroga-228x228.png",
      },
      {
        title: "Суматра Гайо Маунтайн",
        description: "tut descr",
        tags: "tut tag",
        region: "Ачех",
        type: "Фильтр",
        acidity: "цитрусово-винная, выраженная",
        image: "2f7579d557446bbae793d79bfd3150f0.png",
      },
      {
        title: "Сладкая Бразилия Кармо Де Минас",
        description: "tut descr",
        tags: "tut tag",
        region: "Кармо Де Минас",
        type: "Эспрессо",
        acidity: "ниже среднего",
        image: "BrazilKarmodeMinas.png",
      },
      {
        title: "Эфиопия Анасора",
        description: "tut descr",
        tags: "tut tag",
        region: "Оромия",
        type: "Эспрессо",
        acidity: "tut kislota",
        image: "ethiopiaanasora.jpg",
      },
      {
        title: "Колумбия Сол Насиенте",
        description: "tut descr",
        tags: "tut tag",
        region: "Колумбия",
        type: "Фильтр",
        acidity: "умеренная, преимущественно яблочная",
        image: "ColumbiaSolNasiente.png",
      },
      {
        title: "Колумбия Буена Виста",
        description: "tut descr",
        tags: "tut tag",
        region: "Колумбия",
        type: "Фильтр",
        acidity: "яркая яблочная, лимонная",
        image: "5c6d6a993d5116525054cf8589dfaf9d.png",
      },
      {
        title: "Яркая Танзания Умоджа Улулу",
        description: "tut descr",
        tags: "tut tag",
        region: "Мбея",
        type: "Фильтр",
        acidity: "ниже среднего",
        image: "TanzaniaUmodjaUlulu.png",
      },
      {
        title: "Эфиопия Керреча",
        description: "tut descr",
        tags: "tut tag",
        region: "Керреча",
        type: "Эспрессо",
        acidity: "средняя, винная и цитрусовая",
        image: "ethyopiaKerrechaa.png",
      },
      {
        title: "Колумбия Таби Лэнд",
        description: "tut descr",
        tags: "tut tag",
        region: "Колумбия",
        type: "Фильтр",
        acidity: "тёмных ягод и красного вина",
        image: "ColumbiaTabyLand.png",
      },
      {
        title: "Сочная Танзания Умоджа Улулу",
        description: "tut descr",
        tags: "tut tag",
        region: "Мбея",
        type: "Фильтр",
        acidity: "tut kislota",
        image: "TanzaniaUmodjaUlulu.png",
      },
      {
        title: "Сочная Эфиопия Банко Готете ПБ",
        description: "tut descr",
        tags: "tut tag",
        region: "asdasda",
        type: "Фильтр",
        acidity: "яблочная и цитрусовая",
        image: "ethyopiaBankoGottete.jpg",
      },
      {
        title: "Сочная Колумбия Апонте",
        description: "tut descr",
        tags: "tut tag",
        region: "Нариньо",
        type: "Фильтр",
        acidity: "tut kislota",
        image: "ColumbiaAponte.png",
      },
      {
        title: "Сочная Кения Мугага Гатина",
        description: "tut descr",
        tags: "tut tag",
        region: "Мугага",
        type: "Фильтр",
        acidity: "tut kislota",
        image: "KenyaMugagaGatina.png",
      },
      {
        title: "Сочная Бразилия Альта Виста",
        description: "tut descr",
        tags: "tut tag",
        region: "Бразилия",
        type: "Фильтр",
        acidity: "tut kislota",
        image: "BrazilAltaVista.png",
      },
      {
        title: "Сладкая Колумбия Декаф эль Карамель (эспрессо)",
        description: "tut descr",
        tags: "tut tag",
        region: "Колумбия",
        type: "Эспрессо",
        acidity: "tut kislota",
        image: "ColumbiaDecafElCaramel.png",
      },
      {
        title: "Эфиопия Керреча",
        description: "tut descr",
        tags: "tut tag",
        region: "Керреча",
        type: "Фильтр",
        acidity: "средняя, винная и цитрусовая",
        image: "ethyopiaKerrechaa.png",
      },
      {
        title: "Сладкая Бразилия Кармо Де Минас (фильтр)",
        description: "tut descr",
        tags: "tut tag",
        region: "Кармо Де Минас",
        type: "Фильтр",
        acidity: "tut kislota",
        image: "BrasilKarmoDeMinasFilter.png",
      },
      {
        title: "Яркая Бразилия Фазенда Чапада",
        description: "tut descr",
        tags: "tut tag",
        region: "Кармо Де Минас",
        type: "Фильтр",
        acidity: "tut kislota",
        image: "BrasilFazendaChapada.png",
      },
    ]);
    disconnect();
  }).catch((err) => {
    console.error(err);
  });
}