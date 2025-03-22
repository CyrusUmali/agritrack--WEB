'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "c30abc7483b03bae12de2dc25a81abf9",
"assets/AssetManifest.bin.json": "9f6fc9a1a18a9205130266578e942e0a",
"assets/AssetManifest.json": "2a3cfb2dc0f17c4d00c295dbe1c45b74",
"assets/assets/ai/Claude.png": "55e0a07cc3cba5734b01cea49bbef808",
"assets/assets/ai/GoogleBard.png": "9656ab6479bcd0a829a47c3ea82b5376",
"assets/assets/ai/openai.webp": "96445f27d919b61afc55a84346daa322",
"assets/assets/alert/icon_fail.png": "a718aec61aa7bb9c1d49cd232768dbc6",
"assets/assets/alert/icon_success.png": "6eff1af1c52abd5c88ae44acddcf190d",
"assets/assets/alert/icon_warn.png": "5027e2574515ade177b94588856ac129",
"assets/assets/api/channelTable.json": "622bc2960776e97b380a2a814cdf4e25",
"assets/assets/australia.json": "a8710e36ed3224e92175d9ddb7953a22",
"assets/assets/brand/brand-01.svg": "2dd59410e0a65ce7183c0edb82d51cec",
"assets/assets/brand/brand-02.svg": "1cd9b0680cbfb78805420659bc1e077d",
"assets/assets/brand/brand-03.svg": "0eca25adef3e8225d50860ec9e935082",
"assets/assets/brand/brand-04.svg": "7dc6ac3b2da4adea0f941e472486a4bc",
"assets/assets/brand/brand-05.svg": "3ebe4ebf55a7faa2aa74ce775c7340fb",
"assets/assets/cards/cards-01.png": "bee503d28d650dc258b6376511f5facd",
"assets/assets/cards/cards-02.png": "704f58c328ebb8c091643b238bd1c62b",
"assets/assets/cards/cards-03.png": "36a3fa394039239a716caf01970174ca",
"assets/assets/cards/cards-04.png": "4443f6a85e3b7e775afc640584f866da",
"assets/assets/cards/cards-05.png": "2d0223d89e31b56459d147647db3a7f0",
"assets/assets/cards/cards-06.png": "080a048d0d862ef60ae4e67db3caf930",
"assets/assets/country/country-01.svg": "59c5ae713308034a1e0a8f138682b2a3",
"assets/assets/country/country-02.svg": "d5f66a93a4ade95ad2a72eb195f85028",
"assets/assets/country/country-03.svg": "8bd9f1d0cdad554fbb6551e0e2316493",
"assets/assets/country/country-04.svg": "47978f51b9a5e565cdf220612aaa4170",
"assets/assets/country/country-05.svg": "b5a8a2f9422c1b8846dabbcf149a673e",
"assets/assets/country/country-06.svg": "f39891596b6c5eeee69d2a02df9f4142",
"assets/assets/cover/cover-01.png": "972c64bf2ce84e837c5b3a2094281e16",
"assets/assets/crm/crm.png": "0c0806c464de6af08315cfb1a5d9d61c",
"assets/assets/favicon.ico": "94e47f5dcf4e91b704f169ebcb4c9390",
"assets/assets/icon/ai.png": "09e41b7f2e484029ef106886e052d0c5",
"assets/assets/icon/bg-word.svg": "5ccdd1e957e3b7af92b858c86a292fbe",
"assets/assets/icon/edit.svg": "e07e092f6705928126f9dc5aea8a62de",
"assets/assets/icon/firebase.png": "f1c4ff8b380764d209f4fc5d2377bb96",
"assets/assets/icon/icon-arrow-down.svg": "ab3cd915ffa427d34a5e89d864631b04",
"assets/assets/icon/icon-calendar.svg": "b0baecc0aa9c16ead9a856fe58647914",
"assets/assets/icon/icon-copy-alt.svg": "ccc6b1e6fd056d7d25978a064d6b68de",
"assets/assets/icon/icon-moon.svg": "f0c56a1b9282024a7c210588a79dc8a3",
"assets/assets/icon/icon-sun.svg": "99bd84f8192219382166d3264cf6bf8d",
"assets/assets/icon/user.svg": "e4790d0b53a6769df1a4dda0f3a79f26",
"assets/assets/logo/logo_dark.svg": "25a82a7bdd6b1c322525d56d16966655",
"assets/assets/logo/logo_white.svg": "0c2292b80b55214b4051612e0e1237ce",
"assets/assets/map.html": "95929eb3c1e0557792625d43f0a06ca5",
"assets/assets/product/product-01.png": "34be8cdb4dbf696fb0a39b39c5d94c4a",
"assets/assets/product/product-02.png": "1a4633cb19e391dd753743d62b4a790b",
"assets/assets/product/product-03.png": "2c213e5c10b79de985f7691ad21ca1e6",
"assets/assets/product/product-04.png": "f45c5f8c16c8db472e6b6d7c16cdae9b",
"assets/assets/product/product-thumb.png": "9cb86c53190c3026fb88dd00c232dd57",
"assets/assets/routes/menu_route_ar.json": "5d67589e80266cf615e3de9d70c5a378",
"assets/assets/routes/menu_route_en.json": "0aa54c9f7c745e31ad9f318238fb4430",
"assets/assets/routes/menu_route_es.json": "d2729e3ec0a48b052fbac885344627d3",
"assets/assets/routes/menu_route_fr.json": "47aa704bb6a9d8c7e9c50d7838223fc2",
"assets/assets/routes/menu_route_id.json": "056e58dd84579c8969b91f59c69ad4a3",
"assets/assets/routes/menu_route_ja.json": "076e55e55145fde8ef98a50f6b08de05",
"assets/assets/routes/menu_route_ko.json": "0fc3418ad1056292e210202c92e5e937",
"assets/assets/routes/menu_route_th.json": "674c9e8dcc783efb7580d56d69dc0800",
"assets/assets/routes/menu_route_vi.json": "da01146f7b38e1247b1b859b15e0fba1",
"assets/assets/routes/menu_route_zh.json": "afe5ce06e93c12542fce96d41875ad65",
"assets/assets/routes/tools_menu_route_en.json": "7a9ccef4bcbb2e1e87e6cc18ddec84a5",
"assets/assets/sidebar/AI.svg": "87dd9b60da790617f8a392b5960c0f0f",
"assets/assets/sidebar/auth.svg": "9524d73090e71ca5386406f52e52e08e",
"assets/assets/sidebar/calendar.svg": "65d24c7b0fbc719f7113eba7813b6410",
"assets/assets/sidebar/chart.svg": "7052ba5ddf4728fdefcf59946fafcebd",
"assets/assets/sidebar/dashboard.svg": "acd622e7a7d7363c0fbab805bde95cab",
"assets/assets/sidebar/dictionary.svg": "e89bb6fa7e6a8c4ef53b652dfb958f42",
"assets/assets/sidebar/forms.svg": "26080bc6e532163655306906484c521a",
"assets/assets/sidebar/invoice.svg": "be5445ed36fa593bb2b4bca23f4adfa8",
"assets/assets/sidebar/page.svg": "2defe056beb5eaec2b895e369231f37a",
"assets/assets/sidebar/profile.svg": "d597d10b478f01f2fbf529e87fe44b1b",
"assets/assets/sidebar/setting.svg": "1c84b34b46bb79982c673d0ed4619063",
"assets/assets/sidebar/table.svg": "c8649dfd8940ec690a0ee02726a8921e",
"assets/assets/sidebar/task.svg": "eb30121e95428353f48a30b5739ce221",
"assets/assets/sidebar/tools.svg": "b3258cf0e54adc61fc24080f0de81020",
"assets/assets/sidebar/ui.svg": "bd4240c78ede1540dbbc70d6c95c67e9",
"assets/assets/signin/email.svg": "5e43e6afdbd3ea78b763a53054bce79f",
"assets/assets/signin/lock.svg": "3ad8a7c59c0398b00c91eb9b32aea729",
"assets/assets/signin/main.svg": "6773ba3c7b3754d799a96115f4531cd2",
"assets/assets/signin/signup.svg": "a53eaa0dc9565ee40c6f7a4a12b1eec9",
"assets/assets/task/task-01.jpg": "557544c08de1aba4220b710b03d999b0",
"assets/assets/toolbar/alarm.svg": "c182e6a14eb5104f4e252a78bd467775",
"assets/assets/toolbar/arrow_bottom.svg": "bbe9b4cd5363997caa4f4640a4aef955",
"assets/assets/toolbar/message.svg": "52894902fba62ce40c7de5d7b1bea499",
"assets/assets/toolbar/moon.png": "3537a6d32a3fdbbde188fac8376c64a2",
"assets/assets/toolbar/moon.svg": "db479c83c6a269c0ce10839b14861190",
"assets/assets/toolbar/sun.png": "15f2e60867947d7ac1c8d91a7372fe41",
"assets/assets/toolbar/sun.svg": "09049d4bb2abba08cfd63891a7fb5ff4",
"assets/assets/toolbar/toggle.svg": "cd17bbf814d52381a6138c6c539fe245",
"assets/assets/user/user-01.png": "c8ed34fe5094d3b127bb9c94633d6371",
"assets/assets/user/user-02.png": "de3bd868997d3f445348922df73d8226",
"assets/assets/user/user-03.png": "93b7c0c394b231732ebe8806448a95a8",
"assets/assets/user/user-04.png": "118e66657a14921a61abc7d21261188b",
"assets/assets/user/user-05.png": "d74bb3c54d3e3c32c73829d652d0d6f4",
"assets/assets/user/user-06.png": "975408d09dc079b97f4ae46480af7ef5",
"assets/assets/user/user-07.png": "e3058df7afaaf5b2dedd732445cfea5b",
"assets/assets/user/user-08.png": "960cd052c95c75462fae0c9930a202db",
"assets/assets/user/user-09.png": "15693dc3edc4775c384585aa757f2421",
"assets/assets/user/user-10.png": "8bbed9cfd9a9e8a7d5ab3e1a43737380",
"assets/assets/user/user-11.png": "11f4a43c10ec710e5e41f261a629ca82",
"assets/assets/user/user-12.png": "8530b9ec54e0b67cb52b44bcbae5482c",
"assets/assets/user/user-13.png": "cdb3cc59c44f18a8029a032a3952663d",
"assets/FontManifest.json": "e9789bd4124ed0f350a67526b3a5caed",
"assets/fonts/MaterialIcons-Regular.otf": "6b325ab48a26e6a3f4679f51055fddec",
"assets/NOTICES": "b6e212be1290995919448ec64fe75bd1",
"assets/packages/flutter_dropzone_web/assets/flutter_dropzone.js": "dddc5c70148f56609c3fb6b29929388e",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/packages/iconsax_flutter/fonts/FlutterIconsax.ttf": "83c878235f9c448928034fe5bcba1c8a",
"assets/packages/quickalert/assets/confirm.gif": "bdc3e511c73e97fbc5cfb0c2b5f78e00",
"assets/packages/quickalert/assets/error.gif": "c307db003cf53e131f1c704bb16fb9bf",
"assets/packages/quickalert/assets/info.gif": "90d7fface6e2d52554f8614a1f5deb6b",
"assets/packages/quickalert/assets/loading.gif": "ac70f280e4a1b90065fe981eafe8ae13",
"assets/packages/quickalert/assets/success.gif": "dcede9f3064fe66b69f7bbe7b6e3849f",
"assets/packages/quickalert/assets/warning.gif": "f45dfa3b5857b812e0c8227211635cc4",
"assets/packages/rflutter_alert/assets/images/2.0x/close.png": "abaa692ee4fa94f76ad099a7a437bd4f",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_error.png": "2da9704815c606109493d8af19999a65",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_info.png": "612ea65413e042e3df408a8548cefe71",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_success.png": "7d6abdd1b85e78df76b2837996749a43",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_warning.png": "e4606e6910d7c48132912eb818e3a55f",
"assets/packages/rflutter_alert/assets/images/3.0x/close.png": "98d2de9ca72dc92b1c9a2835a7464a8c",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_error.png": "15ca57e31f94cadd75d8e2b2098239bd",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_info.png": "e68e8527c1eb78949351a6582469fe55",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_success.png": "1c04416085cc343b99d1544a723c7e62",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_warning.png": "e5f369189faa13e7586459afbe4ffab9",
"assets/packages/rflutter_alert/assets/images/close.png": "13c168d8841fcaba94ee91e8adc3617f",
"assets/packages/rflutter_alert/assets/images/icon_error.png": "f2b71a724964b51ac26239413e73f787",
"assets/packages/rflutter_alert/assets/images/icon_info.png": "3f71f68cae4d420cecbf996f37b0763c",
"assets/packages/rflutter_alert/assets/images/icon_success.png": "8bb472ce3c765f567aa3f28915c1a8f4",
"assets/packages/rflutter_alert/assets/images/icon_warning.png": "ccfc1396d29de3ac730da38a8ab20098",
"assets/packages/syncfusion_flutter_datagrid/assets/font/FilterIcon.ttf": "b8e5e5bf2b490d3576a9562f24395532",
"assets/packages/syncfusion_flutter_datagrid/assets/font/UnsortIcon.ttf": "acdd567faa403388649e37ceb9adeb44",
"assets/packages/timezone/data/latest_all.tzf": "a3a6cb5d912b5375926e5b027f91cb00",
"assets/packages/window_manager/images/ic_chrome_close.png": "75f4b8ab3608a05461a31fc18d6b47c2",
"assets/packages/window_manager/images/ic_chrome_maximize.png": "af7499d7657c8b69d23b85156b60298c",
"assets/packages/window_manager/images/ic_chrome_minimize.png": "4282cd84cb36edf2efb950ad9269ca62",
"assets/packages/window_manager/images/ic_chrome_unmaximize.png": "4a90c1909cb74e8f0d35794e2f61d8bf",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "9c3408e75fdc3a5970aeca52fded6be2",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c772ed6af8829237087b07641e43741c",
"/": "c772ed6af8829237087b07641e43741c",
"loading.gif": "b5302a7e6f55787961943f3c115f2480",
"main.dart.js": "05a634b06c36624c178db6517ab2f844",
"main.dart.js_1.part.js": "806e9e631816396e4345ff78a235b188",
"main.dart.js_10.part.js": "293bbd92e9f28798785f8d8031b195da",
"main.dart.js_11.part.js": "2c13294aa5e42daeb9863ab95ed25146",
"main.dart.js_12.part.js": "ca8022627c754dbe1edbe836922f7b94",
"main.dart.js_13.part.js": "a610b551f5f1092b6fa271525d11e9ea",
"main.dart.js_14.part.js": "1ef047c3945331b26a20f1f09e670145",
"main.dart.js_15.part.js": "21fedc02abd25e7e9af59d3c28bc5f0f",
"main.dart.js_16.part.js": "637a1755ec7b795519f8d99a53272d69",
"main.dart.js_17.part.js": "ce9f01ecb465691b5e831fe72673fcbe",
"main.dart.js_18.part.js": "8fd734154c1b39b1bb1346f22c3ddbb9",
"main.dart.js_19.part.js": "7b6fa4336b77346ad785f39736fe97a0",
"main.dart.js_20.part.js": "03ab22a463fda24ee1e54f07bc76d600",
"main.dart.js_21.part.js": "3576b5829c1e1092eb59677bb1e35727",
"main.dart.js_22.part.js": "b516af4d012223429b14e49af6ad82d3",
"main.dart.js_23.part.js": "9b21e9a1f639d57d15c9270024ca48f6",
"main.dart.js_24.part.js": "71989a91832ad59bf909723506b1b82f",
"main.dart.js_25.part.js": "784ea7a7ccaf46b3eb5e9b7a46b95077",
"main.dart.js_26.part.js": "1301ddc7ee3f34c940111379dcbfb5f8",
"main.dart.js_27.part.js": "743793523558545429ed1e402e98228e",
"main.dart.js_28.part.js": "f96b27ec5318d4bf559e794bdcd9ba1e",
"main.dart.js_29.part.js": "be9ab69e15f3db368944b7a6e85d6da4",
"main.dart.js_30.part.js": "bf317e788d8911ad1d49e337c07bb171",
"main.dart.js_31.part.js": "802f07ec6de75a3220080a991e4e4b0e",
"main.dart.js_32.part.js": "d17b02ad1427d695091263d00d4ffd4c",
"main.dart.js_33.part.js": "d97a1af461038fb7b1427104078726c1",
"main.dart.js_34.part.js": "f36a79b181f06216108519fe3dee8238",
"main.dart.js_35.part.js": "4ac8a3acd9f445e2cb5975f98489bf93",
"main.dart.js_36.part.js": "e9c0175e6581609e03e95beb9c349dfa",
"main.dart.js_37.part.js": "de16b01e4f815bf398e2b3e7a629681d",
"main.dart.js_38.part.js": "db0a096012e63986377c6c77a68af45d",
"main.dart.js_39.part.js": "f3e75f3caeb08e06939a41423485de1d",
"main.dart.js_4.part.js": "868ee2aff4f7de5018223286419dfd1b",
"main.dart.js_40.part.js": "66803fb4dbf7506375a4a2e3a97d36ef",
"main.dart.js_41.part.js": "e2358f5cad1a0f2bd7a19206ec0fa1cb",
"main.dart.js_42.part.js": "d5619e3cc68ad196c447f974a9838a65",
"main.dart.js_43.part.js": "152c45f2c12359dfc4b7598c71ddb55d",
"main.dart.js_44.part.js": "fa471bc97db1201e166bc37339c78252",
"main.dart.js_45.part.js": "09fc4b3893b99e4a7c55f4aff6e5f471",
"main.dart.js_46.part.js": "7cdc99bcddcff0259bc28526c29851ec",
"main.dart.js_47.part.js": "0d6c9c1b06a06ad23bdd8f122ee70023",
"main.dart.js_48.part.js": "6c45e76eba6fbf5c39e42ff4b19c29a9",
"main.dart.js_49.part.js": "9a2f85fb927a165a15d3b8edbdff4c15",
"main.dart.js_5.part.js": "a7953cf49580ff59d742d388d3b2f540",
"main.dart.js_50.part.js": "fa7bd14695f7ff043c2c5d4c45656c40",
"main.dart.js_51.part.js": "95fbf7f1bf850a0022dc6dd6b8e358cd",
"main.dart.js_52.part.js": "03f324def77e5217a1bce2646ae8efa7",
"main.dart.js_53.part.js": "29f23252af12b167df5d96f84c112cc6",
"main.dart.js_54.part.js": "1f64dd870941037c0cbf496acd31a597",
"main.dart.js_55.part.js": "c8fe3f5a3106c64a65375ed4ee0cfa97",
"main.dart.js_56.part.js": "5d0274db3499a590006f34f80588c491",
"main.dart.js_57.part.js": "97250f8b7466a17597fdaee8a5c2530c",
"main.dart.js_58.part.js": "158a8b39534793c87b92847eaad73dc1",
"main.dart.js_59.part.js": "12773a7c9ec39447b75ff7210216cb31",
"main.dart.js_6.part.js": "5db73b7bda8cc541f3a6161252b8017d",
"main.dart.js_60.part.js": "5b00f8f036fe4c210dab3d517754abec",
"main.dart.js_61.part.js": "5c27fc0f8df9ec3b65c94156bbd0cde7",
"main.dart.js_62.part.js": "ec93f236bbe307d129a1fef95c170465",
"main.dart.js_63.part.js": "8e0527a020b7ce570a60817ee662cbfc",
"main.dart.js_64.part.js": "ad8430c93a2a53f841d33e3e7b9216ff",
"main.dart.js_65.part.js": "32ecdc2aff18f8489b57bc757cbf9eee",
"main.dart.js_66.part.js": "5b2b2c17e967d64f2b04075ab12a55b8",
"main.dart.js_67.part.js": "a095582b1a7696cd5d41c6f75cdf97f2",
"main.dart.js_68.part.js": "aae4312b4e8727f55f29b86f5a22417d",
"main.dart.js_69.part.js": "06dd56cda948bf253dca1381e5c52dd4",
"main.dart.js_7.part.js": "c5be278ba78b18ecb093c23f6b9e6992",
"main.dart.js_70.part.js": "9ea41d1a061b10ed501fe88711481f18",
"main.dart.js_71.part.js": "88ab376c852235f78465ae1ec69f62ee",
"main.dart.js_72.part.js": "419f48e60e0dc9416f81202e347ebc32",
"main.dart.js_73.part.js": "cdee33101e9e4c6c3b8aa584af741fb7",
"main.dart.js_74.part.js": "a9be7ffb606c06cc9d1673d48d712c00",
"main.dart.js_75.part.js": "93a123222eabf7bb6eb6cc9dc574362e",
"main.dart.js_76.part.js": "74ea2ed57c32eae2481b665f5ef313cf",
"main.dart.js_78.part.js": "44b2547784dda83457aab97717c2ef69",
"main.dart.js_79.part.js": "27651fcca212b401e034b4eeeae3bd13",
"main.dart.js_8.part.js": "8140fd119176f5f74be56d04791c4d97",
"main.dart.js_80.part.js": "94c5e311c5d21f577791c5cae5608acb",
"main.dart.js_81.part.js": "3240598c1c23da17a92836b866e494dd",
"main.dart.js_83.part.js": "efbf7cbdadf1876721ed07771a7e2790",
"main.dart.js_85.part.js": "0256069d042cd2979281976955773619",
"main.dart.js_86.part.js": "035281ccee57b9670beef9bd87150b0c",
"main.dart.js_9.part.js": "b4936987a1f35526ebebaf9df34d8c8d",
"manifest.json": "d7e4500053251d1c78695d0f3171fbbb",
"version.json": "8a188b0a6525cc674e864d60f363070a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
