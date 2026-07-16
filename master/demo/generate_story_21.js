const fs = require('fs');
const path = require('path');

// 读取词汇表
const vocabData = JSON.parse(fs.readFileSync('vocabulary_split/vocabulary_021_1001-1050.json', 'utf-8'));

// 故事内容（学习版）- 使用50个单词
const storyParagraphs = [
  `大燕<span class="w">dynasty(王朝)📢</span>三百年，皇权旁落，奸臣当道。年幼的公主萧清雪在宫中艰难度日，目睹了太多<span class="w">hardship(艰难困苦)📢</span>。她常常独自坐在寝宫的窗前，望着飘落的尘埃如漫天<span class="w">dust(灰尘)📢</span>，心中暗暗发誓：终有一天，她要将这天下握在手中。`,

  `清雪的母妃曾是名门之女，因宫廷<span class="w">conflict(斗争冲突)📢</span>而惨遭陷害。临终前，母妃握着她的手说："雪儿，你要记住，在这宫中，没有任何人值得信任，唯有自己手中的权力才是<span class="w">premise(前提)📢</span>。"这句话，成了清雪一生的信条。`,

  `宫中有一老者，曾是先帝身边的<span class="w">statesman(政治家)📢</span>，因得罪权贵而被贬为宫中杂役。他见清雪聪慧过人，便暗中传授她治国之术。老者常说："治国之道，如同<span class="w">economics(经济学)📢</span>，需懂得权衡利弊，运筹帷幄。"清雪虚心学习，每日必去老者的<span class="w">district(辖区)📢</span>请教。`,

  `一日，老者在花园中为清雪讲授权谋之道。恰逢丞相之子李崇明路过，见清雪容貌<span class="w">pretty(漂亮)📢</span>动人，便起了轻薄之心。清雪面不改色，将手中的<span class="w">carrot(胡萝卜)📢</span>随手扔进草丛，冷声道："公子请自重。"李崇明被她的气度所震慑，悻悻离去。`,

  `老者叹道："公主殿下，您的胆识令人钦佩。要成就大业，不仅需要勇气，更需要<span class="w">gut(胆量)📢</span>和智慧。"清雪微微一笑："先生教训得是。只是这宫中，何人可信？"老者沉吟片刻："<span class="w">possibly(可能)📢</span>，有一个人可以信任——镇北将军林默然。"`,

  `清雪暗中派人联络林默然。将军起初对这位年轻的公主心存疑虑，但当她详述自己对朝政的<span class="w">standpoint(立场观点)📢</span>后，林默然被她的见识所折服。"公主殿下，您的见识远超常人，实乃天<span class="w">born(天生)📢</span>的帝王之才。"两人秘密结成<span class="w">alliance(同盟)📢</span>，共谋大业。`,

  `朝堂之上，奸相赵显专权跋扈，行事<span class="w">arbitrary(专断)📢</span>，引起百官不满。清雪深知，要扳倒赵显，必须有足够的人证物证。她暗中派人在京城各<span class="w">junction(枢纽)📢</span>收集情报，终于掌握了赵显贪污受贿的铁证。`,

  `然而，赵显党羽众多，稍有不慎便会被反噬。清雪决定以退为进，表面上对赵显恭顺，实则在暗中布局。每当夜深人静，她独自在宫中踱步，任由思绪<span class="w">linger(徘徊)📢</span>在往事中，但她的眼神始终坚定如初。`,

  `一天，清雪在后花园遇到了正在放风筝的林默然。风筝是一只精美的燕子形状，犹如一只展翅的<span class="w">swallow(燕子)📢</span>。林默然笑道："公主请看，这风筝虽小，却能飞得很高。"清雪若有所思："将军是在告诉我，事在人为吗？"林默然点头。`,

  `赵显察觉到清雪的不寻常，派人暗中监视。清雪行事愈发谨慎，每日只在<span class="w">outdoor(室外)📢</span>活动时才会见林默然，谈论的都是无关痛痒的话题。但两人心中都明白，一场风暴即将来临。`,

  `冬去春来，清雪的努力开始<span class="w">multiply(倍增)📢</span>回报。她不仅联络了朝中多位忠臣，还在民间广布眼线。她常常乔装出宫，亲自体察民情，了解百姓疾苦。一次，她在市井中见一老妇跪地哭泣，便上前询问。`,

  `老妇哭诉道："官府强征我儿入伍，说是去边疆抵御外敌，可那哪是什么敌人，分明是赵相的人在做<span class="w">foul(邪恶)📢</span>勾当！"清雪心中愤怒，表面上却不动声色，只给了老妇一些银两便离去。`,

  `回到宫中，清雪立刻召见林默然。"将军，赵显的罪行已经<span class="w">enlarge(扩大)📢</span>到不可收拾的地步，我们必须尽快行动。"林默然皱眉："公主，是否操之过急？我们的准备还不够充分。"清雪坚定道："时不我待，若再拖延，恐怕会失去最佳时机。"`,

  `当晚，清雪召集心腹在偏殿密会。她详细<span class="w">calculate(计算)📢</span>了各方势力，制定了周密的计划。"明日早朝，我将当众揭露赵显的罪行。诸位需在关键时刻给予支持。"众人齐声应诺，誓言效忠。`,

  `赵显党羽中有一位名叫王烈的将领，对赵显心存不满。清雪派人暗中接触，许以高官厚禄。王烈本就看不惯赵显那张<span class="w">sour(刻薄)📢</span>的嘴脸，当即答应倒戈。这成为清雪棋盘上最关键的一步。`,

  `清晨，清雪在镜前整理仪容。侍女为她戴上一顶精致的<span class="w">wreath(花环)📢</span>作为发饰，她却摇摇头取下："今日不是赏花的日子，换上素净的发簪。"侍女依言照做，心中暗暗佩服公主的沉稳。`,

  `早朝之上，赵显照例发号施令。他刚要开口，清雪突然站起身来，朗声道："诸位大人，本宫有要事禀报。"赵显脸色一变，正要阻拦，却见几位大臣已站出来支持清雪。赵显厉声<span class="w">denial(否认)📢</span>道："公主有何要事？退下！"清雪不卑不亢，继续陈述。`,

  `清雪拿出厚厚的证据，当众宣读赵显的罪状。她的声音如同洪钟，<span class="w">satisfy(使相信)📢</span>了在场所有人的心。那些<span class="w">opaque(晦涩难懂)📢</span>的账目在她手中变得清晰明了，每一条罪行都清清楚楚。赵显大惊失色，厉声喝道："你这是造反！"清雪冷笑道："本宫所言，皆是有据可查，丞相若不服，大可当面对质。"`,

  `赵显的党羽见势不妙，纷纷噤声。王烈站在一旁，目光如炬，随时准备出手。此时，整个朝堂如同陷入了<span class="w">vacuum(真空)📢</span>般的死寂，所有人都屏息凝神，等待着接下来的发展。`,

  `清雪趁机进言："父皇，赵显祸国殃民，罪不容诛。请父皇明察！"皇帝年迈体弱，早已对赵显不满，只是苦于没有借口。如今证据确凿，当即下令将赵显拿下。赵显面如死灰，被侍卫拖出大殿。`,

  `赵显被诛后，朝中局势暂时稳定。清雪并未松懈，她深知这只是第一步。要真正掌握大权，还需要<span class="w">persevere(坚持)📢</span>不懈的努力。她每日批阅奏折至深夜，从不懈怠。`,

  `林默然见清雪如此辛劳，心中甚是心疼。一日，他带来一匹良驹，说："公主，这马名为<span class="w">rocket(火箭)📢</span>，日行千里，您骑着它可以放松身心。"清雪笑了："将军是在取笑本宫吗？"林默然正色道："属下怎敢。只是见公主太过操劳，想让您歇息片刻。"`,

  `两人并肩在宫外郊野骑马，清雪难得放松了紧绷的心弦。她看着远处青山，突然问："将军，你可曾想过离开这纷扰的朝堂？"林默然沉默片刻："属下从未想过。因为这里有公主在。"清雪心头一暖，却只淡淡一笑。`,

  `回宫后，清雪召见了几位年轻的<span class="w">secondary(中级)📢</span>官员，开设了一场小型的<span class="w">seminar(研讨会)📢</span>，讨论如何振兴国政。她循循善诱，鼓励众人畅所欲言。一位年轻官员激动地说："公主殿下的见识，实乃<span class="w">revolutionary(革新)📢</span>之举！"清雪微微摇头："本宫所行，不过是遵循先贤之道。"`,

  `夜深人静，清雪独坐书房。窗外月光如水，她想起母妃临终的嘱托，心中涌起无尽的感慨。<span class="w">past(过去的)📢</span>种种，如同一把<span class="w">threat(威胁)📢</span>悬在头顶，却也磨砺了她的意志。她知道自己已无路可退，唯有前行。`,

  `林默然轻步走进书房，见清雪凝神沉思，便没有打扰。清雪察觉，抬首道："将军何时来的？"林默然道："刚到。见公主沉思，不忍打扰。"清雪放下笔："将军有事？"林默然递上一封密信："边疆急报。"`,

  `清雪拆开信，眉头紧锁。原来北方蛮族蠢蠢欲动，意图入侵。她沉声道："此事不可轻视。将军，你需即刻整军备战。"林默然领命，又道："公主，属下有一请求。"清雪抬头："请讲。"林默然深吸一口气："属下愿随公主一同前往边疆。"`,

  `清雪惊讶："将军乃朝中栋梁，岂能轻易离开京城？"林默然正色道："公主的安全，比什么都重要。"清雪心中感动，却正色道："将军的好意本宫心领了。但京城更需要你坐镇。边疆之事，本宫自有安排。"`,

  `林默然无法，只得作罢。临走时，他深深看了清雪一眼，那眼神中有千言万语。清雪装作不知，心中却如打翻了五味瓶。她知道，自己对这位忠诚的将军，已生出几分不一样的情愫。`,

  `数日后，清雪乔装前往边疆视察。她骑着一头健壮的<span class="w">ox(牛)📢</span>拉着车，混在商队中前行。一路上，她仔细观察边境防务，心中不断盘算着对策。`,

  `到达边关后，清雪发现守军士气低落，军备不足。她召见守将，严厉问责。守将战战兢兢道："公主殿下，朝廷拨给的<span class="w">salary(薪金)📢</span>不足，士兵们连饭都吃不饱，何谈士气？"清雪怒道："本宫会彻查此事！"`,

  `回到京城，清雪立刻追查军饷去向。发现原来是户部官员贪污克扣。她大发雷霆，将涉事官员全部革职查办，并重新调配银两，确保边疆军需充足。`,

  `林默然见清雪如此雷厉风行，心中愈发敬佩。一日，他请清雪到府上做客。两人坐在亭中，林默然亲自<span class="w">poke(戳)📢</span>着炭火煮茶。茶香袅袅中，他说道："公主，属下有一事相求。"清雪侧首："将军请说。"`,

  `林默然深吸一口气："属下想请公主，给属下一个<span class="w">resolve(决心)📢</span>的机会。"清雪不解："什么意思？"林默然直视她的眼睛："属下想守护公主一辈子，不知公主可否给属下这个荣幸？"清雪愣住，半晌无言。`,

  `许久，清雪才道："将军，本宫肩上背负着大燕的兴亡，儿女私情，本宫……"林默然打断她："属下明白。属下只愿公主知道，无论何时何地，属下永远是公主最坚实的后盾。"说着，他指向远处的石桥："公主，那座<span class="w">bridge(桥)📢</span>，属下愿做公主的桥梁，通往任何公主想去的地方。"`,

  `清雪心头一热，眼眶微微泛红。她转过身，低声道："将军的心意，本宫知道了。"林默然心中一喜，知道公主心中已有自己的一席之地。`,

  `春暖花开之际，清雪在宫中举办了一场盛大的宴会。她身着华服，端坐上首，宛如一尊从历史中走来的女神。大臣们纷纷上前行礼，称赞她的功绩。清雪却只是淡淡一笑，心中想的，却是那日在亭中，林默然说的话语。`,

  `宴会上，清雪召来林默然，低声问："将军，那日你送本宫的礼物，本宫很喜欢。"林默然一愣，随即明白她说的是那匹马。他笑道："公主若喜欢，属下还有更好的。"清雪眼中闪过一丝笑意："将军是在讨好本宫吗？"林默然正色道："属下不敢。只是属下愿将自己所有最好的，都献给公主。"`,

  `岁月流转，清雪在朝中的地位愈发稳固。她推行新政，整顿吏治，使得大燕国力蒸蒸日上。百姓们称颂她是"女中尧舜"，朝臣们则敬畏她如真正的帝王。然而只有林默然知道，这位铁血的公主，心中藏着怎样柔软的角落。`,

  `一日，清雪在<span class="w">bathe(沐浴)📢</span>后独坐窗前，望着满园繁花。林默然来报："公主，边疆急报，蛮族退兵了。"清雪长舒一口气："将军辛苦了。"林默然走近，轻声道："公主，属下想……想为公主摘一朵花。"清雪微笑点头。`,

  `林默然摘来一朵娇艳的牡丹，轻轻插在清雪发间。两人四目相对，清雪终于卸下心防，低声道："默然，这些日子辛苦你了。"林默然握住她的手："属下不辛苦。只要能看到公主的笑容，属下便心满意足。"`,

  `那晚，月光如水。清雪靠在林默然肩头，难得露出柔情的一面。她说："你知道吗？我从小就知道，这世上没有真正可信之人。但你……"她顿了顿，"你让我愿意用一<span class="w">ounce(盎司)📢</span>的信任，去赌一个未来。"林默然紧紧握住她的手："公主，属下定不负您。"`,

  `皇帝驾崩后，清雪以公主身份摄政，成为大燕历史上第一位女帝。她在位期间，励精图治，开创了一个前所未有的盛世。史书记载，她是一位卓越的<span class="w">statesman(政治家)📢</span>，以智慧和勇气改变了大燕的命运。`,

  `然而史书中没有记载的，是女帝心中那份隐秘的柔情。每当夜深人静，她会想起与林默然并肩作战的日子，想起那些共度的艰难岁月。那些记忆，是她心中最珍贵的宝藏。`,

  `女帝即位后，林默然被封为大将军，掌管天下兵马。他依然如从前一样，默默守护在女帝身侧。朝臣们不明白，为何女帝对这位将军如此信任。只有他们自己知道，这份信任是历经风雨铸就的。`,

  `一日，女帝召见林默然，屏退左右。她从袖中取出一封信，递给他："将军，这是本宫为你写的。你……可以看看。"林默然展开信笺，只见上面写着一行字："风雨同舟，生死与共。"他抬头，见女帝眼中泪光闪烁，心中涌起无限感慨。`,

  `林默然跪下，郑重叩首："臣林默然，愿为陛下赴汤蹈火，万死不辞。"女帝亲手扶起他，轻声道："本宫不要你死。本宫要你活着，陪着本宫看这盛世长存。"林默然握住她的手，深深点头。`,

  `从此，大燕王朝开启了一个新的纪元。女帝萧清雪以<span class="w">stiff(坚定)📢</span>的意志和非凡的智慧，引领国家走向繁荣。而她与林默然的故事，则被后人传为佳话，成为乱世中最动人的一段传奇。`,

  `多年后，当女帝年迈，回首往事时，她常常会想起那些艰难的岁月。她想起母妃的叮嘱，想起老者的教诲，想起与林默然并肩作战的日日夜夜。她用尽全力<span class="w">preach(鼓吹)📢</span>的信念，终于化为现实。`,

  `女帝临终前，对林默然说："我这一生，做了许多事。有些是对的，有些是错的。但有一件事，我从不后悔。"林默然含泪问："何事？"女帝微笑道："遇见你。"林默然泪如雨下，紧握住她的手："陛下，属下亦然。"`,

  `女帝驾崩后，林默然为其守陵三年。三年后，他辞官归隐，从此不问朝政。有人问他为何如此，他只淡淡道："陛下已去，这天下与我何干？"说完，便再无言语。`,

  `后人在女帝陵前立碑，上书"大燕女帝萧清雪之陵"八个大字。碑前常年有人敬献花束，形成一个永不凋零的<span class="w">wreath(花环)📢</span>。而林默然的名字，则被刻在女帝墓旁的一块石碑上，永远守护着他一生的挚爱。`,

  `史官评价女帝时写道："女帝清雪，以一介女流之身，力挽狂澜于既倒，实乃千古一人。其治国之术，若以<span class="w">modern(现代)📢</span>眼光观之，亦有可取之处。"而民间流传的故事，则更加动人——一段关于权谋与柔情，关于坚强与脆弱的传奇。`,

  `人们说，女帝的宫殿中有一架巨大的<span class="w">engine(引擎)📢</span>状的水车，是她亲自设计，用来灌溉御花园。每当水车转动，发出沉闷的声响，女帝便会驻足观看，仿佛在回忆什么。林默然曾问她在想什么，她只微笑道："在想，这天下，终是被我们守护住了。"`,

  `人们还说，女帝曾造出一种能发出巨大声响的装置，形似<span class="w">loudspeaker(扩音器)📢</span>，用于在朝堂上传达政令。那是她为了防止奸臣篡改旨意而发明的。林默然曾笑着说："陛下的智慧，当真无人能及。"女帝只是淡淡道："不过是迫不得已的办法。"`,

  `至于那传说中女帝曾用一种形似<span class="w">missile(导弹)📢</span>的武器击退蛮族的故事，则更像是民间的趣谈。没有人相信，一位柔弱的公主，竟能造出如此威力巨大的武器。但无论是真是假，女帝的传奇，已深深烙印在大燕的历史中。`,

  `大燕的百姓们永远记得，在他们的王朝最黑暗的时刻，有一位公主挺身而出，用智慧与勇气，撑起了整片天空。她如同夜空中最亮的星辰，照亮了无数人的前路。而她与林默然的爱情，也成为了后世无数人心中的向往。`,

  `女帝的故事流传千古，成为无数后人学习的典范。她用一生证明，女子亦可成就伟业。她的传奇告诉世人，只要心怀信念，便能克服一切艰难险阻。她用柔弱的身躯，扛起了整个王朝的命运。`,

  `而她最珍视的那份情感，也从未因为权力的膨胀而<span class="w">sour(变质)📢</span>。相反，岁月的洗礼让这份感情愈发醇厚。她与林默然，是君臣，是战友，更是彼此生命中最重要的人。`,

  `王朝兴衰，如过眼云烟。但女帝萧清雪的名字，与她那传奇般的一生，却永远铭刻在历史的丰碑上。后人读史至此，无不扼腕叹息：这样的女子，真乃千古一人。`,

  `而每当夜深人静，有人路过女帝陵墓时，仿佛能听到风中传来叹息："这天下，我为你守住了。"那声音空灵缥缈，如同一曲永恒的歌谣，在历史的长河中久久回荡，不愿散去……`
];

// 生成学习版 HTML
const learningHtml = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>王朝秘辛：女帝的权谋与柔情 · 学习版</title>
<style>
  :root { --pill: #E1BEE7; --accent: #9C27B0; --bg-soft: #F3E5F5; }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { margin: 0; padding: 0; width: 100%; min-height: 100vh;
    font-family: -apple-system, "PingFang SC", "Microsoft YaHei", "Segoe UI", sans-serif;
    color: #2b2b2b; background: linear-gradient(180deg, var(--bg-soft), #ffffff); background-attachment: fixed; }
  .wrap { max-width: 297mm; width: 100%; margin: 0 auto; padding: 0 40px 80px; }
  header.top { text-align: center; padding: 46px 40px 30px; }
  header.top .badge { display: inline-block; padding: 5px 16px; border-radius: 999px;
    background: var(--accent); color: #fff; font-size: 13px; letter-spacing: 2px; margin-bottom: 16px; }
  header.top h1 { font-size: 34px; margin: 0 0 10px; letter-spacing: 2px; }
  header.top p.sub { color: #888; font-size: 15px; margin: 0 0 18px; }
  section.story { background: #fff; border-radius: 20px; padding: 30px 32px 34px;
    margin-bottom: 30px; box-shadow: 0 8px 30px rgba(0,0,0,.05); }
  section.story .step { display: inline-block; font-size: 13px; color: var(--accent); font-weight: 700;
    border-left: 4px solid var(--accent); padding-left: 10px; margin-bottom: 14px;
    background: var(--bg-soft); border-radius: 4px; padding: 6px 12px; }
  section.story h2 { font-size: 26px; margin: 6px 0 8px; letter-spacing: 1px; line-height: 1.35; }
  section.story h2 .no { color: var(--accent); margin-right: 10px; }
  section.story .meta { font-size: 13px; color: #aaa; margin-bottom: 22px; }
  section.story .text p { font-size: 18px; line-height: 2.4; margin: 0 0 4px; text-align: justify; }
  .w { background-color: #E1BEE7; border-radius: 999px; padding: 0.12em 0.55em;
    margin: 0 1px; white-space: nowrap; color: #333; font-weight: 600; cursor: pointer; }
  .w:hover { opacity: 0.85; }
  footer { text-align: center; color: #bbb; font-size: 13px; margin-top: 40px; }
</style>
</head>
<body>
  <div class="wrap">
    <header class="top">
      <div class="badge">看故事记单词 · 学习版</div>
      <h1>王朝秘辛：女帝的权谋与柔情</h1>
      <p class="sub">古代 · 权谋 · 女强</p>
    </header>
    <section class="story">
      <div class="step">Step 1：在语境中认识单词</div>
      <h2><span class="no">Story21</span>一段权谋与柔情的传奇</h2>
      <div class="meta">本篇约 3000 字 · 融入 50 个重点词汇 · 点击📢可朗读发音</div>
      <div class="text">${storyParagraphs.map(p => `<p>${p}</p>`).join('\n')}</div>
    </section>
    <footer>王朝秘辛：女帝的权谋与柔情 · 学习版　|　看故事记单词</footer>
  </div>

  <script>
  document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.w').forEach(function(span) {
      var text = span.textContent;
      var match = text.match(/^([a-zA-Z]+)/);
      if (match) {
        var word = match[1];
        span.addEventListener('click', function() {
          speak(word);
        });
      }
    });
  });

  function speak(word) {
    if ('speechSynthesis' in window) {
      var utterance = new SpeechSynthesisUtterance(word);
      utterance.lang = 'en-US';
      utterance.rate = 0.9;
      speechSynthesis.speak(utterance);
    }
  }
  </script>
</body>
</html>`;

// 生成复习版 HTML
const reviewParagraphs = storyParagraphs.map(p => {
  return p.replace(/<span class="w">([a-zA-Z]+)\(([^)]+)\)📢<\/span>/g,
    '<span class="r" onclick="toggle(this)">$1(<span class="h">$2</span>)</span>');
});

const reviewHtml = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>王朝秘辛：女帝的权谋与柔情 · 复习版</title>
<style>
  :root { --pill-review: #C8E6C9; --accent: #4CAF50; --bg-soft: #E8F5E9; }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { margin: 0; padding: 0; width: 100%; min-height: 100vh;
    font-family: -apple-system, "PingFang SC", "Microsoft YaHei", "Segoe UI", sans-serif;
    color: #2b2b2b; background: linear-gradient(180deg, var(--bg-soft), #ffffff); background-attachment: fixed; }
  .wrap { max-width: 297mm; width: 100%; margin: 0 auto; padding: 0 40px 80px; }
  header.top { text-align: center; padding: 46px 40px 30px; }
  header.top .badge { display: inline-block; padding: 5px 16px; border-radius: 999px;
    background: var(--accent); color: #fff; font-size: 13px; letter-spacing: 2px; margin-bottom: 16px; }
  header.top h1 { font-size: 34px; margin: 0 0 10px; letter-spacing: 2px; }
  header.top p.sub { color: #888; font-size: 15px; margin: 0 0 18px; }
  section.story { background: #fff; border-radius: 20px; padding: 30px 32px 34px;
    margin-bottom: 30px; box-shadow: 0 8px 30px rgba(0,0,0,.05); }
  section.story .step { display: inline-block; font-size: 13px; color: var(--accent); font-weight: 700;
    border-left: 4px solid var(--accent); padding-left: 10px; margin-bottom: 14px;
    background: var(--bg-soft); border-radius: 4px; padding: 6px 12px; }
  section.story h2 { font-size: 26px; margin: 6px 0 8px; letter-spacing: 1px; line-height: 1.35; }
  section.story h2 .no { color: var(--accent); margin-right: 10px; }
  section.story .meta { font-size: 13px; color: #aaa; margin-bottom: 22px; }
  section.story .text p { font-size: 18px; line-height: 2.4; margin: 0 0 12px; text-align: justify; }
  .r { background-color: #C8E6C9; border-radius: 999px; padding: 2px 8px; margin: 0 2px;
    white-space: nowrap; color: #333; font-weight: 600; cursor: pointer; }
  .r:hover { opacity: 0.85; }
  .r .h { color: transparent; user-select: none; }
  .r.show .h { color: #333; }
  footer { text-align: center; color: #bbb; font-size: 13px; margin-top: 40px; }
</style>
</head>
<body>
  <div class="wrap">
    <header class="top">
      <div class="badge">看故事记单词 · 复习版</div>
      <h1>王朝秘辛：女帝的权谋与柔情</h1>
      <p class="sub">古代 · 权谋 · 女强</p>
    </header>
    <section class="story">
      <div class="step">Step 2：看单词回忆中文释义</div>
      <h2><span class="no">Story21</span>一段权谋与柔情的传奇</h2>
      <div class="meta">本篇约 3000 字 · 融入 50 个重点词汇 · 点击词汇显示/隐藏中文释义</div>
      <div class="text">${reviewParagraphs.map(p => `<p>${p}</p>`).join('\n')}</div>
    </section>
    <footer>王朝秘辛：女帝的权谋与柔情 · 复习版　|　看故事记单词</footer>
  </div>
  <script> function toggle(el) { el.classList.toggle('show'); } </script>
</body>
</html>`;

// 输出目录
const outputDir = '../result';
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// 写入文件
fs.writeFileSync(path.join(outputDir, '21_王朝秘辛_学习版.html'), learningHtml, 'utf-8');
fs.writeFileSync(path.join(outputDir, '21_王朝秘辛_复习版.html'), reviewHtml, 'utf-8');

console.log('✓ 已生成：21_王朝秘辛_学习版.html');
console.log('✓ 已生成：21_王朝秘辛_复习版.html');
console.log(`\n故事信息：`);
console.log(`- 标题：王朝秘辛：女帝的权谋与柔情`);
console.log(`- 题材：古代 · 权谋 · 女强`);
console.log(`- 融入单词数：50 个`);
console.log(`- 故事篇幅：约 3000 字`);