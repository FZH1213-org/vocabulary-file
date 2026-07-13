const fs = require('fs');
const path = require('path');

// 故事配置（故事24-30）
const storyConfigs = [
  { theme: '校园初恋', title: '怦然心动', subtitle: '初遇之恋', tags: '校园 · 初恋 · 心动' },
  { theme: '闪婚甜恋', title: '闪婚之后', subtitle: '意外之爱', tags: '闪婚 · 爱情 · 意外' },
  { theme: '大女主医妃', title: '医妃当道', subtitle: '医女逆袭', tags: '医妃 · 穿越 · 权谋' },
  { theme: '霸总独宠', title: '独宠一人', subtitle: '唯一之爱', tags: '霸总 · 独宠 · 真爱' },
  { theme: '职场升迁', title: '步步高升', subtitle: '奋斗之路', tags: '职场 · 升迁 · 成长' },
  { theme: '校园情敌', title: '情敌出现', subtitle: '爱情争夺', tags: '校园 · 情敌 · 争夺' },
  { theme: '先婚后爱', title: '婚后才爱', subtitle: '先婚后恋', tags: '婚姻 · 爱情 · 转变' }
];

// 故事内容
const storyContents = {
  '初遇之恋': `阳光明媚的大学校园里，李明正【read/阅读】着一本小说。作为大一新生，他对大学生活充满期待。每一天都是新的开始，每一刻都承载着青春的【dream/梦想】。他深知大学时光的珍贵。校园里【beautiful/美丽】，他【enjoy/享受】着阅读。他内心很【peaceful/平静】，感受着阳光。他【always/总是】保持欣赏的心态。

今天他像往常一样坐在图书馆的角落。李明注意到一个女生走过来，她认真读书的样子让他心跳加速。他反复【practice/练习】着想说的话，寻找最合适的时机。这是一个需要【courage/勇气】和真诚的过程。他【never/从不】放弃接近的机会，【always/总是】默默关注。他【observe/观察】她的习惯，【wait/等待】时机。

接近过程中，李明遇到了一个难题。他发现自己太害羞，不敢主动打招呼。他【nervous/紧张】地思考如何开口，尝试了多种方法。最终，他决定从借书开始搭话。改变需要勇气。他【finally/终于】做出决定。他【determined/坚定】地走过去。暗恋即将【end/结束】。

他鼓起勇气走过去，问她这本书怎么样。她转过头，露出一个温柔的笑容。那一刻，他心动了。相遇需要缘分。他【shy/羞涩】地开口，【sincere/真诚】交流。他【nervous/紧张】但同时也【excited/兴奋】。他【hold/屏住】呼吸等待。

她热情地回应他，两人聊了很久。原来她也是文学爱好者。他们约定下次一起讨论书籍。初恋【blossom/萌芽】。他【surprised/惊喜】地看着她。两颗心开始【close/靠近】。

他明白，初恋需要勇气开启，需要真心经营。他们开始约会，在图书馆里相遇，在校园里漫步。爱情在此绽放。他们【respect/尊重】彼此，【share/分享】兴趣，【support/支持】对方。他们【active/积极】经营感情。

李明开始珍惜每一天的相处，用心感受爱情的美好。他告诉她："初恋是最美好的心动，你是我唯一的心动。"他们的爱情从初遇开始，在心动中绽放。爱情在此升华。他【patient/耐心】地陪伴，【encourage/鼓励】彼此成长。他们的故事成为【legend/传奇】。

怦然心动，让李明感受到初遇的美好和初恋的甜蜜。他决定用真心守护这段感情，用勇气面对所有挑战。这是他选择的道路，也是他青春的浪漫。每一次心动，都是一次对爱情的诠释。这是他的承诺。他【determine/决心】一生【devote/奉献】给她，【create/创造】美好回忆，让爱情更加【sweet/甜蜜】，【build/建立】属于他们的家。他【firmly/坚定地】相信爱情的力量。他【promise/承诺】会一直守护她。`,

  '意外之爱': `豪华的公寓里，叶婉正【organize/整理】着行李。作为刚刚闪婚的新娘，她对这个突然的【marriage/婚姻】感到既紧张又期待。每一天都是新的适应，每一刻都承载着未知的【hope/希望】。她深知闪婚的挑战。公寓里【spacious/宽敞】，她【observe/观察】着环境。她内心有些【nervous/紧张】，但充满好奇。她【always/总是】保持礼貌。

今天是她搬进来的第一天。叶婉注意到顾总表面很冷淡，但偶尔流露的关心让她困惑。她反复提醒自己，这只是契约婚姻，不能有其他想法。这是一个需要【rationality/理智】和适应的过程。她【try/尝试】适应环境，【maintain/保持】距离。她【remind/提醒】自己，【control/控制】情绪。

相处过程中，叶婉遇到了一个难题。她发现自己对他产生了异样的感觉，这违背了约定。她【confused/困惑】地分析自己的感情，试图保持理智。最终，她决定顺其自然，不再刻意隐藏。发现需要勇气。她【finally/终于】承认感情。她【surprised/惊讶】于自己的变化。契约变得【complicate/复杂】。

随后的日子里，她发现他也对她越来越好。比如下雨天为她撑伞，生病时送来药品。她开始注意到他的温柔。观察需要时间。她【careful/仔细】观察细节，【moved/感动】于他的关怀。她【nervous/紧张】但同时也【happy/开心】。她【spend/花费】时间了解真实的他。

某次意外中，她遇到危险，他不顾一切地保护了她。那一刻，她的心彻底融化。原来他一直在默默守护她。感情在此【blossom/萌芽】。她【touched/感动】地看着他。两颗心终于【close/靠近】。

告白的那一天，他撕毁契约，说他想给她真正的婚姻。告白【successful/成功】。她【happily/幸福地】接受他的心意。闪婚变成了【real/真实】的爱情。

她明白，爱情不能被定义，需要真心去发现。他们开始真正相爱，珍惜彼此。爱情在此重生。她【respect/尊重】他的付出，【support/支持】他的事业，【share/分享】生活。她【active/积极】经营感情。

叶婉开始珍惜每一天的相处，用心感受爱情的美好。他告诉她："闪婚是意外，真爱是永恒。"他们的爱情从契约开始，却以真心结束。爱情在此升华。她【patient/耐心】地陪伴，【encourage/鼓励】彼此成长。他们的故事成为【legend/传奇】。

闪婚之后，让叶婉感受到意外的惊喜和爱情的美好。她决定用真心经营这段感情，用珍惜守护眼前的幸福。这是她选择的道路，也是她爱情的开始。每一次付出，都是一次对爱情的诠释。这是她的承诺。她【determine/决心】一生【devote/奉献】给他，【create/创造】幸福生活，让爱情更加【sweet/甜蜜】，【build/建立】属于他们的家。她【firmly/坚定地】相信爱情的力量。她【promise/承诺】会一直珍惜彼此。`,

  '医女逆袭': `古代的医馆里，苏瑶正【prepare/准备】着药材。作为穿越而来的现代医生，她用医术在这个时代【survive/生存】。每一味药都承载着救人的【mission/使命】，每一个病人都是生命的托付。她深知医者的责任。医馆里【busy/忙碌】，她【focus/专注】于治病。她内心【calm/冷静】，充满专业。她【always/总是】保持谨慎。

今天来了一位病情危重的贵人。苏瑶注意到所有人都束手无策，只有她能救。她反复分析病情，寻找最佳的治疗方案。这是一个需要【wisdom/智慧】和勇气的过程。她【never/从不】放弃救人，【always/总是】全力以赴。她【diagnose/诊断】病情，【treat/治疗】病人。

治疗过程中，苏瑶遇到了一个难题。她的治疗方案太超前，无人相信。她【worried/担忧】地思考对策，尝试了多种方法。最终，她用实际效果证明了自己。突破需要实力。她【finally/终于】救治成功。她【excited/激动】地看到病人康复。医术得到【recognize/认可】。

成功后，她开始用医术帮助更多的人。她发现，医术可以改变命运，可以救人于水火。成长需要时间。她【active/积极】救治病人，【careful/小心】用药。她【nervous/紧张】但同时也【confident/自信】。她【spend/投入】大量时间治病。

最终，她成为了最著名的医妃，用医术守护百姓。成功【successful/成功】。她【proud/自豪】地看着百姓健康。每个人都为她的【achieve/成就】感到敬佩。

她明白，医术不仅是技能，更是救人的使命。她开始培养更多医者，让医术传承下去。责任在此诞生。她【respect/尊重】医者，【teach/教授】医术，【help/帮助】百姓。她【active/积极】推广医学。

苏瑶成为了一代名医，她的故事激励了无数医者。她告诉他们："医者仁心，救死扶伤。"她的故事帮助了许多人。传承在此延续。她【patient/耐心】地教导，【encourage/鼓励】医者精神。年轻医者都受到她的【inspire/启发】。

医妃当道，让苏瑶感受到医术的力量和生命的价值。她决定继续用医术救人，用能力守护生命。这是她选择的道路，也是她穿越的使命。每一次治疗，都是一次对生命的诠释。这是她的使命。她【determine/决心】一生【devote/奉献】给医学，【save/拯救】更多生命，让百姓更加【healthy/健康】，【build/建立】属于自己的医术传奇。她【firmly/坚定地】相信医者的力量。她【promise/承诺】会一直守护生命。`,

  '唯一之爱': `豪华的办公室里，顾辰正【think/思考】着叶婉。作为从未动心的霸总，她是唯一让他心动的女人。每一天都想见到她，每一刻都在想念她的笑容。他深知这份感情的珍贵。办公室里【quiet/安静】，他【recall/回忆】着相处。他内心充满了【love/爱意】，想要给她全世界。他【always/总是】给她最好的。

今天他决定向全世界宣布她是他的唯一。顾辰注意到外界有很多流言蜚语，他要澄清一切。他反复准备告白，寻找最浪漫的方式。这是一个需要【sincerity/真诚】和勇气的过程。他【never/从不】隐藏感情，【always/总是】公开展示。他【prepare/准备】告白，【arrange/安排】惊喜。

告白过程中，顾辰遇到了一个难题。有人故意散布谣言，想要破坏他们的关系。他【angry/愤怒】地面对流言，决定用行动证明真心。最终，他在公开场合向她告白。改变需要勇气。他【finally/终于】做出决定。他【determined/坚定】地告白。谣言被【destroy/粉碎】。

告白那天，他当众宣布她是他的唯一。所有流言都不攻自破。告白【successful/成功】。她【moved/感动】地接受他的心意。爱情得到【protect/守护】。

他明白，爱情需要勇气守护，需要真心经营。他开始用一生守护她，让她成为最幸福的女人。爱情在此升华。他【respect/尊重】她的意愿，【support/支持】她的事业，【cherish/珍惜】她的存在。他【active/积极】经营感情。

顾辰成为了最专一的霸总，他的故事激励了很多人。他告诉她："你是我的唯一，我一生只爱你。"他的专一让所有人敬佩。爱情在此升华。他【patient/耐心】地陪伴，【encourage/鼓励】彼此成长。他们的爱情成为【legend/传奇】。

独宠一人，让顾辰感受到专一的珍贵和爱情的美好。他决定用一生守护她，用真心证明爱情。这是他选择的道路，也是他爱情的见证。每一次付出，都是一次对爱情的诠释。这是他的承诺。他【determine/决心】一生【devote/奉献】给她，【create/创造】幸福生活，让爱情更加【eternal/永恒】，【build/建立】属于他们的家。他【firmly/坚定地】相信爱情的力量。他【promise/承诺】会一直守护她。`,

  '奋斗之路': `繁忙的办公室里，张悦正【work/工作】到深夜。作为职场新人，她每天都在努力证明自己的【ability/能力】。每一项任务都是机会，每一份努力都承载着升职的【hope/希望】。她深知职场的竞争。办公室里【busy/忙碌】，她【focus/专注】于工作。她内心有些【nervous/紧张】，但充满斗志。她【always/总是】保持积极形象。

今天的任务是完成部门的重要汇报。张悦注意到领导在观察她的表现，这是升职的关键。她反复准备每一个细节，寻找最完美的呈现。这是一个需要【confidence/自信】和实力的过程。她【never/从不】轻言放弃，【always/总是】全力以赴。她【prepare/准备】充分，【rehearse/排练】多次。

汇报过程中，张悦遇到了一个难题。有同事故意刁难，提出尖锐问题。她【shocked/震惊】但表面保持冷静，努力寻找应对方案。最终，她用【professional/专业】的回答化解危机。突破需要智慧。她【finally/终于】完成任务。她【excited/激动】地看到领导认可。汇报【perfectly/完美】结束。

汇报后，张悦开始主动承担更多责任。她发现，只有主动出击，才能获得更多机会。成长需要行动。她【active/积极】接受挑战，【brave/勇敢】面对竞争。她【nervous/紧张】但同时也【confident/自信】。她【spend/投入】大量时间提升。

年终考核时，张悦成功获得晋升，击败所有竞争对手。升职【successful/成功】。她【proud/自豪】地看着晋升通知。同事们都为她的【achieve/成就】感到敬佩。

升职后，她明白职场需要持续努力。她开始分享经验，帮助新人成长。经验在此传递。她【respect/尊重】对手，【share/分享】经验，【help/帮助】新人。她【active/积极】参与团队建设。

张悦成为部门最年轻的经理，她的故事激励了无数新人。她告诉他们："努力是职场最好的通行证。"她的故事帮助了许多人成长。传承在此延续。她【patient/耐心】地指导，【encourage/鼓励】奋斗精神。年轻人都受到她的【inspire/启发】。

步步高升，让张悦感受到奋斗的魅力和成功的价值。她决定继续深耕职业，用实力赢得尊重，用努力证明价值。这是她选择的道路，也是她成长的人生。每一次竞争，都是一次对自己的证明。这是她的使命。她【determine/决心】一生【devote/奉献】给事业，【achieve/实现】职业目标，让人生更加【meaningful/有意义】，【build/建立】属于自己的传奇。她【firmly/坚定地】相信努力的力量。她【promise/承诺】会一直坚持奋斗。`,

  '爱情争夺': `热闹的大学校园里，林明正【walk/漫步】着思考对策。作为苏瑶的暗恋者，他发现有一个强劲的【rival/情敌】出现。每一天都要面对竞争，每一刻都是爱情的【battle/战役】。他深知竞争的激烈。校园里【vibrant/生机勃勃】，他【observe/观察】着情敌。他内心【nervous/紧张】，但坚定不放弃。他【always/总是】保持自信。

今天他看到情敌送给苏瑶礼物。林明注意到必须采取行动，否则会失去机会。他反复思考如何打动她，寻找最佳的表白方式。这是一个需要【courage/勇气】和真诚的过程。他【never/从不】放弃追求，【always/总是】努力表现。他【plan/计划】行动，【prepare/准备】惊喜。

追求过程中，林明遇到了一个难题。情敌的条件比他优秀，他感到自卑和退缩。他【worried/担忧】地思考对策，尝试了多种方法。最终，他决定用真心打动她，而不是比较物质。改变需要勇气。他【finally/终于】做出决定。他【determined/坚定】地表白。竞争即将【end/结束】。

表白那天，他送给她一封手写信，表达所有的心意。他没有华丽的礼物，只有最真诚的心。表白需要真诚。他【sincere/真诚】地表达，【nervous/紧张】等待回复。他【shy/羞涩】但同时也【hopeful/充满希望】。他【hold/屏住】呼吸等待。

终于，她红着脸说："我选择你，因为你是最真心的。"那一刻，他知道真心胜过一切。表白【successful/成功】。他【surprised/惊喜】地看着她。两颗心终于【together/在一起】。

他明白，爱情不需要比较，只需要真心。他们开始交往，珍惜这份来之不易的感情。爱情在此绽放。他们【respect/尊重】彼此，【support/支持】对方，【share/分享】生活。他们【active/积极】经营感情。

林明成为了最终的胜利者，他的故事激励了很多人。他告诉他们："爱情不看条件，只看真心。"他的故事帮助了许多人。经验在此传递。他【patient/耐心】地陪伴，【encourage/鼓励】勇敢追求。追求者都受到他的【inspire/启发】。

情敌出现，让林明感受到竞争的压力和真心的力量。他决定用真心守护这段感情，用勇气面对所有挑战。这是他选择的道路，也是他爱情的见证。每一次努力，都是一次对爱情的诠释。这是他的承诺。他【determine/决心】一生【devote/奉献】给她，【create/创造】幸福生活，让爱情更加【firm/坚定】，【build/建立】属于他们的家。他【firmly/坚定地】相信真心的力量。他【promise/承诺】会一直守护她。`,

  '先婚后恋': `豪华的公寓里，陈婉正【organize/整理】着结婚照。作为刚刚结婚的新娘，她对这个没有爱情的【marriage/婚姻】感到迷茫。每一天都是新的相处，每一刻都在寻找爱的【hope/希望】。她深知婚姻的挑战。公寓里【spacious/宽敞】，她【observe/观察】着环境。她内心有些【confuse/困惑】，但愿意尝试。她【always/总是】保持礼貌。

今天是她婚后的第一个月。陈婉注意到丈夫表面冷淡，但偶尔流露的关心让她困惑。她反复思考这段婚姻的意义，试图找到相处的方式。这是一个需要【patience/耐心】和理解的过程。她【try/尝试】了解他，【maintain/保持】沟通。她【remind/提醒】自己，【give/给】彼此时间。

相处过程中，陈婉遇到了一个难题。她发现自己对他产生了异样的感情，但不确定他的想法。她【confused/困惑】地分析自己的感情，试图保持理智。最终，她决定顺其自然，不再刻意隐藏。发现需要勇气。她【finally/终于】承认感情。她【surprised/惊讶】于自己的变化。婚姻变得【different/不同】。

随后的日子里，她发现他也在默默关心她。比如下雨天为她撑伞，生病时送来药品。她开始注意到他的温柔。观察需要时间。她【careful/仔细】观察细节，【moved/感动】于他的关怀。她【nervous/紧张】但同时也【happy/开心】。她【spend/花费】时间了解真实的他。

某次意外中，她遇到危险，他不顾一切地保护了她。那一刻，她的心彻底融化。原来他一直在默默守护她。感情在此【blossom/萌芽】。她【touched/感动】地看着他。两颗心终于【close/靠近】。

告白的那一天，他第一次主动表达心意，说他想给她真正的爱情。告白【successful/成功】。她【happily/幸福地】接受他的心意。先婚终于后爱。

她明白，爱情可以在婚后培养，需要真心经营。他们开始真正相爱，珍惜彼此。爱情在此重生。她【respect/尊重】他的付出，【support/支持】他，【share/分享】生活。她【active/积极】经营感情。

陈婉开始珍惜每一天的相处，用心感受爱情的美好。他告诉她："婚姻是开始，爱情是终点。"他们的爱情从婚姻开始，在真心培养中绽放。爱情在此升华。她【patient/耐心】地陪伴，【encourage/鼓励】彼此成长。他们的故事成为【legend/传奇】。

婚后才爱，让陈婉感受到婚姻的意义和爱情的美好。她决定用真心经营这段感情，用珍惜守护眼前的幸福。这是她选择的道路，也是她爱情的开始。每一次付出，都是一次对爱情的诠释。这是她的承诺。她【determine/决心】一生【devote/奉献】给他，【create/创造】幸福生活，让爱情更加【deep/深厚】，【build/建立】属于他们的家。她【firmly/坚定地】相信爱情的力量。她【promise/承诺】会一直珍惜彼此。`
};

// HTML生成函数
function generateLearningHTML(config, storyContent, storyIndex) {
  let processedContent = storyContent.replace(/【(\w+)\/([^】]+)】/g, (match, word, meaning) => {
    return `<span class="w">${word}(${meaning})📢</span>`;
  });
  const paragraphs = processedContent.split('\n\n').filter(p => p.trim());
  const paragraphsHTML = paragraphs.map(p => `<p>${p}</p>`).join('\n');
  const wordCount = (storyContent.match(/【\w+\/[^】]+】/g) || []).length;
  const charCount = storyContent.replace(/【\w+\/[^】]+】/g, '').length;

  return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${config.title}：${config.subtitle} · 学习版</title>
<style>:root{--pill:#E1BEE7;--accent:#9C27B0;--bg-soft:#F3E5F5}*{box-sizing:border-box;margin:0;padding:0}body{margin:0;padding:0;width:100%;min-height:100vh;font-family:-apple-system,"PingFang SC","Microsoft YaHei","Segoe UI",sans-serif;color:#2b2b2b;background:linear-gradient(180deg,var(--bg-soft),#fff);background-attachment:fixed}.wrap{max-width:297mm;width:100%;margin:0 auto;padding:0 40px 80px}header.top{text-align:center;padding:46px 40px 30px}header.top .badge{display:inline-block;padding:5px 16px;border-radius:999px;background:var(--accent);color:#fff;font-size:13px;letter-spacing:2px;margin-bottom:16px}header.top h1{font-size:34px;margin:0 0 10px;letter-spacing:2px}header.top p.sub{color:#888;font-size:15px;margin:0 0 18px}section.story{background:#fff;border-radius:20px;padding:30px 32px 34px;margin-bottom:30px;box-shadow:0 8px 30px rgba(0,0,0,.05)}section.story .step{display:inline-block;font-size:13px;color:var(--accent);font-weight:700;border-left:4px solid var(--accent);padding-left:10px;margin-bottom:14px;background:var(--bg-soft);border-radius:4px;padding:6px 12px}section.story h2{font-size:26px;margin:6px 0 8px;letter-spacing:1px;line-height:1.35}section.story h2 .no{color:var(--accent);margin-right:10px}section.story .meta{font-size:13px;color:#aaa;margin-bottom:22px}section.story .text p{font-size:18px;line-height:2.4;margin:0 0 4px;text-align:justify}.w{background-color:#E1BEE7;border-radius:999px;padding:.12em .55em;margin:0 1px;white-space:nowrap;color:#333;font-weight:600}footer{text-align:center;color:#bbb;font-size:13px;margin-top:40px}</style>
</head>
<body>
<div class="wrap">
<header class="top">
<div class="badge">看故事记单词</div>
<h1>${config.title}</h1>
<p class="sub">${config.tags}</p>
</header>
<section class="story">
<div class="step">Step 1：在语境中认识单词</div>
<h2><span class="no">Story${String(storyIndex).padStart(2,'0')}</span>${config.subtitle}</h2>
<div class="meta">本篇约 ${charCount} 字 · 融入 ${wordCount} 个重点词汇 · 点击📢可朗读发音</div>
<div class="text">
${paragraphsHTML}
</div>
</section>
<footer>${config.title}：${config.subtitle} · 学习版　|　看故事记单词</footer>
</div>
</body>
</html>`;
}

function generateReviewHTML(config, storyContent, storyIndex) {
  let processedContent = storyContent.replace(/【(\w+)\/([^】]+)】/g, (match, word, meaning) => {
    return `<span class="r" onclick="toggle(this)">${word}(<span class="h">${meaning}</span>)</span>`;
  });
  const paragraphs = processedContent.split('\n\n').filter(p => p.trim());
  const paragraphsHTML = paragraphs.map(p => `<p>${p}</p>`).join('\n');
  const wordCount = (storyContent.match(/【\w+\/[^】]+】/g) || []).length;
  const charCount = storyContent.replace(/【\w+\/[^】]+】/g, '').length;

  return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${config.title}：${config.subtitle} · 复习版</title>
<style>:root{--pill-review:#C8E6C9;--accent:#4CAF50;--bg-soft:#E8F5E9}*{box-sizing:border-box;margin:0;padding:0}body{margin:0;padding:0;width:100%;min-height:100vh;font-family:-apple-system,"PingFang SC","Microsoft YaHei","Segoe UI",sans-serif;color:#2b2b2b;background:linear-gradient(180deg,var(--bg-soft),#fff);background-attachment:fixed}.wrap{max-width:297mm;width:100%;margin:0 auto;padding:0 40px 80px}header.top{text-align:center;padding:46px 40px 30px}header.top .badge{display:inline-block;padding:5px 16px;border-radius:999px;background:var(--accent);color:#fff;font-size:13px;letter-spacing:2px;margin-bottom:16px}header.top h1{font-size:34px;margin:0 0 10px;letter-spacing:2px}header.top p.sub{color:#888;font-size:15px;margin:0 0 18px}section.story{background:#fff;border-radius:20px;padding:30px 32px 34px;margin-bottom:30px;box-shadow:0 8px 30px rgba(0,0,0,.05)}section.story .step{display:inline-block;font-size:13px;color:var(--accent);font-weight:700;border-left:4px solid var(--accent);padding-left:10px;margin-bottom:14px;background:var(--bg-soft);border-radius:4px;padding:6px 12px}section.story h2{font-size:26px;margin:6px 0 8px;letter-spacing:1px;line-height:1.35}section.story h2 .no{color:var(--accent);margin-right:10px}section.story .meta{font-size:13px;color:#aaa;margin-bottom:22px}section.story .text p{font-size:18px;line-height:2.4;margin:0 0 12px;text-align:justify}.r{background-color:#C8E6C9;border-radius:999px;padding:2px 8px;margin:0 2px;white-space:nowrap;color:#333;font-weight:600;cursor:pointer}.r:hover{opacity:.85}.r .h{color:transparent;user-select:none}.r.show .h{color:#333}footer{text-align:center;color:#bbb;font-size:13px;margin-top:40px}</style>
</head>
<body>
<div class="wrap">
<header class="top">
<div class="badge">看故事记单词 · 复习版</div>
<h1>${config.title}</h1>
<p class="sub">${config.tags}</p>
</header>
<section class="story">
<div class="step">Step 2：看单词回忆中文释义</div>
<h2><span class="no">Story${String(storyIndex).padStart(2,'0')}</span>${config.subtitle}</h2>
<div class="meta">本篇约 ${charCount} 字 · 融入 ${wordCount} 个重点词汇 · 点击词汇显示/隐藏中文释义</div>
<div class="text">
${paragraphsHTML}
</div>
</section>
<footer>${config.title}：${config.subtitle} · 复习版　|　看故事记单词</footer>
</div>
<script>function toggle(el){el.classList.toggle('show')}</script>
</body>
</html>`;
}

// 主函数
function main() {
  const outputDir = path.join(__dirname, '../result');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  storyConfigs.forEach((config, index) => {
    const content = storyContents[config.subtitle];
    if (!content) {
      console.log(`警告：缺少 "${config.subtitle}" 的故事内容`);
      return;
    }

    const num = String(24 + index).padStart(2, '0');
    const safeTitle = config.title.replace(/[：:]/g, '_');
    const safeSubtitle = config.subtitle.replace(/[：:]/g, '_');

    const learningHTML = generateLearningHTML(config, content, 24 + index);
    fs.writeFileSync(path.join(outputDir, `${num}_${safeTitle}_${safeSubtitle}_学习版.html`), learningHTML);

    const reviewHTML = generateReviewHTML(config, content, 24 + index);
    fs.writeFileSync(path.join(outputDir, `${num}_${safeTitle}_${safeSubtitle}_复习版.html`), reviewHTML);

    const wordCount = (content.match(/【\w+\/[^】]+】/g) || []).length;
    console.log(`✓ 已生成：${config.title} - ${config.subtitle} (${wordCount} 个词汇)`);
  });

  console.log('\n故事24-30已重新生成完成！');
}

main();