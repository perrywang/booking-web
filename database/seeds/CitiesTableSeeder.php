<?php

use Illuminate\Database\Seeder;

class CitiesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $country = App\Country::all()->each(function($country){
          switch ($country['name_en']) {
////////////////////////China/////////////////////
/////////////////////////////////////////////////
            case 'China':

              break;

//////////////////USA////////////////////////////
////////////////////////////////////////////////
            case 'United States':
            $country->cities()->saveMany([
              factory(\App\City::class)->make([
                  'name_cn' => '拉斯维加斯',
                  'name_en' => 'LasVegas',
                  'heat'    => 4,
                  'thumbnail'=> '/images/thumbnails/lasvegas.jpg',
                  'logo' => '/images/thumbnails/lasvegas.jpg',
                  'slider' => '/images/cities/lasvegas1.jpg;/images/cities/lasvegas2.jpg',
                  'slider_caption_cn' => '欢迎来到拉斯维加斯;出发前请及早预定以获得最佳优惠',
                  'slider_caption_en' => 'Welcome to Las Vegas;Book your Activities and Sightseeing Tours before you go.',
                  'body_cn' => '<p>拉斯维加斯位于内华达州的莫哈韦沙漠里，是一个以拥有不懈活力而闻名的度假胜地，有24小时营业的娱乐场和无尽的娱乐项目。其焦点是在拉斯维加斯大道，仅有4个多英里长，但是遍布精致的主题酒店，如金字塔形的卢克索酒店和有完整大运河的威尼斯酒店;以及豪华度假村包括有标志性音乐喷泉的贝拉吉欧酒店等;当然还有拉斯维加斯最出名的无数娱乐场。</p>
                      <p>也许最早到达拉斯维加斯地区的游客是游牧的古印第安人，他们在这里走过并留下一万年前的岩画。</p>
                      <p>一位名为拉斐尔·里维拉的年轻墨西哥探险家据信作为第一个非北美土著人来到这里。而后的1829年，商人安东尼率领一个60人的商团沿着“西班牙小径”前往洛杉矶时经过这里，并把该地区被命名为拉斯维加斯：西班牙语“草地”的意思，因为它拥有丰富的野草，以及沙漠的泉水，为前往西部大开发的拓荒者们准备了一个营地。而1844年约翰C.</p>
                      <p>弗里蒙特，其有关拉斯维加斯的著作引诱了大批拓荒者到来。后来，拉斯维加斯市中心的弗里蒙特街因此而得名。</p>
                      <p>十一年后的摩门教教会的成员选择拉斯维加斯作为盐湖城和洛杉矶之间的中继站，在那里他们建立了物资供应的城堡。数年后， 该城堡被遗弃。但是该遗址还可以在拉斯维加斯大道和华盛顿大道的交汇处残存。</p>
                      <p>拉斯维加斯成立于1905年，与联合太平洋铁轨接壤的110英亩（45公顷）土地被拍卖成为市区。 1911年，拉斯维加斯成为了一个城市。</p>
                      <p>对于拉斯维加斯而言，1931年是关键的一年。当时，内华达州将赌博合法化，同时在附近开建胡佛水坝。建筑工人及其家属的大量涌入帮助拉斯维加斯避免了大萧条。该大坝于1935年竣工。</p>
                      <p>1941年，拉斯维加斯陆军航空兵学院成立，即目前的内利斯空军基地，这里的著名飞行表演队是"雷鸟"。</p>
                      <p>第二次世界大战之后，装饰华丽的酒店、博彩业和大牌娱乐成了拉斯维加斯的代名词。</p>
                      <p>1951年，第一颗原子弹在拉斯维加斯西北部65英里（105公里）的沙漠中爆炸。城市的居民和游客都能够亲眼目睹蘑菇云。</p>
                      <p>标志性的“欢迎来到拉斯维加斯”的标识以前并不存在，后来由贝蒂·威利斯，在1959年创建。</p>',
                  'body_en' => '<p>Las Vegas, in Nevada’s Mojave Desert, is a resort town famed for its buzzing energy, 24-hour casinos and endless entertainment options. Its focal point is the Strip, just over 4 miles long and lined with elaborate theme hotels such as the pyramid-shaped Luxor and the Venetian, complete with Grand Canal; luxury resorts including the Bellagio, set behind iconic dancing fountains; and innumerable casinos.</p>
                                <p>Perhaps the earliest visitors to the Las Vegas area were nomadic Paleo-Indians, who traveled here 10,000 years ago, leaving behind petroglyphs. Anasazi and Paiute tribes followed at least 2,000 years ago.<br><br>A young Mexican scout named Rafael Rivera is credited as the first non-Native American to encounter the valley, in 1829. Trader Antonio Armijo led a 60-man party along the Spanish Trail to Los Angeles, California in 1829. The area was named Las Vegas, which is Spanish for "the meadows", as it featured abundant wild grasses, as well as desert spring waters for westward travelers. The year 1844 marked the arrival of John C. Fremont, whose writings helped lure pioneers to the area. Downtown Las Vegas\' Fremont Street is named after him.<br><br>Eleven years later members of the LDS Church chose Las Vegas as the site to build a fort halfway between Salt Lake City and Los Angeles, where they would travel to gather supplies. The fort was abandoned several years afterward. The remainder of this Old Mormon Fort can still be seen at the intersection of Las Vegas Boulevard and Washington Avenue.<br><br>Las Vegas was founded as a city in 1905, when 110 acres (45 ha) of land adjacent to the Union Pacific Railroad tracks were auctioned in what would become the downtown area. In 1911, Las Vegas was incorporated as a city.<br><br>1931 was a pivotal year for Las Vegas. At that time, Nevada legalized casino gambling and reduced residency requirements for divorce to six weeks. This year also witnessed the beginning of construction on nearby Hoover Dam. The influx of construction workers and their families helped Las Vegas avoid economic calamity during the Great Depression. The construction work was completed in 1935.<br><br>In 1941, the Las Vegas Army Air Corps Gunnery School was established. Currently known as Nellis Air Force Base, it is home to the aerobatic team called the Thunderbirds.<br><br>Following World War II, lavishly decorated hotels, gambling casinos and big-name entertainment became synonymous with Las Vegas.<br><br>The 1950s saw the opening of the Moulin Rouge, the first racially integrated casino-hotel in Las Vegas.<br><br>In 1951, the first atomic bomb was detonated at the Nevada Test Site, 65 miles (105 km) northwest of Las Vegas. City residents and visitors were able to witness the mushroom clouds until 1963 when the limited Test Ban Treaty required that nuclear tests be moved underground.<br><br>The iconic "Welcome to Las Vegas" sign, which was never located in the city, was created in 1959 by Betty Willis, who never copyrighted it.</p>
                                ',
                  'package_cn' => '<table class="ui celled table">
                          <thead>
                              <tr>
                                  <th colspan="2">所有中国电信客户，只要订了“机+酒”套票，并至少在拉斯维加斯连住5晚及以上，将获得以下免费赠品：</th>
                              </tr>
                          </thead>
                          <tbody>
                              <tr>
                                  <td>
                                      <i class="large green checkmark icon"></i>
                                      在FASHION SHOW里使用的100美金用餐卡以及免费的购物护照
                                  </td>
                                  <td>
                                      <i class="large green checkmark icon"></i>
                                      在部分全世界最好的零售商享受超高折扣!
                                  </td>
                              </tr>
                              <tr>
                                  <td>
                                      <i class="large green checkmark icon"></i>
                                      享受大运河商场购物折扣
                                  </td>
                                  <td>
                                      <i class="large green checkmark icon"></i>
                                      在Berger and Sons珠宝店的10%折扣
                                  </td>
                              </tr>
                              <tr>
                                  <td>
                                      <i class="large green checkmark icon"></i>
                                      “买一送一”直升机畅游拉斯维加斯大道
                                  </td>
                                  <td>
                                      <i class="large green checkmark icon"></i>
                                      太阳马戏团表演门票50%折扣
                                  </td>
                              </tr>
                              <tr>
                                  <td>
                                      <i class="large green checkmark icon"></i>
                                      Range 72 的75折之折扣券
                                  </td>
                                  <td>
                                      <i class="large green checkmark icon"></i>
                                      夜总会的VIP准入许可
                                  </td>
                              </tr>
                          </tbody>
                          <tfoot>
                              <tr>
                                  <th colspan="2">总共价值超过5000美金！</th>
                              </tr>
                          </tfoot>
                      </table>',
                  'package_en' => '<table class="ui celled table">
                          <thead>
                              <tr>
                                  <th colspan="2">Every PICC customer that books a minimum of 5 nights will qualify for the following Exclusive Offers:</th>
                              </tr>
                          </thead>
                          <tbody>
                              <tr>
                                  <td>
                                      <i class="large green checkmark icon"></i>
                                      $100 Dining Card, Free Shopping Passport at Fashion Show
                                  </td>
                                  <td>
                                      <i class="large green checkmark icon"></i>
                                      Great Discounts at some of the best retailers in the world.
                                  </td>
                              </tr>
                              <tr>
                                  <td>
                                      <i class="large green checkmark icon"></i>
                                      Discounts at Grand Canal Shops
                                  </td>
                                  <td>
                                      <i class="large green checkmark icon"></i>
                                      10% Discount on all Jewelery at Berger and Sons in the Fashion Show
                                  </td>
                              </tr>
                              <tr>
                                  <td>
                                      <i class="large green checkmark icon"></i>
                                      2 for 1 Helicopter Tour of the Las Vegas Strip
                                  </td>
                                  <td>
                                      <i class="large green checkmark icon"></i>
                                      50% discount on Cirque du Soleil tickets
                                  </td>
                              </tr>
                              <tr>
                                  <td>
                                      <i class="large green checkmark icon"></i>
                                      25% of Range 702
                                  </td>
                                  <td>
                                      <i class="large green checkmark icon"></i>
                                      VIP Access to Nightclubs
                                  </td>
                              </tr>
                          </tbody>
                          <tfoot>
                              <tr>
                                  <th colspan="2">Total Value of over $5,000USD.</th>
                              </tr>
                          </tfoot>
                      </table>',
                  'desc_cn' => '拉斯维加斯位于内华达州的莫哈韦沙漠里，是一个以拥有不懈活力而闻名的度假胜地，有24小时营业的娱乐场和无尽的娱乐项目。其焦点是在拉斯维加斯大道，仅有4个多英里长，但是遍布精致的主题酒店，如金字塔形的卢克索酒店和有完整大运河的威尼斯酒店;以及豪华度假村包括有标志性音乐喷泉的贝拉吉欧酒店等;当然还有拉斯维加斯最出名的无数娱乐场。',
                  'desc_en' => 'Las Vegas, in Nevada’s Mojave Desert, is a resort town famed for its buzzing energy, 24-hour casinos and endless entertainment options. Its focal point is the Strip, just over 4 miles long and lined with elaborate theme hotels such as the pyramid-shaped Luxor and the Venetian, complete with Grand Canal; luxury resorts including the Bellagio, set behind iconic dancing fountains; and innumerable casinos.',
              ]),
              factory(\App\City::class)->make([
                  'name_cn' => '纽约',
                  'name_en' => 'NewYork',
                  'heat'    => 3,
                  'thumbnail'=> '/images/thumbnails/newyork.jpg',
                  'logo' => '/images/thumbnails/newyork.jpg',
                  'slider' => '/images/cities/newyork1.jpg;/images/cities/newyork2.jpg',
                  'slider_caption_cn' => '欢迎来到纽约;出发前请及早预定以获得最佳优惠',
                  'slider_caption_en' => 'Welcome to New York;Book your Activities and Sightseeing Tours before you go.',
                  'body_cn' => '<p>1524年，意大利裔航海家乔凡尼·达·维拉扎诺在航海驶向法国的途中，发现了纽约湾。1609年，英国人亨利·哈德逊受雇于荷兰人，驶进纽约湾并沿河勘查，这条河后来就以他的名字被命名为哈德逊河。同年，法国人萨穆埃尔·德·尚普伦发现并开发了纽约北部，并将宣称法国对此地拥有主权。</p>
                                <p>1624年，荷兰在橙堡（现奥尔巴尼）建设了第一个永久居住点。一年后，彼德·米纽特用大约价值60荷兰盾小饰品从印第安人手中购买曼哈顿岛，并在此基础上建设荷兰殖民地的新阿姆斯特丹（即现在的纽约市）。1664年，荷兰在英荷战中失利，将此地割让给英国。&nbsp;</p>
                                <p>纽约迅猛的商业发展很大程度上归功于时任州长德·威特·克林顿。他推动了伊利运河的建设（从水牛城到奥尔巴尼），使该运河于1825开通。如今，641英里的托马斯·杜威州长高速公路将纽约市和水牛城、康涅狄格州、马萨诸塞州以及宾夕法尼亚州的高速公路连接在一起。同时，又开通了两条免费通行的高速公路，即连接奥尔巴尼与加拿大边境的阿迪伦大克北方通道，和从宾夕法尼亚边境至千岛群岛、横穿纽约中部的南北告诉。</p>
                                <p>纽约大都会堪称是美国的“神经中枢”，是制造业、对外贸易、银行业、图书杂志出版等行业的领导者，也引领着戏剧文化业的发展。纽约的港口世界一流，纽约市内的肯尼迪国际机场是世界上最繁忙的机场之一。纽约市也是世界最大的证券交易所—纽交所的所在地。纽约市最大的产业是印刷出版业，服装行业是第二大行业。</p>
                                <p>纽约州几乎所有的其他制造业都分布在长岛，即哈德逊河沿岸，北至奥尔巴尼，穿过莫霍克谷的纽约中部和南部地区的水牛城的地区。圣劳伦斯运河和沿河电站为北部地区带来了发展工业的机会，也打造出了纽约州的第二海岸。</p>
                                <p>纽约州的制造业在全美排名第六。根据2009年的统计数据，共有446200名员工从事制造业工作。主要产业有印刷出版，工业机械设备，电子设备，仪器仪表等。会议和旅游也是该州收入的重要来源。</p>
                                <p>纽约州农业和养殖业生产牛和牛犊、玉米和家禽、蔬菜和水果。该州葡萄酒生产在全美领先。</p>
                                <p>2012年10月底的“桑迪”飓风给纽约带来了巨大破坏，造成该州60人死亡（其中纽约市内43人死亡）、305000间房屋和公寓受损或被摧毁；导致皇后区Breezy Point区发生一场火灾，彻底烧毁了100多户人家，</p>
                                <p>而纽约市的地铁系统因各站点被淹也造成瘫痪。“桑迪”给纽约共造成近330亿33000000000美元的损失。</p>
                                <p>主要的景点有城堡克林顿、斯塔尼克斯要塞和自由女神像；尼亚加拉瀑布；美国军事学院西点；有关国家历史遗址，包括富兰克林·罗斯福在牡蛎湾和海德公园的故居，西奥多·罗斯福在牡蛎湾和纽约市内的故居；在塞内卡瀑布的妇女权利国家历史公园；国家纪念系列景点，包括纽约市内格兰特将军墓和联邦大厅；库珀斯敦的棒球馆名人；联合国大厦，摩天大楼，博物馆，剧院，纽约市内公园等。</p>',
                  'body_en' => '<p>Giovanni da Verrazano, an Italian-born navigator sailing for France, discovered New York Bay in 1524. Henry Hudson, an Englishman employed by the Dutch, reached the bay and sailed up the river now bearing his name in 1609, the same year that northern New York was explored and claimed for France by Samuel de Champlain.<br><br>In 1624 the first permanent Dutch settlement was established at Fort Orange (now Albany). One year later Peter Minuit purchased Manhattan Island from the Indians for trinkets worth about 60 Dutch guilders and founded the Dutch colony of New Amsterdam (now New York City), which was surrendered to the English in 1664.<br><br>New York\'s extremely rapid commercial growth may be partly attributed to Gov. De Witt Clinton, who pushed through the construction of the Erie Canal (Buffalo to Albany), which was opened in 1825. Today, the 641-mile Gov. Thomas E. Dewey Thruway connects New York City with Buffalo and with Connecticut, Massachusetts, and Pennsylvania express highways. Two toll-free superhighways, the Adirondack Northway (linking Albany with the Canadian border) and the North-South Expressway (crossing central New York from the Pennsylvania border to the Thousand Islands), have been opened.<br><br>The great metropolis of New York City is the nerve center of the nation. It is a leader in manufacturing, foreign trade, commerce and banking, book and magazine publishing, and theatrical production. A leading seaport, its John F. Kennedy International Airport is one of the busiest airports in the world. New York is also home to the New York Stock Exchange, the largest in the world. The printing and publishing industry is the city\'s largest manufacturing employer, with the apparel industry second.<br><br>Nearly all the rest of the state\'s manufacturing is done on Long Island, along the Hudson River north to Albany, and through the Mohawk Valley, Central New York, and Southern Tier regions to Buffalo. The St. Lawrence seaway and power projects have opened the North Country to industrial expansion and have given the state a second seacoast.<br><br>The state ranks sixth in the nation in manufacturing, with 446,200 employees in 2009. The principal industries are printing and publishing, industrial machinery and equipment, electronic equipment, and instruments. The convention and tourist business is also an important source of income.<br><br>New York farms produce cattle and calves, corn and poultry, and vegetables and fruits. The state is a leading wine producer.<br><br>New York was hit particularly hard by 2012\'s Superstorm Sandy in late October. The storm was responsible for 60 deaths in the state—43 in New York City, more than 305,000 houses or apartments in the state were damaged or destroyed, a fire in the Breezy Point section of Queens completely devastated more than 100 homes, and New York City\'s subway system was crippled by flooded stations. Sandy caused nearly $33 billion in damages in New York.<br><br>Major points of interest are Castle Clinton, Fort Stanwix, and Statue of Liberty National Monuments; Niagara Falls; U.S. Military Academy at West Point; National Historic Sites that include homes of Franklin D. Roosevelt at Hyde Park and Theodore Roosevelt in Oyster Bay and New York City; the Women\'s Rights National Historical Park in Seneca Falls; National Memorials, including Grant\'s Tomb and Federal Hall in New York City; Fort Ticonderoga; the Baseball Hall of Fame in Cooperstown; and the United Nations, skyscrapers, museums, theaters, and parks in New York City.</p>',
                  'package_cn' => '',
                  'package_en' => '',
                  'desc_cn' => '1524年，意大利裔航海家乔凡尼·达·维拉扎诺在航海驶向法国的途中，发现了纽约湾。1609年，英国人亨利·哈德逊受雇于荷兰人，驶进纽约湾并沿河勘查，这条河后来就以他的名字被命名为哈德逊河。同年，法国人萨穆埃尔·德·尚普伦发现并开发了纽约北部，并将宣称法国对此地拥有主权。',
                  'desc_en' => 'Giovanni da Verrazano, an Italian-born navigator sailing for France, discovered New York Bay in 1524. Henry Hudson, an Englishman employed by the Dutch, reached the bay and sailed up the river now bearing his name in 1609, the same year that northern New York was explored and claimed for France by Samuel de Champlain.',
              ]),
              factory(\App\City::class)->make([
                  'name_cn' => '芝加哥',
                  'name_en' => 'Chicago',
                  'heat'    => 2,
                  'thumbnail'=> '/images/thumbnails/chicago.jpg',
                  'logo' => '/images/thumbnails/chicago.jpg',
                  'slider' => '/images/cities/chicago1.jpg;/images/cities/chicago2.jpg',
                  'slider_caption_cn' => '欢迎来到芝加哥;出发前请及早预定以获得最佳优惠',
                  'slider_caption_en' => 'Welcome to Chicago;Book your Activities and Sightseeing Tours before you go.',
                  'body_cn' => '<p>芝加哥市区面积606.1平方公里，海拔高度176米（578英尺），坐落于密西根湖的西南岸。密歇根湖长190公里，宽495公里，是世界上第五大淡水湖。芝加哥市内有两条河流，芝加哥河流经市中心，卡拉麦特河则穿过城市南部的工业区。芝加哥市内绿地广阔，园林众多，其中城市公园的占地面积达到3000公顷，每年吸引约8600万游客到访。</p>
                                <p>芝加哥是一个具有多元文化的城市，依靠城市社区的和谐多样不断繁荣发展。今天的芝加哥体现着美国社会价值观中对的正直、勤奋和社区等理念的重视，也反映了把该市77个不同社区凝聚在一起的共同理想。</p>
                                <p>芝加哥是全美公认的体育城市，对体育运动热情极高。</p>
                                <p>芝加哥在公立学校改革，改善公共安全和强化安全措施方面一直走在美国前列。该市一直致力于为民众在有吸引力和经济良好的社区提供经济适用房，确保所有民众能享受公共服务，并努力培育城市社会、经济和环境发展的可持续性。</p>
                                <p>马克·吐温1883年曾经说，“对一名访问芝加哥游客来说，他绝无可能跟上城市的发展变化的。芝加哥总是比他预言的速度发展得更快。”</p>
                                <p>马克·吐温写下这些话的时候，芝加哥只有46岁。但随后它的增长超过100倍，从一个芝加哥河入口的小交易站，成为了全国最大的城市之一。而且，它的发展并没有就此停下来。随后20年间，芝加哥市人口翻了四倍，并以自己不断地改造自己的能力让世界瞩目。</p>
                                <p>今天，它的发展仍未停步。今天，芝加哥已成为一个国际化的大都市，一个蓬勃发展的国际贸易和商业中心，是不同国籍的人们追寻美国梦的地方。</p>
                                ',
                  'body_en' => '<p>The City of Chicago covers an&nbsp; area of 60,000 hectares and sits 176 meters (578 feet) above sea level on the southwestern shore of Lake Michigan. At 190 km wide and 495 km long, its the 5th largest body of fresh water in the world. The city is traversed by the Chicago and Calumet rivers. Chicago\'s extensive parklands, including 3,000 hectares of city parks attract an estimated 86 million visitors annually.<br><br>As a multicultural city that thrives on the harmony and diversity of its neighborhoods, Chicago today embodies the values of America\'s heartland-integrity, hard work and community and reflects the ideals in the social fabric of&nbsp; its 77 distinct neighborhoods.<br><br>Chicago is recognized across the United States as a very passionate sports town.<br><br>Chicago is a leader in reforming public schools, enhancing public safety and security initiatives, providing affordable housing in attractive and economically sound communities, ensuring accessibility for all and fostering, social, economic and environmental sustainability.<br><br>"It is hopeless for the occasional visitor to try to keep up with Chicago. She outgrows his prophecies faster than he can make them." - Mark Twain, 1883<br><br>Chicago was only 46 years old when Mark Twain wrote those words, but it had already grown more than 100-fold, from a small trading post at the mouth of the Chicago River into one of the nation’s largest cities, and it wasn’t about to stop. Over the next 20 years, it would quadruple in population, amazing the rest of the world with its ability to repeatedly reinvent itself.<br><br>And it still hasn’t stopped. Today, Chicago has become a global city, a thriving center of international trade and commerce, and a place where people of every nationality come to pursue the American dream.</p>',
                  'package_cn' => '',
                  'package_en' => '',
                  'desc_cn' => '芝加哥市区面积606.1平方公里，海拔高度176米（578英尺），坐落于密西根湖的西南岸。密歇根湖长190公里，宽495公里，是世界上第五大淡水湖。芝加哥市内有两条河流，芝加哥河流经市中心，卡拉麦特河则穿过城市南部的工业区。芝加哥市内绿地广阔，园林众多，其中城市公园的占地面积达到3000公顷，每年吸引约8600万游客到访。',
                  'desc_en' => 'The City of Chicago covers an  area of 60,000 hectares and sits 176 meters (578 feet) above sea level on the southwestern shore of Lake Michigan. At 190 km wide and 495 km long, its the 5th largest body of fresh water in the world. The city is traversed by the Chicago and Calumet rivers. Chicago\'s extensive parklands, including 3,000 hectares of city parks attract an estimated 86 million visitors annually.',
              ]),
              factory(\App\City::class)->make([
                  'name_cn' => '奥兰多',
                  'name_en' => 'Orlando',
                  'heat'    => 2,
                  'thumbnail'=> '/images/thumbnails/orlando.jpg',
                  'logo' => '/images/thumbnails/orlando.jpg',
                  'slider' => '/images/cities/orlando1.jpg;/images/cities/orlando2.jpg',
                  'slider_caption_cn' => '欢迎来到奥兰多;出发前请及早预定以获得最佳优惠',
                  'slider_caption_en' => 'Welcome to Orlando;Book your Activities and Sightseeing Tours before you go.',
                  'body_cn' => '<p>奥兰多市美国佛罗里达州中部的一个城市，行政区划在橘子郡内。奥兰多都市圈以奥兰多市为中心，人口约有213万人（2010年数据），是全美第26大都市圈，美国南部地区第六大都市圈，佛州的第三大都市圈。2010年，奥兰多市人口达到23万人，是全美第77大城市，佛州第五大城市，也是州内第一大内陆城市。</p>
                                <p>奥兰多又被称作&ldquo;美女之城&rdquo;，城市的标志就是埃欧拉喷泉湖。奥兰多也被称为&ldquo;世界主题公园之都&rdquo;。2014年，该市的旅游景点和相关活动吸引了超过6200万游客。奥兰多国际机场的繁忙程度在是全美排名第十三位，全球排名第二十九位。奥兰多现任市长是巴迪&middot;戴尔先生。</p>
                                <p>2009年，奥兰多是全美到访游客数最多的城市。许多著名景点为该市旅游业发展奠定了坚实基础。迪士尼公司1971年在该市西南21英里（34公里）的布纳维斯湖附近修建了迪士尼度假村。1999年佛罗里达环球影城在奥兰多开设环球奥兰多度假。这里还有海洋世界、鳄鱼岛、水上狂放等主题公园。除了迪斯尼公园外，主要的景点都是沿着该市的国际大道建设运营。这座城市也是全美召开各种会议最多的城市之一。</p>
                                <p>如同美国其他&ldquo;阳光地带&rdquo;的城市，奥兰多从上世纪八十年代到二十一世纪第一个十年间，经济社会各项事业发展迅速。奥兰多是中佛罗里达大学的所在地。以在校学生人数为标准，该校在2012年已经成为全美第二大高校。2010年，奥兰多被世界城市研究集团列为&ldquo;&gamma;&minus;&rdquo;级世界城市。根据皮尤中心研究中心2009年的调查结果，奥兰多已成为美国人心目中第四大最受欢迎和最想居住的城市。</p>',
                  'body_en' => '<p>Orlando&nbsp; is a city in the U.S. state of Florida, and the county seat of Orange County. Located in Central Florida, it is the center of the Orlando metropolitan area, which had a population of 2,134,411 at the 2010 census, making it the 26th largest metropolitan area in the United States, the sixth largest metropolitan area in the Southern United States, and the third largest metropolitan area in the state of Florida. In 2010, Orlando had a city-proper population of 238,300, making it the 77th largest city in the United States, the fifth largest city in Florida, and the state\'s largest inland city.<br><br>The City of Orlando is nicknamed "The City Beautiful" and its symbol is the fountain at Lake Eola. Orlando is also known as "The Theme Park Capital of the World" and in 2014 its tourist attractions and events drew more than 62 million visitors. The Orlando International Airport (MCO) is the thirteenth busiest airport in the United States and the 29th busiest in the world. Buddy Dyer is Orlando\'s mayor.<br><br>As the most visited American city in 2009, Orlando\'s famous attractions form the backbone of its tourism industry: Walt Disney World Resort, located approximately 21 miles (34 km) southwest of Downtown Orlando in Lake Buena Vista, opened by the Walt Disney Company in 1971; the Universal Orlando Resort, opened in 1999 as a major expansion of Universal Studios Florida; SeaWorld; Gatorland; and Wet \'n Wild. With the exception of Walt Disney World, most major attractions are located along International Drive. The city is also one of the busiest American cities for conferences and conventions.<br><br>Like other major cities in the Sun Belt, Orlando grew rapidly during the 1980s and into the first decade of the 21st century. Orlando is home to the University of Central Florida, which is the second-largest university campus in the United States in terms of enrollment as of 2012. In 2010, Orlando was listed as a "Gamma−" level of world-city in the World Cities Study Group’s inventory. Orlando ranks as the fourth most popular American city based on where people want to live according to a 2009 Pew Research Center study.</p>',
                  'package_cn' => '',
                  'package_en' => '',
                  'desc_cn' => '奥兰多市美国佛罗里达州中部的一个城市，行政区划在橘子郡内。奥兰多都市圈以奥兰多市为中心，人口约有213万人（2010年数据），是全美第26大都市圈，美国南部地区第六大都市圈，佛州的第三大都市圈。2010年，奥兰多市人口达到23万人，是全美第77大城市，佛州第五大城市，也是州内第一大内陆城市。',
                  'desc_en' => '',
              ]),
              factory(\App\City::class)->make([
                  'name_cn' => '洛杉矶',
                  'name_en' => 'Los Angeles (LA)',
                  'heat'    => 2,
                  'thumbnail'=> '/images/thumbnails/losangeles.jpg',
                  'logo' => '/images/thumbnails/losangeles.jpg',
                  'slider' => '/images/cities/losangeles1.jpg;/images/cities/losangeles2.jpg',
                  'slider_caption_cn' => '欢迎来到洛杉矶;出发前请及早预定以获得最佳优惠',
                  'slider_caption_en' => 'Welcome to Los Angeles (LA);Book your Activities and Sightseeing Tours before you go.',
                  'body_cn' => '<p>洛杉矶有许多不同之处。洛杉矶是世界娱乐之都，是有100多个博物馆的文化圣地，也是晴朗天气的天堂。无论是从星光大道这样的旅游景点（已收录2553个明星，且每月增加一至两个），还是从不断扩张的高科技产业带来职业发展机会来看，洛杉矶都是一个不错的选择。它是北美大陆上唯一曾两次举办夏季奥运会的城市。洛杉矶市区是除华盛顿特区外，全美最大的都会区。洛杉矶有加州唯一仅存的木灯塔（位于圣佩德罗的奔牛节公园）和收录于国家史迹名录中的最大历史戏剧区（位于市中心百老汇。</p>
                                <p>洛杉矶的产业在若干个增长型行业中处于领先地位。洛杉矶郡有超过87000多人从事时尚行业，这一数字已超过纽约时尚业的从业人数。洛杉矶的五个郡共有超过70万人从事卫生服务和生物医学工作，19万人在航空航天和技术领域从事研发工作。这里有一些更多关于洛杉矶的数据资料。</p>
                                <h3>地理环境</h3>
                                <p>洛杉矶跨越了一个地貌广泛多样的地理区域。该地区主要以沙漠盆地为主，被圣盖博山脉环绕，又被圣塔莫尼卡山脉一分为二。洛杉矶郡有75英里的海岸线，海拔从从地域海平面9英尺威尔明顿一直到高于海平面10080英尺的圣安东尼奥。流经洛杉矶地区的河流有洛杉矶河、里奥翁多河，圣盖博河以及圣克拉拉河。</p>
                                <h3>历史</h3>
                                <p>1781年9月4日，44个村民从墨西哥索诺拉和锡那罗亚省来到现在的洛杉矶市中心，在那里定居并修建家园。这一天业也成为洛杉矶的官方生日。44名定居者有两人是西班牙裔，其他则是印第安人、黑人和混血人种。西班牙人将这个地方命名为洛杉矶，意思是我们的天使皇后之城。后来，西班牙将这片领土交给了墨西哥，洛杉矶在1835年也被正式宣布为一个城市。1847年1月，洛杉矶正式成为美国的一部分。</p>
                                <h3>气候</h3>
                                <p>加州南部气候宜人，人们用&ldquo;完美&rdquo;来形容，确实很有道理。这里大多数时候天气晴朗和温暖的，夏天吹着温柔的海风都在夏天。湿度较低，很少下雨。事实上，在洛杉矶就没有让人难受的季节。 年降水量：15英寸，平均最高温度：74&deg;F</p>
                                <p>平均阳光或部分晴天数：292天，平均最低温：56&deg;F</p>',
                  'body_en' => '<p>The City of Los Angeles holds many distinctions. LA is the entertainment capital of the world, a cultural mecca boasting more than 100 museums, and a paradise of good weather. From tourist attractions like the Walk of Fame&rsquo;s collection of stars (numbering 2,553, and growing by one or two a month) to career opportunities like those presented in the expanding tech industry, Los Angeles is the place to be. It is the only city in North America to have hosted the Summer Olympics twice. Downtown LA is the largest government center outside of Washington, D.C. Los Angeles has the only remaining wooden lighthouse in the state (located in San Pedro&rsquo;s Fermin Park) and the largest historical theater district on the National Register of Historic Places (located Downtown on Broadway). <br /><br />Los Angeles is on the leading edge of several growth industries. LA County, with more than 87,000 jobs in the fashion industry, has surpassed New York&rsquo;s fashion district workforce. The LA five-county area also has more than 700,000 people at work in health services/biomedical activities and 190,000 people in aerospace/technology. Here are some more facts and figures about Los Angeles: the city, the county and the region.<br /><br /><strong>GEOGRAPHY</strong></p>
                                <p><br />Los Angeles spans a widely diverse geographic area. Primarily a desert basin, the area is surrounded by the San Gabriel Mountain range and divided by the Santa Monica Mountains. Los Angeles County has 75 miles of coastline and altitudes ranging from 9 feet below sea level at Wilmington to 10,080 feet above sea level atop Mt. San Antonio. Area Rivers include the Los Angeles, Rio Hondo, San Gabriel, and Santa Clara rivers.<br /><br /><strong>HISTORY</strong><br /><br />Sept. 4, 1781 is the city&rsquo;s official birthdate, when 44 village settlers from the Mexican provinces of Sonora and Sinaloa made their home in what is now Downtown Los Angeles. Two of the 44 settlers were Spaniards, while the others were Indians, Blacks and Mestizos of mixed ancestry. The Spanish named the new settlement El Pueblo de Nuestra Senora la Reina de Los Angeles, or The Town of Our Lady the Queen of the Angels. After the territory changed hands from Spain to Mexico, the town was officially declared a city in 1835. Los Angeles became part of the U.S. in January 1847.<br /><br /><strong>CLIMATE</strong><br /><br />Southern California&rsquo;s climate has often been described as &ldquo;perfect&rdquo; and with good reason. Most days are sunny and warm, with gentle ocean breezes in the summer.&nbsp; The humidity is low with little rain.&nbsp; In fact, there are no unpleasant seasons in Los Angeles.<br /><br />Annual precipitation:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 15 inches&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Average high temperature:&nbsp;&nbsp; 74&deg; F<br />Avg. sunny/partly sunny days:&nbsp;&nbsp; 292 days&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Average low temperature:&nbsp;&nbsp;&nbsp;&nbsp; 56&deg; F<br />Source: National Weather Service Forecast Office at noaa.gov<br /><br /></p>',
                  'package_cn' => '',
                  'package_en' => '',
                  'desc_cn' => '洛杉矶有许多不同之处。洛杉矶是世界娱乐之都，是有100多个博物馆的文化圣地，也是晴朗天气的天堂。无论是从星光大道这样的旅游景点（已收录2553个明星，且每月增加一至两个），还是从不断扩张的高科技产业带来职业发展机会来看，洛杉矶都是一个不错的选择。它是北美大陆上唯一曾两次举办夏季奥运会的城市。洛杉矶市区是除华盛顿特区外，全美最大的都会区。洛杉矶有加州唯一仅存的木灯塔（位于圣佩德罗的奔牛节公园）和收录于国家史迹名录中的最大历史戏剧区（位于市中心百老汇。',
                  'desc_en' => 'he City of Los Angeles holds many distinctions. LA is the entertainment capital of the world, a cultural mecca boasting more than 100 museums, and a paradise of good weather. From tourist attractions like the Walk of Fame’s collection of stars (numbering 2,553, and growing by one or two a month) to career opportunities like those presented in the expanding tech industry, Los Angeles is the place to be. It is the only city in North America to have hosted the Summer Olympics twice...',
              ]),
            ]);
              break;

///////////////////////////England//////////////////////////////
////////////////////////////////////////////////////////////////
            case 'United Kingdom':
              $country->cities()->saveMany([
                factory(\App\City::class)->make([
                    'name_cn' => '伦敦',
                    'name_en' => 'London',
                    'heat'    => 2,
                    'thumbnail'=> '/images/thumbnails/london.jpg',
                    'logo' => '/images/thumbnails/london.jpg',
                    'slider' => '/images/cities/london1.jpg;/images/cities/london2.jpg',
                    'slider_caption_cn' => '欢迎来到伦敦;出发前请及早预定以获得最佳优惠',
                    'slider_caption_en' => 'Welcome to London;Book your Activities and Sightseeing Tours before you go.',
                    'body_cn' => '<p>伦敦是英国的首都，位于泰晤士河畔。这个21世纪的现代化城市的历史可以追溯到古罗马时代。英国议会、标志性的&ldquo;大本钟&rdquo;和威斯敏斯特大教堂都位于市中心。在横跨泰晤士河的&rdquo;伦敦眼&ldquo;ldquo;摩天轮上可欣赏到南岸文化综合区的全景，以及整个城市。<img style="margin: 10px; float: right;" src="image/london.gif" alt="" /></p>
                                  <p>伦敦既是英国、也是英格兰王国的首都。人类在此聚居至少2000年了，罗马人将其命名为Londinium,现在仍保留着中世纪的墙基。2001年，在这个1.12平方英里的土地上，仅有7375名常住人口</p>
                                  <p>伦敦全球领先，其艺术、贸易、教育、时尚、金融、医疗、专业服务、研发、旅游和运输都有助于其突出的地位。它是的金融中心之一，它是世界上游客量最大的城市，有世界上最大的城市机场体系。</p>
                                  <p>伦敦有四个世界遗产：伦敦塔、英国皇家植物园、威斯敏斯特教堂和圣玛格丽特教堂;和历史悠久的格林威治时间。其他著名的地标包括白金汉宫，伦敦眼，皮卡迪利广场，圣保罗大教堂，伦敦塔桥，特拉法加广场。伦敦拥有众多的博物馆、美术馆、图书馆、体育赛事和其他文化机构，如：大英博物馆，国家美术馆，泰特现代美术馆，大英图书馆和40个伦敦西区的剧院。伦敦地铁是世界上最古老的地下铁路网。</p>',
                    'body_en' => '<p>London, England’s capital, set on the River Thames, is a 21st-century city with history stretching back to Roman times. At its centre stand the imposing Houses of Parliament, the iconic ‘Big Ben’ clock tower and Westminster Abbey, site of British monarch coronations. Across the Thames, the London Eye observation wheel provides panoramic views of the South Bank cultural complex, and the entire city.<img style="margin: 10px; float: right;" src="image/london.gif" alt=""><br><br><br><br>London is the capital city of both England and the United Kingdom.Standing on the River Thames, London has been a major settlement for two millennia, its history going back to its founding by the Romans, who named it Londinium.London\'s ancient core, the City of London, largely retains its 1.12-square-mile medieval boundaries and in 2011 had a resident population of 7,375, making it the smallest city in England. Since at least the 19th century, the term London has also referred to the metropolis developed around this core. The bulk of this conurbation forms the Greater London administrative area (coterminous with the London region),governed by the Mayor of London and the London Assembly.<br><br>London is a leading global city, with strengths in the arts, commerce, education, entertainment, fashion, finance, healthcare, media, professional services, research and development, tourism, and transport all contributing to its prominence. It is one of the world\'s leading financial centres and has the fifth-or sixth-largest metropolitan area GDP in the world depending on measurement. London is a world cultural capital. It is the world\'s most-visited city as measured by international arrivals and has the world\'s largest city airport system measured by passenger traffic. London\'s 43 universities form the largest concentration of higher education institutes in Europe. In 2012, London became the first city to host the modern Summer Olympic Games three times.<br><br>London has a diverse range of peoples and cultures, and more than 300 languages are spoken within Greater London. The region had an official population of 8,416,535 in 2013, the largest of any municipality in the European Union, and accounting for 12.5 percent of the UK population. London\'s urban area is the second most populous in the EU, after Paris, with 9,787,426 inhabitants according to the 2011 census. The city\'s metropolitan area is one of the most populous in Europe with 13,614,409 inhabitants, while the Greater London Authority puts the population of London metropolitan region at 21 million. London was the world\'s most populous city from around 1831 to 1925.<br><br>London contains four World Heritage Sites: the Tower of London; Kew Gardens; the site comprising the Palace of Westminster, Westminster Abbey, and St Margaret\'s Church; and the historic settlement of Greenwich (in which the Royal Observatory, Greenwich marks the Prime Meridian, 0° longitude, and GMT). Other famous landmarks include Buckingham Palace, the London Eye, Piccadilly Circus, St Paul\'s Cathedral, Tower Bridge, Trafalgar Square, and The Shard. London is home to numerous museums, galleries, libraries, sporting events and other cultural institutions, including the British Museum, National Gallery, Tate Modern, British Library and 40 West End theatres. The London Underground is the oldest underground railway network in the world.</p>',
                    'package_cn' => '',
                    'package_en' => '',
                    'desc_cn' => '伦敦是英国的首都，位于泰晤士河畔。这个21世纪的现代化城市的历史可以追溯到古罗马时代。英国议会、标志性的&ldquo;大本钟&rdquo;和威斯敏斯特大教堂都位于市中心。在横跨泰晤士河的&rdquo;伦敦眼&ldquo;ldquo;摩天轮上可欣赏到南岸文化综合区的全景，以及整个城市。',
                    'desc_en' => 'London, England’s capital, set on the River Thames, is a 21st-century city with history stretching back to Roman times. At its centre stand the imposing Houses of Parliament, the iconic ‘Big Ben’ clock tower and Westminster Abbey, site of British monarch coronations...',
                ]),
              ]);
              break;

/////////////////////////Australia//////////////////////////////
///////////////////////////////////////////////////////////////
            case 'Australia':
              $country->cities()->saveMany([
                factory(\App\City::class)->make([
                    'name_cn' => '悉尼',
                    'name_en' => 'Sydney',
                    'heat'    => 2,
                    'thumbnail'=> '/images/thumbnails/sydney.jpg',
                    'logo' => '/images/thumbnails/Sydney-logo.jpg',
                    'slider' => '/images/cities/sydney1.jpg;/images/cities/sydney2.jpg',
                    'slider_caption_cn' => '欢迎来到悉尼;出发前请及早预定以获得最佳优惠',
                    'slider_caption_en' => 'Welcome to Sydney;Book your Activities and Sightseeing Tours before you go.',
                    'body_cn' => '<p>悉尼都市圈的面积约26.15平方公里。在过去的十年里，悉尼市已经成为新南威尔士州发展最快、面积最大的地方政府所在地。</p>
                                  <p>悉尼是世界上最绿色、全球化和连通程度最高的城市之一。</p>
                                  <p>悉尼作为澳大利亚主要的全球化城市之一，是通往亚洲的门户，也是国际大型企业、商业领袖、游客和学生的首选地之一。</p>
                                  <p>澳大利亚约有40%的500强企业将自己的总部设在悉尼。受益于当地强劲的经济战略支撑，数字、金融、教育和创意产业都在悉尼得到蓬勃发展。</p>
                                  <p>在&ldquo;可持续悉尼2030&rdquo;计划引导下，悉尼以出色的环境保护、开展重要文化活动，以及建设面向未来的创新型商业中心的能力，广受国际赞誉。</p>
                                  <p>悉尼也是世界上欢庆中国农历新年传统的国际大城市之一。</p> ',
                    'body_en' => '<p>The City of Sydney local area covers approximately 26.15 square kilometres, within the Sydney metropolitan region. Over the past decade the City has become the largest and fastest growing local government area in all of NSW.<br><br>Sydney is one of the world’s most green, global and connected cities.<br><br>As Australia’s leading global city and the gateway to Asia, Sydney is the destination of choice for international corporations, business leaders, tourists and students.<br><br>Sydney provides headquarters for almost 40% of the top 500 Australian corporations. Digital, financial, educational and creative businesses are all thriving in Sydney – supported by our robust economic strategy.<br><br>Through the City of Sydney’s Sustainable Sydney 2030 program, Sydney is recognised internationally for its outstanding environmental performance and major cultural events, and as a future focused and innovative business centre.<br><br>Sydney is also host to one of the largest Chinese New Year Festivals in the world.</p>',
                    'package_cn' => '',
                    'package_en' => '',
                    'desc_cn' => '悉尼都市圈的面积约26.15平方公里。在过去的十年里，悉尼市已经成为新南威尔士州发展最快、面积最大的地方政府所在地。悉尼是世界上最绿色、全球化和连通程度最高的城市之一。',
                    'desc_en' => 'The City of Sydney local area covers approximately 26.15 square kilometres, within the Sydney metropolitan region. Over the past decade the City has become the largest and fastest growing local government area in all of NSW.',
                ]),
              ]);
              break;

///////////////////////////////Japan///////////////////////////
///////////////////////////////////////////////////////////////
            case 'Japan':
              $country->cities()->saveMany([
                factory(\App\City::class)->make([
                    'name_cn' => '东京',
                    'name_en' => 'Tokyo',
                    'heat'    => 2,
                    'thumbnail'=> '/images/thumbnails/tokyo.jpg',
                    'logo' => '/images/thumbnails/tokyo.jpg',
                    'slider' => '/images/cities/tokyo1.jpg;/images/cities/tokyo2.jpg',
                    'slider_caption_cn' => '欢迎来到东京;出发前请及早预定以获得最佳优惠',
                    'slider_caption_en' => 'Welcome to Tokyo;Book your Activities and Sightseeing Tours before you go.',
                    'body_cn' => '<p>大东京区是世界上人口最多的城市圈，也是日本文化、金融和政治的中心。东京是一个繁华的大都市，也是全球重要的交通枢纽和世界经济和工业中心。该市拥有一大批世界一流高等教育机构，在日本高校最集中的地区。东京之前被称为江户，直至1868年日本皇室从京都迁到这里。东京都市圈一般被定义为由四个行政区域组成，即琦玉县、东京都、神奈川县和千叶县，而东京市区通常是指东京都辖区内的23个区。东京都市圈包括的大城市有横滨（日本第二大城市）、川崎、千叶，以及城市西部的农村山区，东京湾外的伊豆群岛，和位于东南太平洋上小笠原群岛。</p>
                                  <p>日本由四个主要大岛和7000多个小岛组成，东京位于太平洋东海岸的本州岛上。</p>
                                  <p>因为日本是一个岛国，前往日本最有效的途径就是乘坐飞机。国际线的飞机几乎总是降落在新东京国际机场即成田机场。成田机场离东京市中心有相当远的距离，因此旅客往往选乘两列高铁进城。乘坐京成&ldquo;天空&rdquo;线高铁到日暮里站或京成上野站大约需一小时，然后从这两个车站换乘其他交通工具可以很容易地到达东京市内其他地点。乘坐日本铁路公司营的成田特快到东京站需要一个小时，到新宿、池袋站约一个半小时。所有这些车站都是市内火车和地铁的主要换乘点。此外，还有豪华巴士从成田机场开往新宿、东京站、羽田机场。</p>
                                  <p>日本的国内线航班，以及中国国际航空公司的航班，都停泊在服务更便利的羽田机场。从羽田机场开车到东京市中心仅需半小时。最便捷的进城交通方式是乘坐单轨列车从羽田机场到滨松町站，然后换乘山手线地铁。山手线是循环线，连接着东京周围各主要交通换乘点。</p>
                                  ',
                    'body_en' => '<p>Greater Tokyo is the world\'s most populous metropolitan area and is the center of Japanese culture, finance, and government. A bustling cosmopolitan city, Tokyo is also a major transportation hub and a world economic and industrial center. The city boasts a large number of world-class institutions of higher education, the highest concentration of universities in Japan. Tokyo was known as Edo until 1868, when the Japanese imperial family was moved there from Kyoto. Metropolitan Tokyo is generally defined as the four prefectures of Tokyo, Saitaima, Kanagawa, and Chiba, while the city of Tokyo proper usually refers to the 23 wards in Tokyo prefecture itself. The metropolitan area includes the major cities of Yokohama (the second largest city in Japan), Kawasaki, and Chiba, as well as rural mountain regions west of the city, the Izu Islands outside Tokyo Bay, and the Bonin Islands to the southeast in the Pacific Ocean.<br><br>Tokyo is located on the Pacific on the eastern coast of Honshu, the largest of the four main islands comprising Japan.<br><br>Since Japan is an island nation, the most efficient means of access is by air. Flights originating from abroad almost always land at New Tokyo International Airport at Narita. From Narita, it is still a considerable distance to central Tokyo, and the traveler has the choice of two trains. The Keisei Skyliner reaches Nippori Station and Keisei Ueno stations in about an hour; from both of these points transfers can easily be made to other destinations in Tokyo. Japan Rail (JR) runs a Narita Express that arrives at Tokyo Station in under an hour and Shinjuku and Ikebukuro Stations in about an hour-and-a-half. All these stations are major transfer points to both trains and subways. There is also a limousine bus service to Shinjuku and Tokyo Stations and to Haneda Airport.<br><br>Domestic flights, as well as China Airlines international flights, serve the much more conveniently located Haneda Airport. Haneda is a half hour\'s drive from central Tokyo. Easiest access to the city is by the monorail that connects Haneda Airport with JR\'s Yamanote line at Hamamatsucho Station. The Yamanote line is a circular line that connects with many major transfer points around Tokyo.</p>',
                    'package_cn' => '',
                    'package_en' => '',
                    'desc_cn' => '大东京区是世界上人口最多的城市圈，也是日本文化、金融和政治的中心。东京是一个繁华的大都市，也是全球重要的交通枢纽和世界经济和工业中心。该市拥有一大批世界一流高等教育机构，在日本高校最集中的地区。东京之前被称为江户，直至1868年日本皇室从京都迁到这里。东京都市圈一般被定义为由四个行政区域组成，即琦玉县、东京都、神奈川县和千叶县，而东京市区通常是指东京都辖区内的23个区。东京都市圈包括的大城市有横滨（日本第二大城市）、川崎、千叶，以及城市西部的农村山区，东京湾外的伊豆群岛，和位于东南太平洋上小笠原群岛。',
                    'desc_en' => 'Greater Tokyo is the world\'s most populous metropolitan area and is the center of Japanese culture, finance, and government. A bustling cosmopolitan city, Tokyo is also a major transportation hub and a world economic and industrial center.',

                ]),
              ]);
              break;

///////////////////////////////France//////////////////////////
//////////////////////////////////////////////////////////////
            case 'France':
              $country->cities()->saveMany([
                factory(\App\City::class)->make([
                    'name_cn' => '巴黎',
                    'name_en' => 'Paris',
                    'heat'    => 2,
                    'thumbnail'=> '/images/thumbnails/paris.jpg',
                    'logo' => '/images/thumbnails/paris-logo.jpg',
                    'slider' => '/images/cities/paris1.jpg;/images/cities/paris2.jpg',
                    'slider_caption_cn' => '欢迎来到巴黎;出发前请及早预定以获得最佳优惠',
                    'slider_caption_en' => 'Welcome to Paris;Book your Activities and Sightseeing Tours before you go.',
                    'body_cn' => '<p>巴黎一直被视作欧洲最有趣的城市，甚至可能是世界上最令人惊叹的城市之一。来自世界各地的人们都愿意到巴黎去探索和体验这个童话般的城市。巴黎是爱之城，灵感之城，也是艺术与时尚之城。巴黎的夜景，埃菲尔铁塔和城市温暖的气氛会让你感到就在家中。巴黎有很多有趣的建筑和博物馆可供参观，也是购物狂的天堂。巴黎是一个值得每一个参观和体验的城市。</p>
                                  <h3>巴黎的气候</h3>
                                  <p>巴黎在每一个季节都很美。巴黎属大陆性气候，其特点是夏季温暖、阳光充足，冬天温和适宜，没有极端的温度。巴黎七月平均气温为25&deg;C。冬季气温下降，一月份平均温度为2&deg;C.。</p>',
                    'body_en' => '<p>Paris can be seen as thé most interesting city of Europe and probably even as one of the most amazing city’s worldwide. People from all over the world travel to Paris to discover and experience this fairy-like city. Paris is the city of love, inspiration, art and fashion. The night scene, the Eiffel tower and the warm atmosphere will make you feel directly at home. Paris has a lot of interesting architecture and museums to offer, and is also a Walhalla for shopaholics. A city as Paris is one that everyone should visit and experience.<br><br><strong>Climate in Paris</strong></p>
                                  <p><br>Paris is beautiful in every single season. The continental climate in Paris is characterized by warm and sunny summers, moderate winters and has no extreme temperatures. The average temperature in July is about 25°C. In winter the temperature drops until an average temperature of 2°C in January.</p>',
                    'package_cn' => '',
                    'package_en' => '',
                    'desc_cn' => '巴黎一直被视作欧洲最有趣的城市，甚至可能是世界上最令人惊叹的城市之一。来自世界各地的人们都愿意到巴黎去探索和体验这个童话般的城市。巴黎是爱之城，灵感之城，也是艺术与时尚之城。巴黎的夜景，埃菲尔铁塔和城市温暖的气氛会让你感到就在家中。巴黎有很多有趣的建筑和博物馆可供参观，也是购物狂的天堂。巴黎是一个值得每一个参观和体验的城市。',
                    'desc_en' => 'Paris can be seen as thé most interesting city of Europe and probably even as one of the most amazing city’s worldwide. People from all over the world travel to Paris to discover and experience this fairy-like city. Paris is the city of love, inspiration, art and fashion.',
                ]),
              ]);
              break;

            default:
              # code...
              break;
          }
        });

    }
}
