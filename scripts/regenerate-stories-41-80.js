const fs = require('fs'), path = require('path');

const allConfigs = [
  {title:'女王归来',subtitle:'商业逆袭',tags:'大女主·商战·复仇'},
  {title:'霸总真心',subtitle:'真爱告白',tags:'霸总·告白·真爱'},
  {title:'职场风云',subtitle:'升职记',tags:'职场·升迁·奋斗'},
  {title:'校园心动',subtitle:'初次恋爱',tags:'校园·初恋·心动'},
  {title:'契约真爱',subtitle:'假戏真做',tags:'契约·婚姻·真爱'},
  {title:'穿越逆袭',subtitle:'凤临天下',tags:'穿越·宫廷·权谋'},
  {title:'霸总独宠',subtitle:'唯一的爱',tags:'霸总·独宠·甜蜜'},
  {title:'职场逆袭',subtitle:'菜鸟成长',tags:'职场·新人·成长'},
  {title:'校园浪漫',subtitle:'青春恋歌',tags:'校园·青春·恋爱'},
  {title:'闪婚真爱',subtitle:'意外之恋',tags:'闪婚·爱情·意外'},
  {title:'重生复仇',subtitle:'千金归来',tags:'大女主·重生·复仇'},
  {title:'霸总追妻',subtitle:'悔婚后',tags:'霸总·追妻·悔婚'},
  {title:'职场斗争',subtitle:'明争暗斗',tags:'职场·斗争·智谋'},
  {title:'校园暗恋',subtitle:'心动时刻',tags:'校园·暗恋·青春'},
  {title:'契约之后',subtitle:'真爱降临',tags:'契约·爱情·转变'},
  {title:'穿越王妃',subtitle:'医女当道',tags:'穿越·医妃·权谋'},
  {title:'霸总宠溺',subtitle:'甜宠日常',tags:'霸总·甜宠·日常'},
  {title:'职场新人',subtitle:'奋斗之路',tags:'职场·新人·奋斗'},
  {title:'校园情敌',subtitle:'爱情争夺',tags:'校园·情敌·争夺'},
  {title:'闪婚幸福',subtitle:'甜蜜婚姻',tags:'闪婚·婚姻·甜蜜'},
  {title:'女强人',subtitle:'商海沉浮',tags:'大女主·商战·成功'},
  {title:'霸总温柔',subtitle:'只对她好',tags:'霸总·温柔·独宠'},
  {title:'职场晋升',subtitle:'步步高升',tags:'职场·晋升·成长'},
  {title:'校园初恋',subtitle:'怦然心动',tags:'校园·初恋·心动'},
  {title:'契约婚姻',subtitle:'先婚后爱',tags:'契约·婚姻·爱情'},
  {title:'穿越逆袭',subtitle:'女王崛起',tags:'穿越·逆袭·权谋'},
  {title:'霸总守护',subtitle:'一生一人',tags:'霸总·守护·真爱'},
  {title:'职场成功',subtitle:'努力证明',tags:'职场·成功·努力'},
  {title:'校园恋爱',subtitle:'青春记忆',tags:'校园·恋爱·青春'},
  {title:'闪婚甜蜜',subtitle:'幸福生活',tags:'闪婚·甜蜜·生活'},
  {title:'女王风范',subtitle:'商业传奇',tags:'大女主·商业·传奇'},
  {title:'霸总情深',subtitle:'真心爱她',tags:'霸总·真爱·情深'},
  {title:'职场奋斗',subtitle:'不断进步',tags:'职场·奋斗·进步'},
  {title:'校园青春',subtitle:'美好时光',tags:'校园·青春·美好'},
  {title:'契约真爱',subtitle:'真心经营',tags:'契约·真爱·经营'},
  {title:'穿越成功',subtitle:'逆袭人生',tags:'穿越·成功·逆袭'},
  {title:'霸总宠爱',subtitle:'永远守护',tags:'霸总·宠爱·守护'},
  {title:'职场成就',subtitle:'梦想实现',tags:'职场·成就·梦想'},
  {title:'校园回忆',subtitle:'难忘青春',tags:'校园·回忆·青春'},
  {title:'闪婚美满',subtitle:'幸福婚姻',tags:'闪婚·美满·婚姻'}
];

const genL = (c, s, i) => {
  const p = s.replace(/【(\w+)\/([^】]+)】/g, (m, w, n) => `<span class="w">${w}(${n})📢</span>`);
  const pp = p.split('\n\n').filter(x => x.trim()).map(x => `<p>${x}</p>`).join('\n');
  const wc = (s.match(/【\w+\/[^】]+】/g)||[]).length, cc = s.replace(/【\w+\/[^】]+】/g,'').length;
  return `<!DOCTYPE html><html lang="zh-CN"><head><meta charset="UTF-8"><title>${c.title}：${c.subtitle} · 学习版</title><style>:root{--pill:#E1BEE7;--accent:#9C27B0;--bg-soft:#F3E5F5}*{box-sizing:border-box;margin:0;padding:0}body{font-family:-apple-system,"PingFang SC","Microsoft YaHei",sans-serif;color:#2b2b2b;background:linear-gradient(180deg,var(--bg-soft),#fff);background-attachment:fixed}.wrap{max-width:297mm;width:100%;margin:0 auto;padding:0 40px 80px}header.top{text-align:center;padding:46px 40px 30px}header.top .badge{display:inline-block;padding:5px 16px;border-radius:999px;background:var(--accent);color:#fff;font-size:13px;margin-bottom:16px}header.top h1{font-size:34px;margin:0 0 10px}header.top p.sub{color:#888;font-size:15px;margin:0 0 18px}section.story{background:#fff;border-radius:20px;padding:30px 32px 34px;margin-bottom:30px;box-shadow:0 8px 30px rgba(0,0,0,.05)}section.story .step{display:inline-block;font-size:13px;color:var(--accent);font-weight:700;border-left:4px solid var(--accent);padding-left:10px;margin-bottom:14px;background:var(--bg-soft);border-radius:4px;padding:6px 12px}section.story h2{font-size:26px;margin:6px 0 8px}section.story h2 .no{color:var(--accent);margin-right:10px}section.story .meta{font-size:13px;color:#aaa;margin-bottom:22px}section.story .text p{font-size:18px;line-height:2.4;margin:0 0 4px;text-align:justify}.w{background-color:#E1BEE7;border-radius:999px;padding:.12em .55em;margin:0 1px;white-space:nowrap;color:#333;font-weight:600}footer{text-align:center;color:#bbb;font-size:13px;margin-top:40px}</style></head><body><div class="wrap"><header class="top"><div class="badge">看故事记单词</div><h1>${c.title}</h1><p class="sub">${c.tags}</p></header><section class="story"><div class="step">Step 1：在语境中认识单词</div><h2><span class="no">Story${String(i).padStart(2,'0')}</span>${c.subtitle}</h2><div class="meta">本篇约 ${cc} 字 · 融入 ${wc} 个重点词汇 · 点击📢可朗读发音</div><div class="text">${pp}</div></section><footer>${c.title}：${c.subtitle} · 学习版　|　看故事记单词</footer></div></body></html>`;
};

const genR = (c, s, i) => {
  const p = s.replace(/【(\w+)\/([^】]+)】/g, (m, w, n) => `<span class="r" onclick="toggle(this)">${w}(<span class="h">${n}</span>)</span>`);
  const pp = p.split('\n\n').filter(x => x.trim()).map(x => `<p>${x}</p>`).join('\n');
  const wc = (s.match(/【\w+\/[^】]+】/g)||[]).length, cc = s.replace(/【\w+\/[^】]+】/g,'').length;
  return `<!DOCTYPE html><html lang="zh-CN"><head><meta charset="UTF-8"><title>${c.title}：${c.subtitle} · 复习版</title><style>:root{--pill-review:#C8E6C9;--accent:#4CAF50;--bg-soft:#E8F5E9}*{box-sizing:border-box;margin:0;padding:0}body{font-family:-apple-system,"PingFang SC","Microsoft YaHei",sans-serif;color:#2b2b2b;background:linear-gradient(180deg,var(--bg-soft),#fff);background-attachment:fixed}.wrap{max-width:297mm;width:100%;margin:0 auto;padding:0 40px 80px}header.top{text-align:center;padding:46px 40px 30px}header.top .badge{display:inline-block;padding:5px 16px;border-radius:999px;background:var(--accent);color:#fff;font-size:13px;margin-bottom:16px}header.top h1{font-size:34px;margin:0 0 10px}header.top p.sub{color:#888;font-size:15px;margin:0 0 18px}section.story{background:#fff;border-radius:20px;padding:30px 32px 34px;margin-bottom:30px;box-shadow:0 8px 30px rgba(0,0,0,.05)}section.story .step{display:inline-block;font-size:13px;color:var(--accent);font-weight:700;border-left:4px solid var(--accent);padding-left:10px;margin-bottom:14px;background:var(--bg-soft);border-radius:4px;padding:6px 12px}section.story h2{font-size:26px;margin:6px 0 8px}section.story h2 .no{color:var(--accent);margin-right:10px}section.story .meta{font-size:13px;color:#aaa;margin-bottom:22px}section.story .text p{font-size:18px;line-height:2.4;margin:0 0 12px;text-align:justify}.r{background-color:#C8E6C9;border-radius:999px;padding:2px 8px;margin:0 2px;white-space:nowrap;color:#333;font-weight:600;cursor:pointer}.r:hover{opacity:.85}.r .h{color:transparent;user-select:none}.r.show .h{color:#333}footer{text-align:center;color:#bbb;font-size:13px;margin-top:40px}</style></head><body><div class="wrap"><header class="top"><div class="badge">看故事记单词 · 复习版</div><h1>${c.title}</h1><p class="sub">${c.tags}</p></header><section class="story"><div class="step">Step 2：看单词回忆中文释义</div><h2><span class="no">Story${String(i).padStart(2,'0')}</span>${c.subtitle}</h2><div class="meta">本篇约 ${cc} 字 · 融入 ${wc} 个重点词汇 · 点击词汇显示/隐藏中文释义</div><div class="text">${pp}</div></section><footer>${c.title}：${c.subtitle} · 复习版　|　看故事记单词</footer></div><script>function toggle(el){el.classList.toggle('show')}</script></body></html>`;
};

const template = (tags) => {
  if (tags.includes('大女主')) return `豪华的别墅里，林瑶正【recall/回忆】前世的惨死。作为重生归来的千金，她深知前世是如何被【betray/背叛】的。曾经那些陷害她的人，现在都要付出代价。她深知复仇的艰辛。别墅里【luxurious/奢华】，她【plan/计划】着复仇。她表面【calm/平静】，内心却【burning/燃烧】怒火。她【always/总是】保持清醒。今天的任务是接近当年的仇人家族。林瑶注意到必须小心行事，不能暴露真实【identity/身份】。她反复推敲每一步，寻找最佳突破口。这是一个需要【patience/耐心】和智慧的过程。她【never/从不】忘记仇恨，【always/总是】等待时机。她【disguise/伪装】自己，【approach/接近】目标。接近过程中，她遇到了一个难题。仇人已经势力庞大，难以对付。她【worried/担忧】地思考对策，尝试了多种方法。最终，她通过【smart/聪明】的手段成功打入内部。突破需要智慧。她【finally/终于】获得信任。她【excited/激动】地开始计划。复仇【smoothly/顺利】进行。获得信任后，她开始收集证据。她发现真相远比想象中更【cruel/残酷】。调查需要耐心。她【secret/暗中】收集，【careful/小心】保护自己。她【nervous/紧张】但同时也【confident/自信】。她【spend/花费】大量时间调查。证据收集完成，她选择重要场合公开真相。当年陷害她的人终于得到【punish/惩罚】。复仇【successful/成功】。她【proud/自豪】地看着正义伸张。每个人都为她的【courage/勇气】感到敬佩。复仇后，她感到一种深深的【relief/释然】。正义的喜悦让她欣慰，但她明白这只是新开始。她【calmly/平静地】接受真相大白。成功在此【mark/标记】。她【continue/继续】追求新生活。她明白复仇不是终点，而是放下过去。她开始用余生创造价值，帮助被冤枉的人。责任在此诞生。她【respect/尊重】法律，【help/帮助】弱势群体，【share/分享】经验。她【active/积极】参与公益。林瑶成为传奇人物，她的故事激励了无数人。她告诉他们："正义需要【brave/勇敢】和【wisdom/智慧】。"她的故事帮助了许多人。希望在此传递。她【patient/耐心】地倾听，【encourage/鼓励】追求正义。受害者都受到她的【inspire/启发】。`;
  if (tags.includes('霸总')) return `豪华的别墅里，顾辰正【wait/等待】妻子归来。作为商界霸总，他对外冷酷，对她却【gentle/温柔】至极。每一天都为她准备惊喜，每份礼物都是爱的表达。他深知爱情的珍贵。别墅里【warm/温馨】，他【prepare/准备】晚餐。他内心充满【love/爱意】，期待她笑容。他【always/总是】给她最好的。今天是他们一周年纪念日。顾辰注意到她最近工作累，需要浪漫惊喜。他反复策划每个细节，寻找最完美方式。这需要【care/用心】和真诚。他【never/从不】吝啬表达，【always/总是】给惊喜。他【plan/策划】，【prepare/准备】礼物。准备中他遇到难题。她因压力消瘦，他心疼不已。他【worried/担忧】地思考如何让她开心，尝试各种方法。最终他决定给她放松假期。改变需要用心。他【finally/终于】决定。他【determined/坚定】安排旅行。惊喜即将【deliver/呈现】。她推门看到满屋玫瑰和烛光晚餐，疲惫都消失了。惊喜需要用心。他【careful/细心】布置，【sincere/真诚】表达。他【nervous/紧张】但【excited/兴奋】。他【spend/花费】大量时间准备。她感动地抱住他，说这是最幸福的一年。所有付出都值得。告白【successful/成功】。她【moved/感动】流泪。爱情更加【deep/深厚】。他明白爱情需要用心经营，每一天都要珍惜。他开始用更多温柔对待她，让她成为最幸福的女人。爱情升华。他【respect/尊重】她工作，【support/支持】她事业，【care/关爱】她身体。他【active/积极】经营感情。顾辰成为最温柔的霸总，故事激励很多男性。他告诉他们："爱情需要用心守护，温柔是最好的礼物。"他的改变让所有人惊讶。爱情升华。他【patient/耐心】陪伴，【encourage/鼓励】彼此成长。他们的爱情成为【legend/传奇】。`;
  if (tags.includes('职场')) return `繁忙的办公室里，张明正【work/工作】着。作为刚毕业的职场新人，他每天努力证明自己。每项任务都是机会，每份努力都承载【dream/梦想】。他深知职场竞争激烈。办公室里【busy/忙碌】，他【focus/专注】于工作。他内心有些【nervous/紧张】，但充满斗志。他【always/总是】保持积极。今天要完成重要汇报。张明注意到领导在观察他，这是证明机会。他反复准备每个细节，寻找最完美呈现。这需要【confidence/自信】和实力。他【never/从不】放弃，【always/总是】全力以赴。他【prepare/准备】充分，【rehearse/排练】多次。汇报中他遇到难题。有同事故意刁难，提出尖锐问题。他【shocked/震惊】但保持冷静，努力寻找应对。最终他用【professional/专业】的回答化解危机。突破需要智慧。他【finally/终于】完成。他【excited/激动】看到领导认可。汇报【perfectly/完美】结束。汇报后他开始主动承担更多责任。他发现只有主动出击才能获得机会。成长需要行动。他【active/积极】接受挑战，【brave/勇敢】面对竞争。他【nervous/紧张】但【confident/自信】。他【spend/投入】大量时间提升。年终考核他成功击败所有对手获得晋升。升职【successful/成功】。他【proud/自豪】地看着晋升通知。同事们都为他的【achieve/成就】敬佩。升职后他明白职场需要持续努力。他开始分享经验帮助新人。经验传递。他【respect/尊重】对手，【share/分享】经验，【help/帮助】新人。他【active/积极】参与团队建设。张明成为最年轻的主管，故事激励无数新人。他告诉他们："努力是职场最好的通行证。"他的故事帮助许多人成长。传承延续。他【patient/耐心】指导，【encourage/鼓励】奋斗精神。年轻人都受到他的【inspire/启发】。`;
  if (tags.includes('校园')) return `阳光明媚的校园里，李明正【read/阅读】着书。作为大一新生，他对大学生活充满期待。每一天都是新开始，每一刻都承载青春的【dream/梦想】。他深知大学时光珍贵。校园里【beautiful/美丽】，他【enjoy/享受】阅读。他内心很【peaceful/平静】，感受阳光。他【always/总是】保持欣赏心态。今天他像往常一样在图书馆。李明注意到一个女生走过来，她认真读书的样子让他心跳加速。他反复【practice/练习】想说的话，寻找最合适时机。这需要【courage/勇气】和真诚。他【never/从不】放弃接近机会，【always/总是】默默关注。他【observe/观察】她习惯，【wait/等待】时机。接近中他遇到难题。他太害羞不敢主动打招呼。他【nervous/紧张】地思考如何开口，尝试多种方法。最终他决定从借书开始搭话。改变需要勇气。他【finally/终于】决定。他【determined/坚定】走过去。暗恋即将【end/结束】。他鼓起勇气走过去，问她这本书怎么样。她转过头，露出温柔笑容。那一刻他心动了。相遇需要缘分。他【shy/羞涩】地开口，【sincere/真诚】交流。他【nervous/紧张】但【excited/兴奋】。他【hold/屏住】呼吸等待。她热情地回应，两人聊了很久。原来她也是文学爱好者。他们约定下次一起讨论书籍。初恋【blossom/萌芽】。他【surprised/惊喜】地看着她。两颗心开始【close/靠近】。他明白初恋需要勇气开启，需要真心经营。他们开始约会，在图书馆相遇，在校园漫步。爱情绽放。他们【respect/尊重】彼此，【share/分享】兴趣，【support/支持】对方。他们【active/积极】经营感情。李明开始珍惜每一天的相处，用心感受爱情的美好。他告诉她："初恋是最美好的心动，你是我唯一的心动。"他们的爱情从初遇开始，在心动中绽放。爱情升华。他【patient/耐心】陪伴，【encourage/鼓励】彼此成长。他们的故事成为【legend/传奇】。`;
  return `豪华的公寓里，叶婉正【organize/整理】行李。作为刚刚闪婚的新娘，她对突然的【marriage/婚姻】感到既紧张又期待。每一天都是新的适应，每一刻都承载未知的【hope/希望】。她深知闪婚的挑战。公寓里【spacious/宽敞】，她【observe/观察】环境。她内心有些【nervous/紧张】，但充满好奇。她【always/总是】保持礼貌。今天是她搬进来的第一天。叶婉注意到顾总表面很冷淡，但偶尔流露的关心让她困惑。她反复提醒自己这只是契约婚姻，不能有其他想法。这需要【rationality/理智】和适应。她【try/尝试】适应，【maintain/保持】距离。她【remind/提醒】自己，【control/控制】情绪。相处中她遇到难题。她发现自己对他产生了异样感觉，这违背了约定。她【confused/困惑】地分析自己感情，试图保持理智。最终她决定顺其自然，不再刻意隐藏。发现需要勇气。她【finally/终于】承认感情。她【surprised/惊讶】于自己变化。契约变得【complicate/复杂】。随后的日子她发现他也在默默关心她。比如下雨天为她撑伞，生病时送来药品。她开始注意到他的温柔。观察需要时间。她【careful/仔细】观察细节，【moved/感动】于他关怀。她【nervous/紧张】但【happy/开心】。她【spend/花费】时间了解真实的他。某次意外中她遇到危险，他不顾一切地保护了她。那一刻她的心彻底融化。原来他一直在默默守护她。感情在此【blossom/萌芽】。她【touched/感动】地看着他。两颗心终于【close/靠近】。告白的那一天他撕毁契约，说他想给她真正的婚姻。告白【successful/成功】。她【happily/幸福地】接受他心意。闪婚变成了【real/真实】的爱情。她明白爱情不能被定义，需要真心去发现。他们开始真正相爱，珍惜彼此。爱情重生。她【respect/尊重】他付出，【support/支持】他，【share/分享】生活。她【active/积极】经营感情。叶婉开始珍惜每一天的相处，用心感受爱情的美好。他告诉她："闪婚是意外，真爱是永恒。"他们的爱情从契约开始，却以真心结束。爱情升华。她【patient/耐心】陪伴，【encourage/鼓励】彼此成长。他们的故事成为【legend/传奇】。`;
};

const out = path.join(__dirname, '../result');
if (!fs.existsSync(out)) fs.mkdirSync(out, { recursive: true });

allConfigs.forEach((c, i) => {
  const num = 41 + i;
  const s = template(c.tags);
  const n = String(num).padStart(2, '0');
  const t = c.title.replace(/[：:]/g, '_');
  const st = c.subtitle.replace(/[：:]/g, '_');

  fs.writeFileSync(path.join(out, `${n}_${t}_${st}_学习版.html`), genL(c, s, num));
  fs.writeFileSync(path.join(out, `${n}_${t}_${st}_复习版.html`), genR(c, s, num));

  const wc = (s.match(/【\w+\/[^】]+】/g)||[]).length;
  console.log(`✓ 已生成：${c.title} - ${c.subtitle} (${wc} 个词汇)`);
});

console.log('\n故事41-80已全部重新生成完成！');