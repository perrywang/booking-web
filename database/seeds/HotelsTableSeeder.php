<?php

use Illuminate\Database\Seeder;

class HotelsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $city = \App\City::where('name_en', '=', 'LasVegas')->get()->each(function ($city) {
                    $city->hotels()->saveMany([
                        factory(\App\Hotel::class)->make([
                            'name_en' => 'The Venetian Resort-Hotel-Casino',
                            'name_cn' => '威尼斯人度假赌场酒店',
                            'desc_en' => 'Set on the Las Vegas Strip, this lavish, Italian-themed, all-suite casino hotel is 1.5 miles from the Las Vegas Convention Center. Plush, classical suites feature flat-screens, WiFi, minibars and Egyptian linens. Select suites add living and dining areas, marble baths, fireplaces, whirlpool tubs and access to a club lounge. ',
                            'desc_cn' => '威尼斯人度假赌场酒店位于拉斯维加斯，是家5星级酒店。无论您是因为出差或度假而造访拉斯维加斯，威尼斯人度假赌场酒店都会是您住宿的绝佳选择。在这里您将得到一份贴心服务、收获一份美丽心情。酒店位置较好，距离威尼斯人酒店步行不到1分钟。',
                            'body_en' => '

                                            <p>This 5-star Italian-themed Las Vegas Strip resort features spacious guest rooms, 19 international restaurants, a state-of-the-art casino and 5-acre pool deck. The on-site Grand Canal Shoppes offer over 80 boutique stores.</p>
                                            <p><strong><span style="color: #000000;">SHOPPING</span></strong> A sunken sitting area with a dining table and flat-screen HD cable TV is provided in each spacious suite at the eco-friendly Venetian Resort Hotel and Casino. A luxurious private bathroom with over-sized soaking tub, separate glass-enclosed shower, marble counters and deluxe toiletries is also included. </p>
                                            <p><strong><span style="color: #000000;">DINING</span></strong> A wide selection of dining choices include Thomas Keller’s Bouchon in addition to American, Italian, Asian and fusion cuisine. In-room dining is also available. Las Vegas Strip is a great choice for travelers interested in shopping, entertainment and nightlife. This is our guests favorite part of Las Vegas, according to independent reviews. </p>
                                            <p><strong><span style="color: #000000;">ENTERTAINMENT</span></strong> The Resort Venetian Hotel features 3 outdoor pools, including the adults-only TAO Beach pool and nightclub. Poolside dining and private cabana rental are available.The on-site Canyon Ranch SpaClub spa center offers fitness classes, massage services, facial and skin treatments, water therapy circuit, acupuncture and a full menu of salon services. Guests can meet with a nutritionist or personal trainer.Las Vegas Strip is a great choice for travelers interested in shopping, entertainment and nightlife.</p>
                                            ',
                            'body_cn' => '
                                            <p>这家位于拉斯维加斯大道（Las Vegas Strip）的五星级度假酒店采用意大利主题，设有宽敞的客房、19家国际餐厅、最先进的赌场、5英亩（2公顷）的游泳池平台以及拥有逾80家精品店的内部Grand Canal Shoppes购物中心。</p>
                                            <p>Venetian Resort Hotel and Casino生态度假酒店的宽敞套房均设有带餐桌和平面高清有线电视的休息区以及带超大浴缸、独立玻璃淋浴间、大理石台和豪华洗浴用品的奢华连接浴室。Resort Venetian Hotel酒店设有3个室外游泳池，包括仅限成人使用的TAO海滩游泳池和夜总会，亦提供池畔餐厅和私人小屋出租服务。</p>
                                            <p>酒店内的Canyon Ranch SpaClub康体中心提供健身课程、按摩服务、面部和皮肤护理、水疗设备、针灸及全套美容服务。客人可与营养师和私人教练面谈。除了美国、意大利、亚洲和风味美食外，酒店还提供Thomas Keller’s Bouchon等各式餐饮选择，亦提供房内用餐服务。</p>
                                            <p>Venetian酒店的客人可在意大利格调的街头漫步，或乘坐威尼斯的贡多拉沿着带地道的大运河顺流而下。酒店内还设有杜莎夫人蜡像馆（Madame Tussauds Las Vegas)。旅友们喜爱拉斯维加斯大道的理由：购物、娱乐和夜生活。根据我们网站上的真实住客点评，这里是拉斯维加斯的人气地区之一。</p>
                                            ',
                            'logo' => '/images/hotels/hotel_veneian_lasvagas_logo.jpg',
                            'gallery' => '/images/hotels/hotel_veneian_lasvagas_banner.jpg;/images/hotels/hotel_veneian_lasvagas_bottom1.jpg;/images/hotels/hotel_veneian_lasvagas_bottom2.jpg',
                        ]),
                        factory(\App\Hotel::class)->make([
                            'name_en' => 'Bellagio',
                            'name_cn' => '贝拉吉奥度假村',
                            'desc_en' => 'Across the street from Paris Las Vegas, this luxe, mammoth Strip casino resort is housed in an Italian-inspired, 36-story tower fronted by a man-made 8-acre lake featuring dancing fountains. The standard modern rooms feature custom artwork and marble bathrooms with soaking tubs; lavish suites and villas come with private elevator access, living rooms and butler service. ',
                            'desc_cn' => '百乐宫酒店（Bellagio）是位于美国内华达州拉斯维加斯大道上的一间赌场酒店，由美高梅集团持有及营运, 百乐宫酒店其中一项最著名的特色项目为酒店门前的人工湖，人工湖面积达32,000平方米，并提供音乐喷泉表演，是旅客必到的景点之一。',
                            'body_en' => '
                                          <p>Right behind the famous Fountains of Bellagio, this luxury Las Vegas Strip hotel and casino offers an upscale day spa, multiple dining options and elegant rooms with marble private bathrooms. The Cirque du Soleil show "O" is on site.</p>
                                          <p><strong>SHOPPING </strong>– The richly-decorated rooms of the Bellagio come with a flat-screen satellite TV and electric drapes. Soft bathrobes, a minibar and an iPod docking station are provided. Bellagio guests can experience a variety of treatments at the spa or enjoy a massage beside one of 5 beautiful courtyard pools. Lush botanical gardens and a fine art gallery are open for viewing.</p>
                                          <p><strong>DINING</strong>– A wide range of dining options are available, including Michael Mina fine dining restaurant, open-air dining with fountain views at Picasso and contemporary Japanese dishes at Yellowtail. Sophisticated boutique shops and The Bank Nightclub are also in the hotel.</p>
                                          <p><strong>ENTERTAINMENT</strong>– The Las Vegas Bellagio is 3 miles from McCarran International Airport. Las Vegas Strip is a great choice for travelers interested in shopping, entertainment and nightlife. This is our guests favorite part of Las Vegas, according to independent reviews.</p>
                                          ',
                            'body_cn' => '
                                          <p>这家豪华的赌场酒店位于拉斯维加斯大道（Las Vegas Strip），坐落在著名的Fountains of Bellagio喷泉的后面，拥有高档的日间SPA中心、多间餐饮场所以及带大理石浴室的典雅客房，内设太阳马戏团（Cirque du Soleil）的“O”水上主题演出。</p>
                                          <p>Bellagio酒店装饰华丽的客房配备了平面卫星电视、电动窗帘、柔软的浴袍、迷你吧和iPod基座。Bellagio酒店的客人可以在SPA中心体验各种理疗服务，在5座迷人的庭院泳池畔享受舒缓的按摩服务，或漫步葱翠的植物园和艺术画廊。</p>
                                          <p>酒店拥有各种餐饮场所，包括供应精致美食的Michael Mina餐厅、设有喷泉景户外用餐区的Picasso餐厅以及提供当代日本料理的Yellowtail餐厅。酒店内还设有高档精品店和The Bank Nightclub夜总会。</p>
                                          <p>Las Vegas Bellagio酒店距离麦卡伦国际机场（McCarran International Airport）有3英里（4.8公里）。旅友们喜爱拉斯维加斯大道的理由：购物、娱乐和夜生活。根据我们网站上的真实住客点评，这里是拉斯维加斯的人气地区之一。</p>
                                          ',
                            'logo' => '/images/hotels/hotel_Bellagio_lasvagas_logo.jpg',
                            'gallery' => '/images/hotels/hotel_Bellagio_lasvagas_banner.jpg;/images/hotels/hotel_Bellagio_lasvagas_bottom1.jpg;/images/hotels/hotel_Bellagio_lasvagas_bottom2.jpg'
                        ]),
                        factory(\App\Hotel::class)->make([
                            'name_en' => 'The Palazzo Resort Hotel Casino',
                            'name_cn' => '帕拉佐赌场度假酒店',
                            'desc_en' => 'Tucked between the Wynn and the Venetian, this upscale, all-suite resort and casino is a 6-minute walk from the Fashion Show Mall. Plush accommodations feature Italian-inspired decor and range from modern rooms with flat-screen TVs and soaking tubs to entertainment-focused suites with sunken living rooms, dining areas and pool tables.',
                            'desc_cn' => '帕拉佐赌场度假酒店位于拉斯维加斯，是家5星级酒店。是拉斯维加斯最受欢迎的酒店之一。凭借独有的人文素养和其婉约美丽的殷殷之情不断吸引着广大顾客的到访。酒店位置较好，距离威尼斯人酒店步行4分钟。',
                            'body_en' => '
                                          <p>This 5-star eco-friendly Las Vegas hotel is on the Vegas Strip. The luxury hotel features a full-service spa and health club, pool deck overlooking the Strip, and a state-of-the-art casino.</p>
                                          <p><strong>SHOPPING </strong>– The Palazzo offers spacious guest rooms with a separate living area and a dining table. In-room media includes 2 flat-screen TVs, a DVD player and high-speed internet access. The extra large bathrooms feature a 20-inch flat-screen TV and deluxe amenities. A daily newspaper is available.</p>
                                          <p><strong>DINING</strong>– Hotel Palazzo boasts 16 restaurants and bars serving a variety of food from around the world. Guests can choose from fine and casual dining. The Palazzo Resort Hotel features 7 outdoor pools, 4 hot tubs and private cabanas surrounded by gardens. At The Shoppes, located inside the hotel, has over 50 international boutique shops.</p>
                                          <p><strong>ENTERTAINMENT</strong>– Guests have free access to the Canyon Ranch SpaClub gym. The club also features spa services, fitness classes and a 40-foot rock-climbing wall. Las Vegas Strip is a great choice for travelers interested in shopping, entertainment and nightlife.</p>
                                          ',
                            'body_cn' => '
                                          <p>这家五星级的生态友好型酒店坐落在拉斯维加斯大道上，位于拉斯维加斯。豪华的酒店设有服务齐全的spa、健身俱乐部、俯瞰着拉斯维加斯大道的泳池甲板以及顶尖的赌场。</p>
                                          <p>Palazzo酒店提供带独立起居区和餐桌的宽敞客房。室内媒体设施包括2台平面电视、1台DVD播放器和高速网络连接。额外宽敞的浴室内设有1台20英寸的平面电视以及豪华设施。酒店提供日报。</p>
                                          <p>Hotel Palazzo酒店设有16间餐厅和酒吧，供应各种国际美食。客人可以享用美食或休闲餐。Palazzo Resort Hotel酒店设有7座户外泳池、4个热水浴缸以及花园簇拥中的私人小屋。酒店内的名店设有超过50间国际精品店。</p>
                                          <p>客人可以免费使用Canyon Ranch SpaClub健身房。这里还提供各种spa服务、健身课程以及高40英尺（12.2米）的攀岩墙。旅友们喜爱拉斯维加斯大道的理由：购物、娱乐和夜生活。</p>
                                          ',
                            'logo' => '/images/hotels/hotel_PalazzoResort_lasvagas_logo.jpg',
                            'gallery' => '/images/hotels/hotel_PalazzoResort_lasvagas_banner.jpg;/images/hotels/hotel_PalazzoResort_lasvagas_bottom1.jpg;/images/hotels/hotel_PalazzoResort_lasvagas_bottom2.jpg'
                        ]),
                        factory(\App\Hotel::class)->make([
                            'name_en' => 'ARIA Resort & Casino at CityCenter Las Vegas',
                            'name_cn' => '拉斯维加斯市中心艾莉亚赌场度假酒店',
                            'desc_en' => 'This upscale casino resort on the Strip is 1.9 miles from Bali Hai Golf Club and 2.2 miles from McCarran International Airport. Refined rooms (some with views of the Strip) feature floor-to-ceiling windows and 42-inch flat-screen TVs. WiFi is included in the resort fee. Suites add separate living spaces and wet bars.',
                            'desc_cn' => '豪华的5星级Aria Resort And Casino坐落于高档，离杜莎夫人蜡像馆，The Platters及齐格菲与罗伊的秘密花园与海豚馆几分钟路程。 建于2009年，酒店综合埃及的建筑风格及现代化设施于一体。餐厅将在完美的氛围下提供精美的中国的佳肴。',
                            'body_en' => '
                                          <p>Right behind the famous Fountains of Bellagio, this luxury Las Vegas Strip hotel and casino offers an upscale day spa, multiple dining options and elegant rooms with marble private bathrooms. The Cirque du Soleil show "O" is on site.</p>
                                          <p><strong>SHOPPING </strong>– The richly-decorated rooms of the Bellagio come with a flat-screen satellite TV and electric drapes. Soft bathrobes, a minibar and an iPod docking station are provided. Bellagio guests can experience a variety of treatments at the spa or enjoy a massage beside one of 5 beautiful courtyard pools. Lush botanical gardens and a fine art gallery are open for viewing.</p>
                                          <p><strong>DINING</strong>– A wide range of dining options are available, including Michael Mina fine dining restaurant, open-air dining with fountain views at Picasso and contemporary Japanese dishes at Yellowtail. Sophisticated boutique shops and The Bank Nightclub are also in the hotel.</p>
                                          <p><strong>ENTERTAINMENT</strong>– The Las Vegas Bellagio is 3 miles from McCarran International Airport. Las Vegas Strip is a great choice for travelers interested in shopping, entertainment and nightlife. This is our guests favorite part of Las Vegas, according to independent reviews.</p>
                                           ',
                            'body_cn' => '
                                          <p>这家高档度假酒店坐落于拉斯维加斯大道（Las Vegas Strip），设有一个15万平方英尺的赌场、16间餐厅和内部娱乐表演。所有客房都享有迷人的城市景观，可透过落地窗欣赏到角落美景。</p>
                                          <p>ARIA Resort and Casino at CityCenter Las Vegas度假酒店的客房包括一个储藏丰富的迷你吧，一键式房间控制系统，可供客人迅速自己布置客房，如灯光和温度。连接浴室内提供舒适的浴袍以及带凳子和浴缸的玻璃淋浴间。客人可以在3个室外游泳池和3个热浴缸中放松身心。仅供成人使用的季节性LIQUID Pool Lounge酒廊提供DJ娱乐活动、餐厅、酒吧和私人小屋出租服务。</p>
                                          <p>酒店内的Spa at ARIA拥有62间理疗室，提供按摩、面部护理和全方位的美发服务。酒店还提供个人培训和团体健身课程。ARIA酒店呈献太阳剧团（Cirque du Soleil）的Zarkana表演。该演出融合了杂技艺术与超现实主义以营造出因欢乐和友爱而不再混乱而疯狂的世界。</p>
                                          <p>ARIA Resort and Casino CityCenter酒店距离麦卡伦国际机场（McCarran International Airport）有3英里（4.8公里）。旅友们喜爱拉斯维加斯大道的理由：购物、娱乐和夜生活。根据我们网站上的真实住客点评，这里是拉斯维加斯的人气地区之一。</p>
                                           ',
                            'logo' => '/images/hotels/hotel_ARIAResort_lasvagas_logo.jpg',
                            'gallery' => '/images/hotels/hotel_ARIAResort_lasvagas_banner.jpg;/images/hotels/hotel_ARIAResort_lasvagas_bottom1.jpg;/images/hotels/hotel_ARIAResort_lasvagas_bottom2.jpg'
                        ]),
                        factory(\App\Hotel::class)->make([
                            'name_en' => 'Encore at Wynn Las Vegas',
                            'name_cn' => '拉斯维加斯永利安可酒店',
                            'desc_en' => 'In an iconic curved high-rise on the Las Vegas Strip, this lavish casino hotel is 1 mile from Las Vegas Convention Center. Plush rooms offer floor-to-ceiling windows, pillow-top mattresses and tubs, plus WiFi access, iPhone docks and flat-screen TVs. Lux suites add individual features like massage rooms, granite wet bars, whirlpool tubs and free in-room breakfast.',
                            'desc_cn' => '这家五星级酒店和赌场正坐落于拉斯维加斯大道（Las Vegas Strip），毗邻Fashion Show Mall购物中心。酒店提供豪华的住宿、5间内部餐厅和一个获奖的Spa中心。',
                            'body_en' => '
                                          <p>Right on the Las Vegas Strip, this 5-star hotel and casino is next to Fashion Show Mall. It features luxury accommodations, 5 on-site restaurants and an award-winning spa.</p>
                                          <p><strong>SHOPPING </strong>– The spacious suites at the Encore at Wynn Las Vegas feature modern décor with floor-to-ceiling windows. Each suite has at least 2 flat-screen TVs, an iPod docking station and a living room with a minibar. A work area with state-of-the-art office equipment is included.</p>
                                          <p><strong>DINING</strong>– The restaurants of Encore feature a variety of cuisines, ranging from premium steaks to classic Italian. The hotel also has 3 on-site nightclubs, including XS Nightclub, which includes a full bar and entertainment by the outdoor pools and cabanas. The hotel fitness center features daily classes. Personal trainers are available. </p>
                                          <p><strong>ENTERTAINMENT</strong>– This hotel is within walking distance of all restaurants and attractions on Las Vegas Boulevard. Check-out is a relaxed 12:00 PM, so you can sleep in and really enjoy that morning cup joe. Las Vegas Strip is a great choice for travelers interested in shopping, entertainment and nightlife. This is our guests favorite part of Las Vegas, according to independent reviews.</p>
                                           ',
                            'body_cn' => '
                                          <p>这家五星级酒店和赌场正坐落于拉斯维加斯大道（Las Vegas Strip），毗邻Fashion Show Mall购物中心。酒店提供豪华的住宿、5间内部餐厅和一个获奖的Spa中心。</p>
                                          <p>Encore at Wynn Las Vegas酒店宽敞的套房提供现代装潢，拥有落地窗。每间套房都配备了至少2台平面电视、iPod基座和一间带迷你吧的客厅，还设有一个配有先进办公设备的工作区。</p>
                                          <p>Encore酒店的餐厅提供各种美食，从优质牛排到典雅的意大利美食，应有尽有。酒店内还设有3间夜总会，包括XS夜总会，该夜总会提供一个完整的酒吧和池畔娱乐节目表演以及凉亭。</p>
                                          <p>酒店的健身中心提供日常课程，可提供私人教练。这家酒店距离拉斯维加斯大道上所有的餐馆和景点都只有几步之遥。 退房时间12:00，睡个懒觉再收拾行李也来得及！旅友们喜爱拉斯维加斯大道的理由：购物、娱乐和夜生活。根据我们网站上的真实住客点评，这里是拉斯维加斯的人气地区之一。</p>
                                           ',
                            'logo' => '/images/hotels/hotel_EncoreatWynn_lasvagas_logo.jpg',
                            'gallery' => '/images/hotels/hotel_EncoreatWynn_lasvagas_banner.jpg;/images/hotels/hotel_EncoreatWynn_lasvagas_bottom1.jpg;/images/hotels/hotel_EncoreatWynn_lasvagas_bottom2.jpg'
                        ]),
                    ]);
                });
        $city = \App\City::where('name_en', '=', 'NewYork')->get()->each(function ($city) {
                    $city->hotels()->saveMany([
                        factory(\App\Hotel::class)->make([
                            'name_en' => 'Soho Grand Hotel',
                            'name_cn' => '苏豪区格兰德酒店',
                            'desc_en' => 'Situated in the upscale SoHo neighborhood, this luxury hotel is close to art galleries, designer shops and popular restaurants. This modern hotel features an outdoor restaurant and all rooms have city views. The elegant guest rooms at the Hotel Soho Grand come with free Wi-Fi, a flat-screen TV, a DVD Player, and an iPod docking station. Designer bathrobes and toiletries are also provided. Guests can enjoy American cuisine and signature cocktails in the Club Room, the Grand Bar and the Salon. ',
                            'desc_cn' => '苏豪区格兰德酒店座落于纽约(NY)的苏活，是带给您欢乐假期与放松身心的完美住宿选择。 在这里，旅客们可轻松前往市区内各大旅游、购物、餐饮地点。 从酒店到市内几大地标相当方便，例如绘图中心公司, 斯潘色上流社会画廊, 翠贝卡电影院。苏豪区格兰德酒店酒店提供优质贴心的服务和方便实用的设施，赢得了客人的普遍好评。',
                            'body_en' => '
                                            <p>In the upscale SoHo neighborhood, this luxury hotel is close to art galleries, designer shops and popular restaurants. This modern hotel features an outdoor restaurant and all rooms have city views.</p>
                                            <p><strong><span style="color: #000000;">SHOPPING</span></strong> The elegant guest rooms at the Hotel Soho Grand include free Wi-Fi, a flat-screen TV, a DVD Player, and an iPod docking station. Designer bathrobes and toiletries are also provided. Guests can enjoy American cuisine and signature cocktails in the Club Room, the Grand Bar and the Salon. Opening seasonally, the outdoor Yard has a summer menu.</p>
                                            <p><strong><span style="color: #000000;">DINING</span></strong> Soho Grand Hotel features a 24-hour gym and business center. A helpful concierge desk is also available 24 hours a day. Canal Street subway station is a 5-minute walk from Soho Grand and provides easy access to Central Park and Times Square. Little Italy is a 10-minute walk away.</p>
                                            <p><strong><span style="color: #000000;">ENTERTAINMENT</span></strong> Check-out is a relaxed 12:00 PM, so you can sleep in and really enjoy that morning cup o joe. SoHo is a great choice for travelers interested in restaurants, food and shopping. This is our guests favorite part of New York City, according to independent reviews. In this area you can shop till you drop for popular brands like Apple, H&M, Zara, Prada, Ralph Lauren.</p>
                                             ',
                            'body_cn' => '
                                            <p>这家豪华酒店坐落在高档的SoHo区，靠近艺术画廊、设计商店和受欢迎的餐厅，设有1间室外餐厅，所有的客房均享有市景。</p>
                                            <p>Hotel Soho Grand酒店典雅的客房都提供免费无线网络连接、平面电视、DVD播放机、iPod基座、名牌浴袍和洗浴用品。客人可以在俱乐部客房、Grand酒吧和沙龙享受美式佳肴和特色鸡尾酒。室外的Yard餐厅季节性营业，提供夏季菜单。</p>
                                            <p>Soho Grand Hotel酒店设有24小时开放的健身房和商务中心。乐于助人的礼宾服务台亦提供24小时服务。运河街地铁站(Canal Street Subway Station)距离Soho Grand酒店有5分钟步行路程，方便客人轻松前往中央公园(Central Park)和时代广场(Times Square)。小意大利距离酒店有10分钟步行路程。</p>
                                            <p>退房时间12:00，睡个懒觉再收拾行李也来得及！旅友们喜爱苏活区的理由：餐厅、美食和购物。根据我们网站上的真实住客点评，这里是纽约的人气地区之一。 购物超赞！周边商店：Apple、 H&M、 Zara、 Prada、 Ralph Lauren。</p>
                                             ',
                            'logo' => '/images/hotels/hotel_Soho_NewYork_logo.jpg',
                            'gallery' => '/images/hotels/hotel_Soho_NewYork_banner.jpg;/images/hotels/hotel_Soho_NewYork_bottom1.jpg;/images/hotels/hotel_Soho_NewYork_bottom2.jpg'
                        ]),
                        factory(\App\Hotel::class)->make([
                            'name_en' => 'New York Marriott Marquis',
                            'name_cn' => '纽约马奎斯万豪酒店',
                            'desc_en' => 'Surround yourself with the sights and sounds of the city at New York Marriott Marquis. Get relaxed and energized simultaneously as you step into some of the largest guest rooms in NYC, amid the hustle and bustle of famed Broadway. Nestled in the heart of Times Square, our Broadway hotel in New York gives you easy access to the Javits Center, exciting shows and several subway lines to access any part of NYC. Located near Fifth Avenue shopping, Radio City Music Hall, Rockefeller Center, Central Park, Lincoln Center and Madison Square Garden, our hotel puts travelers in the midst of popular NYC attractions and business destinations. ',
                            'desc_cn' => '入住纽约马奎斯万豪酒店，尽情探索繁华纽约的迷人魅力。酒店位于繁华喧嚣的百老汇地区，客房宽敞舒适，在纽约市内独树一帜，欢迎您前来休闲放松、恢复活力。我们的酒店位于纽约百老汇地区，坐拥时代广场的中心地带，地理位置便利，信步可至贾维茨会议中心 (Javits Center)，方便观赏精彩表演，您亦可乘坐多条地铁线路轻松抵达纽约市各大热门场所。酒店地理位置优越，靠近第五大道购物区、无线电城音乐厅、洛克菲勒中心、中央公园、林肯中心和麦迪逊广场花园，可方便前往众多纽约风景名胜和商业场所。',
                            'body_en' => '
                                          <p>In the heart of Times Square and the Broadway theater district, this 4-star hotel features 3 dining options, including a revolving rooftop restaurant.</p>
                                          <p><strong>SHOPPING </strong>– The luxurious rooms at the New York Marriott Marquis have a spacious sitting area, an LCD TV with satellite channels and a stylish marble bathroom with a range of amenities. Select rooms offer a panoramic view of New York city.</p>
                                          <p><strong>DINING</strong>– Guests can enjoy continental cuisine at the popular revolving rooftop View Restaurant & Lounge, or have American cuisine at Crossroads American Kitchen & Bar. Alternatively, the Broadway Lounge offers cocktails and light refreshments on the hotels 8th floor, with views overlooking Times Square. The lobby on this floor has free WiFi.</p>
                                          <p><strong>ENTERTAINMENT</strong>– The Marriott Marquis also features a 4,000 square-foot fitness center, which also overlooks Times Square. The New York Marriott is just minutes from Fifth Avenue shops. Check-out is a relaxed 12:00 PM, so you can sleep in and really enjoy that morning cup o joe. This is our guests favorite part of New York City, according to independent reviews. In this area you can shop till you drop for popular brands like Apple, Tiffany & Co, H&M, Prada, Nike.</p>
                                           ',
                            'body_cn' => '
                                          <p>这家四星级酒店位于时代广场（Times Square）和百老汇（Broadway）剧院区的中心地带，设有3个餐饮场所，其中包括1间旋转屋顶餐厅。</p>
                                          <p>New York Marriott Marquis酒店的豪华客房设有一个宽敞的休息区、一台带卫星频道的液晶电视以及一间带各类用品的时尚大理石浴室。部分客房享有纽约市全景。</p>
                                          <p>客人可以在深受欢迎的View Restaurant & Lounge旋转屋顶餐厅及酒廊享用欧陆式美食，或在Crossroads American Kitchen & Bar美式厨房及酒吧享用美式菜肴。此外，酒店8楼的Broadway Lounge酒廊提供鸡尾酒和清淡的点心，并享有时代广场的景色。同样位于8楼的大堂设有免费Wi-Fi。</p>
                                          <p>Marriott Marquis酒店还设有一个4000平方英尺的健身中心，也俯瞰着时代广场。New York Marriott酒店距离第五大道（Fifth Avenue）的商店仅有几分钟路程。 退房时间12:00，睡个懒觉再收拾行李也来得及！根据我们网站上的真实住客点评，这里是纽约的人气地区之一。 购物超赞！周边商店：Apple、 Tiffany & Co、 H&M、 Prada、 Nike。</p>
                                           ',
                            'logo' => '/images/hotels/hotel_Marriott_NewYork_logo.jpg',
                            'gallery' => '/images/hotels/hotel_Marriott_NewYork_banner.jpg;/images/hotels/hotel_Marriott_NewYork_bottom1.jpg;/images/hotels/hotel_Marriott_NewYork_bottom2.jpg'
                        ]),
                        factory(\App\Hotel::class)->make([
                            'name_en' => 'The London NYC',
                            'name_cn' => '伦敦纽约酒店',
                            'desc_en' => 'A high-end hotel in the heart of Midtown, this high-rise is 2 blocks from the subway and within 4 blocks of Central Park and Times Square. The luxurious suites begin at 500 sq ft and have Italian linens, 2 flat-screen TVs and complimentary WiFi. The other suites increase in size, up to as much as 2,500 sq ft in the penthouse, and may add amenities such as full kitchens or an atrium.',
                            'desc_cn' => '伦敦纽约酒店为商务和休闲旅游游客而设计，位于得天独厚的中城西地区，是本市最受欢迎的酒店之一。 在这里，旅客们可轻松前往市区内各大旅游、购物、餐饮地点。 对于喜欢冒险的游客来说，科利尔维尔的齐格菲尔德剧院, 卡内基厅, 纽约游客和询问处再合适不过了。',
                            'body_en' => '
                                          <p>This Midtown Manhattan hotel is a 5-minute walk from Central Park. It features an on-site bar. Shops along Fifth Avenue are a 7-minute walk away.</p>
                                          <p><strong>SHOPPING </strong>– Luxurious rooms include a flat-screen cable TV, free WiFi, and an iPod dock. The London New York features plush bedding and linens. Select suites have views of Central Park. The London has a 24-hour health club with state-of-the-art equipment. The concierge team can arrange a variety of services throughout the city. Guests can enjoy evening cocktails and afternoon tea at The London Bar.</p>
                                          <p><strong>DINING</strong>– Times Square and Rockefeller Center are both a 10-minute walk away. Check-out is a relaxed 12:00 PM, so you can sleep in and really enjoy that morning cup joe.</p>
                                          <p><strong>ENTERTAINMENT</strong>– This is our guests favorite part of New York City, according to independent reviews. In this area you can shop till you drop for popular brands like Apple, Tiffany & Co, H&M, Prada, Nike.</p>
                                           ',
                            'body_cn' => '
                                          <p>这间位于曼哈顿Midtown的酒店距离中央公园有5分钟步行路程，内设酒吧，距离第五大道上的商店有7分钟步行路程。</p>
                                          <p>豪华的客房配有一台平板有线电视、免费WiFi以及一个iPod基座。London New York酒店提供被子和床单。部分套房享有中央公园的景致。London酒店设有带先进设备的24小时健康俱乐部。礼宾团队可以为客人安排城市各处的服务。客人可以在London Bar酒吧享用晚间鸡尾酒和下午茶。</p>
                                          <p>时代广场（Times Square）和洛克菲勒中心（Rockefeller Center）距离酒店均有10分钟步行路程。</p>
                                          <p>退房时间12:00，睡个懒觉再收拾行李也来得及！根据我们网站上的真实住客点评，这里是纽约的人气地区之一。 购物超赞！周边商店：Apple、 Tiffany & Co、 H&M、 Prada、 Nike </p>
                                           ',
                            'logo' => '/images/hotels/hotel_LondonNYC_lasvagas_logo.jpg',
                            'gallery' => '/images/hotels/hotel_LondonNYC_lasvagas_banner.jpg;/images/hotels/hotel_LondonNYC_lasvagas_bottom1.jpg;/images/hotels/hotel_LondonNYC_lasvagas_bottom2.jpg'
                        ]),
                    ]);
                });
    }
}
