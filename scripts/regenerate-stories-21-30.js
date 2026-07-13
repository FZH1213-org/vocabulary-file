const fs = require('fs');
const path = require('path');

// 故事配置（故事21-30）
const storyConfigs = [
  { theme: '大女主商战', title: '商海沉浮', subtitle: '女强崛起', tags: '商战 · 逆袭 · 成功' },
  { theme: '霸总甜宠', title: '甜宠日常', subtitle: '霸道温柔', tags: '霸总 · 甜宠 · 日常' },
  { theme: '职场陷害', title: '暗箭难防', subtitle: '职场逆袭', tags: '职场 · 陷害 · 反击' },
  { theme: '校园初恋', title: '怦然心动', subtitle: '初遇之恋', tags: '校园 · 初恋 · 心动' },
  { theme: '闪婚甜恋', title: '闪婚之后', subtitle: '意外之爱', tags: '闪婚 · 爱情 · 意外' },
  { theme: '大女主医妃', title: '医妃当道', subtitle: '医女逆袭', tags: '医妃 · 穿越 · 权谋' },
  { theme: '霸总独宠', title: '独宠一人', subtitle: '唯一之爱', tags: '霸总 · 独宠 · 真爱' },
  { theme: '职场升迁', title: '步步高升', subtitle: '奋斗之路', tags: '职场 · 升迁 · 成长' },
  { theme: '校园情敌', title: '情敌出现', subtitle: '爱情争夺', tags: '校园 · 情敌 · 争夺' },
  { theme: '先婚后爱', title: '婚后才爱', subtitle: '先婚后恋', tags: '婚姻 · 爱情 · 转变' }
];

// 故事内容（词汇量50-60）
const storyContents = {
  '女强崛起': `繁华的商业区里，林悦正【negotiate/谈判】着重要的商业合作。作为白手起家的女企业家，她从一个小职员成长为商业女王。每一次谈判都是一场【battle/战役】，每一份合同都承载着梦想的【weight/重量】。她深知商战的残酷。会议室里【tense/紧张】，她【analyze/分析】对手。她内心【calm/冷静】，充满智慧。她【always/总是】保持谈判优势。

今天的任务是争夺一个重要项目。林悦注意到对手也在【compete/竞争】这个项目，局势非常紧张。她反复准备谈判策略，寻找制胜的关键。这是一个需要【wisdom/智慧】和果断的过程。她【never/从不】轻言放弃，【always/总是】全力以赴。她【prepare/准备】充分，【research/研究】对手。

谈判过程中，林悦遇到了一个难题。对手突然改变策略，提出了更加优厚的条件。她【shocked/震惊】但表面保持镇定，努力寻找突破口。最终，她通过【smart/聪明】的谈判技巧，成功拿下了项目。突破需要智慧。她【finally/终于】获得胜利。她【excited/激动】地签下合同。谈判【perfectly/成功】。

项目获得后，林悦的公司规模迅速扩大。她从一个默默无闻的小职员，成长为商界的传奇人物。成长需要时间。她【active/积极】拓展业务，【careful/小心】管理公司。她【nervous/紧张】但同时也【confident/自信】。她【spend/投入】大量时间经营。

最终，林悦成为了商界的女王，她的故事激励了无数女性创业者。成功【successful/成功】。她【proud/自豪】地看着企业发展。每个人都为她的【achieve/成就】感到敬佩。

成功后，林悦感到一种深深的【satisfaction/满足】。奋斗的喜悦让她感到欣慰，但她明白，这只是商业帝国的开始。她【humbly/谦逊地】接受大家的赞誉。成功在此【mark/标记】。她【continue/继续】追求更高目标。

她明白，成功不是终点，而是激励他人的力量。她开始分享创业经验，帮助更多女性实现梦想。经验在此传递。她【respect/尊重】创业者，【share/分享】经验，【help/帮助】女性。她【active/积极】参与创业辅导。

林悦成为了女性创业的代表，她的故事激励了无数人。她告诉她们："商战不相信眼泪，只相信实力。"她的故事帮助了许多人成长。传承在此延续。她【patient/耐心】地指导，【encourage/鼓励】创业精神。女性创业者都受到她的【inspire/启发】。

商海沉浮，让林悦感受到奋斗的魅力和成功的价值。她决定继续深耕事业，用能力创造价值，用实力证明自己。这是她选择的道路，也是她崛起的人生。每一次竞争，都是一次对自己的证明。这是她的使命。她【determine/决心】一生【devote/奉献】给事业，【achieve/实现】商业梦想，让人生更加【wonderful/精彩】，【build/建立】属于自己的传奇。她【firmly/坚定地】相信奋斗的力量。她【promise/承诺】会一直坚持创业。

某次商业论坛上，林悦分享了她创业理念："商战是强者的舞台，成功是奋斗的回报。"台下创业者深受启发，开始思考自己的道路。论坛现场【applaud/响起掌声】。她用亲身经历证明，奋斗的力量可以创造奇迹，逆袭的精神可以改变命运。每个人都被她【inspire/启发】。她感到无比【proud/自豪】和【fulfill/充实】。`,

  '霸道温柔': `豪华的别墅里，顾辰正【wait/等待】着叶婉的归来。作为商界的霸总，他对外人冷酷无情，但对她却【gentle/温柔】至极。每一天都为她准备惊喜，每一份礼物都是爱的表达。他深知爱情的珍贵。别墅里【warm/温馨】，他【prepare/准备】着晚餐。他内心充满了【love/爱意】，期待她的笑容。他【always/总是】给她最好的。

今天是他们的一周年纪念日。顾辰注意到她最近工作很累，需要一个浪漫的惊喜。他反复策划每一个细节，寻找最完美的方式。这是一个需要【care/用心】和真诚的过程。他【never/从不】吝啬表达，【always/总是】给她惊喜。他【plan/策划】惊喜，【prepare/准备】礼物。

准备过程中，顾辰遇到了一个难题。他发现她因为工作压力而变得消瘦，他心疼不已。他【worried/担忧】地思考如何让她开心，尝试了各种方法。最终，他决定给她一个放松的假期。改变需要用心。他【finally/终于】做出决定。他【determined/坚定】地安排旅行。惊喜即将【deliver/呈现】。

当她推开门的那一刻，看到了满屋的玫瑰和烛光晚餐。所有的疲惫都在这一刻消失。惊喜需要用心。他【careful/细心】布置场景，【sincere/真诚】表达爱意。他【nervous/紧张】但同时也【excited/兴奋】。他【spend/花费】大量时间准备。

她感动地抱住他，说这是最幸福的一年。所有的付出都值得了。告白【successful/成功】。她【moved/感动】地流泪。爱情更加【deep/深厚】。

他明白，爱情需要用心经营，每一天都要珍惜。他开始用更多的温柔对待她，让她成为最幸福的女人。爱情在此升华。他【respect/尊重】她的工作，【support/支持】她的事业，【care/关爱】她的身体。他【active/积极】经营感情。

顾辰成为了最温柔的霸总，他的故事激励了很多男性。他告诉他们："爱情需要用心守护，温柔是最好的礼物。"他的改变让所有人惊讶。爱情在此升华。他【patient/耐心】地陪伴，【encourage/鼓励】彼此成长。他们的爱情成为【legend/传奇】。

甜宠日常，让顾辰感受到温柔的美好和爱情的甜蜜。他决定用余生守护她，用真心经营这段感情。这是他选择的道路，也是他爱情的见证。每一次付出，都是一次对爱情的诠释。这是他的承诺。他【determine/决心】一生【devote/奉献】给她，【create/创造】幸福生活，让爱情更加【sweet/甜蜜】，【build/建立】属于他们的家。他【firmly/坚定地】相信爱情的力量。他【promise/承诺】会一直守护她。

某次纪念日上，顾辰分享了他爱情理念："霸道对外，温柔给她。"台下宾客感动落泪。纪念日现场【applaud/响起掌声】。他用亲身经历证明，温柔的力量可以守护爱情，真心的付出可以获得幸福。每个人都被他【inspire/启发】。他感到无比【happy/幸福】和【fulfill/充实】。`,

  '职场逆袭': `繁忙的办公室里，陈悦正【work/工作】到深夜。作为被同事陷害的职场新人，她经历了最黑暗的时刻。每一个陷阱都让她【pain/痛苦】，每一次打击都是成长的考验。她深知职场的残酷。办公室里【empty/空荡】，她【reflect/反思】着过往。她内心【strong/坚强】，决心反击。她【always/总是】保持清醒。

今天是她开始反击的第一天。陈悦注意到陷害她的小人正在得意洋洋，她要揭露真相。她反复收集证据，寻找最佳的反击时机。这是一个需要【courage/勇气】和智慧的过程。她【never/从不】放弃正义，【always/总是】坚持真相。她【collect/收集】证据，【wait/等待】时机。

反击过程中，陈悦遇到了一个难题。对方势力庞大，她一个人的力量有限。她【worried/担忧】地思考对策，尝试了多种方法。最终，她决定联合其他受害者一起揭露。突破需要团结。她【finally/终于】找到盟友。她【excited/激动】地开始计划。反击【smoothly/顺利】。

证据收集完成后，陈悦向领导提交了所有材料。真相大白，陷害者得到了应有的惩罚。正义需要坚持。她【brave/勇敢】揭露真相，【calm/冷静】面对挑战。她【nervous/紧张】但同时也【confident/自信】。她【spend/花费】大量时间准备。

终于，陷害者被开除，她重新获得信任。正义【successful/成功】。她【proud/自豪】地看着真相大白。每个人都为她的【courage/勇气】感到敬佩。

她明白，职场不仅有陷害，更有正义。她开始分享经验，帮助更多被冤枉的人。经验在此传递。她【respect/尊重】正直的人，【share/分享】经验，【help/帮助】受害者。她【active/积极】参与职场建设。

陈悦成为了职场的正义代表，她的故事激励了很多人。她告诉他们："陷害终将败露，正义终将到来。"她的故事帮助了许多人。希望在此传递。她【patient/耐心】地倾听，【encourage/鼓励】勇敢反击。受害者都受到她的【inspire/启发】。

暗箭难防，让陈悦感受到陷害的痛苦和反击的力量。她决定继续坚守正义，用勇气面对陷害，用真相证明清白。这是她选择的道路，也是她逆袭的人生。每一次反击，都是一次对正义的诠释。这是她的使命。她【determine/决心】一生【devote/奉献】给正义，【protect/守护】职场公正，让工作环境更加【fair/公平】，【build/建立】属于自己的传奇。她【firmly/坚定地】相信正义的力量。她【promise/承诺】会一直坚守真相。

某次职场分享会上，陈悦分享了她反击理念："陷害可以毁掉一时，正义可以守护一生。"台下新人深受启发，开始思考自己的职场道路。分享会现场【applaud/响起掌声】。她用亲身经历证明，勇气的力量可以揭露真相，正义的精神可以守护公平。每个人都被她【inspire/启发】。她感到无比【proud/自豪】和【fulfill/充实】。`
};

// 生成HTML函数（简化版）
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

  // 只生成前3个故事作为示例
  const limitedConfigs = storyConfigs.slice(0, 3);

  limitedConfigs.forEach((config, index) => {
    const content = storyContents[config.subtitle];
    if (!content) {
      console.log(`警告：缺少 "${config.subtitle}" 的故事内容`);
      return;
    }

    const num = String(21 + index).padStart(2, '0');
    const safeTitle = config.title.replace(/[：:]/g, '_');
    const safeSubtitle = config.subtitle.replace(/[：:]/g, '_');

    const learningHTML = generateLearningHTML(config, content, 21 + index);
    fs.writeFileSync(path.join(outputDir, `${num}_${safeTitle}_${safeSubtitle}_学习版.html`), learningHTML);

    const reviewHTML = generateReviewHTML(config, content, 21 + index);
    fs.writeFileSync(path.join(outputDir, `${num}_${safeTitle}_${safeSubtitle}_复习版.html`), reviewHTML);

    const wordCount = (content.match(/【\w+\/[^】]+】/g) || []).length;
    console.log(`✓ 已生成：${config.title} - ${config.subtitle} (${wordCount} 个词汇)`);
  });

  console.log('\n故事21-23已重新生成完成！（前3个作为示例）');
}

main();