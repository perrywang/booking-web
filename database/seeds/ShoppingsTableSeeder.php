<?php

use Illuminate\Database\Seeder;

class ShoppingsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $city = \App\City::where('name_en', '=', 'LasVegas')->get()->each(function ($city) {
            $city->shoppings()->saveMany([
                factory(\App\Shopping::class)->make([
                    'name_en' => 'Fashion Show',
                    'name_cn' => '时装秀',
                    'desc_en' => 'At the edge of fashion, in the heart of Las Vegas you’ll find Fashion Show – one of the largest and most exciting retail shopping destinations in the United States.',
                    'desc_cn' => '位于拉斯维加斯的中心地带，“时装秀”百货是美国最大和最令人兴奋的零售百货之一，总是处于时尚的前沿.',
                    'body_en' => '<img class="ui fluid image" src="/images/shopping/fashioshow-banner.jpg">
                                    <p></p>
                                    <p>At the edge of fashion, in the heart of Las Vegas you’ll find Fashion Show – one of the largest and most exciting retail shopping destinations in the United States.</p>
                                    <p><strong><span style="color: #000000;">SHOPPING</span></strong> Fashion Show’s incomparable lineup includes its seven flagship department stores: Topshop/Topman, Dillard’s, Forever 21, Macy’s, Neiman Marcus, Nordstrom and Saks Fifth Avenue. First-to-market shops include Henri Bendel, Lululemon Athletica, Scotch &amp; Soda, Pinto Ranch and many more. Apple, Coach, Louis Vuitton, Michael Kors and Tiffany &amp; Co. are just a few of the over 200 renowned specialty shops that make Fashion Show a Las Vegas favorite.</p>
                                    <p><strong><span style="color: #000000;">DINING</span></strong> Visitors are also drawn to the delicious variety of fine dining and casual cafes at Fashion Show. El Segundo Sol, Maggiano’s Little Italy, RA Sushi, The Capital Grille, Red Velvet Café, Stripburger and Grimaldi’s Pizzeria are just a sampling of the dining options awaiting you. Fashion Show’s 16-vendor Food Court offers diners patio seating with an impressive bird’s eye view of the Las Vegas Strip.</p>
                                    <p><strong><span style="color: #000000;">ENTERTAINMENT</span></strong> True to its name, Fashion Show brings fashion to life with weekend runway shows featuring the latest fashions. Many of fashion’s biggest names, including Roberto Cavalli, Dolce &amp; Gabbana and Zac Posen have staged shows on the runway of The Great Hall. Shows run Friday, Saturday and Sunday, every hour on the hour from noon to 5pm.</p>
                                    <p></p>
                                    <img class="ui fluid image" src="/images/shopping/fashion-show-runway.jpg">
                                    <p></p>
                                    <img class="ui fluid image" src="/images/shopping/fashion-show-plaza.jpg">',
                    'body_cn' => '<img class="ui fluid image" src="/images/shopping/fashioshow-banner.jpg">
                                    <p></p>
                                    <p>位于拉斯维加斯的中心地带，“时装秀”百货是美国最大和最令人兴奋的零售百货之一，总是处于时尚的前沿。</p>
                                    <p>“时装秀”大百货无与伦比的阵容包括七个旗舰百货：Topshop/Topman、Dillard、Forever 21、梅西百货、Neiman Marcus、Nordstrom和Saks第五大道。这里主打的商店包括亨利•班德尔、LululemonAthletica、苏格兰威士忌和苏打、平托牧场等等。其它商店诸如：苹果、寇驰、路易•威登、Michael Kors和蒂芙尼公司等等，仅仅是这里200多家知名的专卖店之一。这些众多的品牌选择使“时装秀”大百货成为拉斯维加斯的喜爱。</p>
                                    <p>餐饮部分，在“时装秀”大百货里， 游客也会被各种美味精致的餐厅、休闲咖啡厅等所吸引。 El Segundo、马贾诺的小意大利、RA寿司、资本格栅餐厅、红色天鹅绒咖啡厅、Stripburger和格里马尔迪的比萨店等也只是众多餐厅的一个缩影。“时装秀”大百货的16个均设有露台座位，可以直接鸟瞰拉斯维加斯大道。</p>
                                    <p>休闲娱乐方面，“时装秀”大百货正如它的名字那样，带来的时尚生活与周末走秀展示最新的时装。许多时尚大腕，包括：罗伯特•卡沃利、Dolce＆Gabbana和扎克波森都在这里举办过表演。周五、周六和周日，从中午至下午5点，每隔一小时就有一场表演。</p>
                                    <p></p>
                                    <img class="ui fluid image" src="/images/shopping/fashion-show-runway.jpg">
                                    <p></p>
                                    <img class="ui fluid image" src="/images/shopping/fashion-show-plaza.jpg">',
                    'logo' => '/images/shopping/fashion-show.png',
                    'offers_cn' => '<table class="ui very basic table">
                    <thead>
                      <tr>
                        <th>商店</th>
                        <th>优惠</th>
                      </tr>
                    </thead>
                    <tbody>
 <tr>
<td>7 For All Mankind</td>
<td>消费250美金及以上，可以减50美金。</td>
</tr>
 <tr>
<td>ABC Stores</td>
<td>消费50美金及以上，可以获赠ABC独家设计的咖啡杯、环保购物袋或日历。</td>
</tr>
 <tr>
<td>Aerosoles</td>
<td>注册成为VIP会员，即可享受10%折扣</td>
</tr>
 <tr>
<td>Aldo</td>
<td>任何正价商品享有10%折扣。</td>
</tr>
 <tr>
<td>Ann Taylor</td>
<td>全场九折优惠</td>
</tr>
 <tr>
<td>bebe</td>
<td>全场正价商品八折优惠</td>
</tr>
 <tr>
<td>Ben Bridge Jeweler</td>
<td>购买任何商品，即赠送珠宝清洗套装。</td>
</tr>
 <tr>
<td>Berger &amp; Son</td>
<td>全场珠宝（包括婚戒）五折优惠</td>
</tr>
 <tr>
<td>Boot Star Vegas</td>
<td>全场九折优惠</td>
</tr>
 <tr>
<td>Brighton Collectibles</td>
<td>进门无需购物即享贵宾待遇。</td>
</tr>
 <tr>
<td>BROOKSTONE</td>
<td>消费50美金及以上，获得免费小灯一个。</td>
</tr>
 <tr>
<td>Buckle</td>
<td>一件饰品九折优惠或任一件特价品额外九折优惠。</td>
</tr>
</tbody>
</table>',
                    'offers_en' => '<table class="ui very basic table">
                    <thead>
                      <tr>
                        <th>STORE</th>
                        <th>OFFER</th>
                      </tr>
                    </thead>
                    <tbody>
                     <tr>
                        <td>7 For All Mankind</td>
                        <td>$50 of f a purchase of $250 or more.</td>
                    </tr>
                     <tr>
                        <td>ABC Stores</td>
                        <td>Receive a complimentary exclusive ABC design coffee mug, recycle tote bag or calendar when<br>purchasing $50 or more.</td>
                    </tr>
                     <tr>
                        <td>Aerosoles</td>
                        <td>Take 10% off when you become<br>a VIP Rewards member</td>
                    </tr>
                     <tr>
                        <td>Aldo</td>
                        <td>10% off regular-priced merchandise.</td>
                    </tr>
                     <tr>
                        <td>Ann Taylor</td>
                        <td>10% off your full-price purchase.</td>
                    </tr>
                     <tr>
                        <td>bebe</td>
                        <td>20% off your entire regular-priced purchase</td>
                    </tr>
                     <tr>
                        <td>Ben Bridge Jeweler</td>
                        <td>Complimentary jewelry cleaning kit with any purchase.</td>
                    </tr>
                     <tr>
                        <td>Berger &amp; Son</td>
                        <td>50% off entire fine jewelry<br>collection including wedding rings.</td>
                    </tr>
                     <tr>
                        <td>Boot Star Vegas</td>
                        <td>10% off your entire purchase.</td>
                    </tr>
                     <tr>
                        <td>Brighton Collectibles</td>
                        <td>Come in and see the new arrivals! Receive a treat from Brighton just for stopping by.</td>
                    </tr>
                     <tr>
                        <td>BROOKSTONE</td>
                        <td>FREE Astro Light or Tipsy Light with $50 purchase.</td>
                    </tr>
                     <tr>
                        <td>Buckle</td>
                        <td>10% off one accessory or<br>additional 10% off one sale item.</td>
                    </tr>
                    </tbody>
                </table>',
                    'hours_cn' => '星期天: 11am-7pm<br>星期一至星期六: 10am-9pm',
                    'hours_en' => 'Sunday: 11am-7pm<br>Monday - Saturday: 10am-9pm',
                    'address_cn' => 'Fashion Show<br>3200 Las Vegas Blvd S. Ste. 600<br>Las Vegas, Nevada 89109-2692<br>(702) 369-8382',
                    'address_en' => 'Fashion Show<br>3200 Las Vegas Blvd S. Ste. 600<br>Las Vegas, Nevada 89109-2692<br>(702) 369-8382',
                    'website' => 'www.thefashionshow.com',
                ]),
                factory(\App\Shopping::class)->make([
                    'name_en' => 'Grand Canal Shoppes',
                    'name_cn' => '大运河购物中心',
                    'desc_en' => 'Grand Canal Shoppes at The Venetian | The Palazzo combines Old World charm with an exceptional collection of luxury shopping and world-class dining. Stroll the enchanting cobblestone walkways, delight in exquisite painted ceilings and enjoy a gondola ride along the meandering, quarter-mile Grand Canal.',
                    'desc_cn' => '位于威尼斯人酒店和Palazzo酒店的“大运河购物中心”结合了旧世界的魅力与现代的奢华为一体，拥有众多的品牌店和和世界一流的餐饮。漫步在迷人的鹅卵石人行道，欣赏着精美彩绘天花板，并可以乘坐意大利“贡多拉”小船沿着四分之一英里场的人造大运河蜿蜒前行.',
                    'body_en' => '<img class="ui fluid image" src="/images/shopping/grand-canal-shoppes-logo.jpg">
                                  <p></p>
                                  <p>Grand Canal Shoppes at The Venetian | The Palazzo combines Old World charm with an exceptional collection of luxury shopping and world-class dining. Stroll the enchanting cobblestone walkways, delight in exquisite painted ceilings and enjoy a gondola ride along the meandering, quarter-mile Grand Canal.</p>
                                  <p><strong>SHOPPING </strong>– Emporium of style, Barneys New York, and more than 160 luxury stores and boutiques are featured at Grand Canal Shoppes at The Venetian | The Palazzo. World-premier brands Tory Burch, Jimmy Choo, Burberry, Christian Louboutin, Salvatore Ferragamo, Diane von Furstenberg, Peter Lik Gallery and Michael Kors offer visitors an unparalleled luxury shopping experience.</p>
                                  <p><strong>DINING</strong>– World-renowned chefs, restaurateurs and James Beard award winners abound at Grand Canal Shoppes at The Venetian | The Palazzo. Superstar culinary offerings include Wolfgang Puck’s CUT and Postrio Bar &amp; Grill, Emeril Lagasse’s Table 10 and Delmonico Steakhouse, Joachim Splichal’s Pinot Brasserie, OTTO Pizzeria by Mario Batali and SUSHISAMBA by Shimon Bokova. These fine dining restaurants, coupled with a diverse selection of quick and casual eateries, provide visitors with more than 30 delectable dining options.</p>
                                  <p><strong>ENTERTAINMENT</strong>– In addition to charming gondola rides, shoppers are treated to delightful daily performances in St. Mark’s Square by Streetmosphere®, an international cast of classically trained singers, actors and musicians. Be sure to take advantage of the enclosed VIP line passes and admission discounts to TAO and LAVO nightclubs.</p>
                                  <p></p>
                                  <img class="ui fluid image" src="/images/shopping/Fendi-The-Palazzo.jpg">
                                  <p></p>
                                  <img class="ui fluid image" src="/images/shopping/GCS-Palazzo.jpg">
                                  <p></p>
                                  <img class="ui fluid image" src="/images/shopping/Grand-Canal-Shoppes---gondola.jpg">',
                    'body_cn' => '<img class="ui fluid image" src="/images/shopping/grand-canal-shoppes-logo.jpg">
                                  <p></p>
                                  <p>位于威尼斯人酒店和Palazzo酒店的“大运河购物中心”结合了旧世界的魅力与现代的奢华为一体，拥有众多的品牌店和和世界一流的餐饮。漫步在迷人的鹅卵石人行道，欣赏着精美彩绘天花板，并可以乘坐意大利“贡多拉”小船沿着四分之一英里场的人造大运河蜿蜒前行。</p>
                                  <p>购物方面：这里有包括Emporium of style、 Barneys New York在内的160多家豪华商店和精品店。世界顶级品牌， 如：托里•伯奇、Jimmy Choo、巴宝莉、Christian Louboutin、菲拉格慕、黛安•冯芙丝汀宝、彼得沥画廊和Michael Kors等，给游客提供了无与伦比的奢华购物体验。</p>
                                  <p>美食方面：在大运河购物中心里，比比皆是世界餐室著名的厨师、餐馆和James Beard奖获得者，比如：由巨星Wolfgang Puck主勺的CUT和Postrio Bar＆Grill餐厅、由Emeril Lagasse主勺的Table10餐厅和德尔莫尼科牛排馆、Joachim Splichal的Pinot Brasserie餐厅、MarioBatali的比萨饼店、以及由ShimonBokova主理的SUSHISAMBA。这些精致的餐厅，加上多元化的选择，为旅客提供了30多种美味选择。</p>
                                  <p>娱乐方面： - 除了迷人的乘坐贡多拉，游客还可以以在圣马可广场观看国际知名演员或歌手的日常演出。请注意：一定要充分利用我们赠予的VIP通行证以及入场券折扣以进入TAO和LAVO夜总会。</p>
                                  <p></p>
                                  <img class="ui fluid image" src="/images/shopping/Fendi-The-Palazzo.jpg">
                                  <p></p>
                                  <img class="ui fluid image" src="/images/shopping/GCS-Palazzo.jpg">
                                  <p></p>
                                  <img class="ui fluid image" src="/images/shopping/Grand-Canal-Shoppes---gondola.jpg">',
                    'logo' => '/images/shopping/grand-canal-shoppes.png',
                    'offers_cn' => '<table class="ui very basic table">
                    <thead>
                      <tr>
                        <th>商店</th>
                        <th>优惠</th>
                      </tr>
                    </thead>
<tbody>
 <tr>
<td>7 For All Mankind</td>
<td>消费满250美金减50美金。</td>
</tr>
 <tr>
<td>Acc a Kappa</td>
<td>全场九折优惠</td>
</tr>
 <tr>
<td>Andrew s Milano</td>
<td>三条领带售120美金（适用于某些款式）</td>
</tr>
 <tr>
<td>Ann Taylor</td>
<td>正价商品九折优惠</td>
</tr>
 <tr>
<td>Aquaknox</td>
<td>食品八五折优惠</td>
</tr>
 <tr>
<td>Art of Venice</td>
<td>正价商品九折优惠</td>
</tr>
 <tr>
<td>Barney s New York</td>
<td>免费私人购物体验</td>
</tr>
 <tr>
<td>Barney s New York</td>
<td>消费满50美金减10美金</td>
</tr>
 <tr>
<td>Basin White</td>
<td>消费满30美金减5美金</td>
</tr>
 <tr>
<td>BCBG MAX AZRIA</td>
<td>正价商品消费满200美金可以享受九折优惠</td>
</tr>
</tbody>
</table>',
                    'offers_en' => '<table class="ui very basic table">
                    <thead>
                      <tr>
                        <th>STORE</th>
                        <th>OFFER</th>
                      </tr>
                    </thead>
<tbody>
 <tr>
<td>7 For All Mankind</td>
<td>$50 of f a purchase of $250 or more.</td>
</tr>
 <tr>
<td>Acc a Kappa</td>
<td>10% discount off your purchase</td>
</tr>
 <tr>
<td>Andrew s Milano</td>
<td>Three ties for $120 (select styles)</td>
</tr>
 <tr>
<td>Ann Taylor</td>
<td>10% off your full-price purchase.</td>
</tr>
 <tr>
<td>Aquaknox</td>
<td>Enjoy 15% off your food bill.</td>
</tr>
 <tr>
<td>Art of Venice</td>
<td>10% off on regular-priced masks.</td>
</tr>
 <tr>
<td>Barney s New York</td>
<td>Complimentary personal shopping experience</td>
</tr>
 <tr>
<td>Basin White</td>
<td>$10 of f a $50 purchase.<br>$5 off a $30 purchase.</td>
</tr>
 <tr>
<td>BCBG MAX AZRIA</td>
<td>10% off a regularly priced purchase of $200 or more</td>
</tr>
</tbody>
</table>',
                    'hours_cn' => '星期日-星期四: 10:00am-11:00pm<br>星期五-星期六: 10:00am-11:59pm',
                    'hours_en' => 'Sunday-Thursday: 10:00am-11:00pm<br>Friday-Saturday: 10:00am-midnight',
                    'address_cn' => '3377 Las Vegas Boulevard South Suite 2600<br>Las Vegas, Nevada 89109<br>(702) 414-4500',
                    'address_en' => '3377 Las Vegas Boulevard South Suite 2600<br>Las Vegas, Nevada 89109<br>(702) 414-4500',
                    'website' => 'www.grandcanalshoppes.com',
                ]),
                factory(\App\Shopping::class)->make([
                    'name_en' => 'Kay Jewelers',
                    'name_cn' => '凯',
                    'desc_en' => 'Founded nearly 100 years ago as a single storefront, Kay Jewelers has grown to nearly 1,000 stores nationwide, including eight stores in Las Vegas.',
                    'desc_cn' => '100年前从一个单独的店面起家，“凯”珠宝公司已发展到全国近1000家门店，其中八个在拉斯维加斯.',
                    'body_en' => '<img class="ui fluid image" src="/images/shopping/kay-banner.jpg">
                                  <p></p>
                                  <p>Grand Canal Shoppes at The Venetian | The Palazzo combines Old World charm with an exceptional collection of luxury shopping and world-class dining. Stroll the enchanting cobblestone walkways, delight in exquisite painted ceilings and enjoy a gondola ride along the meandering, quarter-mile Grand Canal.</p>
                                  <p><strong>SHOPPING </strong>– Emporium of style, Barneys New York, and more than 160 luxury stores and boutiques are featured at Grand Canal Shoppes at The Venetian | The Palazzo. World-premier brands Tory Burch, Jimmy Choo, Burberry, Christian Louboutin, Salvatore Ferragamo, Diane von Furstenberg, Peter Lik Gallery and Michael Kors offer visitors an unparalleled luxury shopping experience.</p>
                                  <p><strong>DINING</strong>– World-renowned chefs, restaurateurs and James Beard award winners abound at Grand Canal Shoppes at The Venetian | The Palazzo. Superstar culinary offerings include Wolfgang Puck’s CUT and Postrio Bar &amp; Grill, Emeril Lagasse’s Table 10 and Delmonico Steakhouse, Joachim Splichal’s Pinot Brasserie, OTTO Pizzeria by Mario Batali and SUSHISAMBA by Shimon Bokova. These fine dining restaurants, coupled with a diverse selection of quick and casual eateries, provide visitors with more than 30 delectable dining options.</p>
                                  <p><strong>ENTERTAINMENT</strong>– In addition to charming gondola rides, shoppers are treated to delightful daily performances in St. Mark’s Square by Streetmosphere®, an international cast of classically trained singers, actors and musicians. Be sure to take advantage of the enclosed VIP line passes and admission discounts to TAO and LAVO nightclubs.</p>
                                  <p></p>
                                  <img class="ui fluid image" src="/images/shopping/jewelry-7a.jpg">',
                    'body_cn' => '<img class="ui fluid image" src="/images/shopping/kay-banner.jpg">
                                  <p></p>
                                  <p>100年前从一个单独的店面起家，“凯”珠宝公司已发展到全国近1000家门店，其中八个在拉斯维加斯。</p>
                                  <p>如今，“凯”珠宝公司是美国最大珠宝商。其承诺，在提供各类精美的珠宝的同时，也提供给客人无与伦比的服务和购物体验。当然，顾客到此也能看见定期到货的那些减价幅度高达50％的清仓商品、以及过时的设计产品。</p>
                                  <p></p>
                                  <img class="ui fluid image" src="/images/shopping/jewelry-7a.jpg">',
                    'logo' => '/images/shopping/kay-jewelers.png',
                    'offers_cn' => '<p>只要出示您的拉斯维加斯“购物&amp;餐饮优先卡”，您就能够享受特价。</p>',
                    'offers_en' => '<p>Present your Shop &amp; Dine Las Vegas Privilege Card in one of our stores today to receive your special offer!</p>',
                    'hours_cn' => '星期一-星期六: 9am-9pm<br>星期日: 9am-8pm',
                    'hours_en' => 'Monday - Saturday: 9am-9pm<br>Sunday: 9am-8pm',
                    'address_cn' => 'Las Vegas Premium North<br>855 S Grand Central Parkway<br>Las Vegas, NV 89106<br>(702) 385-2206',
                    'address_en' => 'Las Vegas Premium North<br>855 S Grand Central Parkway<br>Las Vegas, NV 89106<br>(702) 385-2206',
                    'website' => 'www.kayoutlet.com',
                ]),
            ]);
        });


    }
}
