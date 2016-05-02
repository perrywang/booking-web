<?php

use Illuminate\Database\Seeder;

class ActivitiesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $city = \App\City::firstOrNew([]);

        $city->activities()->saveMany([
            factory(\App\Activity::class)->make([
                'name_en' => 'The New Yorker Helicopter Tour',
                'name_cn' => '纽约直升飞机观光游',
                'desc_en' => 'The New Yorker Helicopter Tour',
                'desc_cn' => '★ 全新观光直升飞机，透过超大观光玻璃，让您从高空以绝佳视线俯瞰纽约美景
                              ★ 天空之旅将带您游览自由女神像、帝国大厦、中央公园、布鲁克林大桥等著名景点，别有一番趣味
                              ★ 全纽约最美的风景，尽在纽约观光直升飞机之旅',
                'body_en' => '<p>All aboard for a fantastic birds-eye view of the magic isle of Manhattan. Experience the beauty of the New York Harbor including an up-close view of the Statue of Liberty. Your journey in the sky will take you near the 120 year old Brooklyn Bridge, South Street Seaport, Governors Island and Ellis Island.<br><br>You will make your way up the Hudson River and enjoy the sights of the Chrysler and Empire State Buildings, World Financial Center, Chelsea Piers, Jacob Javits Convention Center, the Intrepid Sea, Air and Space Museum, Time Warner Center and Central Park. Dont forget about the New Jersey Coast including the Goldman Sachs Tower, Colgate Clock, Liberty State Park and you will also view Ground Zero.<br><br>All this and more of the dramatic New York skyline makes this tour a must for any visitor.<br><br>Meeting/pick-up point: Downtown Manhattan Heliport Pier 6 – East River, New York, NY 10004. Please call the Helicopter Flight Services 24-48 hours before your tour date to reconfirm your departure time.<br><br>Duration: 15 minutes.<br><br>Start/opening time: Monday-Saturday from 9:00am to 6:00pm and 9:00 am to 4:00 pm on Sundays. Please ensure you arrive at the meeting point at least 30 minutes prior to the tour start time.<br><br>Languages: English.<br><br>Others: Children under 2 years old must sit in an adults lap. All bags are subject to inspection. All passengers will view a safety video before flying. Only cameras and pocket wallets are permitted on the helicopters. Bags/purses must be locked up.</p>',
                'body_cn' => '<p>【概况】<br><br>
                                 ★ 全新观光直升飞机，透过超大观光玻璃，让您从高空以绝佳视线俯瞰纽约美景<br>
                                 ★ 天空之旅将带您游览自由女神像、帝国大厦、中央公园、布鲁克林大桥等著名景点，别有一番趣味<br>
                                 ★ 全纽约最美的风景，尽在纽约观光直升飞机之旅<br><br>

                                 【产品介绍】<br><br>
                                 全新的观光直升飞机，最多可容纳7人，大型的透明窗户，可360度赏纽约美景。坐着机舱舒适的皮椅，自由伸展双腿，透过专门设计的超大观光玻璃机舱门，以180度的绝佳视线来俯瞰纽约，尽赏纽约港美景，近距离观看自由女神像。天空之旅将带您接近有120多年历史的布鲁克林大桥，还有南街海港、总督岛和埃利斯岛。乘着直升飞机，掠过哈德逊河上空，欣赏令人震撼的克莱斯勒大厦、帝国大厦、环球金融中心、切尔西码头、无畏号航天航空博物馆、时代华纳中心和中央公园等纽约客耳熟能详的地标性建筑和景点。当然，新泽西的海港、高盛大厦、科尔盖特钟、自由州立公园和世贸遗址也都尽收眼底。<br>
                                 全纽约最美的风景，尽在纽约观光直升飞机之旅。直升飞机将带您以不一样的视角鸟瞰纽约，欣赏纽约别样的美，快来给自己一个自由的空中之旅吧！<br><br>

                                 【机票类型】<br><br>
                                 * The New Yorker<br>
                                 时间：12-15分钟<br>
                                 途经景点：自由女神像、埃利斯岛、自由塔、环球金融中心、克莱斯勒大厦、帝国大厦、切尔西码头、大无畏航天航空博物馆等<br>
                                 * The Ultimate Tour<br>
                                 时间：18-20分钟<br>
                                 途经景点：中央公园、哥伦比亚大学、洋基体育场、新泽西州帕利塞兹、乔治华盛顿大桥、自由女神像、埃利斯岛、自由塔、环球金融中心、克莱斯勒大厦、帝国大厦、切尔西码头、大无畏航天航空博物馆等<br>
                                 * The Deluxe Tour<br>
                                 时间：28-30分钟<br>
                                 途经景点：康尼岛、布鲁克林&新泽西、维拉萨诺大桥、曼哈顿北端、资助墓、中央公园、哥伦比亚大学、洋基体育场、新泽西州帕利塞兹、乔治华盛顿大桥、自由女神像、埃利斯岛、自由塔、环球金融中心、克莱斯勒大厦、帝国大厦、切尔西码头、大无畏航天航空博物馆等<br><br>

                                 【地点】<br><br>
                                 地点：Downtown Manhattan Heliport, Pier 6, East River & South Street(位于South Street Seaport和the Staten Island Ferry Terminal 之间)<br><br>

                                 【推荐交通】：地铁<br><br>
                                 - 方案一：乘坐地铁R到Whitehall Street，向东走至South Street，然后沿着东河向北走，直升飞机就在右侧，5分钟可达；<br>
                                 - 方案二：乘坐地铁#1到South Ferry，沿着东河向北走(朝着绿色大厦方向)，直升飞机就在右侧，4分钟可达；<br>
                                 - 方案三：地铁#4、#5到Bowling Green，向Staten Island Ferry走，左转进入South Street，直升飞机就在右侧，8分钟可达。<br><br>

                                 【开放时间】<br><br>
                                 * 周一到周六：9:00am-5:00pm<br><br>
                                 * 周日：10:00am-4:00pm<br><br>

                                 【温馨提示】<br><br>
                                 * 请提前半个小时到达乘坐直升飞机的地点</p>',
                'poster' => '/images/activities/Activity-NewYork1-3.jpg',
                'gallery' => '/images/activities/Activity-NewYork1-1.jpg;/images/activities/Activity-NewYork1-2.jpg;/images/activities/Activity-NewYork1-3.jpg;/images/activities/Activity-NewYork1-4.jpg;/images/activities/Activity-NewYork1-5.jpg'
            ]),
            factory(\App\Activity::class)->make([
                'name_en' => 'Spirit Of New York Cruise',
                'name_cn' => '纽约之星邮轮',
                'desc_en' => 'Spirit Of New York Cruise',
                'desc_cn' => '★ 全新观光邮轮，透过超大观光玻璃，让您从高空以绝佳视线俯瞰纽约美景
                              ★ 天空之旅将带您游览自由女神像、帝国大厦、中央公园、布鲁克林大桥等著名景点，别有一番趣味
                              ★ 全纽约最美的风景，尽在纽约观光邮轮之旅',
                'body_en' => '<p>The Spirit of New York on delivers a highly entertaining and unique combination of dining, dancing and entertainment accompanied by spectacular views of the Manhattan skyline. Sailing year-round from Chelsea Piers, the Spirit of New York offers lunch, brunch, dinner, cocktails, moonlight cruises and much, much more!<br>
                                 On this cruise, you will get a different perspective of New York from the luxury liners as you admire great views of the Manhattan skyline from New York harbour. Come aboard and enjoy the most unique and fun dining experience in Manhattan. The two-hour lunch cruise on the Hudson is ideal for an afternoon getaway. The dinner cruise is the perfect night out in a vibrant setting enhanced by dazzling city sights and harbour lights. You will be spoiled for choice on this cruise. Come aboard and enjoy the most entertaining experience in Manhattan on a lunch or dinner cruise.<br>
                                 Meeting point: Chelsea Pier, West 23rd Street and 12th Avenue, Pier 61.<br>
                                 Duration: Lunch cruise is approximately 2 hours and Dinner cruise is approximately 3 hours.<br>
                                 Start time: Lunch cruise at 12:00pm and Dinner cruise at 7:00pm. Boarding is 30 minutes prior to departure time. Cruise times are subject to change.<br>
                                 Attire: It is strongly suggested that men wear a jacket. For women, evening or business attire are recommended. T-shirts, jeans, shorts and trainers are not permitted.</p>',
                'body_cn' => '<p>【概况】<br><br>
                                 ★ 全新观光邮轮，透过超大观光玻璃，让您从高空以绝佳视线俯瞰纽约美景<br>
                                 ★ 天空之旅将带您游览自由女神像、帝国大厦、中央公园、布鲁克林大桥等著名景点，别有一番趣味<br>
                                 ★ 全纽约最美的风景，尽在纽约观光邮轮之旅<br><br>

                                 【产品介绍】<br><br>
                                 全新的观光邮轮，最多可容纳7人，大型的透明窗户，可360度赏纽约美景。坐着机舱舒适的皮椅，自由伸展双腿，透过专门设计的超大观光玻璃机舱门，以180度的绝佳视线来俯瞰纽约，尽赏纽约港美景，近距离观看自由女神像。天空之旅将带您接近有120多年历史的布鲁克林大桥，还有南街海港、总督岛和埃利斯岛。乘着邮轮，掠过哈德逊河上空，欣赏令人震撼的克莱斯勒大厦、帝国大厦、环球金融中心、切尔西码头、无畏号航天航空博物馆、时代华纳中心和中央公园等纽约客耳熟能详的地标性建筑和景点。当然，新泽西的海港、高盛大厦、科尔盖特钟、自由州立公园和世贸遗址也都尽收眼底。<br>
                                 全纽约最美的风景，尽在纽约观光邮轮之旅。邮轮将带您以不一样的视角鸟瞰纽约，欣赏纽约别样的美，快来给自己一个自由的空中之旅吧！<br><br>

                                 【邮轮类型】<br><br>
                                 * The New Yorker<br>
                                 时间：12-15分钟<br>
                                 途经景点：自由女神像、埃利斯岛、自由塔、环球金融中心、克莱斯勒大厦、帝国大厦、切尔西码头、大无畏航天航空博物馆等<br>
                                 * The Ultimate Tour<br>
                                 时间：18-20分钟<br>
                                 途经景点：中央公园、哥伦比亚大学、洋基体育场、新泽西州帕利塞兹、乔治华盛顿大桥、自由女神像、埃利斯岛、自由塔、环球金融中心、克莱斯勒大厦、帝国大厦、切尔西码头、大无畏航天航空博物馆等<br>
                                 * The Deluxe Tour<br>
                                 时间：28-30分钟<br>
                                 途经景点：康尼岛、布鲁克林&新泽西、维拉萨诺大桥、曼哈顿北端、资助墓、中央公园、哥伦比亚大学、洋基体育场、新泽西州帕利塞兹、乔治华盛顿大桥、自由女神像、埃利斯岛、自由塔、环球金融中心、克莱斯勒大厦、帝国大厦、切尔西码头、大无畏航天航空博物馆等<br><br>

                                 【地点】<br><br>
                                 地点：Downtown Manhattan Heliport, Pier 6, East River & South Street(位于South Street Seaport和the Staten Island Ferry Terminal 之间)<br><br>

                                 【推荐交通】：地铁<br><br>
                                 - 方案一：乘坐地铁R到Whitehall Street，向东走至South Street，然后沿着东河向北走，直升飞机就在右侧，5分钟可达；<br>
                                 - 方案二：乘坐地铁#1到South Ferry，沿着东河向北走(朝着绿色大厦方向)，直升飞机就在右侧，4分钟可达；<br>
                                 - 方案三：地铁#4、#5到Bowling Green，向Staten Island Ferry走，左转进入South Street，直升飞机就在右侧，8分钟可达。<br><br>

                                 【开放时间】<br><br>
                                 * 周一到周六：9:00am-5:00pm<br><br>
                                 * 周日：10:00am-4:00pm<br><br>

                                 【温馨提示】<br><br>
                                 * 请提前半个小时到达乘坐邮轮的地点</p>',
                'poster' => '/images/activities/Activity-NewYork2-1.jpg',
                'gallery' => '/images/activities/Activity-NewYork2-1.jpg;/images/activities/Activity-NewYork2-2.jpg;/images/activities/Activity-NewYork2-3.jpg;/images/activities/Activity-NewYork2-4.jpg;/images/activities/Activity-NewYork2-5.jpg'
            ]),
            factory(\App\Activity::class)->make([
                'name_en' => 'Red Rock Canyon Jeep Tour',
                'name_cn' => '红岩峡谷观光购物游',
                'desc_en' => 'Red Rock Canyon Jeep Tour',
                'desc_cn' => '红石峡谷国家保护区,只有很小的地域,却拥有如此吸引人的风景，它也通常被选为电影和广告的背景。
                              沿途开车13英里，你会看见令人难忘的威尔逊悬崖,由自然推力形成的梯形结构，拥有了6500万年的历史。地质特征非常丰富,包括色彩斑斓的化石沙丘。
                              在游客中心可停留一小伙儿，您可以欣赏到许多有趣的展品，还可以在礼品店购物。',
                'body_en' => '<p>Tour Highlights:
                                  Spring Mountain Range
                                  Calico Hills
                                  Red Rock Overlook
                                  Wilson Cliffs Keystone Thrust
                                  National Park Visitor Center
                                  RED ROCK CANYON CLASSIC TOUR: Morning and afternoon departures available.
                                 TOUR TIME: 4 hours
                                  PRICE: Was $100 – Now $85 USD per person
                                 TOUR INCLUDES:
                                  Personally guided and narrated tour
                                  Unlimited Complimentary Water
                                  All fees included
                                  Small group experience
                                  Complimentary hotel pick-up and drop-off</p>',
                'body_cn' => '<p>【概况】<br><br>
                                 欢迎您跟随Pink Jeep Tours一起探索独特而令人兴奋的旅游方式，它将给您带来一辈子的回忆！乘搭我们定制的豪华粉红吉普车一定比自驾游有趣得多！<br>
                                 Pink Jeep Tours提供海陆空三合一体验，骑马，前往死亡谷探险，越野到红岩峡谷一定令你乐而忘返！<br>

                                 国家自然保护区（大概5个小时）<br>
                                 这必定是一个刺激的升级！参加这次在拉斯维加斯边的西部探险！踏上我们有名的开篷吉普车，体验红石公园的优美景观。 <br>
                                 我们也会踏上石隙路，一条只有越野车可以到达的路。<br>
                                 行程包括水。早上中午游可供选择。<br><br>
                                 【出发时间】：<br><br>
                                 -- 8:00点 (PVM) <br>
                                 -- 11:00点 (PVX) <br><br>
                                 【行程亮点】：<br><br>
                                 •洛基峡道<br>
                                 •印花布山<br>
                                 •威尔逊峭壁/梯形推力<br>
                                 •国家公园游客中心</p>',
                'poster' => '/images/activities/Activity-LasVagas1-3.jpg',
                'gallery' => '/images/activities/Activity-LasVagas1-1.jpg;/images/activities/Activity-LasVagas1-2.jpg;/images/activities/Activity-LasVagas1-3.jpg;/images/activities/Activity-LasVagas1-4.jpg;/images/activities/Activity-LasVagas1-5.jpg'
            ]),
            factory(\App\Activity::class)->make([
                'name_en' => 'Zarkana - Cirque du Soleil',
                'name_cn' => 'Zarkana - 太陽馬戲團',
                'desc_en' => 'Zarkana - Cirque du Soleil',
                'desc_cn' => 'Zarkana - Cirque du Soleil是太阳马戏团在拉斯维加斯的阿瑞雅赌场度假村上演的Zarkana剧目。
                              剧目的背景设置在一个身体能力非凡的世界里，主角Zark为了重新获得他的力量和找到他的爱人，在那个废弃的剧院里，到处都是身怀绝技的稀奇古怪的杂技演员。
                              这是一个引人入胜的盛会，让你看得目不暇接！ 更多信息和预约请查询官网。',
                'body_en' => '<p>Prepare to be blown away by Zarkana, an acrobatic rock extravaganza from world-renowned Cirque du Soleil. Performed exclusively at the Aria Resort and Casino at CityCenter in Las Vegas, Zarkana blends</p>',
                'body_cn' => '<p>【描述】:<br><br>
                                  太陽劇團的 Zarkana 是一個極具視覺衝擊力的現代雜技表演，它對體能的運用達到了非凡的境界。<br>
                                  故事隨著魔術師 Zark 恢複魔力並重新得到生命的摯愛而展開，他置身于一個人才輩出的劇院中，這里充斥著各種異乎尋常的角色和無可比擬的雜技演員。<br>
                                  為其顛覆極限的華麗表演所折服，讓您嘆為觀止！<br>
                                  客人必須年滿5周歲才能觀看此秀。<br><br>
                                 【演出時間】:<br><br>
                                  每晚7:00pm，9:30pm （除周日，周一) <br><br>
                                 【演出地點】:<br><br>
                                  Aria （阿麗雅酒店）<br><br>
                                 【演出時長】:<br><br>
                                  90分鐘左右<br><br>
                                 【取票方式】：<br><br>
                                  請貴賓至少在演出時間前60分鐘到該酒店Box Office憑有效帶照片ID及去旅游網確認號碼與該酒店的秀場工作人員直接換票。<br>
                                  客人可選擇送票服務：$10/次。秀票將送至您的拉斯維加斯酒店。請在預定時填寫您的拉斯維加斯酒店的詳細地址。</p>',
                'poster' => '/images/activities/Activity-LasVagas2-1.jpg',
                'gallery' => '/images/activities/Activity-LasVagas2-1.jpg;/images/activities/Activity-LasVagas2-2.jpg;/images/activities/Activity-LasVagas2-3.jpg;/images/activities/Activity-LasVagas2-4.jpg;/images/activities/Activity-LasVagas2-5.jpg'
            ]),
            factory(\App\Activity::class)->make([
                'name_en' => 'Exotic Race Cars Las Vegas',
                'name_cn' => '拉斯维加斯超级跑车赛道驾驶体验',
                'desc_en' => 'Exotic Race Cars Las Vegas',
                'desc_cn' => '从法拉利、兰博基尼、阿斯顿.马丁、保时捷、奥迪到雪佛兰Corvette、梅塞德斯奔驰，40多辆高端跑车、超过15种型号，1.9千米专用赛道，由获得5次法国赛车冠军的Romain Thievin和美国赛车协会欧洲赛车队冠军David Perisset设计，包括7个弯道和一个长0.5千米的直道，给您在平常道路上所不能获得的超级超车体验！
                              到达后，工作人员会作一个简短的介绍，然后是约30分钟的技术指导，学习驾驶赛车需要了解的方法和技巧。接下来坐上保时捷SUV，作为乘客，熟悉赛道，指导员会向您展示所有刚刚学习的驾驶技巧。接着，由参与者驾驶赛车，指导员在副驾驶随同，确保您的安全及最棒的驾驶体验！结束后参与者获得一份参与证明书。',
                'body_en' => '<p>Exotics Racing® is the most exciting attraction in Las Vegas & Los Angeles! Have you ever wanted to drive a supercar on a racetrack? We offer the largest fleet of exotic supercars from Ferrari, Lamborghini, Porsche, Aston Martin, Audi R8, Mercedes-AMG GT S, Corvette Z06, and the Nissan GT-R. Take the wheel of these incredible machines and push their performance to the limit with one-on-one coaching from a professional racing instructor!</p>',
                'body_cn' => '<p>【产品介绍】<br><br>
                                 从法拉利、兰博基尼、阿斯顿.马丁、保时捷、奥迪到雪佛兰Corvette、梅塞德斯奔驰，40多辆高端跑车、超过15种型号，1.9千米专用赛道，由获得5次法国赛车冠军的Romain Thievin和美国赛车协会欧洲赛车队冠军David Perisset设计，包括7个弯道和一个长0.5千米的直道，给您在平常道路上所不能获得的超级超车体验！<br>
                                 到达后，工作人员会作一个简短的介绍，然后是约30分钟的技术指导，学习驾驶赛车需要了解的方法和技巧。接下来坐上保时捷SUV，作为乘客，熟悉赛道，指导员会向您展示所有刚刚学习的驾驶技巧。接着，由参与者驾驶赛车，指导员在副驾驶随同，确保您的安全及最棒的驾驶体验！结束后参与者获得一份参与证明书。<br><br>
                                 Ferrari F430 F1<br>
                                 法拉利媒体代表Davide Kluzer说：“说法拉利跑车快就与说水是湿的一样，但F430 F1显然不止于此。”从坐进这一纯正意大利超级“野马”那一刻开始，F430 F1带给您的感受便是它不只是一辆超级超车，而且是一件艺术品。宾尼法利纳风格的铝合金车身设计令人回想起1960年代的法拉利赛车车型。搭载4.3升V8引擎，每分钟8500转数，可产生490马力，最高时速318公里。设计开发吸收F1赛车的技术，作为一部中置后驱的跑车，F430公认为是最美的法拉利汽车。<br><br>
                                 Ferrari 458 Italia<br>
                                 458 Italia是F430车型的延续和升级版，是法拉利迈向更高层次的一个力作。浑身上下都洋溢着意大利风格并代表了其最先进的造车工艺。一百公里加速时间不到3.4秒，最高时速325公里。中置引擎、后轮驱动，配备4.5升V8引擎，核心技术来自F1赛车，加上前F1冠军迈克尔.舒马赫亲自参与到新车的设计中来，在操控性能的升级上提供了宝贵意见，使该车的驾驶性能获得进一步提升。<br><br>
                                 Lamborghini Huracan <br>
                                 Huracan搭载V10自然吸气发动机和四驱系统，马力超600bhp，极速突破320 km/h。车名Huracan是19世纪的一头西班牙斗牛，因力量和勇气而闻名，而Lamborghini Huracan也做出最大的努力来达到名至实归。将高性能与日常道路上的驾驶友善度、豪华与运动完美结合，拥有赛车级的精度和出类拔萃的刚性。<br><br>
                                 Porsche 991 GT3<br>
                                 保时捷911系列跑车自50多年前诞生开始，就一直是超级超车世界的基准。新一代保时捷911 GT3是一款为赛道而生的公路跑车。搭载3.8升自然吸气发动机，最高速每小时313km。0-100km/h加速时间仅3.5秒，使之成为世界上最快的超级跑车之一。作为第五代最新设计，提升的不仅是性能，也是驾驶的乐趣，更加纯粹、迅捷、精准、活跃。<br><br>
                                 Audi R8 V10 <br>
                                 搭载5.2升V10引擎，最高功率为525马力，最大扭矩530牛米，0-100km/h加速时间为3.7秒，最高时速315km。圆滑无比的外观造型，在车身上很难找到一丝直角转折。奥迪R8是最容易上手的超级跑车，没有复杂的稳定系统、没有难以驾驭的感觉，如精美艺术品般迷人的终极运动机器，奥迪品牌再次证明了极致运动与尊贵品质完全可以并驾齐驱。<br><br>
                                 Lamborghini Gallardo<br>
                                 兰博基尼之所以能够取得如此巨大的成就，和它极其科幻、前卫的外形有着很大关系，随处可见的直线条设计绝对是兰博基尼所独有的。Gallardo是西班牙的一个斗牛品种的名字。搭载5.2升V10发动机，最高时速321公里，最大功率为550马力，0-100km/h加速时间仅3.9秒。Gallardo是兰博基尼旗下的入门级跑车，被称为“小牛”。也是电影《极速无间》、《碟中谍3》中的主角之一。<br><br>

                                 【价格说明】<br><br>

                                 费用包含：<br>
                                 驾驶体验可选择车型：<br>
                                 * 法拉利Ferrari 458 Italia（5圈）<br>
                                 * 法拉利Ferrari F430 F1（5圈）<br>
                                 * 兰博基尼Lamborghini Huracán（5圈）<br>
                                 * 兰博基尼Lamborghini Gallardo（5圈）<br>
                                 * 保时捷Porsche 991 GT3 （5圈） <br>
                                 * 奥迪Audi R8 V10 （5圈）<br>
                                 * 法拉利Ferrari 458 Italia+兰博基尼Lamborghini Huracán（10圈）<br>
                                 * 法拉利Ferrari 458 Italia+兰博基尼Lamborghini Huracán+保时捷Porsche 991 GT3（15圈）<br>
                                 * 工作人员信息登记（15分钟）<br>
                                 * 驾驶人员技术指导（30分钟）<br>
                                 * 预览赛道（15分钟，含专业驾驶员）<br>
                                 * 发放证书<br>
                                 * 提供头盔和保险<br>
                                 自费可选：<br>
                                 * 车载视频（可用USB拷贝带走）<br>
                                 * 雪佛兰Corvette Z06 漂移体验（2圈，含专业驾驶员）<br>
                                 注：含专业驾驶员，则表示游客只能作为乘客坐在车里体验，游客自己不能驾驶。<br><br>

                                 【行程特色】<br><br>

                                 * 世界上最大的超跑车队<br>
                                 * 专业的赛车指导<br>
                                 * 专属赛道上驾驶超跑体验<br>
                                 * 2013-2015年拉斯维加斯最佳运营商<br>
                                 * 2012-2015年到到网“卓越奖”获得者<br>
                                 * 超过160000名参与者的选择<br><br>

                                 【行程说明】<br><br>

                                 1、每周7天开放<br>
                                 2、可选时间：<br>
                                 9:30am，10:30am，11:30am，1:00pm，2:00pm，3:00pm，4:00pm<br>
                                 3、洛杉矶（Los Angeles）同样可参加超跑驾驶体验：<br>
                                 地点：9300 Cherry Avenue, Fontana, CA 92335<br>
                                 4、星期六开放，可选时间：<br>
                                 9:30am，10:30am，11:30am，1:00pm，2:00pm，3:00pm<br>
                                 5、提供Aria Hotel和Wynn Hotel的往返接送，接送详情如下：<br>
                                 （左边红色字体为您选择的活动时间，右边黑色字体为酒店出发时间）<br><br>

                                 【温馨提示】<br> <br>

                                 1.驾驶赛车者需18岁及以上，到达时需出示有效的驾驶证件。身高高于130cm的儿童可参加Corvette乘客体验。<br>
                                 2.请穿着舒适的衣服、封闭的鞋子，禁止人字拖和露趾鞋。<br>
                                 3.整个过程需要2小时左右，若想要驾驶15圈以上，请计划半天的时间。<br>
                                 4.所有的跑车都配备了确切的安全装置和轮胎，在下雨天也能进行。若遇到极端恶劣天气迫使关闭，运营公司会安排改期，接下来的2个月内可前往体验。<br>
                                 5.熟悉赛道时，随行人员可陪同参与者，需付费$20。<br>
                                 特别提示：由于该产品特别受欢迎，位置特别紧张。为了您能够顺利出行，请尽早预订，并在预订时一定要向客服确认是否有位置。<br><br>

                                 【退改说明】<br><br>
                                 修改政策：提前17天及以上修改，不收取费用；提前1-17天修改，收取15%的费用；体验当天修改收取30%的费用。<br>
                                 退订政策：提前4天及以上取消预订，不收取费用；提前4天内取消，收取100%的费用。</p>',
                'poster' => '/images/activities/Activity-LasVagas3-1.jpg',
                'gallery' => '/images/activities/Activity-LasVagas3-1.jpg;/images/activities/Activity-LasVagas3-2.jpg;/images/activities/Activity-LasVagas3-3.jpg;/images/activities/Activity-LasVagas3-4.jpg;/images/activities/Activity-LasVagas3-5.jpg'
            ]),
        ]);
    }
}
